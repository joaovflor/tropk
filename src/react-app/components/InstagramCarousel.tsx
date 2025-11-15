import { useEffect, memo, useState } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

declare global {
  interface Window {
    eapps: any;
  }
}

const InstagramCarousel = memo(() => {
  const { inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!inView) return;

    const script = document.createElement('script');
    script.src = 'https://apps.elfsight.com/p/platform.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const widgetContainer = document.querySelector('.elfsight-app-instagram-feed');
      if (widgetContainer) {
        widgetContainer.remove();
      }
    };
  }, [inView]);

  // Fotos de fallback caso a API falhe
  const fallbackPhotos = [
    {
      id: '1',
      caption: 'Top cropped de crochê - tropkshop',
      mediaUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=600&fit=crop&crop=center",
      permalink: "https://www.instagram.com/tropkshop/",
      timestamp: new Date().toISOString(),
      mediaType: 'IMAGE'
    },
    {
      id: '2',
      caption: 'Conjunto de verão em crochê - tropkshop',
      mediaUrl: "https://images.unsplash.com/photo-1594736797933-d0401ba810db?w=600&h=600&fit=crop&crop=center",
      permalink: "https://www.instagram.com/tropkshop/",
      timestamp: new Date().toISOString(),
      mediaType: 'IMAGE'
    },
    {
      id: '3',
      caption: 'Bolsa artesanal de crochê - tropkshop',
      mediaUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&crop=center",
      permalink: "https://www.instagram.com/tropkshop/",
      timestamp: new Date().toISOString(),
      mediaType: 'IMAGE'
    },
    {
      id: '4',
      caption: 'Cardigan oversized - tropkshop',
      mediaUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=600&fit=crop&crop=center",
      permalink: "https://www.instagram.com/tropkshop/",
      timestamp: new Date().toISOString(),
      mediaType: 'IMAGE'
    },
    {
      id: '5',
      caption: 'Look noturno em crochê - tropkshop',
      mediaUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=600&fit=crop&crop=center",
      permalink: "https://www.instagram.com/tropkshop/",
      timestamp: new Date().toISOString(),
      mediaType: 'IMAGE'
    },
    {
      id: '6',
      caption: 'Processo artesanal - tropkshop',
      mediaUrl: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=600&fit=crop&crop=center",
      permalink: "https://www.instagram.com/tropkshop/",
      timestamp: new Date().toISOString(),
      mediaType: 'IMAGE'
    }
  ];

  useEffect(() => {
    let isMounted = true;
    
    const fetchInstagramPosts = async () => {
      if (!inView) return;
      
      try {
        setIsLoading(true);
        const response = await fetch('/api/instagram/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        
        if (isMounted) {
          if (data.posts && data.posts.length > 0) {
            setPosts(data.posts);
            setError(null);
          } else {
            setPosts(fallbackPhotos);
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error('Error fetching Instagram posts:', err);
          setError('Usando fotos de demonstração');
          setPosts(fallbackPhotos);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchInstagramPosts();
    
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || posts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === posts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, posts.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? posts.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === posts.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const openInstagramPost = () => {
    if (posts[currentIndex]?.permalink) {
      window.open(posts[currentIndex].permalink, '_blank');
    }
  };

  if (isLoading) {
    return (
      <div className="aspect-square rounded-3xl overflow-hidden backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl flex items-center justify-center">
        <div className="text-center">
          <Instagram className="w-12 h-12 text-amber-800 mx-auto mb-4 animate-pulse" />
          <p className="text-neutral-600 font-light">Carregando posts...</p>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="aspect-square rounded-3xl overflow-hidden backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl flex items-center justify-center">
        <div className="text-center">
          <Instagram className="w-12 h-12 text-amber-800 mx-auto mb-4" />
          <p className="text-neutral-600 font-light">Nenhum post disponível</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Main carousel container with glassmorphism effect */}
      <div className="aspect-square rounded-3xl overflow-hidden backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl cursor-pointer" onClick={openInstagramPost}>
        <div className="relative w-full h-full">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={post.mediaUrl}
                alt={post.caption || `Post do Instagram - tropkshop`}
                className="w-full h-full object-cover"
              />
              {/* Overlay with gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Imagem anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-md bg-white/30 border border-white/40 flex items-center justify-center text-white hover:bg-white/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Próxima imagem"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-md bg-white/30 border border-white/40 flex items-center justify-center text-white hover:bg-white/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Instagram badge with link hint */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/30 border border-white/30 hover:bg-black/40 transition-all">
            <div className="flex items-center space-x-2">
              <Instagram className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">@tropkshop</span>
            </div>
          </div>

          {/* Error indicator if using fallback */}
          {error && (
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md bg-amber-500/80 border border-white/30">
              <span className="text-white text-xs">Demo</span>
            </div>
          )}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para imagem ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-amber-800 shadow-lg'
                : 'bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Floating elements with glassmorphism */}
      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl flex items-center justify-center">
        <span className="text-2xl">🧶</span>
      </div>
      <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full backdrop-blur-lg bg-amber-100/30 border border-white/30 shadow-xl flex items-center justify-center">
        <span className="text-xl">✨</span>
      </div>
    </div>
  );
});

InstagramCarousel.displayName = 'InstagramCarousel';

export default InstagramCarousel;

import { useEffect, memo } from 'react';
import { Instagram } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const InstagramFeed = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    // Carrega o script do Elfsight
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpa o script quando o componente é desmontado
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [inView]);

  return (
    <div ref={ref} className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
      {/* Widget do Elfsight com seu ID específico */}
      
      <div 
        className="elfsight-app-acb4b122-a119-4640-8abc-aaf873505778 -mb-6 md:[transform:scale(1.1)] md:mt-[21px]" 
        data-elfsight-app-lazy
      ></div>
      
      
      {/* Overlay com gradiente e logo */}
      <div className="absolute top-2 left-2 px-2 py-1 rounded-full backdrop-blur-md bg-black/30 border border-white/30 hover:bg-black/40 transition-all">
        <a 
          href="https://www.instagram.com/tropkshop/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1.5"
        >
          <Instagram className="w-3.5 h-3.5 text-white" />
          <span className="text-white text-xs font-medium">@tropkshop</span>
        </a>
      </div>
    </div>
  );
});

InstagramFeed.displayName = 'InstagramFeed';

export default InstagramFeed;
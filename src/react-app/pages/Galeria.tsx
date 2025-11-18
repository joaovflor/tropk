import { memo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // <-- CORREÇÃO!
import Header from '@/react-app/components/Header'; // ajuste caminho conforme seu projeto
import Footer from '@/react-app/components/Footer';



// ============================================
// TIPOS
// ============================================
interface Price {
  label: string;
  value: string;
}

interface Product {
  id: number;
  name: string;
  prices: Price[];
  images: [string, string];
  description: string;
}

// ============================================
// COMPONENTE: Polaroid Duplo (Esquerda)
// ============================================
interface DualPolaroidCardProps {
  product: Product;
}

const DualPolaroidCard = memo(({ product }: DualPolaroidCardProps) => (
  <div className="product-card">
    <div className="dual-polaroid-wrapper">
      {/* Container das Polaroids Sobrepostas */}
      <div className="polaroids-container">
        {/* Polaroid de Trás */}
        <div className="polaroid polaroid-back">
          <div className="image-wrapper">
            <img
              src={product.images[0]}
              alt={`${product.name} - Vista 1`}
              loading="lazy"
            />
          </div>
        </div>
        {/* Polaroid da Frente */}
        <div className="polaroid polaroid-front">
          <div className="image-wrapper">
            <img
              src={product.images[1]}
              alt={`${product.name} - Vista 2`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Informações do Produto (ao lado direito) */}
      <div className="product-info-external">
        <div className="product-category">{product.name}</div>
        <div className="product-price-box">
          {product.prices.map((price, idx) => (
            <div key={idx} className="product-price">
              {price.label} - {price.value}
            </div>
          ))}
        </div>
        <div className="product-note">{product.description}</div>
      </div>
    </div>
  </div>
));
DualPolaroidCard.displayName = 'DualPolaroidCard';

// ============================================
// COMPONENTE: Polaroid Duplo Espelhado (Direita)
// ============================================
const DualPolaroidCardMirrored = memo(({ product }: DualPolaroidCardProps) => (
  <div className="product-card">
    <div className="dual-polaroid-wrapper-mirrored">
      {/* Informações do Produto (ao lado esquerdo) */}
      <div className="product-info-external-mirrored">
        <div className="product-category">{product.name}</div>
        <div className="product-price-box">
          {product.prices.map((price, idx) => (
            <div key={idx} className="product-price">
              {price.label} - {price.value}
            </div>
          ))}
        </div>
        <div className="product-note">{product.description}</div>
      </div>
      {/* Container das Polaroids Sobrepostas */}
      <div className="polaroids-container-mirrored">
        {/* Polaroid de Trás */}
        <div className="polaroid polaroid-back-mirrored">
          <div className="image-wrapper">
            <img
              src={product.images[0]}
              alt={`${product.name} - Vista 1`}
              loading="lazy"
            />
          </div>
        </div>
        {/* Polaroid da Frente */}
        <div className="polaroid polaroid-front-mirrored">
          <div className="image-wrapper">
            <img
              src={product.images[1]}
              alt={`${product.name} - Vista 2`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
));
DualPolaroidCardMirrored.displayName = 'DualPolaroidCardMirrored';

// ============================================
// COMPONENTE PRINCIPAL: Galeria
// ============================================
const Galeria = memo(() => {
  // Dados dos produtos/clientes
  const products: Product[] = [
  {
    id: 1,
    name: "Ana Carolina",
    prices: [],
    images: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?w=400&h=500&fit=crop&crop=face"
    ],
    description: "Minha peça favorita! Obrigada pelo atendimento incrível."
  },
  {
    id: 2,
    name: "Julia Taouil",
    prices: [],
    images: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face"
    ],
    description: "Um carinho em cada detalhe, virou coleção!"
  },
  {
    id: 3,
    name: "Bruna Mendes",
    prices: [],
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&crop=face"
    ],
    description: "A qualidade é absurda, já quero outra!"
  },
  {
    id: 4,
    name: "Luana Mello",
    prices: [],
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=500&fit=crop&crop=face"
    ],
    description: "Recomendo de olhos fechados, entrega super rápida."
  },
  // -- Novos cards abaixo --
  {
    id: 5,
    name: "Camila Souza",
    prices: [],
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1465101178521-c97f1b8b1c66?w=400&h=500&fit=crop&crop=face"
    ],
    description: "Nunca tive tanta confiança numa marca!"
  },
  {
    id: 6,
    name: "Mariane Lopez",
    prices: [],
    images: [
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=500&fit=crop&crop=face"
    ],
    description: "Puro charme e delicadeza."
  },
  {
    id: 7,
    name: "Fernanda Silva",
    prices: [],
    images: [
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=500&fit=crop&crop=face"
    ],
    description: "Presente perfeito, amei a embalagem."
  },
  {
    id: 8,
    name: "Paula Lima",
    prices: [],
    images: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1570158268183-d296b6a7603c?w=400&h=500&fit=crop&crop=face"
    ],
    description: "Vou recomendar pra todos os amigos!"
  }
];

  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const prevSlide = () =>
  setCurrent((prev) => (prev === 0 ? Math.ceil(products.length / 2) - 1 : prev - 1));
  const nextSlide = () =>
  setCurrent((prev) => (prev === Math.ceil(products.length / 2) - 1 ? 0 : prev + 1));
  return (
    <>
      {/* Header SEMPRE fora da section */}
      <Header />
      
    <section
    ref={ref}
    style={{
      backgroundImage: 'url(/fundosemflor-01.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '40px 0px',
      position: 'relative'
    }}
    >
      <div className="catalog-container">
        {/* Header com Título */}
        <div className="catalog-header">
          <h2
            style={{
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 900,
              color: '#6B4423',
              textAlign: 'center',
              fontSize: '60px',
              lineHeight: '1.25'
            }}
            className="sm:[letter-spacing:-5px] [letter-spacing:-3px]"
          >
            GALERIA
          </h2>
        </div>
  
        {/* Grid de Cards (um abaixo do outro, alternando os componentes) */}
        <div className="products-grid">
          <DualPolaroidCard product={products[0]} />
          <DualPolaroidCardMirrored product={products[1]} />
          <DualPolaroidCard product={products[2]} />
          <DualPolaroidCardMirrored product={products[3]} />
          <DualPolaroidCard product={products[4]} />
          <DualPolaroidCardMirrored product={products[5]} />
          <DualPolaroidCard product={products[6]} />
          <DualPolaroidCardMirrored product={products[7]} />
        </div>
  
      {isMobile ? (
        <div className="mobile-carousel">
          <>
            <div className="polaroid-pair">
              {[products[current * 2], products[current * 2 + 1]].map(
                (product) =>
                  product && (
                    <div className="product-card" style={{ width: '50%', margin: 0 }} key={product.id}>
                      <div className="dual-polaroid-wrapper">
                        <div className="polaroids-container">
                          <div className="polaroid polaroid-back" style={{ transform: 'rotate(-8deg)' }}>
                            <div className="image-wrapper">
                              <img
                                src={product.images[0]}
                                alt={`${product.name} - Vista 1`}
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="polaroid polaroid-front" style={{ transform: 'rotate(7deg)' }}>
                            <div className="image-wrapper">
                              <img
                                src={product.images[1]}
                                alt={`${product.name} - Vista 2`}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="product-info-external" style={{ textAlign: 'center' }}>
                          <div className="product-category">{product.name}</div>
                          <div className="product-note">{product.description}</div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
            <div className="carousel-controls">
              <button aria-label="Anterior" onClick={prevSlide} style={{ fontSize: 24, background: 'none', border: 'none', color: '#B2825D' }}>&lt;</button>
              {Array.from({ length: Math.ceil(products.length / 2) }).map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot${idx === current ? ' active' : ''}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Ir para o grupo ${idx + 1}`}
                />
              ))}
              <button aria-label="Próximo" onClick={nextSlide} style={{ fontSize: 24, background: 'none', border: 'none', color: '#B2825D' }}>&gt;</button>
            </div>
          </>
        </div>
      ) : (
        <div className="products-grid">
          <DualPolaroidCard product={products[0]} />
          <DualPolaroidCardMirrored product={products[1]} />
          {/* ...etc, todos os pares */}
        </div>
      )}
      {/* Botão "Ver Todas as Peças" */}
        <div className="text-center mt-12">
          <Link
            to="/colecoes"
            className="backdrop-blur-md bg-white/20 border border-amber-800/50 text-amber-800 px-8 py-3 rounded-full hover:bg-amber-800/90 hover:text-white transition-all duration-300 font-medium shadow-lg inline-block text-center"
          >
            Ver Todas as Peças
          </Link>
        </div>
      </div>
      


      {/* ============================================ */}
      {/* ESTILOS CSS */}
      {/* ============================================ */}
      <style>{`
        @media (max-width: 768px) {
          .dual-polaroid-wrapper, .dual-polaroid-wrapper-mirrored {
            flex-direction: column;
            align-items: center;
            width: 100% !important;
            justify-content: center;
            position: relative;
            gap: 0;
            margin: 0 auto;
          }
          .polaroids-container, .polaroids-container-mirrored {
              position: relative;
              min-width: 400px !important;
              min-height: 290px !important;
              max-width: 197px;
              margin: 16px auto !important;
              display: block !important;
              right: 24px; !important;
          }
          .polaroid {
            background: white;
            padding: 15px;
            padding-bottom: 60px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            width: 80vw;
            max-width: 240px;
            margin: 0 auto;
            position: absolute;
            left: 0;
            right: 0;
            transition: transform 0.3s ease;
          }
          .polaroid-back,
          .polaroid-back-mirrored {
            transform: rotate(-8deg);
            z-index: 1;
            top: 28px;
          }
          .polaroid-front,
          .polaroid-front-mirrored {
            transform: rotate(5deg);
            z-index: 2;
            top: 65px;
          }
          .product-info-external, .product-info-external-mirrored {
            max-width: 96vw !important;
            margin-top: 155px !important;
            text-align: center !important;
            padding: 0 !important;
            position: relative;
            left: 0;
            right: 0;
          }
          .product-category, .product-note {
            text-align: center !important;
          }
        }
        @media (max-width: 768px) {
          .product-card {
            transform: rotate(0deg); !important;
            display: contents; !important;
          }
        }
        @media (max-width: 768px) {
          .mobile-carousel {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            width: 100%;
            position: relative;
          }
          .carousel-controls {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 18px;
            margin-top: 18px;
          }
          .carousel-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #B2825D;
            opacity: .4;
            border: none;
          }
          .carousel-dot.active {
            opacity: 1;
            background: #6B4423;
          }
          @media (min-width: 769px) {
            .mobile-carousel,
            .carousel-controls { display: none !important; }
            .products-grid { display: grid; }
          }
          @media (max-width: 768px) {
            .products-grid { display: none !important; }
          }
        }

        /* Importar fontes Montserrat */
        @font-face {
          font-family: 'Montserrat';
          src: url('/src/font/Montserrat-Light.ttf') format('truetype');
          font-weight: 300;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'Montserrat';
          src: url('/src/font/Montserrat-LightItalic.ttf') format('truetype');
          font-weight: 300;
          font-style: italic;
        }
        
        @font-face {
          font-family: 'Montserrat';
          src: url('/src/font/Montserrat-Bold.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'Montserrat';
          src: url('/src/font/Montserrat-BoldItalic.ttf') format('truetype');
          font-weight: 700;
          font-style: italic;
        }

        /* Container Principal */
        .catalog-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Header do Catálogo - Z-INDEX ALTO PARA FICAR ACIMA DAS POLAROIDS */
        .catalog-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 10;
        }

        /* Grid de Produtos */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 140px 60px;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        /* Card Individual do Produto - SEM ROTAÇÃO */
        .product-card {
          position: relative;
          transform-origin: center;
          transition: transform 0.3s ease;
          min-height: 450px;
          transform: rotate(0deg);
          z-index: 1;
        }

        .product-card:hover {
          z-index: 10;
        }

        /* ============================================ */
        /* POLAROID DUPLO - Layout Horizontal (ESQUERDA) */
        /* ============================================ */
        .dual-polaroid-wrapper {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 40px;
          position: relative;
        }

        .polaroids-container {
          position: relative;
          min-width: 450px;
          min-height: 400px;
          flex-shrink: 0;
        }

        .polaroid {
          background: white;
          padding: 15px;
          padding-bottom: 60px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1);
          position: absolute;
          transition: transform 0.3s ease;
        }

        .polaroid-back {
          transform: rotate(-8deg);
          z-index: 1;
          top: 10px;
          left: 0;
          width: 280px;
        }

        .polaroid-front {
          transform: rotate(5deg);
          z-index: 2;
          top: 80px;
          left: 120px;
          width: 320px;
        }

        .product-card:hover .polaroid-back {
          transform: rotate(-5deg) translateY(-5px);
        }

        .product-card:hover .polaroid-front {
          transform: rotate(2deg) translateY(-5px);
        }

        /* ============================================ */
        /* POLAROID DUPLO ESPELHADO - Layout Horizontal (DIREITA) */
        /* ============================================ */
        .dual-polaroid-wrapper-mirrored {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 40px;
          position: relative;
          justify-content: flex-end;
        }

        .polaroids-container-mirrored {
          position: relative;
          min-width: 450px;
          min-height: 400px;
          flex-shrink: 0;
        }

        .polaroid-back-mirrored {
          transform: rotate(8deg);
          z-index: 1;
          top:-100px;
          right: 0;
          width: 280px;
        }

        .polaroid-front-mirrored {
          transform: rotate(-5deg);
          z-index: 2;
          top: -35px;
          right: 120px;
          width: 320px;
        }

        .product-card:hover .polaroid-back-mirrored {
          transform: rotate(5deg) translateY(-5px);
        }

        .product-card:hover .polaroid-front-mirrored {
          transform: rotate(-2deg) translateY(-5px);
        }

        /* Wrapper da Imagem */
        .image-wrapper {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: #f0f0f0;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ============================================ */
        /* INFORMAÇÕES DO PRODUTO */
        /* ============================================ */
        
        /* Informações Externas (ao lado direito - ESQUERDA) */
        .product-info-external {
          text-align: left;
          max-width: 280px;
          padding-top: 30px;
          flex-shrink: 0;
          transform: rotate(0deg);
        }

        /* Informações Externas Espelhadas (ao lado esquerdo - DIREITA) */
        .product-info-external-mirrored {
          text-align: right;
          max-width: 280px;
          padding-top: 350px;
          flex-shrink: 0;
          transform: rotate(0deg);
        }

        /* HEADPIECE - Montserrat Bold Italic 18px com letter-spacing */
        .product-category {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          color: #B2825D;
          font-style: italic;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -1px;
          margin-bottom: 12px;
        }

        .product-price-box {
          background: transparent;
          padding: 0;
          border-radius: 0;
          display: block;
          margin-top: 8px;
        }

        /* Preços - Montserrat Light 18px */
        .product-price {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          color: #B2825D;
          font-weight: 300;
          line-height: 1.6;
        }

        /* Descrição - Montserrat Light 18px */
        .product-note {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          color: #B2825D;
          margin-top: 12px;
          font-style: normal;
          font-weight: 300;
          line-height: 1.6;
        }

        /* ============================================ */
        /* FLORES DECORATIVAS */
        /* ============================================ */
        .decorative-flower {
          position: absolute;
          opacity: 0.15;
          pointer-events: none;
          stroke: #c9a86a;
          fill: none;
          stroke-width: 1.5;
        }

        .flower-header {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
        }

        /* ============================================ */
        /* RESPONSIVIDADE */
        /* ============================================ */
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .product-card {
            transform: rotate(0deg);
          }

          /* Layout Vertical em Mobile */
          .dual-polaroid-wrapper,
          .dual-polaroid-wrapper-mirrored {
            flex-direction: column;
            align-items: center;
          }

          .polaroids-container,
          .polaroids-container-mirrored {
            min-width: 100%;
          }

          .product-info-external,
          .product-info-external-mirrored {
            text-align: center;
            max-width: 100%;
            padding-top: 20px;
          }

          /* Ajuste de tamanho de fonte em mobile */
          .product-category {
            font-size: 20px;
            letter-spacing: -3px;
          }

          .product-price,
          .product-note {
            font-size: 18px;
          }
        }
      `}</style>

    </section>
    <Footer />
    </>
  );
});

Galeria.displayName = 'Galeria';

export default Galeria;

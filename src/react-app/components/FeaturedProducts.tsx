import { memo, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

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
        <div  className="polaroid polaroid-back">
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
// COMPONENTE PRINCIPAL: Featured Products
// ============================================
const FeaturedProducts = memo(() => {
  // Dados dos produtos
  const products: Product[] = [
    {
      id: 1,
      name: "HEADPIECE",
      prices: [
        { label: "Simples", value: "20,00" },
        { label: "Com pingentes", value: "25,00" }
      ],
      images: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=400&h=500&fit=crop&crop=center"
      ],
      description: "· Escolha da cor e dos pingentes a combinar."
    },
    {
      id: 2,
      name: "HEADPIECE",
      prices: [
        { label: "Simples", value: "20,00" },
        { label: "Com pingentes", value: "25,00" }
      ],
      images: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=400&h=500&fit=crop&crop=center"
      ],
      description: "· Escolha da cor e dos pingentes a combinar."
    }
    // ...adicione mais produtos se quiser!
  ];

  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // RESPONSIVO: detecta mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Carrossel Mobile
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent(prev => (prev === 0 ? products.length - 1 : prev - 1));
  const nextSlide = () => setCurrent(prev => (prev === products.length - 1 ? 0 : prev + 1));

  return (
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
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        maxWidth: '1200px',
        height: '4px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(178, 130, 93, 0.3) 50%, transparent 100%)'
      }} />
      {/* ============================================ */}
      {/* ESTILOS CSS */}
      {/* ============================================ */}
      <style>{`
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
          gap: 80px 60px;
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

          h2 {
            letter-spacing: -3px !important;
          }

          .product-price,
          .product-note {
            font-size: 18px;
          }

          .image-wrapper img {
            height: 100%;
          }
        }
      `}</style>
      <style>{`
      @media (max-width: 768px) {
            .dual-polaroid-wrapper, .dual-polaroid-wrapper-mirrored {
                flex-direction: column;
                align-items: center;
            }
        }
        <style>
        .dual-polaroid-wrapper-mirrored {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 121px;
            position: relative;
            justify-content: end;
        }
      @media (max-width: 768px) {
        .polaroids-container, .polaroids-container-mirrored {
            min-width: 85%;
          }
      }
      @media (max-width: 768px) {
        .polaroid {
          position: absolute;      
          transition: transform 0.3s ease;
          background: white;
          padding: 15px;
          padding-bottom: 60px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 60% !important;
          height: auto !important;
          max-width: 200px !important;
          margin: 0 !important;
        }
        .polaroids-container-mirrored {
          position: relative;
          min-width: 333px;
          flex-shrink: 0;
          margin: auto; !important;
          margin-top: 90px;
          min-height: 300px; !important;
        }
        .polaroid-back {
          /* Polaroid de trás, levemente girada para esquerda */
          transform: rotate(-8deg);   /* O principal responsável pela rotação */
          z-index: 1;
          top: 10px;
          left: 0;
          width: 280px;
        }
        .polaroid-front {
          /* Polaroid da frente, levemente girada para direita */
          transform: rotate(5deg);    /* O principal responsável pela rotação */
          z-index: 2;
          top: 80px;
          left: 120px;
          width: 320px;
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

      `}</style>
      <div className="catalog-container">
        <div className="catalog-header">
          <h2
            style={{
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 900,
              color: '#6B4423',
              letterSpacing: '-7px',
              textAlign: 'center',
              fontSize: '60px',
              lineHeight: '1.25'
            }}
          >
            DESTAQUES
          </h2>
        </div>
        <div className="products-grid">
          <DualPolaroidCard product={products[0]} />
          <DualPolaroidCardMirrored product={products[1]} />
        </div>
        {/* MOBILE - CARROSSEL */}
        <div className="mobile-carousel">
          {isMobile && (
            <>
              {current % 2 === 0 ? (
                <DualPolaroidCard product={products[current]} />
              ) : (
                <DualPolaroidCardMirrored product={products[current]} />
              )}
              <div className="carousel-controls">
                <button aria-label="Anterior" onClick={prevSlide} style={{ fontSize: 24, background: 'none', border: 'none', color: '#B2825D' }}>&lt;</button>
                {products.map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot${idx === current ? ' active' : ''}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Ir para o produto ${idx + 1}`}
                  />
                ))}
                <button aria-label="Próximo" onClick={nextSlide} style={{ fontSize: 24, background: 'none', border: 'none', color: '#B2825D' }}>&gt;</button>
              </div>
            </>
          )}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/colecoes"
            className="backdrop-blur-md bg-white/20 border border-amber-800/50 text-amber-800 px-8 py-3 rounded-full hover:bg-amber-800/90 hover:text-white transition-all duration-300 font-medium shadow-lg inline-block text-center"
          >
            Ver Todas as Peças
          </Link>
        </div>
      </div>
    </section>
  );
});

FeaturedProducts.displayName = 'FeaturedProducts';
export default FeaturedProducts;

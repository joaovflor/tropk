import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { openWhatsApp, whatsappMessages } from '../utils/whatsapp';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ana Carolina",
      location: "São Paulo, SP",
      text: "Simplesmente apaixonada pelas peças! A qualidade é incrível e o atendimento é super personalizado. Já comprei várias vezes e sempre fico encantada.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=400&h=500&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Julia Taouil",
      location: "Rio de Janeiro, RJ",
      text: "Receber uma peça da tropkshop é como ganhar um presente especial. Cada detalhe é pensado com carinho. Super recomendo para quem ama exclusividade!",
      avatar: "Julia.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Beatriz Costa",
      location: "Belo Horizonte, MG",
      text: "O trabalho artesanal é impecável! Uso minhas peças da tropkshop em várias ocasiões e sempre recebo elogios. Vale cada centavo investido.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
      rating: 5
    }
  ];
  // Detecta mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Card atualmente aberto no mobile
  const [flippedIdx, setFlippedIdx] = useState<number | null>(null);

  // Renderização condicional dos cards no mobile
  const cardsToRender = isMobile && flippedIdx !== null
    ? testimonials.filter((_, idx) => idx === flippedIdx)
    : testimonials;
  return (
    <section 
      style={{
        backgroundImage: 'url(/fundosemflor-01.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '80px 20px',
        position: 'relative'
      }}
    >
      {/* Linha divisória minimalista no topo */}
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

      {/* Estilos CSS para o efeito de flip */}
      <style>{`
        .flip-card-container {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          min-height: 380px;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card-container:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden; !important;
          }
          
        .flip-card-back {
          transform: rotateY(180deg);
          backface-visibility: hidden; !important;
        }

        .polaroid {
          background: white;
          padding: 15px;
          padding-bottom: 60px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          width: 100%;
          height: 100%;
          max-width: 320px;
          margin: 0 auto;
        }

        .polaroid-image {
          width: 100%;
          height: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          display: block;
          background: #f0f0f0;
        }

        .polaroid-caption {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #6B4423;
          text-align: center;
          margin-top: 5px;
          letter-spacing: 0.5px;
        }

        .polaroid-location {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #B2825D;
          text-align: center;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .polaroid {
            padding-bottom: 30px
          }
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            style={{
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 900,
              color: '#6B4423',
              letterSpacing: '-6px',
              fontSize: '60px',
              lineHeight: '1.25',
              wordSpacing: '10px',
              marginBottom: '8px'
            }}
            className="text-3xl lg:text-4xl font-light text-neutral-800 mb-4"
          >
            O QUE NOSSAS <span style={{ fontFamily: 'Aileron, sans-serif', fontWeight: 200 }}>CLIENTES</span> DIZEM
          </h2>
          <p 
            style={{ 
              fontFamily: 'Montserrat, sans-serif', 
              fontWeight: 300, 
              color: '#b88860ff' 
            }} 
            className="text-lg leading-relaxed max-w-lg mx-auto"
          >
            Cada <span className="font-semibold">depoimento</span> é uma <span className="font-semibold">história especial</span> que nos motiva a continuar criando <span className="font-semibold">peças únicas</span> com muito <span className="font-semibold">amor</span> e <span className="font-semibold">dedicação</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flip-card-container"
            >
              <div className="flip-card-inner">
                {/* Front Side - Depoimento */}
                <div className="flip-card-front">
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(178, 130, 93, 0.2)',
                      borderRadius: '20px',
                      padding: '25px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      minHeight: '380px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Stars */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} style={{ width: '16px', height: '16px', color: '#B2825D', fill: '#B2825D' }} />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p 
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '16px',
                        fontWeight: 300,
                        color: '#B2825D',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        flex: 1
                      }}
                    >
                      "{testimonial.text}"
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid #B2825D'
                        }}
                      />
                      <div>
                        <h4 
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '16px',
                            fontWeight: 700,
                            color: '#6B4423',
                            marginBottom: '4px'
                          }}
                        >
                          {testimonial.name}
                        </h4>
                        <p 
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '14px',
                            fontWeight: 300,
                            color: '#B2825D'
                          }}
                        >
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side - Polaroid */}
                <div className="flip-card-back" style={{ minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="polaroid">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="polaroid-image"
                    />
                    <div className="polaroid-caption">
                      {testimonial.name}
                    </div>
                    <div className="polaroid-location">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p 
            style={{ 
              fontFamily: 'Montserrat, sans-serif', 
              fontWeight: 300, 
              color: '#b88860ff' 
            }} 
            className="text-lg leading-relaxed max-w-2xl mx-auto mb-6"
          >
            Quer fazer parte da nossa <span className="font-semibold">galeria</span> de <span className="font-semibold">clientes satisfeitas?</span> 
          </p>
          <button 
            onClick={() => openWhatsApp(whatsappMessages.customOrder)}
            className="backdrop-blur-md bg-amber-800/90 hover:bg-amber-900/90 text-white px-8 py-3 rounded-full border border-amber-700/50 shadow-lg transition-all duration-300 font-medium cursor-pointer"
          >
            Fazer Pedido 
          </button>
        </div>
      </div>
    </section>
  );
}

import { memo, useMemo, useCallback } from 'react';
import { openWhatsApp, whatsappMessages } from '../utils/whatsapp';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 1,
    icon: "🎨",
    title: "DESIGN EXCLUSIVO",
    description: "Cada peça é criada com design único, pensada especialmente para mulheres modernas que valorizam a exclusividade."
  },
  {
    id: 2,
    icon: "🧶",
    title: "MATERIAIS PREMIUM",
    description: "Utilizamos apenas fios de alta qualidade, 100% algodão, que garantem durabilidade e conforto."
  },
  {
    id: 3,
    icon: "✋",
    title: "FEITO À MÃO",
    description: "Todo o processo é artesanal, com técnicas tradicionais de crochê passadas de geração em geração."
  },
  {
    id: 4,
    icon: "💝",
    title: "ENTREGA ESPECIAL",
    description: "Suas peças chegam embaladas com carinho, prontas para serem usadas ou presenteadas."
  }
];

function ProcessSection() {
  // Memoize steps for stability
  const memoSteps = useMemo(() => steps, []);
  
  // Memoize CTA handlers
  const handleWhatsApp = useCallback(() => openWhatsApp(whatsappMessages.customOrder), []);

  // Preload background for performance
  // strongly recommend optimized webp in PROD
  const backgroundURL = '/fundooutro-01.png';

  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: `url(${backgroundURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '40px 0px'
      }}
    >
      {/* Preload bg */}
      <img src={backgroundURL} alt="" style={{ display: 'none' }} loading="eager" />

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

      <div className="container mx-auto px-7">
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 900,
              color: '#6B4423',
              fontSize: '60px',
              lineHeight: '1.25',
              wordSpacing: '10px',
              marginBottom: '8px'
            }}
            className="text-3xl lg:text-4xl font-light text-neutral-800 mb-4 sm:[letter-spacing:-6px] [letter-spacing:-3px]"
          >
            NOSSO <span style={{ fontFamily: 'Aileron, sans-serif', fontWeight: 200 }}>PROCESSO</span> ARTESANAL
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              color: '#b88860ff'
            }}
            className="text-lg leading-relaxed max-w-lg mx-auto"
          >
            Cada <span className="font-semibold">peça</span> passa por um cuidadoso processo de<span className="font-semibold"> criação</span>, desde o <span className="font-semibold">design </span>até a <span className="font-semibold">entrega</span>, garantindo <span className="font-semibold">qualidade</span> e<span className="font-semibold"> exclusividade.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {memoSteps.map((step, index) => (
            <div key={step.id} className="text-center group">
              <div className="relative mb-6">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100/30 to-orange-100/30 border border-white/30 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-105 transition-all duration-150 mx-auto shadow-md">
                  {step.icon}
                </div>
                {/* Connecting Line */}
                {index < memoSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-200 to-transparent -z-10" />
                )}
              </div>
              <h3
                style={{
                  fontFamily: 'Aileron, sans-serif',
                  fontWeight: 900,
                  color: '#6B4423',
                  lineHeight: '1.25',
                  marginBottom: '12px'
                }}
                className="text-base group-hover:text-amber-800 transition-colors"
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  color: '#b88860ff'
                }}
                className="text-sm leading-relaxed"
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="backdrop-blur-sm text-center mt-12 p-8 bg-gradient-to-br from-amber-50/30 to-orange-50/30 border border-white/30 rounded-2xl shadow-md">
          <h3
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 900,
              color: 'rgb(107, 68, 35)',
              fontSize: '55px', // Melhor para mobile, ajustável via media-query/CSS-in-JS
              lineHeight: 1.25,
              marginBottom: '1px'
            }}
            className="sm:text-5xl text-2xl sm:[letter-spacing:-7px] [letter-spacing:-3px]"
          >

            <p>VAMOS</p><p> ENCOMENDAR?</p>
          </h3>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              color: '#b88860ff'
            }}
            className="text-lg leading-relaxed max-w-lg mx-auto mb-6"
          >
            Entre em contato e vamos <span className="font-semibold">criar</span> algo <span className="font-semibold">especial juntas!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-amber-800/90 hover:bg-amber-900/90 text-white px-8 py-3 rounded-full border border-amber-700/50 shadow-md transition-all duration-150 font-medium cursor-pointer"
            >
              Fazer Pedido Personalizado
            </button>
            <Link
              to="/colecoes"
              className="bg-white/20 border border-amber-800/50 text-amber-800 px-8 py-3 rounded-full hover:bg-amber-800/90 hover:text-white transition-all duration-150 font-medium shadow-md inline-block text-center"
            >
              Ver Coleção Pronta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ProcessSection);

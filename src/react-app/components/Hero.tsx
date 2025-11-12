import { ArrowRight } from 'lucide-react';
import InstagramFeed from './InstagramFeed';
import { Link } from 'react-router-dom';
import { openWhatsApp, whatsappMessages } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-section">
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 style={{ fontFamily: 'Aileron, sans-serif', fontWeight: 900, color: '#6B4423'  }} className="text-4xl lg:text-6xl text-neutral-800 leading-tight">
                CROCHÊ FEITO
                <span style={{ color:'#6B4423',fontWeight: 200 }} className="block text-amber-700 font-normal">À MÃO</span>
              </h1>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, color: '#b88860ff' }} className="text-lg leading-relaxed max-w-lg">
                Na <span className="font-semibold">tropkshop</span>, cada peça é feita com <span className="font-semibold">carinho, cuidado</span> e <span className="font-semibold">tempo</span>. Por isso, o processo é todo <span className="font-semibold">personalizado</span>, desde a escolha do <span className="font-semibold">modelo</span> até os <span className="font-semibold">ajustes finais</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/colecoes" className="backdrop-blur-md bg-amber-800/90 hover:bg-amber-900/90 text-white px-8 py-3 rounded-full border border-amber-700/50 shadow-lg transition-all duration-300 font-medium flex items-center justify-center space-x-2 group">
                <span>Ver Coleção</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button onClick={() => openWhatsApp (whatsappMessages.default)} className="backdrop-blur-md bg-white/20 border border-white/30 text-neutral-700 px-8 py-3 rounded-full hover:bg-white/30 hover:border-amber-800/50 hover:text-amber-800 transition-all duration-300 font-medium shadow-lg">
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, color: '#b88860ff' }} className="text-lg leading-relaxed max-w-lg">
                 <span className="font-semibold">Fale Conosco</span></p>
              </button>
            </div>

            {/* Social Proof with glassmorphism */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
                <div className="text-2xl font-light text-amber-800">500+</div>
                <div className="text-sm text-neutral-600 font-light">Peças criadas</div>
              </div>
              <div className="text-center p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
                <div className="text-2xl font-light text-amber-800">100%</div>
                <div className="text-sm text-neutral-600 font-light">Artesanal</div>
              </div>
              <div className="text-center p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
                <div className="text-2xl font-light text-amber-800">🇧🇷</div>
                <div className="text-sm text-neutral-600 font-light">Todo o Brasil</div>
              </div>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="relative">
            <InstagramFeed />
          </div>
        </div>
      </div>
    </section>
  );
}

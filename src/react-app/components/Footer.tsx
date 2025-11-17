import { memo } from 'react';
import { Heart, Instagram, MessageCircle, Package } from 'lucide-react';

// Use useMemo para navLinks para evitar recalculos desnecessários
const navLinks = [
  { href: '/colecoes', label: 'Coleções' },
  { href: '/sobre', label: 'Sobre a Criadora' },
  { href: '/galeria', label: 'Galeria de Clientes' }
];

function Footer() {
  // Pré-carregue a imagem do background via <img> invisível (melhora o "jank" ao passar pelo footer se cache não tiver)
  // Adicione loading="lazy" ao logo (caso seja possível)

  // Otimize estilos: não utilize backdrop-blur na div principal
  // Reduza shadow para shadow-xs
  // Remova sticky/top-0 (footer geralmente fica fixo no bottom ou normal; sticky causa repaints desnecessários ao rolar)
  // Use React.memo para evitar re-renderizações desnecessárias

  return (
    <footer
      style={{
        backgroundImage: 'url(/fundosemflor-01.png)', // Otimize o PNG, use .webp se possível!
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        borderTop: '1px solid rgba(178, 130, 93, 0.2)'
      }}
    >
      {/* Pré-carregamento do background para performance */}
      <img src="/fundosemflor-01.png" alt="" style={{ display: 'none' }} loading="eager" />

      {/* Linha divisória minimalista */}
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

      <div className="mx-auto px-12 py-16 shadow-xs border-b border-white/20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/LOGO.png"
                alt="Tropkshop Logo"
                className="h-14 w-auto object-contain"
                loading="lazy"
                width={128}
                height={56}
                style={{ maxWidth: 128, maxHeight: 56 }}
              />
            </div>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '18px',
              fontWeight: 300,
              color: '#B2825D',
              lineHeight: '1.7',
              maxWidth: '500px'
            }}>
              Peças únicas de crochê feitas à mão com muito carinho e dedicação.
              Cada produto é exclusivo e carrega a essência do verdadeiro trabalho artesanal brasileiro.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://wa.me/5521993867224"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-all duration-200 hover:scale-105"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/tropkshop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition-all duration-200 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-5">
            <h3 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#6B4423'
            }}>
              Navegação
            </h3>
            <div className="space-y-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: 300,
                    color: '#B2825D'
                  }}
                  className="block hover:text-amber-700 transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#6B4423'
            }}>
              Atendimento
            </h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5521993867224"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-green-600 transition-colors group"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                  fontWeight: 300,
                  color: '#B2825D'
                }}
                aria-label="WhatsApp Atendimento"
              >
                <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                </div>
                <span>WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/tropkshop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-pink-600 transition-colors group"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                  fontWeight: 300,
                  color: '#B2825D'
                }}
                aria-label="Instagram Atendimento"
              >
                <div className="p-2 bg-pink-50 rounded-lg group-hover:bg-pink-100 transition-colors">
                  <Instagram className="w-4 h-4 text-pink-600" />
                </div>
                <span>@tropkshop</span>
              </a>
              <div
                className="flex items-center space-x-3 pt-2"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#B2825D'
                }}
              >
                <Package className="w-4 h-4 text-amber-600" />
                <span>Enviamos para todo Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p
              className="flex items-center space-x-2"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: 300,
                color: '#B2825D'
              }}
            >
              <span>© 2025 Tropkshop. Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>por artesãs brasileiras</span>
            </p>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '12px',
              fontWeight: 300,
              color: 'rgba(178, 130, 93, 0.7)'
            }}>
              Todas as peças são únicas e feitas sob encomenda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);

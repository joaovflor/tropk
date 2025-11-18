import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X, MessageCircle, Instagram } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-lg bg-white/70 shadow-sm border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/LOGO.png" alt="Tropkshop Logo" className="h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, color: '#6B4423' }}  to="/colecoes" className="text-neutral-700 hover:text-amber-800 transition-colors font-light">
              Coleções
            </Link>
            <Link style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, color: '#6B4423' }}  to="/galeria" className="text-neutral-700 hover:text-amber-800 transition-colors font-light">
              Galeria
            </Link>
            <Link style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, color: '#6B4423' }}  to="/sobre" className="text-neutral-700 hover:text-amber-800 transition-colors font-light">
              Sobre
            </Link>
          </nav>

          {/* Social Icons & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/5521993867224"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/tropkshop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-neutral-700 hover:text-amber-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-neutral-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/colecoes"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, color: '#6B4423' }} 
                className="text-neutral-700 hover:text-amber-800 transition-colors font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Coleções
              </Link>
              <Link
                to="/galeria"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, color: '#6B4423' }} 
                className="text-neutral-700 hover:text-amber-800 transition-colors font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeria
              </Link>
              <Link
                to="/sobre"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, color: '#6B4423' }} 
                className="text-neutral-700 hover:text-amber-800 transition-colors font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

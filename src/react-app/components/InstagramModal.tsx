import { useEffect } from 'react';
import { X } from 'lucide-react';

interface InstagramModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function InstagramModal({ isOpen, onClose, title }: InstagramModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Carrega o script do Elfsight quando o modal abre
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);

      // Previne scroll do body quando o modal está aberto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      // Restaura o scroll quando o modal fecha
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
      {/* Overlay com blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl flex items-center justify-center p-2">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-100 transition-colors z-10"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4 text-neutral-600" />
        </button>

        {title && (
          <div className="absolute -top-8 left-0 right-0 text-center">
            <h3 className="text-white text-base font-medium">{title}</h3>
          </div>
        )}

        {/* Instagram feed */}
        <div className="w-full h-[60vh] overflow-hidden rounded-xl flex items-center justify-end">
          <div 
            className="elfsight-app-fff194a0-aa6a-443e-bcdf-251c82bc6ba8 w-full h-full flex items-center justify-center" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </div>
  );
}
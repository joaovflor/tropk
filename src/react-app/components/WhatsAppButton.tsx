import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 w-14 h-14 backdrop-blur-md bg-green-500/90 hover:bg-green-600/90 border border-green-400/50 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 animate-pulse hover:animate-none group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 backdrop-blur-lg bg-neutral-800/90 border border-neutral-700/50 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
        Atendimento Personalizado!
        <div className="absolute top-1/2 -right-1 w-0 h-0 border-l-4 border-l-neutral-800 border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
      </div>
    </button>
  );
}

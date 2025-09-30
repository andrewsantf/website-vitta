import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "5561991081071";
  const message = "Olá! Gostaria de saber mais sobre a Vitta Micro Market.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-vitta-green hover:bg-vitta-green-dark text-white p-4 rounded-full shadow-wellness hover:shadow-elegant transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
      <span className="sr-only">Conversar no WhatsApp</span>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Falar no WhatsApp
      </div>
    </button>
  );
};

export default WhatsAppButton;
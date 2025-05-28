
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-scale">
        <MessageCircle className="w-6 h-6" />
      </button>
      
      <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="text-sm text-gray-700 font-medium">
          💬 Fale conosco no WhatsApp!
        </p>
        <p className="text-xs text-gray-500">
          Tire suas dúvidas sobre a ZENTS
        </p>
      </div>
    </div>
  );
};

export default WhatsAppButton;

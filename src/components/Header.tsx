
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/30c7b77e-1be0-4a70-8a08-fac8f8e44203.png" 
            alt="ZENTS"
            className="h-8"
          />
        </div>
        
        <Button className="bg-zents-orange-500 hover:bg-zents-orange-600 text-white rounded-full px-6 py-2 flex items-center gap-2 transition-all duration-300 hover:scale-105">
          <MessageCircle className="w-4 h-4" />
          Falar no WhatsApp
        </Button>
      </div>
    </header>
  );
};

export default Header;

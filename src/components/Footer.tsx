
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-zents-purple-900 to-zents-purple-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-zents-orange-500 to-zents-orange-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-2xl font-bold">ZENTS</span>
              </div>
              
              <p className="text-zents-purple-200 mb-6 max-w-md">
                Sua secretária digital da moda. Tecnologia cearense que simplifica 
                a vida do microempreendedor, um comando de voz por vez.
              </p>
              
              <div className="flex items-center gap-2 text-zents-purple-200">
                <MapPin className="w-4 h-4" />
                <span>Fortaleza - CE, Brasil 🇧🇷</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-zents-purple-200 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Atendimento</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-zents-purple-200 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contato@zents.com.br</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-zents-purple-200 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@zents.oficial</span>
                </a>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Acompanhe o desenvolvimento:</h4>
                <p className="text-sm text-zents-purple-200">
                  Stories exclusivos e novidades em primeira mão! 📱
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zents-purple-700 mt-8 pt-8">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div className="text-zents-purple-200 text-sm">
                <p>&copy; 2024 ZENTS. Todos os direitos reservados.</p>
                <p>Startup 100% cearense 🌟</p>
              </div>
              
              <div className="text-right">
                <div className="flex gap-4 justify-end text-sm">
                  <a href="#" className="text-zents-purple-200 hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                  <a href="#" className="text-zents-purple-200 hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Button } from "@/components/ui/button";
import { Smartphone, ShoppingBag, Clock, MessageCircle } from "lucide-react";

const CatalogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nosso{" "}
              <span className="bg-gradient-to-r from-zents-purple-600 to-zents-orange-500 bg-clip-text text-transparent">
                Catálogo Interativo
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seu catálogo digital fica sempre atualizado, bonito e organizado. 
              Seus clientes acessam pelo link que você envia no WhatsApp. 📱✨
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-zents-purple-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-zents-purple-600 mb-3">
                    📱 Para seus clientes
                  </h3>
                  <p className="text-gray-600">
                    Eles veem tudo — foto, preço, tamanhos — e fazem o pedido direto, 
                    sem precisar ficar te perguntando. Simples assim!
                  </p>
                </div>
                
                <div className="bg-zents-orange-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-zents-orange-600 mb-3">
                    🛍️ Para você
                  </h3>
                  <p className="text-gray-600">
                    Menos perguntas repetidas, mais vendas organizadas. 
                    Atualize por voz e veja a mágica acontecer!
                  </p>
                </div>
                
                <Button className="bg-zents-orange-500 hover:bg-zents-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold w-full transition-all duration-300 hover:scale-105">
                  Quero ver um exemplo
                  <MessageCircle className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-zents-purple-100 to-zents-orange-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-zents-purple-500 to-zents-orange-500 p-4 text-white">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-6 h-6" />
                      <span className="font-semibold">Catálogo ZENTS</span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-gradient-to-r from-zents-purple-200 to-zents-orange-200 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-zents-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Vestido Floral</h4>
                        <p className="text-sm text-gray-600">Tamanhos: P, M, G</p>
                        <p className="text-lg font-bold text-zents-orange-600">R$ 89,90</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-gradient-to-r from-zents-orange-200 to-zents-purple-200 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-zents-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Blusa Básica</h4>
                        <p className="text-sm text-gray-600">Tamanhos: P, M, G, GG</p>
                        <p className="text-lg font-bold text-zents-purple-600">R$ 45,90</p>
                      </div>
                    </div>
                    
                    <div className="text-center pt-4">
                      <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2">
                        💬 Fazer Pedido
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-zents-orange-500 text-white rounded-full p-3 animate-pulse-scale">
                  <Clock className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;

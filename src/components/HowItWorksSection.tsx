
import { MessageCircle, Mic, Camera, Share2 } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-zents-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zents-purple-600 to-zents-orange-500 bg-clip-text text-transparent">
                Simples Como Conversar
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Em 3 passos simples, você revoluciona sua forma de vender:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps Section */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-zents-purple-500 to-zents-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Mic className="w-5 h-5 text-zents-purple-600" />
                    Fale Naturalmente
                  </h3>
                  <p className="text-gray-600">
                    "Adicione vestido floral azul, tamanho P ao G, R$ 89,90"
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-zents-orange-500 to-zents-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-zents-orange-600" />
                    IA Organiza Tudo
                  </h3>
                  <p className="text-gray-600">
                    Catálogo atualizado instantaneamente com fotos e descrições
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-green-600" />
                    Compartilhe no WhatsApp
                  </h3>
                  <p className="text-gray-600">
                    Clientes veem produtos organizados e fazem pedidos na hora
                  </p>
                </div>
              </div>
            </div>
            
            {/* Chat Bot Interface */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl">
                <div className="bg-gradient-to-r from-zents-purple-600 to-zents-orange-500 rounded-2xl p-4 mb-6">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">Z</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Zents Bot</h4>
                      <p className="text-sm opacity-90">online</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {/* Product Cards */}
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-gray-800">Blusa branca</span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">salva!</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">👕 Tamanhos: P-GG</p>
                    <p className="text-lg font-bold text-zents-orange-600">💰 R$ 35,00</p>
                  </div>
                  
                  <div className="bg-zents-purple-100 rounded-xl p-3 ml-8">
                    <p className="text-sm text-zents-purple-800">
                      🎯 "Adicione saia jeans, tamanho 36 ao 44, R$ 79,90"
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-gray-800">Saia jeans</span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">adicionada!</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">👖 Tamanhos: 36-44</p>
                    <p className="text-lg font-bold text-zents-purple-600">💰 R$ 79,90</p>
                  </div>
                  
                  <div className="bg-zents-orange-100 rounded-xl p-3 ml-8">
                    <p className="text-sm text-zents-orange-800">
                      🎤 "Blusa branca manga curta, P M G"
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-2 bg-gray-700 rounded-full p-2">
                  <MessageCircle className="w-5 h-5 text-gray-400 ml-2" />
                  <span className="text-gray-400 text-sm flex-1">Digite sua mensagem...</span>
                  <div className="w-8 h-8 bg-zents-orange-500 rounded-full flex items-center justify-center">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Floating indicator */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full p-3 animate-pulse-scale">
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

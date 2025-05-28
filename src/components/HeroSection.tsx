
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white via-zents-purple-50 to-zents-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-zents-purple-100 text-zents-purple-700 px-4 py-2 rounded-full mb-6 animate-pulse-scale">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Startup 100% Cearense</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            A ZENTS é sua{" "}
            <span className="bg-gradient-to-r from-zents-purple-600 to-zents-orange-500 bg-clip-text text-transparent">
              secretária digital
            </span>{" "}
            da moda.{" "}
            <span className="text-zents-purple-600">Você fala, ela faz.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Catálogo atualizado por voz e imagem. No WhatsApp. 
            <br className="hidden md:block" />
            Simples, rápido e do seu jeito. 🗣️✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-zents-orange-500 hover:bg-zents-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Quero minha vitrine digital
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button variant="outline" className="border-zents-purple-300 text-zents-purple-600 hover:bg-zents-purple-50 px-8 py-4 rounded-full text-lg font-semibold">
              Ver como funciona
            </Button>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 animate-float">
              <div className="bg-gradient-to-r from-zents-purple-500 to-zents-orange-500 rounded-xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-2">💬 Vitrine Digital ZENTS</h3>
                <p className="text-sm opacity-90">Seu catálogo sempre atualizado, organizado e bonito!</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                  <span>🎤 Voz</span>
                  <span>📸 Foto</span>
                  <span>🛍️ Produto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

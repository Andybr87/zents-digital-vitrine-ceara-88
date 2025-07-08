
import { Mic, Camera, Clock, Share2, CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Atualização na voz",
      description: "Fala que ela faz.",
      color: "zents-purple"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Foto + voz = produto",
      description: "Produto no catálogo automaticamente.",
      color: "zents-orange"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Vitrine digital 24h",
      description: "Sempre pronta para seus clientes.",
      color: "zents-purple"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Compartilha fácil",
      description: "Link nos grupos de WhatsApp, Feiras, Instagram, Facebook e TikTok.",
      color: "zents-orange"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Sem mais bagunça",
      description: "Sem foto perdida e sem preço errado.",
      color: "zents-purple"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Como Facilitamos{" "}
              <span className="bg-gradient-to-r from-zents-purple-600 to-zents-orange-500 bg-clip-text text-transparent">
                Suas Vendas
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia simples que resolve os problemas do dia a dia do seu negócio 🚀
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-4 text-${feature.color}-600`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  ✔️ {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-zents-purple-500 to-zents-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🎯 Resultado:</h3>
              <p className="text-lg">
                Mais tempo para vender, menos tempo perdido com organização. 
                Seus clientes têm acesso a tudo que precisam, quando precisam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

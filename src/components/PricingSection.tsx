
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Essencial",
      features: [
        "Vitrine Digital",
        "Atualização por voz",
        "Suporte WhatsApp"
      ],
      popular: false
    },
    {
      name: "Profissional",
      features: [
        "Tudo do Essencial +",
        "Mockup automático",
        "2 usuários simultâneos"
      ],
      popular: true
    },
    {
      name: "Premium",
      features: [
        "Tudo do Profissional +",
        "Suporte Prioritário",
        "Personalização Avançada"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Escolha o plano ideal{" "}
              <span className="bg-gradient-to-r from-zents-purple-600 to-zents-orange-500 bg-clip-text text-transparent">
                pra sua loja
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologia acessível para todos os tamanhos de negócio 💼
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular 
                    ? 'border-zents-orange-500 scale-105' 
                    : 'border-gray-100 hover:border-zents-purple-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-zents-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-zents-purple-600 mb-2">
                    R$ --,00
                  </div>
                  <p className="text-gray-500 text-sm">Em breve</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-zents-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-zents-orange-500 hover:bg-zents-orange-600 text-white'
                      : 'bg-zents-purple-100 hover:bg-zents-purple-200 text-zents-purple-600'
                  }`}
                >
                  Me avisa quando lançar
                </Button>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-zents-purple-50 to-zents-orange-50 rounded-2xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-zents-purple-600" />
                <h3 className="text-2xl font-bold text-gray-800">Estamos quase prontos!</h3>
                <Sparkles className="w-6 h-6 text-zents-orange-600" />
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Estamos em fase final de desenvolvimento e nossos valores serão divulgados em breve. 
                Mas queremos ouvir você:
              </p>
              
              <p className="text-xl font-semibold text-zents-purple-600 mb-8">
                💭 Quanto você acha justo investir em uma ferramenta que resolve sua vida?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-zents-orange-500 hover:bg-zents-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Quero ser o primeiro a testar
                </Button>
                
                <Button variant="outline" className="border-zents-purple-300 text-zents-purple-600 hover:bg-zents-purple-50 px-8 py-4 rounded-full text-lg font-semibold">
                  Me avisa quando lançar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

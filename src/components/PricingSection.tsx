
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles, Gift, AlertCircle } from "lucide-react";

const PricingSection = () => {
  const plans = [{
    name: "Básico",
    price: "199,90",
    features: [
      "Catálogo Digital com 20 imagens",
      "Atualização por voz (via WhatsApp)",
      "Suporte via WhatsApp",
      "Acesso a vídeos e tutoriais"
    ],
    popular: false,
    hasOffer: true,
    offerPrice: "99,90",
    offerText: "Os 100 primeiros clientes pagam R$ 99,90 (50% de desconto)"
  }, {
    name: "Plus",
    price: "349,90",
    features: [
      "Catálogo Digital com 35 imagens",
      "2 modelos virtuais com escolha de biotipo",
      "Atualização por voz (via WhatsApp)",
      "Suporte via WhatsApp",
      "Acesso a vídeos e tutoriais"
    ],
    popular: true,
    hasOffer: true,
    offerPrice: "174,90",
    offerText: "Os 100 primeiros clientes pagam R$ 174,90 nos 3 primeiros meses (50% de desconto)"
  }, {
    name: "Premium",
    price: "499,90",
    features: [
      "Catálogo Digital com 50 imagens",
      "4 modelos virtuais personalizados (escolha de biotipo)",
      "Suporte personalizado (via WhatsApp)",
      "Atualização por voz (via WhatsApp)",
      "Acesso a vídeos e tutoriais"
    ],
    popular: false,
    hasOffer: true,
    offerPrice: "249,90",
    offerText: "Os 100 primeiros clientes pagam R$ 249,90 nos 3 primeiros meses (50% de desconto)"
  }];

  return <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
              <p className="text-red-700 font-semibold text-lg">
                🔥 Oferta de Lançamento: 50% de desconto nos 3 primeiros meses para os primeiros 100 clientes!
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${plan.popular ? 'border-zents-orange-500 scale-105' : 'border-gray-100 hover:border-zents-purple-200'}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-zents-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Mais Popular
                    </div>
                  </div>}

                {plan.hasOffer && <div className="absolute -top-4 right-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Gift className="w-3 h-3" />
                      50% OFF
                    </div>
                  </div>}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                  
                  {plan.hasOffer ? (
                    <div>
                      <div className="text-3xl font-bold text-red-500 mb-1">
                        R$ {plan.offerPrice}
                      </div>
                      <div className="text-lg text-gray-400 line-through mb-2">
                        R$ {plan.price}
                      </div>
                      <p className="text-red-600 text-xs font-semibold mb-2">
                        Oferta de Lançamento - 50% OFF
                      </p>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-zents-purple-600 mb-2">
                      R$ {plan.price}
                    </div>
                  )}
                  
                  <p className="text-gray-500 text-sm">/mês</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-zents-orange-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>)}
                </ul>

                {plan.hasOffer && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
                    <p className="text-red-700 text-sm font-medium text-center">
                      {plan.offerText}
                    </p>
                  </div>
                )}
                
                <Button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${plan.popular ? 'bg-zents-orange-500 hover:bg-zents-orange-600 text-white' : 'bg-zents-purple-100 hover:bg-zents-purple-200 text-zents-purple-600'}`}>
                  Começar agora
                </Button>
              </div>)}
          </div>

          {/* Rules Section */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <h3 className="text-lg font-semibold text-yellow-800">Regras Importantes</h3>
            </div>
            <div className="text-center text-yellow-700">
              <p className="mb-2">📅 <strong>7 dias de carência</strong> após a assinatura do plano</p>
              <p>🔒 Bloqueio e desbloqueio mediante regularização do pagamento</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-zents-purple-50 to-zents-orange-50 rounded-2xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-zents-purple-600" />
                <h3 className="text-2xl font-bold text-gray-800">Pronto para começar?</h3>
                <Sparkles className="w-6 h-6 text-zents-orange-600" />
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Escolha o plano ideal para o seu negócio e comece a revolucionar sua gestão de catálogo ainda hoje!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-zents-orange-500 hover:bg-zents-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
                  Começar teste grátis
                </Button>
                
                <Button variant="outline" className="border-zents-purple-300 text-zents-purple-600 hover:bg-zents-purple-50 px-8 py-4 rounded-full text-lg font-semibold">
                  Falar com consultor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default PricingSection;


import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      business: "Boutique da Maria",
      text: "Em breve, depoimento real de quem está testando a ZENTS!",
      rating: 5,
      preview: true
    },
    {
      name: "João Santos",
      business: "Moda Masculina JS",
      text: "Aguardando feedback dos nossos beta testers...",
      rating: 5,
      preview: true
    },
    {
      name: "Ana Costa",
      business: "Fashion Ana",
      text: "Depoimento em construção - estamos ouvindo nossos usuários!",
      rating: 5,
      preview: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que dizem sobre a{" "}
              <span className="bg-gradient-to-r from-zents-purple-600 to-zents-orange-500 bg-clip-text text-transparent">
                ZENTS
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Em breve, depoimentos reais de fabricantes que estão testando 🗣️
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 relative"
              >
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-zents-purple-200" />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-zents-orange-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-zents-purple-600">{testimonial.business}</p>
                </div>
                
                {testimonial.preview && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-zents-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Star className="w-6 h-6 text-zents-orange-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-600">
                        Em breve<br />depoimento real
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-zents-purple-100 to-zents-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                🚀 Quer ser um dos primeiros a testar?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Entre na nossa lista VIP e ajude a construir a ferramenta perfeita para seu negócio!
              </p>
              <button className="bg-zents-orange-500 hover:bg-zents-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                Quero ser beta tester
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

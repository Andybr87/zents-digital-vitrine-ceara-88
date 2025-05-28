
import { Heart, Target, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre a{" "}
              <span className="bg-gradient-to-r from-zents-purple-600 to-zents-orange-500 bg-clip-text text-transparent">
                ZENTS
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-zents-purple-500 to-zents-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zents-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-zents-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-zents-purple-600 mb-2">Nossa Origem</h3>
              <p className="text-gray-600">Nasceu no coração do Ceará</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zents-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-zents-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-zents-orange-600 mb-2">Nossa Missão</h3>
              <p className="text-gray-600">Simplificar a vida de quem vive da moda</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zents-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zents-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-zents-purple-600 mb-2">Nosso Foco</h3>
              <p className="text-gray-600">Microempreendedores da moda</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-zents-purple-50 to-zents-orange-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              A ZENTS nasceu no coração do Ceará, observando a luta diária dos microempreendedores da moda. 
              Nossa missão é <span className="font-semibold text-zents-purple-600">simplificar a vida de quem vive da moda</span>, 
              trazendo inclusão digital e automação de processos, sem complicação. 
              <br /><br />
              Somos tecnologia acessível, no seu WhatsApp, falando sua língua, no seu tempo. 
              Nosso objetivo é devolver o que há de mais precioso: 
              <span className="font-semibold text-zents-orange-600"> seu tempo, sua organização e sua paz</span>. 💜
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

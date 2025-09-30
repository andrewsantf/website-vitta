import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-micro-market.jpg';

const HeroSection = () => {
  const benefits = [
    "Sem custo de instalação",
    "Rapidez e praticidade",
    "Funcionamento 24/7",
    "Tecnologia de ponta"
  ];

  return (
    <section className="bg-gradient-hero min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-vitta-brown leading-tight">
                Leve a conveniência e o <span className="text-vitta-green">bem-estar</span> da Vitta
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Micro markets autônomos, sem custo de instalação e com praticidade 
                total para seu condomínio ou empresa. Rápido, fácil e disponível 24h.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-vitta-green flex-shrink-0" size={20} />
                  <span className="text-vitta-brown font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/para-empresas#proposta">
                <Button className="btn-wellness group">
                  Proposta para sua Empresa
                </Button>
              </Link>
              <Link to="/para-condominios#proposta">
                <Button className="btn-wellness group">
                  Proposta para seu Condomínio
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={heroImage} 
                alt="Micro market moderno da Vitta em ambiente corporativo"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-vitta-green/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-wellness">
              <div className="text-center">
                <div className="text-3xl font-bold text-vitta-green">24/7</div>
                <div className="text-sm text-vitta-brown">Funcionamento</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-6 shadow-wellness">
              <div className="text-center">
                <div className="text-3xl font-bold text-vitta-green">100%</div>
                <div className="text-sm text-vitta-brown">Autônomo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
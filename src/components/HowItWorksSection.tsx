import { ShoppingCart, Scan, CreditCard } from 'lucide-react';
import selfCheckoutImage from '@/assets/self-checkout-demo.jpg';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "1. Escolha seus produtos",
      description: "Navegue pela seleção curada de produtos práticos e de conveniência disponíveis 24 horas."
    },
    {
      icon: Scan,
      title: "2. Escaneie os códigos",
      description: "Use o scanner integrado para ler os códigos de barras dos produtos escolhidos."
    },
    {
      icon: CreditCard,
      title: "3. Pague no totem",
      description: "Finalize sua compra diretamente no totem de pagamento com cartão - sem necessidade de aplicativo."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-vitta-brown mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e moderno que torna a experiência de compra prática e segura
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-vitta-green/10 rounded-2xl flex items-center justify-center">
                      <IconComponent className="text-vitta-green" size={28} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-vitta-brown mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Demo Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card-wellness">
              <img 
                src={selfCheckoutImage} 
                alt="Demonstração de uso do sistema de self-checkout"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vitta-brown/10 to-transparent"></div>
            </div>
            
            {/* Highlight badge */}
            <div className="absolute top-6 left-6 bg-vitta-green text-white px-4 py-2 rounded-full text-sm font-semibold">
              Sem aplicativo necessário
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
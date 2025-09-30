import { Zap, DollarSign, Clock, Headphones } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Zap,
      title: "Rapidez e Praticidade",
      description: "Compre o que precisa em segundos. Sistema de autoatendimento rápido e intuitivo, sem filas ou esperas."
    },
    {
      icon: DollarSign,
      title: "Instalação sem Custo",
      description: "Não cobramos pela instalação nem pela manutenção. Você só paga pelos produtos consumidos."
    },
    {
      icon: Clock,
      title: "Disponível 24/7",
      description: "Acesso total aos produtos a qualquer hora do dia ou da noite. Máxima comodidade para sua rotina."
    },
    {
      icon: Headphones,
      title: "Suporte e Reposição Constante",
      description: "Nossa equipe garante reposição regular dos produtos e suporte técnico sempre que necessário."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-vitta-brown mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O que torna a Vitta única no mercado de micro markets
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => {
            const IconComponent = differential.icon;
            return (
              <div key={index} className="card-wellness text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-vitta-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-vitta-green/20 transition-colors">
                  <IconComponent className="text-vitta-green" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-vitta-brown mb-4">
                  {differential.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {differential.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
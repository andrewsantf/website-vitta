import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      position: "Síndica do Residencial Garden",
      text: "A Vitta trouxe muito mais comodidade para nossos moradores. A variedade de produtos é incrível e o melhor de tudo é que não tivemos nenhum custo!",
      rating: 5
    },
    {
      name: "Carlos Roberto",
      position: "Gerente de RH - TechCorp",
      text: "Nossos colaboradores adoraram ter acesso rápido e prático a lanches 24 horas. A produtividade aumentou e todos estão mais satisfeitos no trabalho.",
      rating: 5
    },
    {
      name: "Ana Costa",
      position: "Administradora Predial",
      text: "O sistema é muito prático e seguro. A reposição é feita regularmente e o suporte da Vitta é excelente. Recomendo para todos os condomínios!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-vitta-green/5 to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-vitta-brown mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de síndicos e gestores que já têm a Vitta
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-wellness relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-vitta-green/20">
                <Quote size={32} />
              </div>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-vitta-brown">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      position: "Síndica",
      text: "A Vitta trouxe muito mais comodidade para nossos moradores. A variedade de produtos é incrível e o melhor de tudo é que não tivemos nenhum custo!",
      rating: 5,
      date: "há uma semana",
      initials: "MS",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=60"
    },
    {
      name: "Carlos Roberto",
      position: "Gerente de RH",
      text: "Nossos colaboradores adoraram ter acesso rápido e prático a lanches 24 horas. A produtividade aumentou e todos estão mais satisfeitos no trabalho.",
      rating: 5,
      date: "há 2 semanas",
      initials: "CR",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop&q=60"
    },
    {
      name: "Ana Costa",
      position: "Administradora",
      text: "O sistema é muito prático e seguro. A reposição é feita regularmente e o suporte da Vitta é excelente. Recomendo para todos os condomínios!",
      rating: 5,
      date: "há um mês",
      initials: "AC",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=100&h=100&fit=crop&q=60"
    },
    {
      name: "João Pereira",
      position: "Morador",
      text: "Muito bom ter um mercado dentro do condomínio. Salva muito nos momentos de aperto.",
      rating: 5,
      date: "há 3 dias",
      initials: "JP",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&q=60"
    },
    {
      name: "Fernanda Lima",
      position: "Síndica Profissional",
      text: "Instalação rápida e sem burocracia. O mix de produtos é excelente.",
      rating: 5,
      date: "há 5 dias",
      initials: "FL",
      image: "https://images.unsplash.com/photo-1542596594-649edbc13630?w=100&h=100&fit=crop&q=60"
    }

  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading text-vitta-brown mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xl text-muted-foreground">Avaliações no</span>
            <GoogleLogo />
          </div>
        </div>

        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-6xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1 h-full">
                    <Card className="border-none shadow-sm h-full rounded-xl flex flex-col">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={testimonial.image} className="object-cover" />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-xs text-gray-500">{testimonial.position}</p>
                        </div>
                        <div className="ml-auto">
                          <GoogleLogo />
                        </div>
                      </CardHeader>
                      <CardContent className="grid gap-2 flex-1">
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="text-[#FBBC05] fill-[#FBBC05] h-4 w-4" />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">{testimonial.date}</span>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {testimonial.text}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Home, Clock, ShieldCheck, TrendingUp, Send } from 'lucide-react';
import residentialImage from '@/assets/residential-market.jpg';
import { SEO } from '@/components/SEO';

const ParaCondominios = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    condominium: '',
    units: '',
    message: ''
  });

  useEffect(() => {
    if (window.location.hash === '#proposta') {
      setTimeout(() => {
        const element = document.getElementById('proposta');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const benefits = [
    {
      icon: Home,
      title: "Comodidade 24 Horas",
      description: "Moradores têm acesso a produtos essenciais a qualquer hora do dia ou da noite."
    },
    {
      icon: ShieldCheck,
      title: "Segurança Total",
      description: "Sistema seguro sem necessidade de sair do condomínio para compras básicas."
    },
    {
      icon: TrendingUp,
      title: "Valorização do Imóvel",
      description: "Um diferencial que agrega valor ao empreendimento e atrai novos moradores."
    },
    {
      icon: Clock,
      title: "Sem Preocupações",
      description: "Toda gestão, reposição e manutenção são de nossa responsabilidade."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Proposta solicitada com sucesso!",
        description: "Nossa equipe entrará em contato em breve para agendar uma visita técnica.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        condominium: '',
        units: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <SEO
        title="Para Condomínios"
        description="Leve conveniência e segurança para seu condomínio com um micro market autônomo. Valorização do imóvel e conforto para os moradores."
        keywords="micro market condomínio, mercado autônomo residencial, conveniência condomínio, valorização imóvel"
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-vitta-brown leading-tight">
                  Micro Markets para <span className="text-vitta-green">Condomínios</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ofereça mais comodidade e praticidade aos moradores com
                  nossos micro markets residenciais personalizados.
                </p>
              </div>
              <Button
                className="btn-wellness"
                onClick={() => {
                  const element = document.getElementById('proposta');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Solicitar Proposta Residencial
              </Button>
            </div>

            <div className="relative">
              <img
                src={residentialImage}
                alt="Micro market instalado em área comum de condomínio"
                className="w-full h-auto object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-vitta-brown mb-4">
              Benefícios para seu Condomínio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra como um micro market pode valorizar seu empreendimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="card-wellness text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-vitta-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-vitta-green/20 transition-colors">
                    <IconComponent className="text-vitta-green" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-vitta-brown mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="proposta" className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading text-vitta-brown mb-4">
              Solicite uma Proposta Residencial
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preencha os dados do seu condomínio e receba uma proposta personalizada
            </p>
          </div>

          <div className="card-wellness max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do síndico/responsável *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    placeholder="Seu nome completo"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    placeholder="seu@email.com"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    placeholder="(61) 98427-5639"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="condominium">Nome do condomínio *</Label>
                  <Input
                    id="condominium"
                    type="text"
                    value={formData.condominium}
                    onChange={(e) => handleChange('condominium', e.target.value)}
                    required
                    placeholder="Nome do condomínio"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="units">Número de unidades/casas *</Label>
                <Input
                  id="units"
                  type="text"
                  value={formData.units}
                  onChange={(e) => handleChange('units', e.target.value)}
                  required
                  placeholder="Ex: 120 apartamentos"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Informações adicionais</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Localização desejada, horários de maior movimento, preferências específicas..."
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-wellness w-full group"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Solicitar Proposta Residencial
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParaCondominios;
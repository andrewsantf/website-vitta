import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Users, TrendingUp, Clock, Heart, Send } from 'lucide-react';
import corporateImage from '@/assets/corporate-market.jpg';

const ParaEmpresas = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
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
      icon: TrendingUp,
      title: "Aumento da Produtividade",
      description: "Colaboradores gastam menos tempo saindo para comprar lanches, mantendo o foco no trabalho."
    },
    {
      icon: Heart,
      title: "Bem-estar dos Funcionários",
      description: "Acesso rápido e prático promove uma cultura de eficiência na empresa."
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Perfeito para empresas com turnos variados ou trabalho noturno."
    },
    {
      icon: Users,
      title: "Melhoria do Ambiente de Trabalho",
      description: "Um benefício valorizado que aumenta a satisfação da equipe."
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
        company: '',
        employees: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-vitta-brown leading-tight">
                  Micro Markets para <span className="text-vitta-green">Empresas</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ofereça mais comodidade e bem-estar aos seus colaboradores com 
                  nossos micro markets corporativos personalizados.
                </p>
              </div>
              <Button 
                className="btn-wellness"
                onClick={() => {
                  const element = document.getElementById('proposta');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Solicitar Proposta Corporativa
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={corporateImage} 
                alt="Micro market instalado em ambiente corporativo"
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
              Benefícios para sua Empresa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra como um micro market pode transformar o ambiente de trabalho
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
              Solicite uma Proposta Corporativa
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preencha os dados da sua empresa e receba uma proposta personalizada
            </p>
          </div>

          <div className="card-wellness max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do responsável *</Label>
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
                  <Label htmlFor="email">E-mail corporativo *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    placeholder="seu@empresa.com"
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
                    placeholder="(61) 99999-9999"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Nome da empresa *</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    required
                    placeholder="Nome da empresa"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="employees">Número de colaboradores *</Label>
                <Input
                  id="employees"
                  type="text"
                  value={formData.employees}
                  onChange={(e) => handleChange('employees', e.target.value)}
                  required
                  placeholder="Ex: 50-100 colaboradores"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Informações adicionais</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Horário de funcionamento, localização desejada, preferências específicas..."
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
                    Solicitar Proposta Corporativa
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

export default ParaEmpresas;
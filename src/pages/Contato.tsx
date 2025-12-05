import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@vittamicromarket.com.br",
      description: "Envie sua mensagem e responderemos em até 24 horas"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(61) 98427-5639",
      description: "De segunda a sexta, das 8h às 18h"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Brasília, DF",
      description: "Atendemos todo o Distrito Federal"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Seg - Sex: 8h às 18h",
      description: "Sábados: 8h às 12h"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Recebemos sua mensagem e entraremos em contato em breve.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = "5561984275639";
    const message = "Olá! Gostaria de saber mais sobre a Vitta Micro Market.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Layout>
      <SEO
        title="Contato"
        description="Entre em contato com a Vitta Micro Market. Estamos prontos para atender seu condomínio ou empresa em Brasília e região."
        keywords="contato vitta, telefone vitta micro market, email vitta, atendimento micro market"
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-vitta-brown leading-tight">
                Entre em <span className="text-vitta-green">Contato</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Estamos prontos para esclarecer suas dúvidas e apresentar a melhor
                solução de micro market para seu espaço
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="card-wellness text-center">
                  <div className="w-16 h-16 bg-vitta-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-vitta-green" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-vitta-brown mb-2">
                    {info.title}
                  </h3>
                  <p className="text-vitta-green font-medium mb-2 break-words text-sm lg:text-base">
                    {info.info}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card-wellness">
              <div className="mb-8">
                <h2 className="text-3xl font-bold font-heading text-vitta-brown mb-4">
                  Envie uma Mensagem
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário e entraremos em contato em breve
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
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
                      placeholder="(61) 99999-9999"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Assunto da mensagem"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                    placeholder="Descreva sua necessidade ou dúvida..."
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
                      Enviar Mensagem
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Quick Contact */}
            <div className="space-y-8">
              <div className="card-wellness">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-vitta-green/10 rounded-2xl flex items-center justify-center mx-auto">
                    <MessageCircle className="text-vitta-green" size={32} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-heading text-vitta-brown">
                      Prefere WhatsApp?
                    </h3>
                    <p className="text-muted-foreground">
                      Converse conosco diretamente pelo WhatsApp para um atendimento
                      mais rápido e personalizado
                    </p>
                  </div>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="btn-wellness w-full"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>

              <div className="card-wellness">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-vitta-brown">
                    Próximos Passos
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-vitta-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Recebemos sua mensagem e analisamos sua necessidade
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-vitta-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Entramos em contato em até 24 horas
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-vitta-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Agendamos uma visita técnica gratuita
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
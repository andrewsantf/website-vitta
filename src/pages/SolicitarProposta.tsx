import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';

const SolicitarProposta = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: ''
  });

  const benefits = [
    "Sem custo de instalação",
    "Rapidez e praticidade",
    "Funcionamento 24/7",
    "Gestão completa pela Vitta"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Proposta solicitada com sucesso!",
        description: "Nossa equipe entrará em contato em breve para apresentar a melhor solução.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: '',
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
        title="Solicitar Proposta"
        description="Solicite uma proposta personalizada para ter um micro market Vitta em seu condomínio ou empresa. Sem custo de instalação."
        keywords="solicitar proposta micro market, orçamento mercado autônomo, vitta proposta"
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-vitta-brown leading-tight">
                Solicite sua <span className="text-vitta-green">Proposta</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Preencha o formulário e nossa equipe entrará em contato para apresentar
                a melhor solução de micro market para seu condomínio ou empresa
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-vitta-brown">
                  <CheckCircle className="text-vitta-green flex-shrink-0" size={20} />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-wellness max-w-2xl mx-auto">
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
                  <Label htmlFor="type">Tipo de cliente *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleChange('type', value)} required>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="condominio">Condomínio Residencial</SelectItem>
                      <SelectItem value="empresa">Empresa</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Conte-nos mais sobre seu interesse em ter um micro market da Vitta..."
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
                    Enviar Solicitação
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="card-wellness max-w-2xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-vitta-brown">
                  Próximos Passos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-10 h-10 bg-vitta-green text-white rounded-full flex items-center justify-center text-lg font-bold">
                      1
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Análise da sua solicitação
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-10 h-10 bg-vitta-green text-white rounded-full flex items-center justify-center text-lg font-bold">
                      2
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Contato em até 24 horas
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-10 h-10 bg-vitta-green text-white rounded-full flex items-center justify-center text-lg font-bold">
                      3
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Visita técnica gratuita
                    </p>
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

export default SolicitarProposta;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const ContactFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { submitToFormspree } = await import('@/lib/api');
      const result = await submitToFormspree(formData);

      if (result.success) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve para apresentar nossa proposta.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          type: '',
          message: ''
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: result.message || "Ocorreu um erro. Tente novamente ou nos chame no WhatsApp.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro inesperado.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading text-vitta-brown mb-4">
            Solicite uma Proposta
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato para apresentar
            a melhor solução para seu condomínio ou empresa
          </p>
        </div>

        {/* Form */}
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
                <Select value={formData.type} onValueChange={(value) => handleChange('type', value)}>
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
      </div>
    </section>
  );
};

export default ContactFormSection;
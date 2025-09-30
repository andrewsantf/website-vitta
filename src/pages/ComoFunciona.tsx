import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Settings, 
  Truck, 
  PlayCircle, 
  ShoppingCart, 
  Scan, 
  CreditCard,
  CheckCircle 
} from 'lucide-react';
import selfCheckoutImage from '@/assets/self-checkout-demo.jpg';
import heroImage from '@/assets/hero-micro-market.jpg';

const ComoFunciona = () => {
  const processSteps = [
    {
      icon: Calendar,
      title: "1. Visita Técnica",
      description: "Nossa equipe agenda uma visita para avaliar o local ideal e entender suas necessidades específicas."
    },
    {
      icon: Settings,
      title: "2. Personalização",
      description: "Criamos um mix de produtos personalizado baseado no perfil dos usuários e preferências locais."
    },
    {
      icon: Truck,
      title: "3. Instalação Gratuita",
      description: "Instalamos todo o equipamento sem nenhum custo, incluindo prateleiras, sistema de pagamento e câmeras."
    },
    {
      icon: PlayCircle,
      title: "4. Operação 24/7",
      description: "O micro market entra em funcionamento imediatamente, disponível 24 horas por dia, 7 dias por semana."
    }
  ];

  const usageSteps = [
    {
      icon: ShoppingCart,
      title: "Escolha seus produtos",
      description: "Navegue pelas prateleiras e escolha entre nossa seleção curada de produtos práticos e de conveniência.",
      details: "Produtos frescos, lanches rápidos, bebidas, itens de higiene e muito mais."
    },
    {
      icon: Scan,
      title: "Escaneie os códigos",
      description: "Use o scanner integrado no totem para ler os códigos de barras de cada produto escolhido.",
      details: "Sistema de leitura rápida e precisa, com interface intuitiva e fácil de usar."
    },
    {
      icon: CreditCard,
      title: "Pague no totem",
      description: "Finalize sua compra diretamente no totem de pagamento com PIX, cartão de débito ou crédito.",
      details: "Sem necessidade de aplicativo, dinheiro ou cadastros complicados."
    }
  ];

  const features = [
    "Sistema totalmente autônomo",
    "Sem necessidade de aplicativo",
    "Pagamento 100% seguro",
    "Reposição automática",
    "Suporte técnico especializado",
    "Produtos sempre frescos"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-vitta-brown leading-tight">
                Como Funciona a <span className="text-vitta-green">Vitta</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Um processo simples e transparente, desde a instalação até o uso diário. 
                Conheça cada etapa para ter um micro market em seu espaço.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-vitta-brown mb-4">
              Processo de Implementação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Do primeiro contato até a operação completa, um processo descomplicado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="card-wellness text-center relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-vitta-green/30"></div>
                  )}
                  
                  <div className="w-20 h-20 bg-vitta-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-vitta-green" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-vitta-brown mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-vitta-brown mb-4">
              Como Usar o Micro Market
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo simples e intuitivo para todos os usuários
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {usageSteps.map((step, index) => {
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
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        {step.description}
                      </p>
                      <p className="text-sm text-vitta-green font-medium">
                        {step.details}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative">
              <img 
                src={selfCheckoutImage} 
                alt="Demonstração de uso do sistema de self-checkout"
                className="w-full h-auto object-cover rounded-2xl shadow-card-wellness"
              />
              <div className="absolute top-6 left-6 bg-vitta-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                Sem aplicativo necessário
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Micro market da Vitta em funcionamento"
                className="w-full h-auto object-cover rounded-2xl shadow-elegant"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold font-heading text-vitta-brown">
                  Características do Sistema
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Tecnologia avançada que garante praticidade e segurança para todos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-vitta-green flex-shrink-0" size={20} />
                    <span className="text-vitta-brown font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/para-empresas">
                  <Button className="btn-wellness">
                    Para Empresas
                  </Button>
                </Link>
                <Link to="/para-condominios">
                  <Button className="btn-wellness">
                    Para Condomínios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComoFunciona;
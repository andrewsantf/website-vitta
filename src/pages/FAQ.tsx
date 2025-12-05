import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';

const FAQ = () => {
  const faqs = [
    {
      question: "Há algum custo para instalação ou manutenção?",
      answer: "Não! A instalação, manutenção e operação do micro market são completamente gratuitas. Você não paga nada para ter o serviço em seu condomínio ou empresa. A Vitta obtém receita apenas através da venda dos produtos."
    },
    {
      question: "E se um produto for roubado ou danificado?",
      answer: "Nosso sistema possui câmeras de segurança e monitoramento remoto. Casos de perdas são raros e fazem parte da nossa operação normal. Não há nenhum ônus para o condomínio ou empresa em caso de produtos danificados ou furtados."
    },
    {
      question: "Como é feita a reposição dos produtos?",
      answer: "Nossa equipe monitora remotamente os níveis de estoque e faz a reposição automaticamente. Visitamos o local regularmente (geralmente 2-3 vezes por semana) para reabastecer os produtos e fazer a manutenção preventiva."
    },
    {
      question: "Posso sugerir produtos específicos?",
      answer: "Sim! Valorizamos muito o feedback dos usuários. Você pode sugerir produtos através do nosso WhatsApp ou durante as visitas da equipe. Analisamos todas as sugestões e, quando possível, incluímos novos produtos no mix."
    },
    {
      question: "O sistema funciona sem internet?",
      answer: "O sistema possui conectividade própria e funciona independentemente da internet local. Temos backup de dados e sistemas de contingência para garantir operação contínua mesmo em caso de problemas técnicos."
    },
    {
      question: "Que tipos de pagamento são aceitos?",
      answer: "Aceitamos cartões de débito e crédito (Visa, Mastercard, Elo). O pagamento é processado diretamente no totem, com total segurança. Não aceitamos dinheiro para manter a praticidade e segurança do sistema."
    },
    {
      question: "Qual o espaço mínimo necessário?",
      answer: "O micro market ocupa aproximadamente 2m² e precisa de uma tomada elétrica próxima. Durante a visita técnica, nossa equipe avalia o melhor local para instalação, considerando fluxo de pessoas e praticidade de acesso."
    },
    {
      question: "Como funciona em condomínios com muitos moradores?",
      answer: "Nossos micro markets são dimensionados conforme o tamanho do condomínio. Para locais com maior demanda, podemos instalar unidades maiores ou múltiplas estações. Tudo é personalizado durante o projeto."
    },
    {
      question: "Há contrato de permanência?",
      answer: "Trabalhamos com contratos flexíveis que garantem segurança jurídica para ambas as partes. Os termos são sempre transparentes e discutidos durante a proposta comercial."
    },
    {
      question: "O que acontece se quisermos cancelar o serviço?",
      answer: "O cancelamento pode ser feito conforme os termos contratuais estabelecidos. Nossa equipe remove todo o equipamento sem nenhum custo adicional e deixa o local nas condições originais."
    }
  ];

  return (
    <Layout>
      <SEO
        title="Perguntas Frequentes"
        description="Tire suas dúvidas sobre os micro markets da Vitta. Instalação, custos, reposição, segurança e muito mais."
        keywords="faq micro market, dúvidas mercado autônomo, perguntas frequentes vitta"
      />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <HelpCircle className="mx-auto text-vitta-green" size={64} />
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-vitta-brown leading-tight">
                Perguntas Frequentes
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tire suas dúvidas sobre os micro markets da Vitta e nosso processo de instalação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-wellness border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-vitta-brown hover:text-vitta-green transition-colors px-0">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4 px-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-wellness space-y-6">
            <div className="space-y-4">
              <MessageCircle className="mx-auto text-vitta-green" size={48} />
              <h2 className="text-3xl font-bold font-heading text-vitta-brown">
                Não encontrou sua dúvida?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer qualquer questão sobre
                os micro markets da Vitta
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button className="btn-wellness">
                  Entre em Contato
                </Button>
              </Link>
              <Link to="/">
                <Button className="btn-wellness-outline">
                  Solicitar Proposta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
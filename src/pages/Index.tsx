import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactFormSection from '@/components/ContactFormSection';
import { SEO } from '@/components/SEO';

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Vitta Micro Market oferece micro markets 100% autônomos com foco em bem-estar e produtos saudáveis. Sem custo de instalação para condomínios e empresas."
        keywords="micro market, condomínio, empresa, produtos saudáveis, bem-estar, self-checkout, conveniência"
      />
      <HeroSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <ContactFormSection />
    </Layout>
  );
};

export default Index;

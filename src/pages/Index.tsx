import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactFormSection from '@/components/ContactFormSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <ContactFormSection />
    </Layout>
  );
};

export default Index;

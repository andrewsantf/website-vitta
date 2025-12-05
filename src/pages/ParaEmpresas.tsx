import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import corporateImage from '@/assets/corporate-market.jpg';
import { SEO } from '@/components/SEO';
import { CorporateForm } from '@/components/forms/CorporateForm';
import { BenefitsSection } from '@/components/sections/BenefitsSection';

const ParaEmpresas = () => {
  useEffect(() => {
    if (window.location.hash === '#proposta') {
      setTimeout(() => {
        const element = document.getElementById('proposta');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  return (
    <Layout>
      <SEO
        title="Para Empresas"
        description="Leve mais bem-estar e produtividade para sua empresa com um micro market Vitta. Sem custo para a empresa, instalação rápida e produtos frescos."
        keywords="micro market empresa, mercado corporativo, benefícios funcionários, vitta para empresas"
      />
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
                className="w-auto h-auto max-w-full max-h-[500px] mx-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />

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
            <CorporateForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParaEmpresas;
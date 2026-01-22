"use client";

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import corporateImage from '@/assets/corporate-market.jpg';
import { CorporateForm } from '@/components/forms/CorporateForm';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ParaEmpresasContent = () => {
    useEffect(() => {
        if (window.location.hash === '#proposta') {
            setTimeout(() => {
                const element = document.getElementById('proposta');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary/30 py-24 relative overflow-hidden min-h-[85vh] flex items-center">
                {/* Background Gradients - Optimized */}
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-vitta-green/10 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 will-change-transform" />
                <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-vitta-brown/5 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/4 will-change-transform" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-vitta-green/20 px-4 py-1.5 rounded-full">
                                    <span className="w-2 h-2 rounded-full bg-vitta-green animate-pulse" />
                                    <span className="text-sm font-medium text-vitta-green-dark">Produtividade & Bem-estar</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-vitta-green-dark leading-[1.1]">
                                    O futuro do break <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-wellness">corporativo</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                                    Ofereça mais que café. Leve comodidade, alimentação saudável e praticidade para
                                    seus colaboradores com zero custo para a empresa.
                                </p>
                            </div>
                            <Button
                                className="h-14 px-8 rounded-2xl bg-vitta-green hover:bg-vitta-green-dark text-white shadow-lg shadow-vitta-green/25 hover:shadow-vitta-green/40 transition-all duration-300 text-base font-semibold w-full sm:w-auto"
                                onClick={() => {
                                    const element = document.getElementById('proposta');
                                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                Solicitar Proposta Corporativa
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src={corporateImage.src || corporateImage}
                                    alt="Micro market instalado em ambiente corporativo"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-vitta-green/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-vitta-brown/10 rounded-full blur-2xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <BenefitsSection />

            {/* Form Section */}
            <section id="proposta" className="py-24 bg-gradient-to-b from-white to-secondary/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-heading text-vitta-green-dark mb-4">
                            Solicite uma Proposta Gratuita
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Preencha os dados abaixo e nossa equipe entrará em contato para agendar uma visita técnica sem compromisso.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 md:p-12 rounded-3xl"
                    >
                        <CorporateForm />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ParaEmpresasContent;

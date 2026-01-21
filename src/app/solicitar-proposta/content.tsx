"use client";

import { CorporateForm } from '@/components/forms/CorporateForm';

const SolicitarPropostaContent = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-secondary/30 to-white min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-vitta-green-dark mb-6">
                        Solicite uma Proposta
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Dê o primeiro passo para transformar seu ambiente com a Vitta.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                    <CorporateForm />
                </div>
            </div>
        </section>
    );
};

export default SolicitarPropostaContent;

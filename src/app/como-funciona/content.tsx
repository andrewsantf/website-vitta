"use client";

import { motion } from 'framer-motion';
import { ShoppingCart, Scan, CreditCard, Smile } from 'lucide-react';

const ComoFuncionaContent = () => {
    const steps = [
        {
            icon: ShoppingCart,
            title: "1. Escolha",
            description: "Navegue pelas prateleiras e geladeiras e pegue seus produtos favoritos."
        },
        {
            icon: Scan,
            title: "2. Escaneie",
            description: "Passe o código de barras dos produtos no leitor do totem."
        },
        {
            icon: CreditCard,
            title: "3. Pague",
            description: "Realize o pagamento no totem via cartão ou Pix de forma segura."
        },
        {
            icon: Smile,
            title: "4. Aproveite",
            description: "Pronto! Agora é só aproveitar. Simples, rápido e sem filas."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-vitta-green-dark mb-6">
                        Como Funciona
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Uma experiência de compra fluida e intuitiva, pensada para o seu dia a dia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-vitta-green transition-colors duration-300">
                                    <Icon size={32} className="text-vitta-green group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-center text-vitta-green-dark mb-3 font-heading">
                                    {step.title}
                                </h3>
                                <p className="text-center text-muted-foreground">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ComoFuncionaContent;

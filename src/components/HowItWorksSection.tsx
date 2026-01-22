"use client";

import { ShoppingCart, Scan, CreditCard, ArrowRight } from 'lucide-react';
import selfCheckoutImage from '@/assets/self-checkout-demo.jpg';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "1. Escolha",
      description: "Navegue pela nossa seleção premium e escolha seus produtos favoritos."
    },
    {
      icon: Scan,
      title: "2. Escaneie",
      description: "Use o leitor para identificar os produtos rapidamente."
    },
    {
      icon: CreditCard,
      title: "3. Pague",
      description: "Pagamento seguro e imediato no totem, sem filas."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-vitta-green font-semibold tracking-wider text-sm uppercase mb-4 block"
          >
            SIMPLICIDADE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-vitta-green-dark mb-6"
          >
            Como Funciona
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Tecnologia intuitiva que coloca você no controle. Sem filas, sem complicações.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Steps List */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group flex items-start gap-6 p-6 rounded-3xl bg-white border border-transparent hover:border-vitta-green/20 hover:shadow-glass transition-all duration-300 cursor-default"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-2xl bg-vitta-green/10 flex items-center justify-center group-hover:bg-vitta-green group-hover:text-white transition-colors duration-300">
                      <IconComponent size={28} />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gray-100 group-hover:bg-vitta-green/30 transition-colors duration-300 hidden lg:block" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-vitta-green-dark mb-2 group-hover:text-vitta-green transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={selfCheckoutImage.src || selfCheckoutImage}
                alt="Demonstração Self-checkout"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-2 md:p-6">
                <div className="glass-panel p-2 md:p-4 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <p className="font-semibold text-xs md:text-base mb-0.5 md:mb-1">Autoatendimento Prático</p>
                  <p className="text-[9px] md:text-xs text-white/80 leading-tight">
                    Experiência de compra ágil e intuitiva. A tecnologia cuida do resto para você aproveitar seu tempo.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-12 -right-12 w-32 h-32 pattern-dots opacity-20" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 pattern-dots opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
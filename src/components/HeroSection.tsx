"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, ShieldCheck, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '@/assets/hero-micro-market.jpg';
import { motion, Variants } from 'framer-motion';

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-secondary/30">
      {/* Background Elements - Optimized for Performance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vitta-green/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vitta-brown/5 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm border border-vitta-green/20 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-vitta-green animate-pulse" />
                <span className="text-sm font-medium text-vitta-green-dark">Revolução em Conveniência</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-vitta-green-dark leading-[1.05]">
                Seu mercado de conveniência <br />
                <span className="text-transparent bg-clip-text bg-gradient-wellness">inteligente</span> e completo
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Leve tecnologia e bem-estar para seu condomínio ou empresa.
                Sem custos de instalação, 100% autônomo e disponível 24h.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link href="/para-empresas#proposta">
                <Button className="h-14 px-8 rounded-2xl bg-vitta-green hover:bg-vitta-green-dark text-white shadow-lg shadow-vitta-green/25 hover:shadow-vitta-green/40 transition-all duration-300 text-base font-semibold w-full sm:w-64">
                  Para Empresas
                </Button>
              </Link>
              <Link href="/para-condominios#proposta">
                <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-vitta-green/20 text-vitta-green-dark hover:bg-vitta-green/5 hover:border-vitta-green transition-all duration-300 text-base font-semibold w-full sm:w-64 bg-transparent">
                  Para Condomínios
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`, backgroundSize: 'cover' }} />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-vitta-green-dark">Mais de 500+</p>
                <p className="text-muted-foreground">Clientes satisfeitos</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-vitta-green/10 border-8 border-white">
              <Image
                src={heroImage}
                alt="Vitta Micro Market Moderno"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 glass-panel p-2 md:p-4 rounded-2xl flex items-center gap-2 md:gap-3 max-w-[150px] md:max-w-none animate-float z-20">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-vitta-green/10 flex items-center justify-center text-vitta-green shrink-0">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">Funcionamento</p>
                <p className="text-xs md:text-base font-bold text-vitta-green-dark leading-tight">24h / Dia</p>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 glass-panel p-2 md:p-4 rounded-2xl flex items-center gap-2 md:gap-3 max-w-[160px] md:max-w-none animate-float z-20" style={{ animationDelay: '1.5s' }}>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-vitta-green/10 flex items-center justify-center text-vitta-green shrink-0">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">Segurança</p>
                <p className="text-xs md:text-base font-bold text-vitta-green-dark leading-tight">100% Autônomo</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
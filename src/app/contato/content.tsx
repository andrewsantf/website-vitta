"use client";

import ContactFormSection from '@/components/ContactFormSection';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContatoContent = () => {
    return (
        <>
            {/* Hero Section - Redesigned (Light Theme) */}
            <section className="pt-32 pb-10 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vitta-green/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-vitta-green-dark">
                            Fale <span className="text-vitta-green">Conosco</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Estamos aqui para transformar o seu ambiente com tecnologia e conveniência.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Info Cards Column */}
                        <div className="lg:col-span-4 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-vitta-green/10 rounded-xl flex items-center justify-center text-vitta-green shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-vitta-green-dark mb-1">Telefone / WhatsApp</h3>
                                            <p className="text-sm text-muted-foreground mb-2">Seg a Sex, 9h às 18h</p>
                                            <a href="tel:5561984275639" className="text-base font-semibold hover:text-vitta-green transition-colors block">
                                                (61) 98427-5639
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-vitta-green/10 rounded-xl flex items-center justify-center text-vitta-green shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-vitta-green-dark mb-1">E-mail</h3>
                                            <p className="text-sm text-muted-foreground mb-2">Comercial</p>
                                            <a href="mailto:contato@vittamarket.com.br" className="text-base font-semibold hover:text-vitta-green transition-colors block break-all">
                                                contato@vittamarket.com.br
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-vitta-green/10 rounded-xl flex items-center justify-center text-vitta-green shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-vitta-green-dark mb-1">Endereço</h3>
                                            <p className="text-muted-foreground text-sm">
                                                SMPW Quadra 4 Conjunto 4 Lote 8<br />
                                                Park Way, Brasília - DF
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-vitta-green-dark p-8 rounded-3xl text-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-vitta-green opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <MessageSquare size={20} className="text-vitta-green" />
                                        Atendimento 24h
                                    </h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        Nossos micro markets operam 24 horas por dia, 7 dias por semana.
                                        Suporte técnico disponível via WhatsApp.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-8">
                            {/* Applying a unique ID or styling wrapper to target this specific instance if needed */}
                            <div className="contact-page-form-wrapper">
                                <ContactFormSection className="py-0" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ContatoContent;

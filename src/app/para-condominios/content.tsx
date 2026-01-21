"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Home, Clock, ShieldCheck, TrendingUp, Send, ArrowRight } from 'lucide-react';
import residentialImage from '@/assets/residential-market.jpg';
import { motion } from 'framer-motion';

const ParaCondominiosContent = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        condominium: '',
        units: '',
        message: ''
    });

    useEffect(() => {
        if (window.location.hash === '#proposta') {
            setTimeout(() => {
                const element = document.getElementById('proposta');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, []);

    const benefits = [
        {
            icon: Home,
            title: "Comodidade 24h",
            description: "A conveniência de ter produtos essenciais a um elevador de distância."
        },
        {
            icon: ShieldCheck,
            title: "Segurança Total",
            description: "100% autônomo e seguro. Não compromete a portaria do condomínio."
        },
        {
            icon: TrendingUp,
            title: "Valorização Real",
            description: "Condomínios com conveniências modernas são mais valorizados no mercado."
        },
        {
            icon: Clock,
            title: "Gestão Zero",
            description: "Cuidamos de tudo: abastecimento, limpeza, manutenção e atendimento."
        }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Dynamic import to avoid SSR issues if this lib does browser checks
            const { submitToFormspree } = await import('@/lib/api');
            const result = await submitToFormspree(formData);

            if (result.success) {
                toast({
                    title: "Proposta solicitada com sucesso!",
                    description: "Nossa equipe entrará em contato em breve para agendar uma visita técnica.",
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    condominium: '',
                    units: '',
                    message: ''
                });
            } else {
                toast({
                    title: "Erro ao enviar",
                    description: result.message || "Ocorreu um erro. Tente novamente ou nos chame no WhatsApp.",
                    variant: "destructive"
                });
            }
        } catch (error) {
            toast({
                title: "Erro ao enviar",
                description: "Ocorreu um erro inesperado.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-secondary/50 to-white py-24 relative overflow-hidden min-h-[85vh] flex items-center">
                {/* Decorative Circles - Optimized */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-vitta-green/5 rounded-full blur-3xl opacity-50 will-change-transform" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-vitta-brown/5 rounded-full blur-3xl opacity-50 will-change-transform" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-vitta-green/20 px-4 py-1.5 rounded-full">
                                    <span className="text-sm font-medium text-vitta-green-dark">Valorização & Segurança</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-vitta-green-dark leading-[1.1]">
                                    Conveniência a um <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-wellness">passo de casa</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                                    Transforme a rotina dos moradores com um mercado autônomo elegante, seguro e disponível 24 horas por dia.
                                </p>
                            </div>
                            <Button
                                className="h-14 px-8 rounded-2xl bg-vitta-green hover:bg-vitta-green-dark text-white shadow-lg shadow-vitta-green/25 hover:shadow-vitta-green/40 transition-all duration-300 text-base font-semibold w-full sm:w-auto"
                                onClick={() => {
                                    const element = document.getElementById('proposta');
                                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                            >
                                Solicitar Visita Técnica
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src={residentialImage.src || residentialImage}
                                    alt="Micro market instalado em área comum de condomínio"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
                                <div className="w-12 h-12 bg-vitta-green/10 rounded-full flex items-center justify-center text-vitta-green">
                                    <Home size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Instalação</p>
                                    <p className="text-lg font-bold text-vitta-green-dark">Zero Custo</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold font-heading text-vitta-green-dark mb-4">
                            Por que escolher a Vitta?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Tecnologia e design a serviço do bem-estar dos moradores.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-secondary/20 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-vitta-green/10"
                                >
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-vitta-green group-hover:text-white transition-colors duration-300">
                                        <IconComponent size={28} className="text-vitta-green group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-vitta-green-dark mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section id="proposta" className="py-24 bg-gradient-to-t from-secondary/50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-heading text-vitta-green-dark mb-4">
                            Leve a Vitta para seu Condomínio
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Preencha o formulário abaixo e receba uma estudo de viabilidade gratuito.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-vitta-green/5"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-base font-medium text-vitta-brown">Nome do responsável</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        required
                                        placeholder="Nome completo"
                                        className="h-14 rounded-xl bg-white/50 border-gray-200 focus:border-vitta-green focus:ring-vitta-green/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-base font-medium text-vitta-brown">E-mail</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        required
                                        placeholder="email@exemplo.com"
                                        className="h-14 rounded-xl bg-white/50 border-gray-200 focus:border-vitta-green focus:ring-vitta-green/20"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-base font-medium text-vitta-brown">Telefone / WhatsApp</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        required
                                        placeholder="(00) 00000-0000"
                                        className="h-14 rounded-xl bg-white/50 border-gray-200 focus:border-vitta-green focus:ring-vitta-green/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="condominium" className="text-base font-medium text-vitta-brown">Nome do Condomínio</Label>
                                    <Input
                                        id="condominium"
                                        value={formData.condominium}
                                        onChange={(e) => handleChange('condominium', e.target.value)}
                                        required
                                        placeholder="Residencial..."
                                        className="h-14 rounded-xl bg-white/50 border-gray-200 focus:border-vitta-green focus:ring-vitta-green/20"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="units" className="text-base font-medium text-vitta-brown">Número aproximado de unidades</Label>
                                <Input
                                    id="units"
                                    value={formData.units}
                                    onChange={(e) => handleChange('units', e.target.value)}
                                    required
                                    placeholder="Ex: 120 apartamentos"
                                    className="h-14 rounded-xl bg-white/50 border-gray-200 focus:border-vitta-green focus:ring-vitta-green/20"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-base font-medium text-vitta-brown">Mensagem (Opcional)</Label>
                                <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    placeholder="Conte um pouco sobre o espaço disponível ou dúvidas específicas..."
                                    className="min-h-[120px] resize-none rounded-xl bg-white/50 border-gray-200 focus:border-vitta-green focus:ring-vitta-green/20 p-4"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-14 text-lg font-semibold rounded-xl bg-vitta-green hover:bg-vitta-green-dark text-white shadow-lg shadow-vitta-green/25 transition-all duration-300 group"
                            >
                                {isSubmitting ? (
                                    "Enviando..."
                                ) : (
                                    <>
                                        Solicitar Proposta
                                        <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ParaCondominiosContent;

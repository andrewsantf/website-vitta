"use client";

import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQContent = () => {
    const faqs = [
        {
            question: "Quanto custa para instalar o Vitta Micro Market?",
            answer: "Zero! A instalação, manutenção e reposição são 100% por nossa conta. Não há custo algum para o condomínio ou empresa."
        },
        {
            question: "Qual o espaço necessário?",
            answer: "Precisamos de pouco espaço. A partir de 2m² já conseguimos instalar uma operação compacta e completa. O ideal é um local com ponto de energia."
        },
        {
            question: "Como funciona o pagamento?",
            answer: "Trabalhamos com self-checkout via aplicativo ou totem. Aceitamos cartão de crédito, débito e PIX. Tudo de forma segura e rápida."
        },
        {
            question: "E se houver furto?",
            answer: "Temos um sistema de monitoramento por câmeras e controle de estoque inteligente. O condomínio/empresa não é responsabilizado por perdas."
        },
        {
            question: "Quem cuida da limpeza e reposição?",
            answer: "Nossa equipe realiza visitas periódicas para limpeza, organização e reposição dos produtos. Vocês não precisam se preocupar com nada."
        },
        {
            question: "Quais produtos são vendidos?",
            answer: "Oferecemos um mix variado que inclui bebidas, snacks, mercearia básica, higiene pessoal, picolés e até refeições congeladas, adaptado ao perfil do local."
        }
    ];

    return (
        <section className="py-24 bg-secondary/30 min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-vitta-green-dark mb-6">
                        Perguntas Frequentes
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Tire suas dúvidas sobre o funcionamento do nosso micro market.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b-gray-100">
                                <AccordionTrigger className="text-left text-lg font-medium text-vitta-green-dark hover:text-vitta-green transition-colors py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQContent;

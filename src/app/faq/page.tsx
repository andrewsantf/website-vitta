import type { Metadata } from 'next';
import FAQContent from './content';

export const metadata: Metadata = {
    title: 'Perguntas Frequentes | Vitta Micro Market',
    description: 'Tire suas dúvidas sobre instalação, custos, segurança e reposição do micro market autônomo Vitta.',
};

export default function FAQPage() {
    return <FAQContent />;
}

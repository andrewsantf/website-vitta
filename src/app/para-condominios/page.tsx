import type { Metadata } from 'next';
import ParaCondominiosContent from './content';

export const metadata: Metadata = {
    title: 'Para Condomínios | Vitta Micro Market',
    description: 'Leve conveniência e segurança para seu condomínio com um micro market autônomo. Valorização do imóvel e conforto para os moradores.',
    keywords: 'micro market condomínio, mercado autônomo residencial, conveniência condomínio, valorização imóvel',
};

export default function ParaCondominiosPage() {
    return <ParaCondominiosContent />;
}

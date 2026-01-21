import type { Metadata } from 'next';
import ParaEmpresasContent from './content';

export const metadata: Metadata = {
    title: 'Para Empresas | Vitta Micro Market',
    description: 'Leve mais bem-estar e produtividade para sua empresa com um micro market Vitta. Sem custo para a empresa, instalação rápida e produtos frescos.',
    keywords: 'micro market empresa, mercado corporativo, benefícios funcionários, vitta para empresas',
};

export default function ParaEmpresasPage() {
    return <ParaEmpresasContent />;
}

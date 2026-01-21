import type { Metadata } from 'next';
import ComoFuncionaContent from './content';

export const metadata: Metadata = {
    title: 'Como Funciona | Vitta Micro Market',
    description: 'Entenda como é simples usar o micro market autônomo da Vitta. Escolha, escaneie, pague e leve.',
};

export default function ComoFuncionaPage() {
    return <ComoFuncionaContent />;
}

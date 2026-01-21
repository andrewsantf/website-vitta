import type { Metadata } from 'next';
import ContatoContent from './content';

export const metadata: Metadata = {
    title: 'Contato | Vitta Micro Market',
    description: 'Fale conosco e saiba como levar um micro market para seu espaço.',
};

export default function ContatoPage() {
    return <ContatoContent />;
}

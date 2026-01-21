import type { Metadata } from 'next';
import SolicitarPropostaContent from './content';

export const metadata: Metadata = {
    title: 'Solicitar Proposta | Vitta Micro Market',
    description: 'Peça uma proposta personalizada para seu condomínio ou empresa.',
};

export default function SolicitarPropostaPage() {
    return <SolicitarPropostaContent />;
}

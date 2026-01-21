import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Política de Privacidade | Vitta Micro Market',
    description: 'Política de Privacidade e proteção de dados da Vitta Micro Market.',
};

export default function PrivacidadePage() {
    return (
        <div className="bg-background min-h-screen py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-heading text-vitta-green-dark mb-4">
                        Política de Privacidade
                    </h1>
                    <p className="text-muted-foreground">
                        Última atualização: Janeiro de 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-gray max-w-none space-y-8 text-foreground/80 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">1. Introdução</h2>
                        <p>
                            A Vitta Micro Market respeita a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">2. Coleta de Dados</h2>
                        <p>
                            Podemos coletar as seguintes informações:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Dados Pessoais:</strong> Nome, e-mail, telefone e CPF (quando necessário para cadastro ou emissão de nota fiscal).</li>
                            <li><strong>Dados de Pagamento:</strong> Informações de transação para processamento de compras (não armazenamos dados sensíveis de cartão de crédito; estes são processados por gateways de pagamento seguros).</li>
                            <li><strong>Dados de Uso:</strong> Informações sobre como você interage com nossos totens, aplicativo e website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">3. Uso das Informações</h2>
                        <p>
                            Utilizamos seus dados para:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Processar suas compras e pagamentos.</li>
                            <li>Fornecer suporte ao cliente.</li>
                            <li>Melhorar nossos serviços e personalizar sua experiência.</li>
                            <li>Enviar comunicações sobre atualizações, ofertas ou alterações em nossos termos (mediante seu consentimento).</li>
                            <li>Garantir a segurança e prevenir fraudes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">4. Compartilhamento de Dados</h2>
                        <p>
                            Não vendemos seus dados pessoais. Podemos compartilhar informações apenas com:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Prestadores de Serviço:</strong> Parceiros que nos auxiliam na operação do negócio (ex: processadores de pagamento, serviços de hospedagem), sob acordos de confidencialidade.</li>
                            <li><strong>Obrigações Legais:</strong> Quando exigido por lei ou autoridade competente.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">5. Segurança dos Dados</h2>
                        <p>
                            Adotamos medidas técnicas e administrativas adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">6. Seus Direitos (LGPD)</h2>
                        <p>
                            Você tem direito a:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Confirmar a existência de tratamento de seus dados.</li>
                            <li>Acessar seus dados.</li>
                            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                            <li>Revogar seu consentimento a qualquer momento.</li>
                        </ul>
                        <p>
                            Para exercer seus direitos, entre em contato conosco através dos canais oficiais.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">7. Cookies</h2>
                        <p>
                            Utilizamos cookies para melhorar a funcionalidade do nosso site e analisar o tráfego. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">8. Alterações nesta Política</h2>
                        <p>
                            Esta Política de Privacidade pode ser atualizada. A versão mais recente estará sempre disponível nesta página.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">9. Contato</h2>
                        <p>
                            Se tiver dúvidas sobre nossa política de privacidade ou sobre como tratamos seus dados, entre em contato através da nossa <Link href="/contato" className="text-vitta-green hover:underline">página de contato</Link>.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}

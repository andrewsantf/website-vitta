import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Termos de Uso | Vitta Micro Market',
    description: 'Termos e Condições de Uso dos serviços Vitta Micro Market.',
};

export default function TermosPage() {
    return (
        <div className="bg-background min-h-screen py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-heading text-vitta-green-dark mb-4">
                        Termos de Uso
                    </h1>
                    <p className="text-muted-foreground">
                        Última atualização: Janeiro de 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-gray max-w-none space-y-8 text-foreground/80 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">1. Aceitação dos Termos</h2>
                        <p>
                            Ao acessar e utilizar os serviços da <strong>Vitta Micro Market</strong> (incluindo nossos totens de autoatendimento, aplicativo e website), você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, por favor, não utilize nossos serviços.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">2. O Serviço</h2>
                        <p>
                            A Vitta Micro Market fornece soluções de conveniência autônoma (Micro Markets) para empresas e condomínios. Nossas unidades operam no modelo de honestidade e autoatendimento, onde o cliente é responsável por escolher, escanear e pagar pelos produtos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">3. Cadastro e Segurança</h2>
                        <p>
                            Para utilizar certas funcionalidades, pode ser necessário realizar um cadastro. Você é responsável por manter a confidencialidade de seus dados de acesso e por todas as atividades que ocorrem sob sua conta.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">4. Compras e Pagamentos</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Preços:</strong> Os preços dos produtos estão exibidos nas prateleiras ou no sistema do totem/app. Reservamo-nos o direito de alterar preços sem aviso prévio.</li>
                            <li><strong>Pagamento:</strong> Aceitamos cartões de crédito, débito e Pix. O pagamento deve ser confirmado antes da retirada dos produtos.</li>
                            <li><strong>Falhas:</strong> Em caso de falha no pagamento ou no sistema, entre em contato imediatamente com nosso suporte.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">5. Responsabilidades do Usuário</h2>
                        <p>
                            O usuário compromete-se a:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Utilizar o serviço de forma ética e honesta.</li>
                            <li>Zelar pela conservação do espaço e dos equipamentos.</li>
                            <li>Não retirar produtos sem o devido pagamento.</li>
                            <li>Reportar qualquer irregularidade ou defeito observado.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">6. Propriedade Intelectual</h2>
                        <p>
                            Todo o conteúdo, marcas, logotipos e software associados à Vitta Micro Market são propriedade exclusiva da empresa ou de seus licenciadores, protegidos pelas leis de direitos autorais e propriedade intelectual.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">7. Limitação de Responsabilidade</h2>
                        <p>
                            A Vitta Micro Market trabalha para garantir a disponibilidade contínua dos serviços, mas não se responsabiliza por interrupções temporárias decorrentes de manutenção, falhas de sistema ou motivos de força maior.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">8. Alterações nos Termos</h2>
                        <p>
                            Podemos atualizar estes Termos de Uso periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-vitta-green-dark mb-4">9. Contato</h2>
                        <p>
                            Em caso de dúvidas sobre estes termos, entre em contato conosco através da nossa <Link href="/contato" className="text-vitta-green hover:underline">página de contato</Link>.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}

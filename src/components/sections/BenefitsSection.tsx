import { Users, TrendingUp, Clock, Heart } from 'lucide-react';

export const BenefitsSection = () => {
    const benefits = [
        {
            icon: TrendingUp,
            title: "Aumento da Produtividade",
            description: "Colaboradores gastam menos tempo saindo para comprar lanches, mantendo o foco no trabalho."
        },
        {
            icon: Heart,
            title: "Bem-estar dos Funcionários",
            description: "Acesso rápido e prático promove uma cultura de eficiência na empresa."
        },
        {
            icon: Clock,
            title: "Disponibilidade 24/7",
            description: "Perfeito para empresas com turnos variados ou trabalho noturno."
        },
        {
            icon: Users,
            title: "Melhoria do Ambiente de Trabalho",
            description: "Um benefício valorizado que aumenta a satisfação da equipe."
        }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-heading text-vitta-brown mb-4">
                        Benefícios para sua Empresa
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Descubra como um micro market pode transformar o ambiente de trabalho
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div key={index} className="card-wellness text-center group hover:scale-105 transition-all duration-300">
                                <div className="w-20 h-20 bg-vitta-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-vitta-green/20 transition-colors">
                                    <IconComponent className="text-vitta-green" size={32} />
                                </div>
                                <h3 className="text-xl font-semibold text-vitta-brown mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

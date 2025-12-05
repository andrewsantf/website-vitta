import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("E-mail inválido"),
    phone: z.string().min(10, "Telefone inválido"),
    company: z.string().min(2, "Nome da empresa deve ter pelo menos 2 caracteres"),
    employees: z.string().min(1, "Informe o número de colaboradores"),
    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const CorporateForm = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        console.log(data); // Simulate API call

        setTimeout(() => {
            toast({
                title: "Proposta solicitada com sucesso!",
                description: "Nossa equipe entrará em contato em breve para agendar uma visita técnica.",
            });
            setIsSubmitting(false);
            reset();
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Nome do responsável *</Label>
                    <Input
                        id="name"
                        {...register("name")}
                        placeholder="Seu nome completo"
                        className="h-12"
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">E-mail corporativo *</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="seu@empresa.com"
                        className="h-12"
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="(61) 98427-5639"
                        className="h-12"
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company">Nome da empresa *</Label>
                    <Input
                        id="company"
                        {...register("company")}
                        placeholder="Nome da empresa"
                        className="h-12"
                    />
                    {errors.company && <p className="text-sm text-red-500">{errors.company.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="employees">Número de colaboradores *</Label>
                <Input
                    id="employees"
                    {...register("employees")}
                    placeholder="Ex: 50-100 colaboradores"
                    className="h-12"
                />
                {errors.employees && <p className="text-sm text-red-500">{errors.employees.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Informações adicionais</Label>
                <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Horário de funcionamento, localização desejada, preferências específicas..."
                    className="min-h-[120px] resize-none"
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-wellness w-full group"
            >
                {isSubmitting ? (
                    "Enviando..."
                ) : (
                    <>
                        Solicitar Proposta Corporativa
                        <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </>
                )}
            </Button>
        </form>
    );
};

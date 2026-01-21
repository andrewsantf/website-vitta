"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary/30">
            <div className="text-center px-4">
                <h1 className="text-9xl font-bold text-vitta-green/20">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-vitta-green-dark mt-4 mb-6">
                    Página não encontrada
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Desculpe, a página que você está procurando não existe ou foi movida.
                </p>
                <Link href="/">
                    <Button className="btn-wellness">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para o Início
                    </Button>
                </Link>
            </div>
        </div>
    );
}

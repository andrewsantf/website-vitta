import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

import WhatsAppButton from "@/components/WhatsAppButton"

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-montserrat',
    display: 'swap',
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-poppins',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Vitta Micro Market - Tecnologia e Bem-estar',
    description: 'Leve um micro market autônomo para sua empresa ou condomínio. Sem custo de instalação, disponível 24h.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className={`${montserrat.variable} ${poppins.variable} font-sans`}>
                <TooltipProvider>
                    <Navigation />
                    {children}
                    <WhatsAppButton />
                    <Footer />
                    <Toaster />
                    <Sonner />
                </TooltipProvider>
            </body>
        </html>
    )
}

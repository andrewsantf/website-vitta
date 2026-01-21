import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blog-posts';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog Vitta | Novidades sobre Micro Markets e Condomínios',
    description: 'Fique informado com os melhores artigos sobre mercado autônomo, dicas para síndicos, inovações para condomínios e tendências corporativas.',
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Blog Main Container */}
            {/* Header Section */}
            {/* Header Section */}
            <section className="relative py-24 mb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-vitta-green/5 via-vitta-green/10 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-vitta-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-vitta-green/10 text-vitta-green font-medium text-sm mb-6">
                        Conteúdo & Insights
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-vitta-green-dark tracking-tight">
                        Blog Vitta
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Insights, dicas e tendências sobre o universo de <span className="text-vitta-green font-semibold">conveniência autônoma</span> para transformar seu condomínio ou empresa.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col bg-white">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-vitta-green/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                                        {post.category}
                                    </div>
                                </div>

                                <CardHeader className="space-y-3 pb-3">
                                    <div className="flex flex-wrap items-center text-xs text-gray-500 gap-y-2 gap-x-4">
                                        <div className="flex items-center">
                                            <Calendar className="h-3 w-3 mr-1 text-vitta-blue" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-3 w-3 mr-1 text-vitta-blue" />
                                            {post.readTime}
                                        </div>
                                        <div className="flex items-center">
                                            <User className="h-3 w-3 mr-1 text-vitta-blue" />
                                            {post.author}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-vitta-green transition-colors leading-tight">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-grow">
                                    <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </CardContent>

                                <CardFooter className="pt-0 pb-6 border-t border-gray-100 mt-auto">
                                    <span className="text-vitta-blue font-semibold text-sm group-hover:underline flex items-center mt-4">
                                        Ler artigo completo
                                        <ArrowRight className="ml-1 h-3 w-3" />
                                    </span>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA (Optional Future Improvement) */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-vitta-brown mb-4">Gostou do conteúdo?</h3>
                    <p className="text-gray-600 mb-6">
                        Entre em contato conosco para saber como levar a Vitta para o seu condomínio.
                    </p>
                    <Link href="/solicitar-proposta">
                        <Button className="btn-wellness px-8">
                            Falar com um consultor
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

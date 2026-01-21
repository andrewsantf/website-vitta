import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blog-posts';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const BlogSection = () => {
    // Pega apenas os 3 primeiros posts
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-vitta-brown mb-4">
                            Conteúdo Vitta
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Fique por dentro das novidades sobre mercado autônomo, dicas para condomínios e tendências de inovação.
                        </p>
                    </div>
                    <Link href="/blog">
                        <Button variant="outline" className="group">
                            Ver todos os artigos
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden">
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

                                <CardHeader className="space-y-2 pb-2">
                                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1 text-vitta-blue" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1 text-vitta-blue" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-vitta-green transition-colors line-clamp-2">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-grow">
                                    <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </CardContent>

                                <CardFooter className="pt-0 pb-6">
                                    <span className="text-vitta-blue font-semibold text-sm group-hover:underline flex items-center">
                                        Ler artigo completo
                                        <ArrowRight className="ml-1 h-3 w-3" />
                                    </span>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;

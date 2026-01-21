import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Metadata } from 'next';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

// Generates metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Artigo não encontrado | Vitta',
        };
    }

    return {
        title: `${post.title} | Blog Vitta`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

// Generates static paths for all posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-20 pb-20">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb / Back Link */}
                <div className="mb-8">
                    <Link href="/blog">
                        <Button variant="ghost" className="pl-0 text-muted-foreground hover:text-vitta-green transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Voltar para o Blog
                        </Button>
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-10 text-center">
                    <div className="inline-block bg-vitta-green/10 text-vitta-green text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
                        {post.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading text-vitta-brown mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center text-sm text-muted-foreground gap-6 border-b border-gray-100 pb-8">
                        <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-vitta-blue" />
                            Por <span className="font-semibold text-gray-700 ml-1">{post.author}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-vitta-blue" />
                            {post.date}
                        </div>
                        <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-vitta-blue" />
                            {post.readTime}
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div
                    className="prose prose-lg max-w-none prose-headings:text-vitta-brown prose-a:text-vitta-green prose-img:rounded-xl text-gray-700 [&_p]:mb-8 [&_p]:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Section (Visual Only for MVP) */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-vitta-brown mb-4">Compartilhe este artigo:</h4>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200">
                            <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-400 hover:border-blue-200">
                            <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-800 hover:border-blue-200">
                            <Facebook className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

            </article>

            {/* CTA Section */}
            <section className="bg-gray-50 py-16 mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold font-heading text-vitta-brown mb-4">
                        Leve essa inovação para o seu condomínio
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Transforme a rotina dos moradores com um mercado autônomo completo, seguro e sem custos de instalação.
                    </p>
                    <Link href="/solicitar-proposta">
                        <Button size="lg" className="btn-wellness text-lg px-8 py-6 h-auto">
                            Solicitar Proposta Gratuita
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

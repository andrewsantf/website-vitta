"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoVitta from '@/assets/logo-vitta.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/como-funciona', label: 'Como Funciona' },
    { path: '/para-empresas', label: 'Para Empresas' },
    { path: '/para-condominios', label: 'Para Condomínios' },
    { path: '/faq', label: 'FAQ' },
    { path: '/blog', label: 'Blog' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={logoVitta}
              alt="Vitta Micro Market"
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                    ? 'text-vitta-green border-b-2 border-vitta-green'
                    : 'text-vitta-brown hover:text-vitta-green'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/solicitar-proposta">
              <Button className="btn-wellness">
                Solicitar Proposta
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-vitta-brown hover:text-vitta-green focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border/50">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${isActive(item.path)
                    ? 'text-vitta-green bg-vitta-green/10'
                    : 'text-vitta-brown hover:text-vitta-green hover:bg-vitta-green/5'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/solicitar-proposta" className="block">
                  <Button
                    className="btn-wellness w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Solicitar Proposta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
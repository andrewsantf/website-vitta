import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import logoVitta from '@/assets/logo-vitta.png';

const Footer = () => {
  return (
    <footer className="bg-vitta-brown text-white pt-20 pb-10 relative overflow-hidden z-20">
      {/* Decorative Blur - Optimized */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-vitta-green/10 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Image src={logoVitta} alt="Vitta Micro Market" className="h-14 w-auto brightness-0 invert opacity-90" />
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Revolucionamos seu ambiente com tecnologia e bem-estar.
              Micro Markets autônomos que transformam o dia a dia de condomínios e empresas.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vitta-green transition-colors duration-300">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vitta-green transition-colors duration-300">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vitta-green transition-colors duration-300">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Navegação</h3>
            <ul className="space-y-4">
              {['Início', 'Como Funciona', 'Para Empresas', 'Para Condomínios'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Início' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-vitta-green-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Suporte</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-vitta-green-light transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-vitta-green-light transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-400 hover:text-vitta-green-light transition-colors">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Fale Conosco</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-400">
                <Mail size={20} className="text-vitta-green mt-1 flex-shrink-0" />
                <span>contato@vittamicromarket.com.br</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <Phone size={20} className="text-vitta-green mt-1 flex-shrink-0" />
                <span>(61) 98427-5639</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-vitta-green mt-1 flex-shrink-0" />
                <span>Brasília, DF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Vitta Micro Market. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
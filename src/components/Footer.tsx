import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoVitta from '@/assets/logo-vitta.png';
const Footer = () => {
  return <footer className="bg-vitta-brown text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="lg:col-span-2">
          <img src={logoVitta} alt="Vitta Micro Market" className="h-12 w-auto mb-4 brightness-0 invert" />
          <p className="text-gray-300 mb-6 max-w-md">Revolucione a alimentação no seu espaço com nossos Micro Markets 100% autônomos. Instalação gratuita, tecnologia avançada e praticidade para condomínios e empresas.</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-vitta-green" />
              <span className="text-gray-300">contato@vittamicromarket.com.br</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-vitta-green" />
              <span className="text-gray-300">(61) 98427-5639</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-vitta-green" />
              <span className="text-gray-300">Brasília, DF</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-vitta-green transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link to="/como-funciona" className="text-gray-300 hover:text-vitta-green transition-colors">
                Como Funciona
              </Link>
            </li>
            <li>
              <Link to="/para-empresas" className="text-gray-300 hover:text-vitta-green transition-colors">
                Para Empresas
              </Link>
            </li>
            <li>
              <Link to="/para-condominios" className="text-gray-300 hover:text-vitta-green transition-colors">
                Para Condomínios
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suporte</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/faq" className="text-gray-300 hover:text-vitta-green transition-colors">
                Perguntas Frequentes
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-gray-300 hover:text-vitta-green transition-colors">
                Entre em Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">© 2025 Vitta Micro Market. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>;
};
export default Footer;
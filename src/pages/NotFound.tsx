import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center bg-background">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-vitta-brown">404</h1>
            <h2 className="text-2xl font-semibold text-vitta-brown">Página não encontrada</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              A página que você está procurando não existe ou foi movida.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-wellness group">
                <Home className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Voltar ao Início
              </Button>
            </Link>
            <Button 
              onClick={() => window.history.back()}
              className="btn-wellness-outline"
            >
              <ArrowLeft className="mr-2" size={20} />
              Página Anterior
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

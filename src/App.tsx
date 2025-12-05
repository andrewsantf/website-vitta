import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const ParaEmpresas = lazy(() => import("./pages/ParaEmpresas"));
const ParaCondominios = lazy(() => import("./pages/ParaCondominios"));
const ComoFunciona = lazy(() => import("./pages/ComoFunciona"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contato = lazy(() => import("./pages/Contato"));
const SolicitarProposta = lazy(() => import("./pages/SolicitarProposta"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vitta-green"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/para-empresas" element={<ParaEmpresas />} />
              <Route path="/para-condominios" element={<ParaCondominios />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/solicitar-proposta" element={<SolicitarProposta />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

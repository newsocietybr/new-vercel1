
import React from 'react';
import { Shield, Clock, RefreshCw } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-12 text-center hover-lift animate-slide-up">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-8 border-white/20 flex items-center justify-center glow-effect">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">7</div>
                  <div className="text-sm text-gray-300 font-medium">DIAS</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-8 border-transparent">
                <div className="w-full h-full rounded-full border-8 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent animate-spin"></div>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">7 dias de garantia total</h2>
          
          <div className="space-y-6 text-gray-300 text-lg max-w-2xl mx-auto">
            <p>
              Acesse agora, teste tudo, gere sua oferta e comece a aplicar.
            </p>
            <p>
              Se em 7 dias você não enxergar progresso real, a gente devolve seu investimento. <strong className="text-white">Sem letras miúdas.</strong>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-white font-medium">Garantia total</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-blue-400" />
              <span className="text-white font-medium">7 dias completos</span>
            </div>
            <div className="flex items-center space-x-3">
              <RefreshCw className="w-8 h-8 text-blue-400" />
              <span className="text-white font-medium">Reembolso fácil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;

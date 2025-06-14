
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const LimitedTime = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 5,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Notification Bar */}
        <div className="glass-card p-4 mb-8 animate-fade-in">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">
              🟢 Sistema ExpertOS™ ativo | IA estratégica 24h no seu negócio
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center glass-card p-12 hover-lift animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Comece agora por apenas
            <br />
            <span className="gradient-text">R$69,90/mês</span>
            <br />
            e transforme sua expertise em
            <br />
            um negócio digital escalável
          </h1>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Você não precisa de mais uma mentoria. Precisa de um sistema que pensa como um coprodutor experiente e te guia com clareza do ponto A até o lucro.
          </p>
          
          <button className="outsider-gradient px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity hover-lift group mb-8">
            <span className="text-white font-bold text-lg flex items-center space-x-2">
              <span>Validar ideia</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          {/* Features List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              "🟢 Acesso imediato",
              "🟢 Garantia de 7 dias", 
              "🟢 Suporte incluso",
              "🟢 IA estratégica 24h"
            ].map((feature, index) => (
              <div key={index} className="glass-card p-3 text-center">
                <span className="text-white text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Security Info */}
          <div className="text-center text-gray-400 text-sm">
            <p>🔒 Garantia ativada | Sem risco | Sem enrolação</p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl floating-element" style={{animationDelay: '4s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default LimitedTime;


import React from 'react';
import { TrendingUp, Users, Zap, Target } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            O que você sente hoje é{' '}
            <span className="gradient-text">falta de clareza.</span>
            <br />
            O ExpertOS resolve isso em 3 etapas:
          </h2>
        </div>

        <div className="space-y-8 text-lg text-gray-300 max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 text-left animate-slide-up">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full outsider-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Diagnóstico preciso</h3>
                <p className="text-gray-300">te mostra onde você está</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 text-left animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full outsider-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Roadmap visual</h3>
                <p className="text-gray-300">te mostra o caminho</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 text-left animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full outsider-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Execução automatizada</h3>
                <p className="text-gray-300">IA faz com você</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: TrendingUp,
              title: "Frameworks de 8 dígitos",
              description: "🧠 Frameworks usados por especialistas de 8 dígitos"
            },
            {
              icon: Users,
              title: "Estrutura de grandes nomes",
              description: "🔁 Estrutura inspirada nas máquinas de escala de Tony Robbins, Russell Brunson, Hormozi e outros"
            },
            {
              icon: Zap,
              title: "IA treinada com milhões",
              description: "📊 IA treinada com estratégias de VSLs e funis que já faturaram milhões"
            }
          ].map((feature, index) => (
            <div key={index} className="glass-card p-6 text-center hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg outsider-gradient flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

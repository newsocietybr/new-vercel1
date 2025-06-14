
import React from 'react';
import { Play, Clock, Users, CheckCircle, Brain, Target, Zap } from 'lucide-react';

const Courses = () => {
  const features = [
    {
      title: "Diagnóstico guiado por IA",
      description: "baseado em Alex Hormozi, Russell Brunson, Iman Gadzhi e outros",
      icon: Brain,
      category: "DIAGNÓSTICO",
      categoryColor: "from-blue-500 to-cyan-500"
    },
    {
      title: "FunnelHacker + CopyHack™",
      description: "Cria funis com templates validados e páginas, e-mails e VSLs em minutos - Bencivenga, Gary Halbert, Todd Brown, Robert Collier e outros",
      icon: Target,
      category: "AUTOMAÇÃO",
      categoryColor: "from-blue-600 to-blue-800"
    },
    {
      title: "Roadmap Visual + Simulador",
      description: "Escalada digital 100% visual e gamificado + Simulador Financeiro (ticket, CAC, ROI, LTV)",
      icon: Zap,
      category: "ESTRATÉGIA",
      categoryColor: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Aqui você acessa:
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            O sistema completo que pensa como um coprodutor experiente e te guia com clareza do ponto A até o lucro
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass-card overflow-hidden hover-lift animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Feature Header */}
              <div className="relative p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.categoryColor} mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${feature.categoryColor} mb-4`}>
                  {feature.category}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Features List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Features Card */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Recursos Principais</h3>
            <div className="space-y-4">
              {[
                "Diagnóstico guiado por IA baseado em Alex Hormozi, Russell Brunson, Iman Gadzhi e outros",
                "Roadmap de escalada digital 100% visual e gamificado", 
                "FunnelHacker, cria funis com templates validados",
                "CopyHack™ — cria páginas, e-mails e VSLs em minutos",
                "Simulador Financeiro (ticket, CAC, ROI, LTV)",
                "Painel de Resultados com sugestões inteligentes",
                "Comunidade ExpertCircle™ integrada"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bots Card */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Inteligência Artificial</h3>
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">🤖 Bots Estratégicos Integrados</h4>
              <p className="text-gray-300 text-sm mb-6">
                Inteligência artificial 24h trabalhando no seu negócio
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "Bot de Diagnóstico Estratégico",
                "Bot Criador de Funis",
                "Bot de Copy e Conteúdo",
                "Bot Analisador de Métricas",
                "Bot de Sugestões Inteligentes"
              ].map((bot, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-400/40 transition-colors">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white font-medium">{bot}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

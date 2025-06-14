import React from 'react';
import { Play, Clock, MoreHorizontal, Brain, Target, Zap, TrendingUp } from 'lucide-react';

const ContinueWatching = () => {
  const features = [
    {
      title: "Diagnóstico de Negócio",
      category: "IA Estratégica",
      icon: Brain,
      description: "Análise completa baseada nos frameworks dos maiores especialistas",
      thumbnail: "photo-1581090464777-f3220bbe1b8b"
    },
    {
      title: "FunnelHacker Pro",
      category: "Automação de Vendas",
      icon: Target,
      description: "Templates validados para funis de alta conversão",
      thumbnail: "photo-1460925895917-afdab827c52f"
    },
    {
      title: "CopyHacker Premium",
      category: "Copy & Ofertas",
      icon: Zap,
      description: "Gerador de copies milionárias em minutos",
      thumbnail: "photo-1518770660439-4636190af475"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Features */}
        <div className="mb-16">
          <div className="glass-card p-8 animate-slide-up">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Play className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Recursos do ExpertOS™</h2>
              </div>
              <button className="text-gray-400 hover:text-white transition-colors">
                <MoreHorizontal className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group cursor-pointer hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="relative mb-4">
                    <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                      <img 
                        src={`https://images.unsplash.com/${feature.thumbnail}?auto=format&fit=crop&w=400&h=225&q=80`}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                      
                      {/* Feature Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-purple-400 mb-1 font-medium">{feature.category}</p>
                    <h3 className="text-white font-bold mb-2 group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="glass-card p-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded bg-purple-500 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Resultados comprovados</h2>
            </div>
            <button className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              Ver mais →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Frameworks de Elite",
                description: "🧠 Estratégias de especialistas de 8 dígitos",
                thumbnail: "photo-1581090464777-f3220bbe1b8b"
              },
              {
                title: "Máquinas de Escala",
                description: "🔁 Estrutura de Tony Robbins, Hormozi e outros",
                thumbnail: "photo-1460925895917-afdab827c52f"
              },
              {
                title: "IA Milionária",
                description: "📊 Treinada com funis que faturaram milhões",
                thumbnail: "photo-1518770660439-4636190af475"
              }
            ].map((result, index) => (
              <div key={index} className="group cursor-pointer hover-lift" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative mb-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                    <img 
                      src={`https://images.unsplash.com/${result.thumbnail}?auto=format&fit=crop&w=400&h=225&q=80`}
                      alt={result.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-purple-300 transition-colors">
                    {result.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinueWatching;

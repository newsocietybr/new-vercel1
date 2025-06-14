import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleValidarIdeia = () => {
    navigate('/funil-guiado');
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Novo</span>
            <span className="text-sm text-white">Sistema CopyHack™</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="gradient-text">CopyHack™</span>
            <br />
            Transforme sua expertise
            <br />
            em um negócio digital escalável
            <br />
            com o copiloto estratégico que
            <br />
            pensa, cria e executa por você
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-12">
            O que você vai acessar com o
            <br />
            <span className="gradient-text">CopyHack™</span>
          </h2>
          
          <div className="space-y-8 text-left max-w-4xl mx-auto mb-12">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                🎯 Diagnóstico Estratégico por IA
              </h3>
              <p className="text-gray-300">
                Um diagnóstico inteligente que entende onde você está e define o melhor plano de ação, com base em frameworks de especialistas como Hormozi, Russell Brunson, Gary Halbert, Dan Kennedy e Todd Brown.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                🧭 Roadmap Visual e Gamificado
              </h3>
              <p className="text-gray-300">
                Uma jornada clara, do ponto A até a escala. 100% visual, prática e interativa, para você acompanhar cada etapa da construção do seu negócio digital.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                ⚙️ Execução Automatizada
              </h3>
              <p className="text-gray-300">
                Criação de funis, páginas, e-mails e VSLs com templates validados e inteligência artificial treinada com milhares de campanhas reais.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                📊 Simulador Financeiro
              </h3>
              <p className="text-gray-300">
                Projeção de métricas como CAC, ROI, LTV e ticket médio. Decida com dados, não com achismos.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                📈 Painel de Resultados com IA
              </h3>
              <p className="text-gray-300">
                Análise contínua do seu progresso com sugestões automáticas de melhoria, baseadas no seu desempenho real.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                🤖 Bots Estratégicos
              </h3>
              <p className="text-gray-300 mb-4">
                Bots treinados para te ajudar com:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Diagnóstico de negócio</li>
                <li>• Criação de funis</li>
                <li>• Copy e conteúdo</li>
                <li>• Análise de métricas</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Tudo isso em um só lugar:
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Um sistema que pensa como um coprodutor experiente e trabalha com você para escalar sua expertise com clareza, tecnologia e velocidade.
            </p>
            <p className="text-xl font-bold text-white mb-6">
              👉 Essa solução faz sentido pra você?
            </p>
          </div>
          
          <button 
            onClick={handleValidarIdeia}
            className="outsider-gradient px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity hover-lift group"
          >
            <span className="text-white font-semibold text-lg flex items-center space-x-2">
              <span>Validar ideia</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;

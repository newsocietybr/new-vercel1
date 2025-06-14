import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, AlertCircle, Star, Target, Lightbulb, Rocket, Brain, TrendingUp, Award, Zap, FileText, Video, Mail, Megaphone, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLocation, useNavigate } from 'react-router-dom';

const OfferAnalysis = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Capturar dados do funil guiado
  const funnelAnswers = location.state?.answers || {};

  const steps = [
    {
      id: 'congratulations',
      title: 'Parabéns! Sua Oferta Está Aqui',
      subtitle: 'Você acabou de construir algo que a maioria demora MESES para conseguir estruturar'
    },
    {
      id: 'diagnosis',
      title: 'Diagnóstico Inteligente da Oferta',
      subtitle: 'Análise baseada nos maiores frameworks de marketing de resposta direta'
    },
    {
      id: 'funnel-recommendation',
      title: 'Qual Funil é Ideal Para Você?',
      subtitle: 'Recomendação estratégica do melhor caminho para sua conversão'
    }
  ];

  const analysisFrameworks = [
    'Frameworks de Copywriting',
    'Frameworks de Criação de Ofertas',
    'Frameworks de Construção de Funis',
    'Frameworks de Marketing de Resposta Direta',
    'Frameworks de Vendas Online'
  ];

  const funnelTypes = [
    {
      id: 'vsl-direct',
      name: 'Funil VSL Direto',
      description: 'Para promessas tangíveis e público em consciência de solução',
      score: 9.2,
      ideal: 'Produtos digitais com promessa clara e resultado específico'
    },
    {
      id: 'webinar',
      name: 'Funil Webinar',
      description: 'Para educação antes da venda, mais objeções ou ticket alto',
      score: 8.7,
      ideal: 'Consultorias, mentorias e produtos high-ticket'
    },
    {
      id: 'long-form',
      name: 'Funil Perpétuo com Página Longa',
      description: 'Para produtos digitais escaláveis',
      score: 8.1,
      ideal: 'Cursos online e infoprodutos'
    },
    {
      id: 'pitch-pdf',
      name: 'Funil via Pitch PDF + Comunidade',
      description: 'Para validação rápida e crescimento orgânico',
      score: 7.8,
      ideal: 'Primeiros lançamentos e teste de mercado'
    }
  ];

  const assets = [
    {
      id: 'sales-page',
      name: 'Página de Vendas',
      description: 'Estrutura com seções, headlines, storytelling, stack, garantias, CTA',
      framework: 'Frameworks dos maiores especialistas em Copywriting',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 'vsl',
      name: 'VSL (Video Sales Letter)',
      description: 'Script com dor, promessa, mecanismo e CTA',
      framework: 'Frameworks dos maiores especialistas em Vendas',
      icon: <Video className="w-6 h-6" />
    },
    {
      id: 'email-sequence',
      name: 'Sequência de E-mails',
      description: '3 a 7 e-mails (aquecimento, antecipação, objeções, escassez, reabertura)',
      framework: 'Frameworks dos maiores especialistas em Email Marketing',
      icon: <Mail className="w-6 h-6" />
    },
    {
      id: 'ad-copy',
      name: 'Anúncio (Ad Copy)',
      description: 'Headline + ângulo emocional + promessa curta + CTA',
      framework: 'Frameworks dos maiores especialistas em Copy',
      icon: <Megaphone className="w-6 h-6" />
    },
    {
      id: 'pitch-pdf',
      name: 'MiniPDF Pitch',
      description: 'Documento com Big Idea, promessa, mecanismo e CTA em 1 página',
      framework: 'Frameworks dos maiores especialistas em Vendas',
      icon: <FileImage className="w-6 h-6" />
    }
  ];

  const mockAnalysis = {
    overallScore: 7.5,
    strengths: [
      'Você já tem uma promessa clara e um público definido',
      'A estrutura está bem alinhada com um produto escalável',
      'Bom entendimento do problema que resolve'
    ],
    improvements: [
      {
        category: 'Big Promise',
        issue: 'Falta tangibilidade (quanto tempo? quanto resultado?)',
        suggestion: 'Adicione números específicos e prazo claro'
      },
      {
        category: 'Stack de Valor',
        issue: 'Benefícios listados, mas sem valor percebido',
        suggestion: 'Transforme cada benefício em valor monetário'
      },
      {
        category: 'Garantia',
        issue: 'Vaga ou ausente — oportunidade de aumentar conversão',
        suggestion: 'Crie garantia condicional específica'
      },
      {
        category: 'Nome da Oferta',
        issue: 'Técnico demais, sem emoção',
        suggestion: 'Use palavras que evoquem transformação e resultado'
      }
    ],
    suggestedName: 'O Código da Conversão — Seu primeiro R$10k vendendo sem precisar aparecer'
  };

  useEffect(() => {
    if (currentStep === 1) {
      // Simular análise da IA
      const timer = setTimeout(() => {
        setAnalysisComplete(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCongratulationsStep = () => (
    <div className="space-y-8">
      {/* Celebration Header */}
      <div className="text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ✨ <span className="gradient-text">Incrível!</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Você acabou de construir uma oferta que a maioria das pessoas demora <strong className="text-blue-400">MESES</strong> pra conseguir estruturar.
        </p>
      </div>

      {/* Offer Preview */}
      <Card className="glass-card border-glass-border">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center mb-4">
            🧩 Aqui está o que você criou:
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <h3 className="text-blue-400 font-semibold mb-2">🎯 Sua Big Promise</h3>
                <p className="text-gray-300">{funnelAnswers.promessa || 'Promessa não definida'}</p>
              </div>
              <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <h3 className="text-cyan-400 font-semibold mb-2">🔄 Mecanismo Único</h3>
                <p className="text-gray-300">{funnelAnswers.veiculo || 'Mecanismo não definido'}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <h3 className="text-purple-400 font-semibold mb-2">💎 Nome da Oferta</h3>
                <p className="text-gray-300">{funnelAnswers['nome-oferta'] || 'Nome não definido'}</p>
              </div>
              <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <h3 className="text-green-400 font-semibold mb-2">💰 Preço</h3>
                <p className="text-gray-300">{funnelAnswers.preco || 'Preço não definido'}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center space-y-4">
        <p className="text-lg text-gray-300">
          Tudo isso saiu da sua cabeça — com orientação estratégica.
        </p>
        <p className="text-xl text-blue-400 font-medium">
          Agora, vamos te mostrar como deixar isso ainda mais <strong>poderoso</strong>, com sugestões diretas dos maiores nomes do marketing de resposta direta.
        </p>
      </div>
    </div>
  );

  const renderDiagnosisStep = () => (
    <div className="space-y-8">
      {/* Analysis Header */}
      <div className="text-center">
        <div className="text-6xl mb-6">🧪</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          🧠 <span className="gradient-text">Diagnóstico Inteligente</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Analisando sua oferta com base nos frameworks dos mestres
        </p>
      </div>

      {/* Analysis Frameworks */}
      <Card className="glass-card border-glass-border">
        <CardContent className="p-6">
          <h3 className="text-white font-semibold mb-4 text-center">⚙️ Frameworks Aplicados</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {analysisFrameworks.map((framework, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-sm"
              >
                {framework}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {!analysisComplete ? (
        /* Loading Analysis */
        <Card className="glass-card border-glass-border">
          <CardContent className="p-8 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-white text-lg mb-2">Analisando sua oferta...</p>
            <p className="text-gray-400">Aplicando frameworks de marketing de resposta direta</p>
          </CardContent>
        </Card>
      ) : (
        /* Analysis Results */
        <div className="space-y-6">
          {/* Overall Score */}
          <Card className="glass-card border-glass-border">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span>Avaliação Geral: {mockAnalysis.overallScore}/10</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={mockAnalysis.overallScore * 10} className="h-3 mb-4" />
              <p className="text-gray-300">
                Sua oferta está promissora, mas pode ser muito mais poderosa com alguns ajustes.
              </p>
            </CardContent>
          </Card>

          {/* Strengths */}
          <Card className="glass-card border-glass-border">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>🟢 Pontos Fortes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {mockAnalysis.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Improvements */}
          <Card className="glass-card border-glass-border">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-purple-400" />
                <span>⚠️ O que pode melhorar</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAnalysis.improvements.map((improvement, index) => (
                  <div key={index} className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                    <h4 className="text-purple-400 font-semibold mb-2">{improvement.category}:</h4>
                    <p className="text-gray-300 mb-2">{improvement.issue}</p>
                    <p className="text-blue-400 text-sm">💡 {improvement.suggestion}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Suggestion */}
          <Card className="glass-card border-glass-border bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">✍️ Sugestão da IA:</h4>
                  <p className="text-gray-300">
                    Substituir "{funnelAnswers['nome-oferta'] || 'sua oferta atual'}" por:
                  </p>
                  <p className="text-blue-400 font-semibold mt-2 text-lg">
                    "{mockAnalysis.suggestedName}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 h-auto py-4"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🔁</div>
                <div>Editar minha oferta com base nas sugestões</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10 h-auto py-4"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div>Usar minha versão original mesmo assim</div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 h-auto py-4"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🧠</div>
                <div>Ver exemplos de ofertas lendárias</div>
              </div>
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  const renderFunnelRecommendationStep = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="text-6xl mb-6">🧭</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          🎯 <span className="gradient-text">Funil Ideal</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Baseado na sua oferta, seu público e sua Big Promise
        </p>
      </div>

      {/* Profile Analysis */}
      <Card className="glass-card border-glass-border">
        <CardHeader>
          <CardTitle className="text-white text-xl">📌 Análise do Perfil</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Tipo de produto:</span>
                <span className="text-blue-400 font-semibold">Curso/Mentoria</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Consciência do público:</span>
                <span className="text-cyan-400 font-semibold">Solução</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Urgência percebida:</span>
                <span className="text-green-400 font-semibold">Alta</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Ticket médio:</span>
                <span className="text-purple-400 font-semibold">Médio</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Funnel Recommendations */}
      <div className="space-y-4">
        <h3 className="text-white text-xl font-semibold text-center mb-6">🎯 Funis Recomendados</h3>
        {funnelTypes.map((funnel, index) => (
          <Card
            key={funnel.id}
            className={`glass-card border-glass-border cursor-pointer transition-all duration-300 hover:scale-105 ${
              index === 0 ? 'ring-2 ring-blue-500 bg-blue-500/5' : ''
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-600' : 'bg-gray-600'
                  }`}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{funnel.name}</h4>
                    {index === 0 && (
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-pink-400" />
                        <span className="text-pink-400 text-sm font-medium">RECOMENDADO</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{funnel.score}</div>
                  <div className="text-gray-400 text-sm">score</div>
                </div>
              </div>
              <p className="text-gray-300 mb-3">{funnel.description}</p>
              <p className="text-blue-400 text-sm">💡 Ideal para: {funnel.ideal}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recommendation Message */}
      <Card className="glass-card border-glass-border bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Brain className="w-8 h-8 text-blue-400" />
            <h3 className="text-white text-xl font-semibold">Recomendação Estratégica</h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Com base na análise do seu produto e audiência, o melhor caminho agora é iniciar com o 
            <strong className="text-blue-400"> Funil VSL Direto</strong>, pois ele entrega 
            <strong className="text-cyan-400"> resultados rápidos</strong> com 
            <strong className="text-green-400"> baixa fricção</strong> para seu tipo de oferta.
          </p>
        </CardContent>
      </Card>

      {/* Assets Generation */}
      <Card className="glass-card border-glass-border">
        <CardHeader>
          <CardTitle className="text-white text-xl text-center">🔨 Gerar Ativos do Funil</CardTitle>
          <p className="text-gray-300 text-center">
            Escolha os ativos que deseja gerar com base na sua oferta otimizada
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {assets.map((asset) => (
              <Card
                key={asset.id}
                className="glass-card border-glass-border cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/5"
                onClick={() => {
                  if (asset.id === 'sales-page') {
                    navigate('/pagina-vendas');
                  }
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      {asset.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-semibold mb-1">{asset.name}</h4>
                      <p className="text-gray-300 text-sm">{asset.description}</p>
                    </div>
                  </div>
                  <p className="text-blue-400 text-xs">📚 Base: {asset.framework}</p>
                  {asset.id === 'sales-page' && (
                    <div className="mt-2">
                      <span className="text-green-400 text-xs font-medium">✨ Clique para criar!</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-dark-gradient">
      {/* Header */}
      <header className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg outsider-gradient flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-white">ExpertOS™</span>
            </div>
            
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>
            )}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
            <div 
              className="outsider-gradient h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm">
            Etapa {currentStep + 1} de {steps.length} - {steps[currentStep].title}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        {currentStep === 0 && renderCongratulationsStep()}
        {currentStep === 1 && renderDiagnosisStep()}
        {currentStep === 2 && renderFunnelRecommendationStep()}

        {/* Navigation */}
        <div className="flex justify-center mt-12">
          {currentStep < steps.length - 1 ? (
            <Button
              onClick={nextStep}
              disabled={currentStep === 1 && !analysisComplete}
              className={`px-8 py-4 text-lg font-semibold text-white ${
                (currentStep !== 1 || analysisComplete)
                  ? 'outsider-gradient hover:opacity-90' 
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
              size="lg"
            >
              {currentStep === 0 ? 'Analisar Minha Oferta' : 'Ver Recomendação de Funil'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Button
              className="outsider-gradient hover:opacity-90 px-8 py-4 text-lg font-semibold text-white"
              size="lg"
            >
              Gerar Ativos do Funil
              <Rocket className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferAnalysis;
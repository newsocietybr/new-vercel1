
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Target, Lightbulb, Rocket, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DiagnosisResult from '@/components/DiagnosisResult';

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    profile: 'promissor' | 'diamante' | 'iniciante';
  }[];
}

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<string | null>(null);
  const [showRoadmap, setShowRoadmap] = useState(false);

  const questions: QuizQuestion[] = [
    {
      id: 'q1',
      question: 'Qual é a sua situação atual no mundo digital?',
      options: [
        { id: 'a1', text: 'Já tenho um produto/serviço funcionando', profile: 'promissor' },
        { id: 'a2', text: 'Tenho muito conhecimento mas não digitalizei', profile: 'diamante' },
        { id: 'a3', text: 'Estou começando do zero', profile: 'iniciante' }
      ]
    },
    {
      id: 'q2',
      question: 'Qual é o seu maior desafio agora?',
      options: [
        { id: 'b1', text: 'Estruturar e escalar o que já funciona', profile: 'promissor' },
        { id: 'b2', text: 'Transformar expertise em produto digital', profile: 'diamante' },
        { id: 'b3', text: 'Descobrir por onde começar', profile: 'iniciante' }
      ]
    },
    {
      id: 'q3',
      question: 'O que você mais precisa agora?',
      options: [
        { id: 'c1', text: 'Funil de vendas e validação', profile: 'promissor' },
        { id: 'c2', text: 'Estratégia de posicionamento', profile: 'diamante' },
        { id: 'c3', text: 'Formação e roadmap claro', profile: 'iniciante' }
      ]
    }
  ];

  const profiles = {
    promissor: {
      title: 'Promissor com Protótipo',
      subtitle: 'Você já tem algo funcionando',
      description: 'Precisa de estrutura e primeiro lançamento para validar',
      color: 'from-blue-500 to-blue-600',
      icon: <Target className="w-8 h-8" />
    },
    diamante: {
      title: 'Diamante Bruto',
      subtitle: 'Conhecimento que vale ouro',
      description: 'Precisa transformar conhecimento offline em oferta digital',
      color: 'from-cyan-500 to-blue-600',
      icon: <Lightbulb className="w-8 h-8" />
    },
    iniciante: {
      title: 'Iniciante Entusiasta',
      subtitle: 'Energia para crescer',
      description: 'Precisa de formação base e clareza para desenvolver produto',
      color: 'from-blue-600 to-cyan-500',
      icon: <Rocket className="w-8 h-8" />
    }
  };

  const handleAnswer = (questionId: string, answerId: string, profile: string) => {
    const newAnswers = { ...answers, [questionId]: answerId };
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calcular resultado baseado nas respostas
      const profileCounts = { promissor: 0, diamante: 0, iniciante: 0 };
      
      questions.forEach(question => {
        const currentAnswer = newAnswers[question.id];
        const option = question.options.find(opt => opt.id === currentAnswer);
        if (option) {
          profileCounts[option.profile]++;
        }
      });
      
      const resultProfile = Object.entries(profileCounts).reduce((a, b) => 
        profileCounts[a[0] as keyof typeof profileCounts] > profileCounts[b[0] as keyof typeof profileCounts] ? a : b
      )[0];
      
      setResult(resultProfile);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
    setShowRoadmap(false);
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStartJourney = () => {
    setShowRoadmap(true);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showRoadmap && result) {
    return (
      <DiagnosisResult 
        profile={result as 'promissor' | 'diamante' | 'iniciante'} 
        onStartJourney={handleStartJourney}
      />
    );
  }

  if (result) {
    const profileData = profiles[result as keyof typeof profiles];
    
    return (
      <div className="min-h-screen bg-dark-gradient">
        <header className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg outsider-gradient flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-white">ExpertOS™</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seu perfil: <span className="gradient-text">{profileData.title}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {profileData.description}
            </p>
          </div>

          <Card className="glass-card border-glass-border mb-8">
            <CardHeader className="text-center">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${profileData.color} flex items-center justify-center mx-auto mb-4 text-white`}>
                {profileData.icon}
              </div>
              <CardTitle className="text-white text-2xl mb-2">
                {profileData.title}
              </CardTitle>
              <p className="text-blue-400 font-medium text-lg">
                {profileData.subtitle}
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-8 text-lg">
                {profileData.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <Button
                  className="w-full outsider-gradient hover:opacity-90 transition-opacity text-lg font-semibold text-white py-4"
                  size="lg"
                >
                  Funil Validado + Copy VSL
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10 text-lg py-4"
                  size="lg"
                  onClick={handleStartJourney}
                >
                  Começar com ExpertOS™ por R$69,90/mês
                </Button>
              </div>
              
              <button
                onClick={resetQuiz}
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                Refazer o quiz
              </button>
            </CardContent>
          </Card>

          <div className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              🤝 Funil Validado + Copy VSL
            </h3>
            <p className="text-gray-300 mb-6">
              Oferecemos parceria estratégica com foco em: funil validado + estratégia de tráfego 
              para quem quer acelerar ainda mais os resultados.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Funil 100% validado</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Estratégia de tráfego</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Fluxos de Automações</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-gradient">
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
                onClick={goBack}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>
            )}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="outsider-gradient h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Pergunta {currentStep + 1} de {questions.length}
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {questions[currentStep].question}
          </h1>
          <p className="text-xl text-gray-300">
            Escolha a opção que mais combina com você
          </p>
        </div>

        <div className="grid gap-6 max-w-2xl mx-auto">
          {questions[currentStep].options.map((option, index) => (
            <Card
              key={option.id}
              className="glass-card border-glass-border cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/5"
              onClick={() => handleAnswer(questions[currentStep].id, option.id, option.profile)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full outsider-gradient flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <p className="text-white text-lg font-medium">
                    {option.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            ⚡ Descubra seu roadmap personalizado em menos de 1 minuto
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

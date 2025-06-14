import React from 'react';
import { ArrowRight, Target, Lightbulb, Rocket, CheckCircle, Play, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';

interface DiagnosisResultProps {
  profile: 'promissor' | 'diamante' | 'iniciante';
  onStartJourney: () => void;
}

const DiagnosisResult: React.FC<DiagnosisResultProps> = ({ profile, onStartJourney }) => {
  const navigate = useNavigate();

  const maturityLevels = {
    iniciante: {
      level: 1,
      name: 'Lançador Iniciante',
      description: 'Você está construindo os fundamentos para escalar sua expertise',
      avatar: '🚀',
      progress: 20,
      message: 'Você está mais perto do que imagina de escalar sua expertise.',
      color: 'from-blue-500 to-cyan-600',
      icon: <Rocket className="w-8 h-8" />
    },
    diamante: {
      level: 3,
      name: 'Especialista Estratégico',
      description: 'Você tem o conhecimento, agora vamos digitalizá-lo',
      avatar: '💎',
      progress: 60,
      message: 'Seu conhecimento é ouro. Hora de transformá-lo em escala.',
      color: 'from-cyan-500 to-blue-600',
      icon: <Lightbulb className="w-8 h-8" />
    },
    promissor: {
      level: 4,
      name: 'Escalador Avançado',
      description: 'Você já tem tração, agora vamos acelerar os resultados',
      avatar: '🎯',
      progress: 80,
      message: 'Você está no caminho certo. Vamos otimizar e escalar.',
      color: 'from-blue-600 to-cyan-500',
      icon: <Target className="w-8 h-8" />
    }
  };

  const roadmapTasks = {
    iniciante: [
      {
        id: 1,
        title: 'Definir Seu Nicho de Ouro',
        description: 'Encontre sua expertise única e posicionamento estratégico',
        icon: '🎯',
        unlocked: true,
        estimated: '15 min'
      },
      {
        id: 2,
        title: 'Criar Sua Primeira Oferta',
        description: 'Estruture um produto digital irresistível',
        icon: '💼',
        unlocked: true,
        estimated: '30 min'
      },
      {
        id: 3,
        title: 'Montar Funil de Validação',
        description: 'Crie sua primeira página de captura e sequência',
        icon: '🔄',
        unlocked: true,
        estimated: '45 min'
      }
    ],
    diamante: [
      {
        id: 1,
        title: 'Mapear Sua Expertise',
        description: 'Transforme conhecimento offline em produto estruturado',
        icon: '🧠',
        unlocked: true,
        estimated: '20 min'
      },
      {
        id: 2,
        title: 'Criar Oferta Irresistível',
        description: 'Desenvolva proposta de valor única e convincente',
        icon: '⚡',
        unlocked: true,
        estimated: '35 min'
      },
      {
        id: 3,
        title: 'Estruturar Entrega Digital',
        description: 'Organize conteúdo em formato escalável',
        icon: '📚',
        unlocked: true,
        estimated: '40 min'
      }
    ],
    promissor: [
      {
        id: 1,
        title: 'Otimizar Funil Atual',
        description: 'Analise e melhore sua conversão existente',
        icon: '📈',
        unlocked: true,
        estimated: '25 min'
      },
      {
        id: 2,
        title: 'Implementar Métricas',
        description: 'Configure dashboard de KPIs estratégicos',
        icon: '📊',
        unlocked: true,
        estimated: '30 min'
      },
      {
        id: 3,
        title: 'Escalar Tráfego',
        description: 'Defina estratégia de crescimento sustentável',
        icon: '🚀',
        unlocked: true,
        estimated: '35 min'
      }
    ]
  };

  const currentProfile = maturityLevels[profile];
  const currentTasks = roadmapTasks[profile];

  const handleStartJourney = () => {
    navigate('/funil-guiado');
  };

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
        {/* Diagnosis Result */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{currentProfile.avatar}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nível {currentProfile.level} – <span className="gradient-text">{currentProfile.name}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {currentProfile.description}
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Maturidade Digital</span>
              <span>{currentProfile.progress}%</span>
            </div>
            <Progress value={currentProfile.progress} className="h-3" />
          </div>
          
          <p className="text-lg text-blue-400 font-medium mb-12">
            {currentProfile.message}
          </p>
        </div>

        {/* Roadmap Section */}
        <Card className="glass-card border-glass-border mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl mb-4">
              🗺️ Seu Roadmap Personalizado
            </CardTitle>
            <p className="text-gray-300">
              Tarefas desbloqueadas com base no seu diagnóstico
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {currentTasks.map((task, index) => (
                <Card
                  key={task.id}
                  className={`glass-card border-glass-border cursor-pointer transition-all duration-300 hover:scale-105 ${
                    task.unlocked ? 'hover:bg-white/5' : 'opacity-60'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full ${
                          task.unlocked 
                            ? `bg-gradient-to-r ${currentProfile.color}` 
                            : 'bg-gray-600'
                        } flex items-center justify-center text-white text-xl`}>
                          {task.unlocked ? task.icon : <Lock className="w-5 h-5" />}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-semibold text-lg">
                            {task.title}
                          </h3>
                          {task.unlocked && (
                            <div className="flex items-center space-x-2">
                              <span className="text-blue-400 text-sm">{task.estimated}</span>
                              <Play className="w-4 h-4 text-blue-400" />
                            </div>
                          )}
                        </div>
                        <p className="text-gray-300">
                          {task.description}
                        </p>
                        {task.unlocked && (
                          <div className="flex items-center space-x-2 mt-3">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 text-sm font-medium">Desbloqueado</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button
                onClick={handleStartJourney}
                className="outsider-gradient hover:opacity-90 transition-opacity px-8 py-4 text-lg font-semibold text-white mb-4"
                size="lg"
              >
                Começar Agora com ExpertOS™
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-gray-400">
                ⚡ Roadmap gamificado + IA estratégica 24h
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass-card border-glass-border">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                🎯 ExpertOS™ Completo
              </h3>
              <p className="text-gray-300 mb-6">
                Plataforma completa com IA estratégica, templates validados e comunidade
              </p>
              <Button
                variant="outline"
                className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10"
              >
                R$69,90/mês
              </Button>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-glass-border">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                🤝 Parceria 50/50
              </h3>
              <p className="text-gray-300 mb-6">
                Funil validado + estratégia de tráfego com divisão de resultados
              </p>
              <Button
                className="w-full outsider-gradient hover:opacity-90 transition-opacity"
              >
                Saber Mais
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResult;

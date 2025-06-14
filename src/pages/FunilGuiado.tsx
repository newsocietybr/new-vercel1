import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Target, Brain, Compass, Lightbulb, Gift, Shield, Zap, Package, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

const FunilGuiado = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [sessionId] = useState<string>(() => crypto.randomUUID());
  const [steps, setSteps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Carregar perguntas do Supabase
  useEffect(() => {
    const loadFunilData = async () => {
      try {
        const { data: funilData, error } = await supabase
          .from('funil')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) {
          console.error('Erro ao carregar funil:', error);
          toast({
            title: "Erro",
            description: "Não foi possível carregar o funil.",
            variant: "destructive",
          });
          return;
        }

        if (funilData) {
          const formattedSteps = funilData.map(step => ({
            id: step.step_id,
            title: step.title,
            subtitle: step.step_id === 'copiloto' || step.step_id === 'melhores-mundo' ? 'Se você tivesse ao seu lado um copiloto digital — com inteligência e repertório dos maiores especialistas em Copywriting, Criação de Ofertas e Construção de Funis' : (step.step_id === 'como-seria' ? 'Agora imagine isso: Você entra em um sistema guiado, onde cada etapa do seu negócio — oferta, copy, página, tráfego e funil — é criada passo a passo ao seu lado.' : step.subtitle),
            icon: getIconForStep(step.step_id),
            color: getColorForStep(step.step_id),
            type: step.type,
            options: step.options,
            placeholder: step.placeholder
          }));
          
          setSteps(formattedSteps);
        }
      } catch (error) {
        console.error('Erro ao carregar funil:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFunilData();
  }, [toast]);

  const getIconForStep = (stepId: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'travado': <Target className="w-8 h-8" />,
      'nao-resolvido': <Brain className="w-8 h-8" />,
      'copiloto': <Rocket className="w-8 h-8" />,
      'futuro': <Compass className="w-8 h-8" />,
      'trava': <Shield className="w-8 h-8" />,
      'melhores-mundo': <Lightbulb className="w-8 h-8" />,
      'como-seria': <Zap className="w-8 h-8" />,
      'final-perfeito': <Gift className="w-8 h-8" />,
      'formato-solucao': <Package className="w-8 h-8" />,
      'cadastro': <CheckCircle className="w-8 h-8" />
    };
    return iconMap[stepId] || <Target className="w-8 h-8" />;
  };

  const getColorForStep = (stepId: string) => {
    const colorMap: { [key: string]: string } = {
      'travado': 'from-red-500 to-orange-600',
      'nao-resolvido': 'from-orange-500 to-red-600',
      'copiloto': 'from-blue-500 to-cyan-600',
      'futuro': 'from-cyan-500 to-blue-600',
      'trava': 'from-blue-600 to-purple-500',
      'melhores-mundo': 'from-purple-500 to-pink-600',
      'como-seria': 'from-pink-500 to-purple-600',
      'final-perfeito': 'from-purple-600 to-blue-500',
      'formato-solucao': 'from-blue-500 to-cyan-600',
      'cadastro': 'from-green-500 to-blue-600'
    };
    return colorMap[stepId] || 'from-blue-500 to-purple-600';
  };

  const currentStepData = steps[currentStep];
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0;

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const saveResponse = async (stepId: string, question: string, answer: string) => {
    try {
      const { error } = await supabase
        .from('funil_response')
        .insert({
          session_id: sessionId,
          step_id: stepId,
          question: question,
          answer: answer
        });

      if (error) {
        console.error('Erro ao salvar resposta:', error);
      }
    } catch (error) {
      console.error('Erro ao salvar resposta:', error);
    }
  };

  const saveRegistration = async (nome: string, email: string, instagram: string) => {
    try {
      const { error } = await supabase
        .from('register_response')
        .insert({
          session_id: sessionId,
          nome: nome,
          email: email,
          instagram: instagram
        });

      if (error) {
        console.error('Erro ao salvar cadastro:', error);
        return false;
      }
      return true;
    } catch (error) {
      console.error('Erro ao salvar cadastro:', error);
      return false;
    }
  };

  const nextStep = async () => {
    if (!currentStepData) return;

    // Salvar resposta atual se não for info ou form
    if (currentStepData.type !== 'info' && currentStepData.type !== 'form') {
      const answer = answers[currentStepData.id];
      if (answer && answer.trim().length > 0) {
        await saveResponse(currentStepData.id, currentStepData.title, answer);
      }
    }

    // Se for o último step (cadastro), salvar dados de registro
    if (currentStepData.type === 'form') {
      const nome = answers['nome'];
      const email = answers['email'];
      const instagram = answers['instagram'];
      
      if (nome && email && instagram) {
        const success = await saveRegistration(nome, email, instagram);
        if (success) {
          toast({
            title: "Sucesso!",
            description: "Seus dados foram salvos com sucesso.",
          });
          // Redirecionar para WhatsApp
          setTimeout(() => {
            window.open('https://chat.whatsapp.com/DpSOJiap5WbFpST7XQEEzJ', '_blank');
          }, 1500);
        } else {
          toast({
            title: "Erro",
            description: "Erro ao salvar seus dados. Tente novamente.",
            variant: "destructive",
          });
        }
      }
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = () => {
    if (!currentStepData) return false;
    if (currentStepData.type === 'info') return true;
    if (currentStepData.type === 'form') {
      return answers['nome'] && answers['email'] && answers['instagram'];
    }
    return answers[currentStepData.id] && answers[currentStepData.id].trim().length > 0;
  };

  const handleWhatsAppRedirect = () => {
    window.open('https://chat.whatsapp.com/DpSOJiap5WbFpST7XQEEzJ', '_blank');
  };

  const renderStepContent = () => {
    if (!currentStepData) return null;

    switch (currentStepData.type) {
      case 'textarea':
        return (
          <div className="glass-card p-6 rounded-lg">
            <Textarea
              placeholder={currentStepData.placeholder}
              value={answers[currentStepData.id] || ''}
              onChange={(e) => handleAnswer(currentStepData.id, e.target.value)}
              className="w-full h-32 p-4 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none backdrop-blur-sm"
            />
          </div>
        );
      
      case 'radio':
        return (
          <div className="glass-card p-6 rounded-lg">
            <RadioGroup
              value={answers[currentStepData.id] || ''}
              onValueChange={(value) => handleAnswer(currentStepData.id, value)}
              className="space-y-4"
            >
              {currentStepData.options?.map((option: string, index: number) => (
                <div key={index} className="flex items-center space-x-3 p-4 glass-card rounded-lg hover:bg-white/5 transition-colors">
                  <RadioGroupItem value={option} id={`option-${index}`} className="border-gray-400" />
                  <Label htmlFor={`option-${index}`} className="text-white cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      
      case 'radio-with-other':
        return (
          <div className="glass-card p-6 rounded-lg space-y-4">
            <RadioGroup
              value={answers[currentStepData.id] || ''}
              onValueChange={(value) => handleAnswer(currentStepData.id, value)}
              className="space-y-4"
            >
              {currentStepData.options?.map((option: string, index: number) => (
                <div key={index} className="flex items-center space-x-3 p-4 glass-card rounded-lg hover:bg-white/5 transition-colors">
                  <RadioGroupItem value={option} id={`option-${index}`} className="border-gray-400" />
                  <Label htmlFor={`option-${index}`} className="text-white cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {answers[currentStepData.id] === 'Outro formato' && (
              <div className="glass-card p-4 rounded-lg">
                <Textarea
                  placeholder="Descreva o formato ideal para você..."
                  value={answers[`${currentStepData.id}_other`] || ''}
                  onChange={(e) => handleAnswer(`${currentStepData.id}_other`, e.target.value)}
                  className="w-full h-20 p-4 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none backdrop-blur-sm"
                />
              </div>
            )}
          </div>
        );
      
      case 'form':
        return (
          <div className="glass-card p-6 rounded-lg space-y-6">
            <div>
              <Label className="text-white mb-2 block">Nome completo</Label>
              <Input
                placeholder="Seu nome completo"
                value={answers['nome'] || ''}
                onChange={(e) => handleAnswer('nome', e.target.value)}
                className="bg-transparent border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">E-mail principal</Label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={answers['email'] || ''}
                onChange={(e) => handleAnswer('email', e.target.value)}
                className="bg-transparent border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">@Instagram</Label>
              <Input
                placeholder="@seuusuario"
                value={answers['instagram'] || ''}
                onChange={(e) => handleAnswer('instagram', e.target.value)}
                className="bg-transparent border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
              />
            </div>
            <div className="mt-8">
              <Button 
                onClick={nextStep}
                disabled={!isStepComplete()}
                className="w-full outsider-gradient text-white font-semibold py-4 text-lg hover:opacity-90"
              >
                🔘 Finalizar e entrar no grupo VIP
              </Button>
            </div>
          </div>
        );
      
      case 'info':
        return (
          <div className="glass-card p-8 text-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              Este é o CopyHack™ em ação - um sistema completo que vai do diagnóstico à execução, 
              sempre ao seu lado como um verdadeiro coprodutor digital.
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-gradient flex items-center justify-center">
        <div className="text-white text-xl">Carregando funil...</div>
      </div>
    );
  }

  if (steps.length === 0) {
    return (
      <div className="min-h-screen bg-dark-gradient flex items-center justify-center">
        <div className="text-white text-xl">Erro ao carregar o funil.</div>
      </div>
    );
  }

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
              <span className="text-xl font-bold text-white">CopyHack™</span>
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
            Etapa {currentStep + 1} de {steps.length}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="text-center mb-12">
          <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentStepData.color} flex items-center justify-center mx-auto mb-6 text-white`}>
            {currentStepData.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚀 <span className="gradient-text">Você Está Pronto para Escalar Sua Expertise?</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {currentStepData.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {currentStepData.subtitle}
          </p>
        </div>

        {/* Step Content */}
        <div className="mb-12">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        {currentStepData.type !== 'form' && (
          <div className="flex justify-center">
            <Button
              onClick={nextStep}
              disabled={!isStepComplete()}
              className={`px-8 py-4 text-lg font-semibold text-white ${
                isStepComplete() 
                  ? 'outsider-gradient hover:opacity-90' 
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
              size="lg"
            >
              {currentStep === steps.length - 1 ? 'Finalizar' : 'Próxima Pergunta'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {!isStepComplete() && currentStepData.type !== 'info' && currentStepData.type !== 'form' && (
          <p className="text-center text-gray-400 mt-4">
            ⚡ Complete sua resposta para continuar
          </p>
        )}
      </div>
    </div>
  );
};

export default FunilGuiado;


import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Target, Lightbulb, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Funnel = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  const profiles = [
    {
      id: 'promissor',
      icon: <Target className="w-8 h-8" />,
      title: 'Promissor com Protótipo',
      subtitle: 'Você já tem algo funcionando',
      description: 'Precisa de estrutura e primeiro lançamento para validar',
      features: [
        'Estruturação do funil de vendas',
        'Validação do protótipo atual',
        'Estratégia de primeiro lançamento',
        'Métricas e análise de resultados'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'diamante',
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Diamante Bruto',
      subtitle: 'Conhecimento que vale ouro',
      description: 'Precisa transformar conhecimento offline em oferta digital',
      features: [
        'Transformação de expertise em produto',
        'Criação de oferta irresistível',
        'Estrutura de entrega digital',
        'Posicionamento estratégico'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'iniciante',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Iniciante Entusiasta',
      subtitle: 'Energia para crescer',
      description: 'Precisa de formação base e clareza para desenvolver produto',
      features: [
        'Formação estratégica completa',
        'Clareza sobre seu nicho',
        'Desenvolvimento de produto',
        'Roadmap personalizado'
      ],
      color: 'from-green-500 to-teal-600'
    }
  ];

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId);
  };

  const handleContinue = () => {
    if (selectedProfile) {
      // Aqui seria o redirecionamento para a próxima etapa do funil
      console.log('Perfil selecionado:', selectedProfile);
    }
  };

  return (
    <div className="min-h-screen bg-dark-gradient">
      {/* Header */}
      <header className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-lg outsider-gradient flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-white">CopyHack™</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Qual é o seu <span className="gradient-text">perfil atual?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada jornada é única. Escolha o perfil que mais combina com você agora 
            e receba um roadmap personalizado para escalar seu negócio digital.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {profiles.map((profile) => (
            <Card
              key={profile.id}
              className={`glass-card border-glass-border cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedProfile === profile.id 
                  ? 'ring-2 ring-purple-500 bg-purple-500/10' 
                  : 'hover:bg-white/5'
              }`}
              onClick={() => handleProfileSelect(profile.id)}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${profile.color} flex items-center justify-center mx-auto mb-4 text-white`}>
                  {profile.icon}
                </div>
                <CardTitle className="text-white text-xl mb-2">
                  {profile.title}
                </CardTitle>
                <p className="text-purple-400 font-medium">
                  {profile.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 text-center">
                  {profile.description}
                </p>
                <div className="space-y-3">
                  {profile.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Button */}
        {selectedProfile && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={handleContinue}
              className="outsider-gradient hover:opacity-90 transition-opacity px-8 py-4 text-lg font-semibold text-white"
              size="lg"
            >
              Continuar com meu perfil
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-gray-400 mt-4">
              ⚡ Roadmap personalizado em menos de 2 minutos
            </p>
          </div>
        )}

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🤝 Parceria 50/50 + Funil Validado
            </h3>
            <p className="text-gray-300 mb-6">
              Além do CopyHack™, oferecemos parceria estratégica com foco em:
              funil validado + estratégia de tráfego para quem quer acelerar ainda mais.
            </p>
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
            >
              Saber mais sobre parceria
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funnel;

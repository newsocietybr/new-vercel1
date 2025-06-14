import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface StepData {
  [key: string]: string;
}

const SalesPageBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepData, setStepData] = useState<StepData>({});
  const { toast } = useToast();

  const totalSteps = 8;

  const updateStepData = (key: string, value: string) => {
    setStepData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateSalesPage = () => {
    // Aqui seria a lógica para gerar a página de vendas final
    toast({
      title: "Página gerada com sucesso!",
      description: "Sua página de vendas foi criada e está pronta para uso.",
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">✨ HEADLINE IRRESISTÍVEL</h2>
              <p className="text-gray-300">A promessa central da sua oferta, escrita de forma simples, poderosa e impossível de ignorar.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Fórmulas para inspirar:</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><strong>Fórmula 1 (Brunson):</strong> [Resultado] em [Tempo] sem [Objeto de repulsa]</p>
                <p><strong>Fórmula 2 (Hormozi):</strong> Ajudo [avatar] a conseguir [resultado] em [prazo] sem [sacrifício]</p>
                <p><strong>Exemplo:</strong> "Fature R$10k como expert em 21 dias — sem aparecer e sem gravar conteúdo."</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Qual o maior benefício tangível da sua oferta?</label>
                <Input
                  value={stepData.benefit || ''}
                  onChange={(e) => updateStepData('benefit', e.target.value)}
                  placeholder="Ex: Faturar R$10k por mês"
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Em quanto tempo ele pode acontecer?</label>
                <Input
                  value={stepData.timeframe || ''}
                  onChange={(e) => updateStepData('timeframe', e.target.value)}
                  placeholder="Ex: 21 dias"
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">O que seu público odeia fazer que você elimina?</label>
                <Input
                  value={stepData.elimination || ''}
                  onChange={(e) => updateStepData('elimination', e.target.value)}
                  placeholder="Ex: aparecer no vídeo, criar conteúdo"
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Sua headline final:</label>
                <Textarea
                  value={stepData.headline || ''}
                  onChange={(e) => updateStepData('headline', e.target.value)}
                  placeholder="Escreva sua headline irresistível aqui..."
                  className="bg-card border-border text-foreground min-h-[100px]"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">💬 SUBHEADLINE QUE CRIA CONTEXTO</h2>
              <p className="text-gray-300">A linha abaixo da headline, que reforça a transformação e mostra que você entende a dor do leitor.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Exemplo:</h3>
              <p className="text-gray-300 italic">"Mesmo que você esteja começando do zero, sem audiência ou experiência anterior."</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Qual maior objeção seu público diria nessa hora?</label>
                <Textarea
                  value={stepData.objection || ''}
                  onChange={(e) => updateStepData('objection', e.target.value)}
                  placeholder="Ex: Mas eu não tenho experiência, não sei por onde começar..."
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Sua subheadline:</label>
                <Textarea
                  value={stepData.subheadline || ''}
                  onChange={(e) => updateStepData('subheadline', e.target.value)}
                  placeholder="Escreva sua subheadline que remove objeções..."
                  className="bg-card border-border text-foreground min-h-[100px]"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">🧠 IDENTIFICAÇÃO COM A DOR</h2>
              <p className="text-gray-300">Mostre que entende profundamente o que o leitor sente, criando empatia e atenção emocional.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Exemplo:</h3>
              <div className="text-gray-300 space-y-2">
                <p>"Se você sente que tá se esforçando demais e mesmo assim nada parece funcionar..."</p>
                <p>"Se você já tentou cursos, mentorias e promessas milagrosas que só esvaziaram sua conta..."</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Que dor real esse público já vive?</label>
                <Textarea
                  value={stepData.pain || ''}
                  onChange={(e) => updateStepData('pain', e.target.value)}
                  placeholder="Descreva a dor principal do seu público..."
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Como ele se sente todo dia por causa disso?</label>
                <Textarea
                  value={stepData.feelings || ''}
                  onChange={(e) => updateStepData('feelings', e.target.value)}
                  placeholder="Descreva os sentimentos e emoções..."
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">O que ele já tentou e falhou?</label>
                <Textarea
                  value={stepData.failures || ''}
                  onChange={(e) => updateStepData('failures', e.target.value)}
                  placeholder="Liste as tentativas anteriores que não funcionaram..."
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Texto de identificação com a dor:</label>
                <Textarea
                  value={stepData.painText || ''}
                  onChange={(e) => updateStepData('painText', e.target.value)}
                  placeholder="Escreva o texto completo de identificação..."
                  className="bg-card border-border text-foreground min-h-[120px]"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">🧨 NOVO VEÍCULO (Mecanismo único)</h2>
              <p className="text-gray-300">Explica por que tudo falhou até agora — e por que a sua solução é diferente.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Exemplo:</h3>
              <div className="text-gray-300 space-y-2">
                <p>"Você não precisa de mais força de vontade. Você precisa de um sistema que funcione mesmo nos dias ruins."</p>
                <p>"E foi exatamente por isso que criei o método X..."</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Por que as soluções comuns não funcionam?</label>
                <Textarea
                  value={stepData.whyFail || ''}
                  onChange={(e) => updateStepData('whyFail', e.target.value)}
                  placeholder="Explique os problemas das soluções tradicionais..."
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Qual o seu método? Como ele resolve isso de forma diferente?</label>
                <Textarea
                  value={stepData.method || ''}
                  onChange={(e) => updateStepData('method', e.target.value)}
                  placeholder="Descreva seu método único..."
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Apresentação do novo veículo:</label>
                <Textarea
                  value={stepData.newVehicle || ''}
                  onChange={(e) => updateStepData('newVehicle', e.target.value)}
                  placeholder="Escreva a apresentação completa do seu método..."
                  className="bg-card border-border text-foreground min-h-[120px]"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">🧰 STACK DE VALOR</h2>
              <p className="text-gray-300">Detalha tudo que está incluso na oferta, destacando o valor percebido de cada parte.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Estrutura exemplo:</h3>
              <div className="text-gray-300 space-y-1 text-sm">
                <p>✅ Treinamento completo Método [Nome] (R$997)</p>
                <p>✅ Planilha de execução semanal (R$197)</p>
                <p>✅ Grupo fechado de suporte (R$497)</p>
                <p>✅ Bônus 1: [nome e benefício] (R$297)</p>
                <p>✅ Bônus 2: [nome e benefício] (R$497)</p>
                <p className="border-t border-gray-600 pt-2 mt-2">
                  <strong>Valor total: R$2.485</strong><br/>
                  <strong className="text-green-400">Hoje por apenas: R$297</strong>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">O que está incluso na entrega? (separe por linhas)</label>
                <Textarea
                  value={stepData.includes || ''}
                  onChange={(e) => updateStepData('includes', e.target.value)}
                  placeholder="Liste todos os itens inclusos, um por linha..."
                  className="bg-card border-border text-foreground min-h-[120px]"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Valores individuais (separe por linhas, mesmo ordem acima)</label>
                <Textarea
                  value={stepData.values || ''}
                  onChange={(e) => updateStepData('values', e.target.value)}
                  placeholder="R$997, R$197, R$497..."
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Valor total:</label>
                  <Input
                    value={stepData.totalValue || ''}
                    onChange={(e) => updateStepData('totalValue', e.target.value)}
                    placeholder="R$2.485"
                    className="bg-card border-border text-foreground"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Preço final:</label>
                  <Input
                    value={stepData.finalPrice || ''}
                    onChange={(e) => updateStepData('finalPrice', e.target.value)}
                    placeholder="R$297"
                    className="bg-card border-border text-foreground"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">🛡 GARANTIA</h2>
              <p className="text-gray-300">Mostra que a decisão é segura — e que o risco está todo com você, não com o cliente.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Exemplo:</h3>
              <p className="text-gray-300 italic">"Se você aplicar os 3 primeiros módulos e não ver progresso, devolvo 100% do valor. Sem letras miúdas."</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Tipo de garantia:</label>
                <select 
                  value={stepData.guaranteeType || ''}
                  onChange={(e) => updateStepData('guaranteeType', e.target.value)}
                  className="w-full p-3 rounded-md bg-card border border-border text-foreground"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="incondicional">Incondicional (sem perguntas)</option>
                  <option value="condicional">Condicional (com critérios)</option>
                  <option value="dupla">Dupla garantia (dinheiro + bônus)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white mb-2">Período da garantia:</label>
                <Input
                  value={stepData.guaranteePeriod || ''}
                  onChange={(e) => updateStepData('guaranteePeriod', e.target.value)}
                  placeholder="Ex: 7 dias, 30 dias"
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Texto da garantia:</label>
                <Textarea
                  value={stepData.guaranteeText || ''}
                  onChange={(e) => updateStepData('guaranteeText', e.target.value)}
                  placeholder="Escreva o texto completo da sua garantia..."
                  className="bg-card border-border text-foreground min-h-[100px]"
                />
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">🗣 PROVAS SOCIAIS</h2>
              <p className="text-gray-300">Mostra que outras pessoas confiaram, aplicaram e tiveram resultado.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Opções:</h3>
              <div className="text-gray-300 space-y-1 text-sm">
                <p>• Print de depoimentos</p>
                <p>• Mini-histórias de transformação</p>
                <p>• Frases do tipo: "Já são mais de 2.000 alunos que..."</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Você tem provas sociais reais?</label>
                <Textarea
                  value={stepData.socialProof || ''}
                  onChange={(e) => updateStepData('socialProof', e.target.value)}
                  placeholder="Descreva suas provas sociais (depoimentos, números, casos...)..."
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">História de transformação (caso tenha):</label>
                <Textarea
                  value={stepData.successStory || ''}
                  onChange={(e) => updateStepData('successStory', e.target.value)}
                  placeholder="Conte uma história curta de alguém que aplicou e teve resultado..."
                  className="bg-card border-border text-foreground min-h-[100px]"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Seção de provas sociais:</label>
                <Textarea
                  value={stepData.socialProofSection || ''}
                  onChange={(e) => updateStepData('socialProofSection', e.target.value)}
                  placeholder="Escreva a seção completa de provas sociais..."
                  className="bg-card border-border text-foreground min-h-[120px]"
                />
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">🚪 CALL TO ACTION</h2>
              <p className="text-gray-300">O momento de pedir o clique. Sem medo, sem enrolação.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-4">Exemplo:</h3>
              <div className="text-gray-300 space-y-2">
                <p>"Clique no botão abaixo e garanta sua vaga agora."</p>
                <p>"Você pode continuar se frustrando ou começar a ver resultado ainda essa semana."</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Texto do botão:</label>
                <Input
                  value={stepData.buttonText || ''}
                  onChange={(e) => updateStepData('buttonText', e.target.value)}
                  placeholder="Ex: Quero minha vaga, Começar agora"
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Tem escassez? (vagas, tempo, bônus)</label>
                <Textarea
                  value={stepData.scarcity || ''}
                  onChange={(e) => updateStepData('scarcity', e.target.value)}
                  placeholder="Descreva elementos de escassez se houver..."
                  className="bg-card border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Call to action completo:</label>
                <Textarea
                  value={stepData.ctaText || ''}
                  onChange={(e) => updateStepData('ctaText', e.target.value)}
                  placeholder="Escreva o CTA completo com urgência e motivação..."
                  className="bg-card border-border text-foreground min-h-[100px]"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            📜 ESTRUTURA GUIADA — Página de Vendas
          </h1>
          <p className="text-gray-300 text-lg">
            Cada passo gera um bloco da sua página. No final, você terá uma estrutura de copy pronta.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">Passo {currentStep} de {totalSteps}</span>
            <span className="text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% concluído</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="outsider-gradient h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <Card className="glass-card border-glass-border mb-8">
          <CardContent className="p-8">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={prevStep}
            disabled={currentStep === 1}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </Button>

          {currentStep === totalSteps ? (
            <Button
              onClick={generateSalesPage}
              className="outsider-gradient hover:opacity-90 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Gerar Página de Vendas</span>
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="outsider-gradient hover:opacity-90 flex items-center space-x-2"
            >
              <span>Próximo</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Preview */}
        {currentStep === totalSteps && (
          <Card className="glass-card border-glass-border mt-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Preview da Página de Vendas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 text-gray-300">
                {stepData.headline && (
                  <div>
                    <h3 className="text-white font-semibold mb-2">Headline:</h3>
                    <p className="text-xl font-bold">{stepData.headline}</p>
                  </div>
                )}
                
                {stepData.subheadline && (
                  <div>
                    <h3 className="text-white font-semibold mb-2">Subheadline:</h3>
                    <p>{stepData.subheadline}</p>
                  </div>
                )}
                
                {stepData.painText && (
                  <div>
                    <h3 className="text-white font-semibold mb-2">Identificação com a Dor:</h3>
                    <p>{stepData.painText}</p>
                  </div>
                )}
                
                {/* ... outros blocos do preview */}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SalesPageBuilder;
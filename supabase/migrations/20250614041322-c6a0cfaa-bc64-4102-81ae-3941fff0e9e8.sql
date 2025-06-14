-- Tabela para armazenar as perguntas do funil
CREATE TABLE public.funil (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  step_id TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  type TEXT NOT NULL,
  options JSONB,
  placeholder TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela para armazenar as respostas do funil
CREATE TABLE public.funil_response (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL,
  step_id TEXT NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  FOREIGN KEY (step_id) REFERENCES public.funil(step_id)
);

-- Tabela para armazenar os dados de cadastro (nome, email, instagram)
CREATE TABLE public.register_response (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  instagram TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Inserir as perguntas do funil na tabela funil
INSERT INTO public.funil (step_id, title, subtitle, type, options, placeholder) VALUES
('travado', '🔍 Onde você sente que está travado hoje?', 'Hoje, quanto de tempo, energia ou faturamento você acredita estar perdendo por ainda não ter uma estrutura escalável — que funcione sem depender só de você?', 'textarea', NULL, 'Ex: Perco muito tempo em tarefas repetitivas, não consigo vender sem estar presente...'),
('nao-resolvido', '❓ Por que isso ainda não foi resolvido?', 'O que você acha que precisa dominar (mas ainda não domina) para finalmente escalar seu conhecimento no digital? (Ex: copy, tráfego, tecnologia, vendas...)', 'textarea', NULL, 'Ex: Não sei criar funis, copy não converte, não entendo de tráfego...'),
('copiloto', '🤝 E se tivesse alguém construindo isso com você?', 'Se você tivesse ao seu lado um copiloto digital — com inteligência e repertório de especialistas como Hormozi (ofertas), Halbert (copy), Brunson (funis), Collier (persuasão)... O que você finalmente tiraria do papel sem precisar carregar tudo sozinho?', 'textarea', NULL, 'Ex: Finalmente criaria meu curso online, automatizaria vendas, escalaria sem depender só de mim...'),
('futuro', '🎯 Imagine sua rotina 6 meses no futuro...', 'Se daqui a 6 meses você estivesse rodando um funil previsível, com vendas diárias e liberdade de tempo… Como seria sua rotina ideal? O que você estaria fazendo (ou deixando de fazer)?', 'textarea', NULL, 'Ex: Trabalharia 4h por dia, viajaria mais, focaria só na estratégia...'),
('trava', '🚧 E o que ainda te trava?', 'Mesmo com um sistema ao seu lado, o que ainda te trava? É dúvida técnica? Medo de não dar certo? Sensação de que ainda falta alguma coisa?', 'textarea', NULL, 'Ex: Medo de não funcionar, falta de tempo para implementar, não sei por onde começar...'),
('melhores-mundo', '⭐ E se você pudesse contar com os melhores?', 'Imagine ter um copiloto estratégico formado pelos maiores especialistas em Copywriting, Criação de Ofertas e Construção de Funis. Todos pensando e executando com você, 24h por dia. 👉 Isso faria diferença no seu negócio?', 'radio', '["Sim, com certeza", "Talvez, me conta mais", "Não agora"]', NULL),
('como-seria', '🔧 Como seria esse processo com o CopyHack™?', 'Agora imagine isso: Você entra em um sistema guiado, onde cada etapa do seu negócio — oferta, copy, página, tráfego e funil — é criada passo a passo ao seu lado. Com ferramentas de IA e estratégias validadas pelos maiores especialistas em Copywriting, Criação de Ofertas e Construção de Funis. Tudo validado por um simulador financeiro e um roadmap visual — como se você tivesse um coprodutor experiente te guiando em cada decisão.', 'info', NULL, NULL),
('final-perfeito', '🏆 Qual seria o final perfeito desse processo?', 'Ao final desse processo, o que você gostaria que estivesse 100% pronto, funcionando e gerando resultado? (Ex: funil rodando, tráfego ativado, VSL no ar, vendas acontecendo...)', 'textarea', NULL, 'Ex: Quero um funil completo rodando, gerando R$10k por mês automaticamente...'),
('formato-solucao', '💡 Como você gostaria que essa solução ganhasse vida?', 'Se esse sistema realmente entregasse uma solução completa — da ideia à execução... Qual seria o formato ideal pra você?', 'radio-with-other', '["Uma página de vendas profissional já pronta com minha copy", "Um funil completo configurado com e-mails, VSL e automações", "Um dashboard no Notion com todas as estratégias, copies e execução organizadas", "Um chatbot treinado com meu projeto pra me guiar passo a passo", "Outro formato"]', NULL),
('cadastro', '🎉 Parabéns — agora é com você.', 'Parabéns — você está entre os primeiros especialistas convidados a acessar o CopyHack™: O sistema que pensa, estrutura e executa com você como se fosse um verdadeiro coprodutor digital. Estamos montando um grupo VIP, com vagas limitadas, para liberar o acesso antes do lançamento oficial. 👉 Você quer estar lá?', 'form', NULL, NULL);

-- Adicionar RLS (Row Level Security) nas tabelas
ALTER TABLE public.funil ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.funil_response ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.register_response ENABLE ROW LEVEL SECURITY;

-- Políticas para permitir leitura pública da tabela funil (perguntas)
CREATE POLICY "Allow public read access to funil" 
ON public.funil FOR SELECT 
USING (true);

-- Políticas para permitir inserção pública nas tabelas de respostas
CREATE POLICY "Allow public insert to funil_response" 
ON public.funil_response FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public insert to register_response" 
ON public.register_response FOR INSERT 
WITH CHECK (true);

-- Políticas para permitir leitura das próprias respostas (baseado no session_id)
CREATE POLICY "Allow read own funil_response" 
ON public.funil_response FOR SELECT 
USING (true);

CREATE POLICY "Allow read own register_response" 
ON public.register_response FOR SELECT 
USING (true);

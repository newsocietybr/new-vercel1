import React from 'react';
import { ArrowRight, Check, Gift, Star } from 'lucide-react';

const Offer = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Special Offer Card */}
        <div className="glass-card p-8 mb-16 hover-lift animate-slide-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full mb-4">
              <Gift className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">OFERTA ESPECIAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              💣 CopyHack™: O gerador de ofertas irresistíveis, copies milionárias
            </h2>
            <p className="text-gray-300 text-lg">
              O sistema que cria páginas, e-mails e VSLs em minutos usando estratégias dos maiores especialistas em Copywriting, Criação de Ofertas e Construção de Funis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-gray-300">
                <p>🎁 <strong className="text-white">Curso bônus: "Oferta Automática" (R$997) → De graça hoje</strong></p>
                <p>Você não precisa de mais uma mentoria.</p>
                <p>Precisa de um sistema que pensa como um coprodutor experiente e te guia com clareza do ponto A até o lucro.</p>
              </div>
              
              <div className="glass-card p-4 border border-purple-500/30">
                <div className="text-center">
                  <div className="text-gray-400 line-through mb-1">Valor R$997,00</div>
                  <div className="text-2xl font-bold text-white">DE GRAÇA HOJE!</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=600&q=80"
                  alt="CopyHack™"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full floating-element"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full floating-element" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-blue-500 rounded-full floating-element" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Access Bundle */}
        <div className="glass-card p-8 text-center hover-lift animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=400&q=80"
              alt="ExpertOS™"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Comece agora por apenas R$69,90/mês
            </h3>
          </div>
          
          <button className="w-full outsider-gradient py-4 px-8 rounded-xl hover:opacity-90 transition-opacity group mb-6">
            <span className="text-white font-bold text-lg flex items-center justify-center space-x-2">
              <span>Validar ideia</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-400" />
              <span>🟢 Acesso imediato</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-400" />
              <span>🟢 Garantia de 7 dias</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-400" />
              <span>🟢 Suporte incluso</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-400" />
              <span>🟢 IA estratégica 24h no seu negócio</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">🔒 Garantia ativada | Sem risco | Sem enrolação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

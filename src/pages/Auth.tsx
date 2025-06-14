
import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a lógica de autenticação
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-dark-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg outsider-gradient flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold text-white">ExpertOS™</span>
          </div>
          <p className="text-gray-300">
            {isLogin ? 'Acesse sua conta' : 'Crie sua conta'} e transforme sua expertise em negócio digital
          </p>
        </div>

        <Card className="glass-card border-glass-border">
          <CardHeader>
            <CardTitle className="text-white text-center">
              {isLogin ? 'Fazer Login' : 'Criar Conta'}
            </CardTitle>
            <CardDescription className="text-gray-300 text-center">
              {isLogin 
                ? 'Entre com suas credenciais para continuar'
                : 'Preencha os dados para começar sua jornada'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-black/20 border-glass-border text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              )}
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-black/20 border-glass-border text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Senha"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-black/20 border-glass-border text-white placeholder:text-gray-400 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {!isLogin && (
                <div className="relative">
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar senha"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-black/20 border-glass-border text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full outsider-gradient hover:opacity-90 transition-opacity text-white font-semibold"
              >
                {isLogin ? 'Entrar no ExpertOS™' : 'Começar agora'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                {isLogin 
                  ? 'Não tem conta? Criar conta gratuita'
                  : 'Já tem conta? Fazer login'
                }
              </button>
            </div>

            {isLogin && (
              <div className="mt-4 text-center">
                <button className="text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  Esqueceu sua senha?
                </button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            🔒 Seus dados estão seguros | 7 dias de garantia total
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;

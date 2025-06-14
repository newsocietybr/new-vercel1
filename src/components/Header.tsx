import React from 'react';
import { ArrowRight, Menu, Bell, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleValidarIdeia = () => {
    navigate('/funil-guiado');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg outsider-gradient flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-white">CopyHack™</span>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors">
                <Search className="w-5 h-5 text-gray-300" />
              </button>
              <button className="p-2 rounded-lg glass-card hover:bg-white/10 transition-colors">
                <Bell className="w-5 h-5 text-gray-300" />
              </button>
              <button
                onClick={handleValidarIdeia}
                className="hidden md:flex items-center space-x-2 outsider-gradient px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <span className="text-white font-medium">Validar ideia</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button className="md:hidden p-2 rounded-lg glass-card hover:bg-white/10 transition-colors">
                <Menu className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

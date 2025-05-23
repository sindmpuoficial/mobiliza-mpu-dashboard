import React, { useState, useEffect } from 'react';
import { Map, Info, BarChart2, DownloadCloud, RefreshCw, Lock, Unlock, LogOut } from 'lucide-react';
import { isAuthenticated, logout } from '../services/authService';
import LoginModal from './LoginModal';

const Header = ({ 
  viewMode, 
  setViewMode, 
  exportFullReport, 
  resetData, 
  isExporting,
  isEditMode,
  setIsEditMode
}) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Verificar autenticação ao carregar o componente
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = isAuthenticated();
      setIsAdmin(authStatus);
      if (!authStatus) {
        setIsEditMode(false);
      }
    };
    
    checkAuth();
    
    // Verificar autenticação a cada minuto para expiração automática
    const interval = setInterval(checkAuth, 60000);
    
    return () => clearInterval(interval);
  }, [setIsEditMode]);
  
  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };
  
  const handleLoginSuccess = () => {
    setIsAdmin(true);
    setIsEditMode(true); // Ativar modo de edição automaticamente após login
    setIsLoginModalOpen(false);
  };
  
  const handleLogout = () => {
    logout();
    setIsAdmin(false);
    setIsEditMode(false);
  };
  
  const handleReset = () => {
    if (isAdmin && window.confirm('Tem certeza que deseja resetar todos os dados para os valores iniciais? Esta ação não pode ser desfeita.')) {
      resetData();
    }
  };

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold">#MobilizaMPU - Dashboard de Adesão à Mobilização</h1>
            <p className="text-sm mt-1">Acompanhamento em tempo real da mobilização nacional do SindMPU</p>
            <p className="text-xs mt-1">
              Última atualização: {new Date().toLocaleString()}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            <button
              onClick={() => setViewMode('map')}
              className={`p-2 rounded-md flex items-center ${viewMode === 'map' ? 'bg-white text-blue-900' : 'bg-blue-800 hover:bg-blue-700'}`}
              title="Mapa"
            >
              <Map size={20} className="mr-1" />
              <span className="hidden sm:inline">Mapa</span>
            </button>
            <button
              onClick={() => setViewMode('cities')}
              className={`p-2 rounded-md flex items-center ${viewMode === 'cities' ? 'bg-white text-blue-900' : 'bg-blue-800 hover:bg-blue-700'}`}
              title="Unidades"
            >
              <Info size={20} className="mr-1" />
              <span className="hidden sm:inline">Unidades</span>
            </button>
            <button
              onClick={() => setViewMode('stats')}
              className={`p-2 rounded-md flex items-center ${viewMode === 'stats' ? 'bg-white text-blue-900' : 'bg-blue-800 hover:bg-blue-700'}`}
              title="Estatísticas"
            >
              <BarChart2 size={20} className="mr-1" />
              <span className="hidden sm:inline">Estatísticas</span>
            </button>
            <button
              onClick={exportFullReport}
              disabled={isExporting}
              className="p-2 rounded-md flex items-center bg-blue-800 hover:bg-blue-700 disabled:bg-blue-950"
              title="Exportar relatório completo"
            >
              <DownloadCloud size={20} className="mr-1" />
              <span className="hidden sm:inline">Exportar</span>
            </button>
            
            {isAdmin ? (
              <>
                {/* Botão de Reset - Visível apenas para admins */}
                <button
                  onClick={handleReset}
                  className="p-2 rounded-md flex items-center bg-red-700 hover:bg-red-600"
                  title="Resetar dados"
                >
                  <RefreshCw size={20} className="mr-1" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
                
                {/* Botão para habilitar/desabilitar modo de edição */}
                <button
                  onClick={() => setIsEditMode(!isEditMode)}
                  className={`p-2 rounded-md flex items-center ${isEditMode ? 'bg-green-600 hover:bg-green-700' : 'bg-yellow-600 hover:bg-yellow-700'}`}
                  title={isEditMode ? "Desativar modo de edição" : "Ativar modo de edição"}
                >
                  {isEditMode ? <Unlock size={20} className="mr-1" /> : <Lock size={20} className="mr-1" />}
                  <span className="hidden sm:inline">{isEditMode ? "Edição" : "Editar"}</span>
                </button>
                
                {/* Botão de logout */}
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-md flex items-center bg-gray-600 hover:bg-gray-700"
                  title="Sair do modo administrador"
                >
                  <LogOut size={20} className="mr-1" />
                  <span className="hidden sm:inline">Sair</span>
                </button>
              </>
            ) : (
              /* Botão de login - Visível apenas para não-admins */
              <button
                onClick={handleLogin}
                className="p-2 rounded-md flex items-center bg-gray-700 hover:bg-gray-800"
                title="Acesso administrativo"
              >
                <Lock size={20} className="mr-1" />
                <span className="hidden sm:inline">Admin</span>
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Indicador de modo de edição */}
      {isAdmin && isEditMode && (
        <div className="bg-green-600 text-white text-center py-1 text-sm">
          Modo de edição ativado - Clique nos estados ou unidades para editar os dados
        </div>
      )}
      
      {/* Modal de Login */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </header>
  );
};

export default Header;
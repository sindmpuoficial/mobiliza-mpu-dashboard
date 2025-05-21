import React, { useState } from 'react';
import { X, LogIn } from 'lucide-react';
import { authenticate } from '../services/authService';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Pequeno atraso para simular verificação
    setTimeout(() => {
      const isAuthenticated = authenticate(password);
      
      if (isAuthenticated) {
        setPassword('');
        onLoginSuccess();
      } else {
        setError('Senha incorreta. Tente novamente.');
      }
      
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-blue-900">Acesso Administrativo</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mb-4 text-sm text-gray-600">
          Esta área é restrita a administradores. Digite a senha para acessar as funcionalidades de edição.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Senha de Administrador
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite a senha"
              required
            />
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 flex items-center"
            >
              {isLoading ? (
                <>
                  <span className="mr-2">Verificando...</span>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </>
              ) : (
                <>
                  <LogIn size={16} className="mr-2" />
                  Entrar
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
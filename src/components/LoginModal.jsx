// src/components/LoginModal.jsx
import React, { useState } from 'react';

function LoginModal() {
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'sindmpu2025') {  // Substitua pela sua senha
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('adminExpiry', Date.now() + (4 * 60 * 60 * 1000)); // 4 horas
      setIsAdmin(true);
      setShowModal(false);
      window.location.reload(); // Força um reload para atualizar o estado
    } else {
      setError('Senha incorreta');
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminExpiry');
    setIsAdmin(false);
    window.location.reload(); // Força um reload para atualizar o estado
  };
  
  // Verificar autenticação ao carregar
  React.useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    const adminExpiry = localStorage.getItem('adminExpiry');
    
    if (storedIsAdmin && adminExpiry && parseInt(adminExpiry) > Date.now()) {
      setIsAdmin(true);
    } else {
      // Limpar se expirado
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('adminExpiry');
    }
  }, []);
  
  return (
    <div>
      {/* Botão de login/logout */}
      {isAdmin ? (
        <button 
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout Admin
        </button>
      ) : (
        <button 
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login Admin
        </button>
      )}
      
      {/* Modal de login */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-w-full">
            <h2 className="text-xl font-bold mb-4">Login Administrador</h2>
            
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Digite a senha de administrador"
                />
                {error && <p className="text-red-500 mt-1">{error}</p>}
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;
// src/components/EditModal.jsx
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

function EditModal({ 
  isOpen, 
  onClose, 
  data, 
  onSave, 
  type = 'state'  // 'state' ou 'city'
}) {
  const [value, setValue] = useState(data?.value || 0);
  const [adheringServers, setAdheringServers] = useState(data?.adheringServers || 0);
  const [totalServers, setTotalServers] = useState(data?.totalServers || 0);
  const [error, setError] = useState('');

  // Atualizar estados quando os dados mudam
  useEffect(() => {
    if (data) {
      setValue(data.value || 0);
      setAdheringServers(data.adheringServers || 0);
      setTotalServers(data.totalServers || 0);
    }
  }, [data]);

  if (!isOpen || !data) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validações
    if (value < 0 || value > 100) {
      setError('O percentual deve estar entre 0 e 100');
      return;
    }
    
    if (type === 'city' && totalServers > 0 && adheringServers > totalServers) {
      setError('O número de servidores aderindo não pode ser maior que o total');
      return;
    }

    // Preparar dados para salvar
    const updatedData = { ...data, value };
    
    // Adicionar campos específicos para cidades
    if (type === 'city') {
      updatedData.adheringServers = adheringServers;
      updatedData.totalServers = totalServers;
      
      // Calcular percentual automaticamente se tiver dados de servidores
      if (totalServers > 0) {
        updatedData.value = Math.round((adheringServers / totalServers) * 100);
      }
    }
    
    onSave(updatedData);
    onClose();
  };

  // Verificar se tem permissão para editar
  const isEditAllowed = () => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    const adminExpiry = localStorage.getItem('adminExpiry');
    const isEditMode = localStorage.getItem('isEditMode') === 'true';
    
    return storedIsAdmin && 
           adminExpiry && 
           parseInt(adminExpiry) > Date.now() && 
           isEditMode;
  };

  // Se não tiver permissão, não mostrar o modal
  if (!isEditAllowed()) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {type === 'state' 
              ? `Editar Estado: ${data.name}` 
              : `Editar Unidade: ${data.city}`}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Campos para editar uma cidade */}
          {type === 'city' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Total de Servidores</label>
                <input
                  type="number"
                  value={totalServers}
                  onChange={(e) => setTotalServers(parseInt(e.target.value) || 0)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Servidores Aderindo</label>
                <input
                  type="number"
                  value={adheringServers}
                  onChange={(e) => setAdheringServers(parseInt(e.target.value) || 0)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <label className="block text-gray-700">Percentual Calculado</label>
                  <span className="text-sm text-gray-500">
                    {totalServers > 0 
                      ? `${Math.round((adheringServers / totalServers) * 100)}%` 
                      : 'N/A'}
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded mt-2">
                  <div 
                    className="h-2 bg-blue-600 rounded" 
                    style={{ 
                      width: totalServers > 0 
                        ? `${Math.min(100, Math.round((adheringServers / totalServers) * 100))}%` 
                        : '0%' 
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Percentual Manual (use apenas se não tiver dados de servidores)
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(parseInt(e.target.value) || 0)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                  max="100"
                />
              </div>
            </>
          )}
          
          {/* Campo para editar um estado */}
          {type === 'state' && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Percentual de Adesão</label>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value) || 0)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                max="100"
              />
              <div className="h-2 w-full bg-gray-200 rounded mt-2">
                <div 
                  className="h-2 bg-blue-600 rounded" 
                  style={{ width: `${Math.min(100, value)}%` }}
                ></div>
              </div>
            </div>
          )}
          
          {error && <p className="text-red-500 mb-4">{error}</p>}
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
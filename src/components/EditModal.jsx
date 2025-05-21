import React from 'react';
import { X, Save } from 'lucide-react';
import { getColorByPercentage } from '../utils/colorUtils';

const EditModal = ({ 
  editMode, 
  setEditMode, 
  selectedState, 
  selectedCity, 
  editData, 
  handleEditChange, 
  handleSaveEdit 
}) => {
  if (!editMode) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">
            {selectedState && `Editar ${selectedState.state}`}
            {selectedCity && ` - ${selectedCity.city} (${selectedCity.organ})`}
          </h3>
          <button 
            onClick={() => setEditMode(false)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        {selectedState && (
          <div className="mb-4">
            <div className="block text-sm font-medium mb-1">Adesão geral do estado (%)</div>
            <input
              type="number"
              value={editData.stateValue}
              onChange={(e) => handleEditChange('stateValue', e.target.value)}
              min="0"
              max="100"
              className="w-full p-2 border rounded"
            />
            <div 
              className="h-2 mt-1 rounded-full" 
              style={{backgroundColor: getColorByPercentage(editData.stateValue)}}
            />
          </div>
        )}
        
        {selectedCity && (
          <div className="mb-4">
            <div className="block text-sm font-medium mb-1">Adesão nesta unidade (%)</div>
            <input
              type="number"
              value={editData.cityValue}
              onChange={(e) => handleEditChange('cityValue', e.target.value)}
              min="0"
              max="100"
              className="w-full p-2 border rounded"
            />
            <div 
              className="h-2 mt-1 rounded-full" 
              style={{backgroundColor: getColorByPercentage(editData.cityValue)}}
            />
          </div>
        )}
        
        <div className="mb-4">
          <div className="block text-sm font-medium mb-1">Observações</div>
          <textarea
            value={editData.notes}
            onChange={(e) => handleEditChange('notes', e.target.value)}
            className="w-full p-2 border rounded"
            rows="3"
            placeholder="Adicione observações sobre a situação da mobilização..."
          />
        </div>
        
        <div className="mb-4">
          <div className="block text-sm font-medium mb-1">Data da atualização</div>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString()} às {new Date().toLocaleTimeString()}
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={() => setEditMode(false)}
            className="mr-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            onClick={handleSaveEdit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
          >
            <Save size={16} className="mr-2" />
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
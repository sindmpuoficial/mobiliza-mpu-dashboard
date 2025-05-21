import React from 'react';
import { Edit } from 'lucide-react';
import { getColorByPercentage } from '../utils/colorUtils';

const DetailPanel = ({ 
  selectedState, 
  selectedCity, 
  nationalAverage, 
  setEditMode,
  isEditModeEnabled
}) => {
  if (!selectedState && !selectedCity) return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Adesão Nacional</h2>
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="text-6xl font-bold" style={{ color: getColorByPercentage(nationalAverage) }}>
            {nationalAverage}%
          </div>
          <div className="text-gray-500 mt-2">Média de adesão em todo o Brasil</div>
          <div className="text-sm text-gray-400 mt-4">
            Selecione um estado no mapa para ver mais detalhes
          </div>
        </div>
      </div>
    </div>
  );
  
  // Mostrar detalhes do estado selecionado
  if (selectedState && !selectedCity) {
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Estado Selecionado</h2>
        <div className="text-center py-6">
          <div className="text-4xl font-bold" style={{ color: getColorByPercentage(selectedState.value) }}>
            {selectedState.state} ({selectedState.id})
          </div>
          <div className="text-5xl font-bold mt-4" style={{ color: getColorByPercentage(selectedState.value) }}>
            {selectedState.value}%
          </div>
          <div className="text-gray-500 mt-2">de adesão à mobilização</div>
          
          <div className="w-full max-w-xs mx-auto mt-6">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="h-4 rounded-full" 
                style={{ 
                  width: `${selectedState.value}%`, 
                  backgroundColor: getColorByPercentage(selectedState.value) 
                }}
              />
            </div>
          </div>
          
          <div className="mt-8">
            {isEditModeEnabled ? (
              <button
                onClick={() => setEditMode(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <Edit size={16} className="inline mr-2" />
                Editar Dados
              </button>
            ) : (
              <div className="text-sm text-gray-500 italic">
                Faça login como administrador para editar dados
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  // Mostrar detalhes da cidade selecionada
  if (selectedCity) {
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Unidade Selecionada</h2>
        <div className="text-center py-6">
          <div className="text-xl font-bold" style={{ color: getColorByPercentage(selectedCity.value) }}>
            {selectedCity.organ}
          </div>
          <div className="text-2xl font-bold" style={{ color: getColorByPercentage(selectedCity.value) }}>
            {selectedCity.city} - {selectedCity.state}
          </div>
          <div className="text-5xl font-bold mt-4" style={{ color: getColorByPercentage(selectedCity.value) }}>
            {selectedCity.value}%
          </div>
          <div className="text-gray-500 mt-2">de adesão à mobilização</div>
          
          <div className="w-full max-w-xs mx-auto mt-6">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="h-4 rounded-full" 
                style={{ 
                  width: `${selectedCity.value}%`, 
                  backgroundColor: getColorByPercentage(selectedCity.value) 
                }}
              />
            </div>
          </div>
          
          <div className="mt-8">
            {isEditModeEnabled ? (
              <button
                onClick={() => setEditMode(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <Edit size={16} className="inline mr-2" />
                Editar Dados
              </button>
            ) : (
              <div className="text-sm text-gray-500 italic">
                Faça login como administrador para editar dados
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  return null;
};

export default DetailPanel;
import React from 'react';
import { getColorByPercentage } from '../utils/colorUtils';
import { regions } from '../data/constants';

const BrazilMap = ({ statesData, selectedState, handleStateClick }) => {
  return (
    <div className="p-4 relative min-h-96 flex justify-center items-center">
      <div className="text-center text-gray-500 mb-4">
        <h3 className="font-bold">Mapa de Adesão por Regiões e Estados</h3>
        <p className="text-xs mt-1">Clique em um estado para ver detalhes</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        {/* Norte */}
        <div className="flex flex-col items-center">
          <div className="text-sm font-bold mb-2">Região Norte</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {statesData.filter(s => s.region === "Norte").map(state => (
              <button
                key={state.id}
                onClick={() => handleStateClick(state)}
                className={`w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform hover:scale-110 ${selectedState?.id === state.id ? 'ring-4 ring-yellow-400' : ''}`}
                style={{ backgroundColor: getColorByPercentage(state.value) }}
              >
                {state.id}
              </button>
            ))}
          </div>
        </div>

        {/* Nordeste */}
        <div className="flex flex-col items-center">
          <div className="text-sm font-bold mb-2">Região Nordeste</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {statesData.filter(s => s.region === "Nordeste").map(state => (
              <button
                key={state.id}
                onClick={() => handleStateClick(state)}
                className={`w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform hover:scale-110 ${selectedState?.id === state.id ? 'ring-4 ring-yellow-400' : ''}`}
                style={{ backgroundColor: getColorByPercentage(state.value) }}
              >
                {state.id}
              </button>
            ))}
          </div>
        </div>

        {/* Centro-Oeste */}
        <div className="flex flex-col items-center">
          <div className="text-sm font-bold mb-2">Centro-Oeste</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {statesData.filter(s => s.region === "Centro-Oeste").map(state => (
              <button
                key={state.id}
                onClick={() => handleStateClick(state)}
                className={`w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform hover:scale-110 ${selectedState?.id === state.id ? 'ring-4 ring-yellow-400' : ''}`}
                style={{ backgroundColor: getColorByPercentage(state.value) }}
              >
                {state.id}
              </button>
            ))}
          </div>
        </div>

        {/* Sudeste */}
        <div className="flex flex-col items-center">
          <div className="text-sm font-bold mb-2">Sudeste</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {statesData.filter(s => s.region === "Sudeste").map(state => (
              <button
                key={state.id}
                onClick={() => handleStateClick(state)}
                className={`w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform hover:scale-110 ${selectedState?.id === state.id ? 'ring-4 ring-yellow-400' : ''}`}
                style={{ backgroundColor: getColorByPercentage(state.value) }}
              >
                {state.id}
              </button>
            ))}
          </div>
        </div>

        {/* Sul */}
        <div className="flex flex-col items-center">
          <div className="text-sm font-bold mb-2">Sul</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {statesData.filter(s => s.region === "Sul").map(state => (
              <button
                key={state.id}
                onClick={() => handleStateClick(state)}
                className={`w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform hover:scale-110 ${selectedState?.id === state.id ? 'ring-4 ring-yellow-400' : ''}`}
                style={{ backgroundColor: getColorByPercentage(state.value) }}
              >
                {state.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="flex items-center space-x-2 bg-white px-4 py-1 rounded-t-lg shadow">
          <span className="text-xs">0%</span>
          <div className="w-64 h-3 bg-gradient-to-r from-red-600 via-purple-400 to-blue-900 rounded-full"></div>
          <span className="text-xs">100%</span>
        </div>
      </div>
    </div>
  );
};

export default BrazilMap;
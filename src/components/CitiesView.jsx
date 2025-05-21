import React, { useState, useEffect } from 'react';
import { getColorByPercentage } from '../utils/colorUtils';
import { mpuOrgans, regions } from '../data/constants';

const CitiesView = ({ 
  citiesData, 
  selectedState, 
  selectedCity, 
  handleCityClick, 
  detailFilter, 
  setDetailFilter 
}) => {
  // Estados para filtragem e paginação
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  // Resetar página quando mudar filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, detailFilter, selectedState]);
  
  // Filtrar cidades pelo estado selecionado ou mostrar todas
  let filteredCities = selectedState 
    ? citiesData.filter(city => city.state === selectedState.id)
    : citiesData;
  
  // Filtrar por órgão se especificado
  if (detailFilter !== 'all') {
    filteredCities = filteredCities.filter(city => 
      city.organ.toLowerCase() === detailFilter.toLowerCase()
    );
  }
  
  // Filtrar por termo de busca
  if (searchTerm) {
    filteredCities = filteredCities.filter(city => 
      city.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.organ.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // Agrupar por região se não houver estado selecionado
  const groupedByRegion = {};
  if (!selectedState && !searchTerm) {
    // Encontrar a região de cada estado
    const getRegionForState = (stateCode) => {
      for (const [key, region] of Object.entries(regions)) {
        if (region.states.includes(stateCode)) {
          return region.name;
        }
      }
      return 'Outras';
    };
    
    // Agrupar as cidades por região
    filteredCities.forEach(city => {
      const region = getRegionForState(city.state);
      if (!groupedByRegion[region]) {
        groupedByRegion[region] = [];
      }
      groupedByRegion[region].push(city);
    });
  }
  
  // Calcular paginação
  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);
  const paginatedCities = filteredCities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  // Calcular estatísticas
  const totalUnits = filteredCities.length;
  const adhering = filteredCities.filter(city => city.value >= 50).length;
  const notAdhering = filteredCities.filter(city => city.value < 50).length;
  const adheringPercentage = totalUnits ? Math.round((adhering / totalUnits) * 100) : 0;
  
  const renderCityCard = (city) => (
    <div 
      key={city.id}
      onClick={() => handleCityClick(city)}
      className={`border rounded-lg p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
        selectedCity?.id === city.id ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{city.city}</h3>
          <p className="text-sm text-gray-500">{city.organ} - {city.state}</p>
        </div>
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: getColorByPercentage(city.value) }}
        >
          {city.value}%
        </div>
      </div>
      
      <div className="mt-3">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="h-2 rounded-full" 
            style={{ 
              width: `${city.value}%`,
              backgroundColor: getColorByPercentage(city.value)
            }} 
          />
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <h2 className="text-xl font-bold">
          {selectedState 
            ? `Unidades em ${selectedState.state}` 
            : 'Todas as Unidades'}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar unidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full md:w-64"
          />
          
          <select 
            value={detailFilter}
            onChange={(e) => setDetailFilter(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full md:w-auto"
          >
            <option value="all">Todos Órgãos</option>
            {mpuOrgans.map(organ => (
              <option key={organ} value={organ.toLowerCase()}>{organ}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Estatísticas */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex flex-wrap gap-6 justify-around">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900">{totalUnits}</div>
            <div className="text-sm text-gray-500">Unidades Total</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600">{adhering}</div>
            <div className="text-sm text-gray-500">Unidades Aderindo</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">{notAdhering}</div>
            <div className="text-sm text-gray-500">Unidades Não Aderindo</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: getColorByPercentage(adheringPercentage) }}>
              {adheringPercentage}%
            </div>
            <div className="text-sm text-gray-500">Taxa de Adesão</div>
          </div>
        </div>
      </div>
      
      {filteredCities.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Nenhuma unidade encontrada com os filtros atuais
        </div>
      ) : (
        <>
          {/* Visualização agrupada por região (quando não tem estado selecionado e não tem busca) */}
          {!selectedState && !searchTerm && (
            <div className="space-y-6">
              {Object.entries(groupedByRegion).map(([region, cities]) => (
                <div key={region} className="border rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-4">{region}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cities.slice(0, 6).map(city => renderCityCard(city))}
                  </div>
                  {cities.length > 6 && (
                    <div className="mt-4 text-center">
                      <button 
                        onClick={() => setSearchTerm(region)}
                        className="text-blue-600 hover:underline"
                      >
                        Ver todas as {cities.length} unidades na região {region}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Visualização de lista quando há um estado selecionado ou há busca */}
          {(selectedState || searchTerm) && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {paginatedCities.map(city => renderCityCard(city))}
              </div>
              
              {/* Paginação */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded ${
                        currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      &laquo;
                    </button>
                    
                    {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
                      // Mostrar páginas ao redor da atual para evitar muitos botões
                      const pageNumber = currentPage <= 3 
                        ? index + 1 
                        : currentPage - 2 + index;
                      
                      // Não mostrar números de página além do total
                      if (pageNumber > totalPages) return null;
                      
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => setCurrentPage(pageNumber)}
                          className={`px-3 py-1 rounded ${
                            currentPage === pageNumber 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    
                    {/* Mostrar reticências se houver muitas páginas */}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <span className="px-3 py-1">...</span>
                    )}
                    
                    {/* Mostrar sempre a última página se for mais que 5 páginas */}
                    {totalPages > 5 && (
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        className={`px-3 py-1 rounded ${
                          currentPage === totalPages 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      >
                        {totalPages}
                      </button>
                    )}
                    
                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded ${
                        currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      &raquo;
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CitiesView;
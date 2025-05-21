import React, { useState, useEffect } from 'react';
import { Map, Info, BarChart2 } from 'lucide-react';

// Componentes
import BrazilMap from './components/BrazilMap';
import CitiesView from './components/CitiesView';
import DetailPanel from './components/DetailPanel';
import EditModal from './components/EditModal';
import StatsView from './components/StatsView';
import Header from './components/Header';

// Dados e Utilitários
import { getColorByPercentage } from './utils/colorUtils';
import { 
  calculateNationalAverage, 
  calculateRegionData
} from './utils/dataFormatters';
import { generateInitialCitiesData } from './data/initialCitiesData';

// Serviços
import { 
  loadData, 
  saveData, 
  resetToInitialData 
} from './services/dataService';

// Hooks
import useDataExport from './hooks/useDataExport';

const App = () => {
  // Estados dos dados
  const [statesData, setStatesData] = useState([]);
  const [mpuData, setMpuData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [regionData, setRegionData] = useState([]);
  
  // Estados da UI
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [viewMode, setViewMode] = useState('map'); // 'map', 'cities', 'stats'
  const [editMode, setEditMode] = useState(false);
  const [detailFilter, setDetailFilter] = useState('all'); // 'all', 'mpf', 'mpt', etc.
  
  // Estado de edição
  const [editData, setEditData] = useState({
    stateValue: 0,
    cityValue: 0,
    notes: ''
  });
  
  // Estados relacionados à autenticação e edição
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
  
  // Médias e estatísticas
  const [nationalAverage, setNationalAverage] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  // Hook para exportação de dados
  const { 
    isExporting, 
    error: exportError, 
    exportStatesData, 
    exportMpuData, 
    exportCitiesData, 
    exportFullReport 
  } = useDataExport(statesData, mpuData, citiesData);
  
  // Carregar dados ao iniciar
  useEffect(() => {
    const initialize = async () => {
      try {
        // Carregar dados salvos ou usar padrões
        const { statesData: loadedStatesData, mpuData: loadedMpuData, citiesData: loadedCitiesData } = loadData();
        
        setStatesData(loadedStatesData);
        setMpuData(loadedMpuData);
        
        // Se não houver dados de cidades salvos, gerar aleatórios
        if (loadedCitiesData) {
          setCitiesData(loadedCitiesData);
        } else {
          const generatedCitiesData = generateInitialCitiesData();
          setCitiesData(generatedCitiesData);
          // Salvar os dados gerados
          saveData('CITIES_DATA', generatedCitiesData);
        }
        
        setDataLoaded(true);
      } catch (error) {
        console.error('Erro ao inicializar dados:', error);
      }
    };
    
    initialize();
  }, []);
  
  // Calcular estatísticas quando os dados mudam
  useEffect(() => {
    if (statesData.length > 0) {
      // Calcular média nacional
      const average = calculateNationalAverage(statesData);
      setNationalAverage(average);
      
      // Calcular dados por região
      const regions = calculateRegionData(statesData);
      setRegionData(regions);
    }
  }, [statesData]);
  
  // Manipuladores
  const handleStateClick = (state) => {
    setSelectedState(state);
    setSelectedCity(null);
    
    if (editMode) {
      setEditData({
        ...editData,
        stateValue: state.value
      });
    }
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    
    if (editMode) {
      setEditData({
        ...editData,
        cityValue: city.value
      });
    }
  };

  const handleEditChange = (field, value) => {
    setEditData({
      ...editData,
      [field]: field.includes('Value') ? Math.min(100, Math.max(0, parseInt(value) || 0)) : value
    });
  };

  const handleSaveEdit = () => {
    // Atualizar estado selecionado
    if (selectedState) {
      const updatedStatesData = statesData.map(state => 
        state.id === selectedState.id 
          ? {...state, value: editData.stateValue}
          : state
      );
      setStatesData(updatedStatesData);
      setSelectedState({...selectedState, value: editData.stateValue});
      
      // Salvar no localStorage
      saveData('STATES_DATA', updatedStatesData);
    }
    
    // Atualizar cidade selecionada
    if (selectedCity) {
      const updatedCitiesData = citiesData.map(city => 
        city.id === selectedCity.id 
          ? {...city, value: editData.cityValue}
          : city
      );
      setCitiesData(updatedCitiesData);
      setSelectedCity({...selectedCity, value: editData.cityValue});
      
      // Salvar no localStorage
      saveData('CITIES_DATA', updatedCitiesData);
    }
    
    setEditMode(false);
  };
  
  // Resetar para valores iniciais
  const handleResetData = () => {
    const { statesData: initialStates, mpuData: initialMpu, citiesData: initialCities } = resetToInitialData();
    
    setStatesData(initialStates);
    setMpuData(initialMpu);
    
    // Gerar novos dados aleatórios para cidades
    const newCitiesData = generateInitialCitiesData();
    setCitiesData(newCitiesData);
    saveData('CITIES_DATA', newCitiesData);
    
    // Limpar seleções
    setSelectedState(null);
    setSelectedCity(null);
  };

  // Renderização do componente principal
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Header 
        viewMode={viewMode}
        setViewMode={setViewMode}
        exportFullReport={exportFullReport}
        resetData={handleResetData}
        isExporting={isExporting}
        isEditMode={isEditModeEnabled}
        setIsEditMode={setIsEditModeEnabled}
      />

      <main className="container mx-auto p-4 flex-grow">
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-blue-900">Panorama Nacional</h2>
              <p className="text-sm text-gray-500">
                Última atualização: {new Date().toLocaleString()}
              </p>
            </div>
            
            <div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-md ${viewMode === 'map' ? 'bg-blue-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  title="Mapa"
                >
                  <Map size={20} />
                </button>
                <button
                  onClick={() => setViewMode('cities')}
                  className={`p-2 rounded-md ${viewMode === 'cities' ? 'bg-blue-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  title="Unidades"
                >
                  <Info size={20} />
                </button>
                <button
                  onClick={() => setViewMode('stats')}
                  className={`p-2 rounded-md ${viewMode === 'stats' ? 'bg-blue-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  title="Estatísticas"
                >
                  <BarChart2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {dataLoaded ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`${viewMode === 'stats' ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
              {viewMode === 'map' && 
                <BrazilMap 
                  statesData={statesData}
                  selectedState={selectedState}
                  handleStateClick={handleStateClick}
                />
              }
              {viewMode === 'cities' && 
                <CitiesView 
                  citiesData={citiesData}
                  selectedState={selectedState}
                  selectedCity={selectedCity}
                  handleCityClick={handleCityClick}
                  detailFilter={detailFilter}
                  setDetailFilter={setDetailFilter}
                />
              }
              {viewMode === 'stats' && 
                <StatsView 
                  statesData={statesData}
                  mpuData={mpuData}
                  regionData={regionData}
                  exportStatesData={exportStatesData}
                  exportMpuData={exportMpuData}
                  exportFullReport={exportFullReport}
                  isExporting={isExporting}
                />
              }
            </div>
            
            {viewMode !== 'stats' && (
              <div className="space-y-6">
                <DetailPanel 
                  selectedState={selectedState}
                  selectedCity={selectedCity}
                  nationalAverage={nationalAverage}
                  setEditMode={setEditMode}
                  isEditModeEnabled={isEditModeEnabled}
                />
                
                {/* Espaço para componentes adicionais que podem ser mostrados no painel lateral */}
                {exportError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <p className="font-bold">Erro na exportação:</p>
                    <p>{exportError}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-gray-600">Carregando dados...</p>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} SindMPU - Sindicato Nacional dos Servidores do MPU</p>
          <p className="text-sm text-gray-400 mt-2">
            Sistema de monitoramento #MobilizaMPU - Versão 1.0
          </p>
        </div>
      </footer>
      
      {editMode && 
        <EditModal 
          editMode={editMode}
          setEditMode={setEditMode}
          selectedState={selectedState}
          selectedCity={selectedCity}
          editData={editData}
          handleEditChange={handleEditChange}
          handleSaveEdit={handleSaveEdit}
        />
      }
    </div>
  );
};

export default App;
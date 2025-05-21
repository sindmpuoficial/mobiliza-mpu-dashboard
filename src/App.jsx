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
import { isAuthenticated } from './services/authService';

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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [detailFilter, setDetailFilter] = useState('all'); // 'all', 'mpf', 'mpt', etc.
  
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
  
  // Verificar autenticação ao iniciar
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = isAuthenticated();
      if (!authStatus) {
        setIsEditModeEnabled(false);
      }
      
      // Armazenar para o EditModal usar
      localStorage.setItem('isAdmin', authStatus ? 'true' : 'false');
      localStorage.setItem('adminExpiry', authStatus ? (Date.now() + 4 * 60 * 60 * 1000).toString() : '0');
      localStorage.setItem('isEditMode', isEditModeEnabled ? 'true' : 'false');
    };
    
    checkAuth();
    // Verificar a cada minuto
    const interval = setInterval(checkAuth, 60000);
    return () => clearInterval(interval);
  }, [isEditModeEnabled]);
  
  // Atualizar localStorage quando o modo de edição mudar
  useEffect(() => {
    localStorage.setItem('isEditMode', isEditModeEnabled ? 'true' : 'false');
  }, [isEditModeEnabled]);
  
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
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  // Função para abrir modal de edição
  const openEditModal = () => {
    console.log("Abrindo modal de edição");
    if (!isEditModeEnabled) {
      alert('Você precisa estar logado como administrador e com o modo de edição ativado.');
      return;
    }
    setIsEditModalOpen(true);
  };

  // Função para fechar modal de edição
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  // Função para salvar dados editados
  const handleSaveEdit = (updatedData) => {
    // Verificar se o usuário tem permissão para editar
    if (!isEditModeEnabled) {
      alert('Você precisa estar logado como administrador para editar dados.');
      return;
    }
    
    if (selectedState && !selectedCity) {
      // Atualizar estado
      const updatedStatesData = statesData.map(state => 
        state.id === selectedState.id 
          ? {...state, value: updatedData.value}
          : state
      );
      setStatesData(updatedStatesData);
      setSelectedState({...selectedState, value: updatedData.value});
      
      // Salvar no localStorage
      saveData('STATES_DATA', updatedStatesData);
    } else if (selectedCity) {
      // Atualizar cidade
      const updatedCitiesData = citiesData.map(city => 
        city.id === selectedCity.id 
          ? {...city, 
             value: updatedData.value,
             adheringServers: updatedData.adheringServers,
             totalServers: updatedData.totalServers
            }
          : city
      );
      setCitiesData(updatedCitiesData);
      setSelectedCity({
        ...selectedCity, 
        value: updatedData.value,
        adheringServers: updatedData.adheringServers,
        totalServers: updatedData.totalServers
      });
      
      // Salvar no localStorage
      saveData('CITIES_DATA', updatedCitiesData);
    }
  };
  
  // Resetar para valores iniciais
  const handleResetData = () => {
    // Verificar se o usuário tem permissão para resetar dados
    if (!isEditModeEnabled) {
      alert('Você precisa estar logado como administrador para resetar dados.');
      return;
    }

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

  // Preparar dados para o modal de edição
  const getEditData = () => {
    if (selectedState && !selectedCity) {
      return {
        ...selectedState,
        name: selectedState.state
      };
    } else if (selectedCity) {
      return {
        ...selectedCity,
        name: selectedCity.city
      };
    }
    return null;
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
                  className={`p-2 rounded-md flex items-center ${viewMode === 'map' ? 'bg-blue-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  title="Mapa"
                >
                  <Map size={20} className="mr-1" />
                  <span className="hidden sm:inline">Mapa</span>
                </button>
                <button
                  onClick={() => setViewMode('cities')}
                  className={`p-2 rounded-md flex items-center ${viewMode === 'cities' ? 'bg-blue-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  title="Unidades"
                >
                  <Info size={20} className="mr-1" />
                  <span className="hidden sm:inline">Unidades</span>
                </button>
                <button
                  onClick={() => setViewMode('stats')}
                  className={`p-2 rounded-md flex items-center ${viewMode === 'stats' ? 'bg-blue-800 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  title="Estatísticas"
                >
                  <BarChart2 size={20} className="mr-1" />
                  <span className="hidden sm:inline">Estatísticas</span>
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
                  setEditMode={openEditModal}
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
      
      {/* Modal de Edição - agora usando a estrutura correta do seu EditModal */}
      <EditModal 
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        data={getEditData()}
        onSave={handleSaveEdit}
        type={selectedCity ? 'city' : 'state'}
      />
    </div>
  );
};

export default App;
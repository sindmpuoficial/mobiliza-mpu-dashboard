// Service para gerenciar os dados do sistema
import { initialStatesData } from '../data/initialStatesData';
import { initialMpuData } from '../data/initialMpuData';

const LOCAL_STORAGE_KEYS = {
  STATES_DATA: 'mobilizaMPU_statesData',
  MPU_DATA: 'mobilizaMPU_mpuData',
  CITIES_DATA: 'mobilizaMPU_citiesData'
};

// Carregar dados do localStorage ou usar os padrões
export const loadData = () => {
  try {
    // Carregar dados de estados
    const savedStatesData = localStorage.getItem(LOCAL_STORAGE_KEYS.STATES_DATA);
    const statesData = savedStatesData ? JSON.parse(savedStatesData) : initialStatesData;
    
    // Carregar dados de órgãos
    const savedMpuData = localStorage.getItem(LOCAL_STORAGE_KEYS.MPU_DATA);
    const mpuData = savedMpuData ? JSON.parse(savedMpuData) : initialMpuData;
    
    // Carregar dados de cidades
    const savedCitiesData = localStorage.getItem(LOCAL_STORAGE_KEYS.CITIES_DATA);
    let citiesData = null;
    
    if (savedCitiesData) {
      citiesData = JSON.parse(savedCitiesData);
    } else {
      // Se não houver dados salvos, deixe o app gerar dados aleatórios iniciais
      citiesData = null;
    }
    
    return { statesData, mpuData, citiesData };
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return { 
      statesData: initialStatesData, 
      mpuData: initialMpuData, 
      citiesData: null 
    };
  }
};

// Salvar dados no localStorage
export const saveData = (dataKey, data) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEYS[dataKey], JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Erro ao salvar ${dataKey}:`, error);
    return false;
  }
};

// Atualizar valores de estado
export const updateStateValue = (stateId, newValue) => {
  try {
    const savedStatesData = localStorage.getItem(LOCAL_STORAGE_KEYS.STATES_DATA);
    const statesData = savedStatesData ? JSON.parse(savedStatesData) : initialStatesData;
    
    const updatedData = statesData.map(state => 
      state.id === stateId ? {...state, value: newValue} : state
    );
    
    localStorage.setItem(LOCAL_STORAGE_KEYS.STATES_DATA, JSON.stringify(updatedData));
    return updatedData;
  } catch (error) {
    console.error('Erro ao atualizar valor do estado:', error);
    return null;
  }
};

// Atualizar valores de cidade
export const updateCityValue = (cityId, newValue) => {
  try {
    const savedCitiesData = localStorage.getItem(LOCAL_STORAGE_KEYS.CITIES_DATA);
    if (!savedCitiesData) return null;
    
    const citiesData = JSON.parse(savedCitiesData);
    const updatedData = citiesData.map(city => 
      city.id === cityId ? {...city, value: newValue} : city
    );
    
    localStorage.setItem(LOCAL_STORAGE_KEYS.CITIES_DATA, JSON.stringify(updatedData));
    return updatedData;
  } catch (error) {
    console.error('Erro ao atualizar valor da cidade:', error);
    return null;
  }
};

// Resetar para dados iniciais
export const resetToInitialData = () => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEYS.STATES_DATA, JSON.stringify(initialStatesData));
    localStorage.setItem(LOCAL_STORAGE_KEYS.MPU_DATA, JSON.stringify(initialMpuData));
    localStorage.removeItem(LOCAL_STORAGE_KEYS.CITIES_DATA); // Remove para gerar novos dados aleatórios
    
    return {
      statesData: initialStatesData,
      mpuData: initialMpuData,
      citiesData: null
    };
  } catch (error) {
    console.error('Erro ao resetar dados:', error);
    return null;
  }
};
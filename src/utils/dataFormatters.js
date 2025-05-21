// Função para gerar um valor aleatório de adesão para demonstração
export const randomValue = () => Math.floor(Math.random() * 100);

// Função para gerar dados iniciais de cidades
export const generateInitialCitiesData = () => {
  // Lista para armazenar os dados gerados
  const citiesData = [];
  
  // Função auxiliar para adicionar uma cidade
  const addCity = (state, city, organ) => {
    citiesData.push({
      id: `${organ}-${state}-${city.replace(/\s+/g, '-')}`,
      state,
      city,
      organ,
      value: randomValue()
    });
  };
  
  // ========== REGIÃO NORTE ==========
  
  // ACRE (AC)
  addCity("AC", "Rio Branco", "MPF");
  addCity("AC", "Cruzeiro do Sul", "MPF");
  addCity("AC", "Rio Branco", "MPT");
  
  // AMAZONAS (AM)
  addCity("AM", "Manaus", "MPF");
  addCity("AM", "Tabatinga", "MPF");
  addCity("AM", "Tefé", "MPF");
  addCity("AM", "Manaus", "MPT");
  
  // AMAPÁ (AP)
  addCity("AP", "Macapá", "MPF");
  addCity("AP", "Laranjal do Jari", "MPF");
  addCity("AP", "Macapá", "MPT");
  
  // PARÁ (PA)
  addCity("PA", "Belém", "MPF");
  addCity("PA", "Altamira", "MPF");
  addCity("PA", "Itaituba", "MPF");
  addCity("PA", "Marabá", "MPF");
  addCity("PA", "Paragominas", "MPF");
  addCity("PA", "Redenção", "MPF");
  addCity("PA", "Santarém", "MPF");
  addCity("PA", "Tucuruí", "MPF");
  addCity("PA", "Belém", "MPT");
  addCity("PA", "Santarém", "MPT");
  addCity("PA", "Marabá", "MPT");
  
  // RONDÔNIA (RO)
  addCity("RO", "Porto Velho", "MPF");
  addCity("RO", "Guajará-Mirim", "MPF");
  addCity("RO", "Ji-Paraná", "MPF");
  addCity("RO", "Vilhena", "MPF");
  addCity("RO", "Porto Velho", "MPT");
  
  // RORAIMA (RR)
  addCity("RR", "Boa Vista", "MPF");
  addCity("RR", "Boa Vista", "MPT");
  
  // TOCANTINS (TO)
  addCity("TO", "Palmas", "MPF");
  addCity("TO", "Araguaína", "MPF");
  addCity("TO", "Gurupi", "MPF");
  addCity("TO", "Palmas", "MPT");
  addCity("TO", "Araguaína", "MPT");
  
  // ========== REGIÃO NORDESTE ==========
  
  // ALAGOAS (AL)
  addCity("AL", "Maceió", "MPF");
  addCity("AL", "Arapiraca", "MPF");
  addCity("AL", "Maceió", "MPT");
  
  // BAHIA (BA)
  addCity("BA", "Salvador", "MPF");
  addCity("BA", "Barreiras", "MPF");
  addCity("BA", "Campo Formoso", "MPF");
  addCity("BA", "Eunápolis", "MPF");
  addCity("BA", "Feira de Santana", "MPF");
  addCity("BA", "Guanambi", "MPF");
  addCity("BA", "Ilhéus", "MPF");
  addCity("BA", "Irecê", "MPF");
  addCity("BA", "Jequié", "MPF");
  addCity("BA", "Paulo Afonso", "MPF");
  addCity("BA", "Vitória da Conquista", "MPF");
  addCity("BA", "Salvador", "MPT");
  addCity("BA", "Vitória da Conquista", "MPT");
  addCity("BA", "Feira de Santana", "MPT");
  addCity("BA", "Barreiras", "MPT");
  addCity("BA", "Santo Antônio de Jesus", "MPT");
  
  // [... código omitido para brevidade ...]
  // Continuar com o restante das cidades para todas as regiões
  
  // ========== REGIÃO CENTRO-OESTE ==========
  
  // DISTRITO FEDERAL (DF)
  addCity("DF", "Brasília", "MPF");
  addCity("DF", "Brasília", "MPT");
  addCity("DF", "Brasília", "MPM");
  addCity("DF", "Brasília", "MPDFT");
  addCity("DF", "Brasília", "CNMP");
  addCity("DF", "Brasília", "ESMPU");
  
  // [... código omitido para brevidade ...]
  
  return citiesData;
};

// Função para calcular a média nacional de adesão
export const calculateNationalAverage = (statesData) => {
  return Math.round(
    statesData.reduce((sum, state) => sum + state.value, 0) / statesData.length
  );
};

// Função para calcular dados agregados por região
export const calculateRegionData = (statesData) => {
  const regions = {};
  statesData.forEach(state => {
    if (!regions[state.region]) {
      regions[state.region] = { region: state.region, totalValue: 0, count: 0 };
    }
    regions[state.region].totalValue += state.value;
    regions[state.region].count += 1;
  });

  return Object.values(regions).map(region => ({
    region: region.region,
    value: Math.round(region.totalValue / region.count)
  }));
};

// Função para formatar números como percentual
export const formatPercentage = (value) => {
  return `${Math.round(value)}%`;
};

// Função para formatar data e hora
export const formatDateTime = (date = new Date()) => {
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};
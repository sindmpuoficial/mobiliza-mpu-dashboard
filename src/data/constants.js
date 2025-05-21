// Cores do SindMPU
export const COLORS = {
    NONE: '#FF4444',          // Vermelho para não aderentes
    LOW: '#F5DCD5',           // Variação de #F5F1EE tendendo ao vermelho
    MEDIUM_LOW: '#F5E8E2',    // Variação clara
    MEDIUM: '#F5F1EE',        // Base clara
    MEDIUM_HIGH: '#B9C6D9',   // Mistura com o azul
    HIGH: '#5B7AA7',          // Azul intermediário
    FULL: '#19325E',          // Azul SindMPU para adesão completa
  };
  
  // Cores para o gráfico de pizza
  export const PIE_COLORS = ['#19325E', '#5B7AA7', '#B9C6D9', '#8884D8', '#4C6EF5', '#748CAB'];
  
  // Definição das regiões e estados
  export const regions = {
    norte: {
      name: 'Norte',
      states: ['AC', 'AM', 'AP', 'PA', 'RO', 'RR', 'TO']
    },
    nordeste: {
      name: 'Nordeste',
      states: ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE']
    },
    centro_oeste: {
      name: 'Centro-Oeste',
      states: ['DF', 'GO', 'MT', 'MS']
    },
    sudeste: {
      name: 'Sudeste',
      states: ['ES', 'MG', 'RJ', 'SP']
    },
    sul: {
      name: 'Sul',
      states: ['PR', 'RS', 'SC']
    }
  };
  
  // Lista de órgãos do MPU
  export const mpuOrgans = [
    "MPF", "MPT", "MPM", "MPDFT", "CNMP", "ESMPU"
  ];
  
  // Função para calcular a cor baseada na porcentagem de adesão
  export const getColorByPercentage = (percentage) => {
    if (percentage === 0) return COLORS.NONE;
    if (percentage < 25) return COLORS.LOW;
    if (percentage < 40) return COLORS.MEDIUM_LOW;
    if (percentage < 60) return COLORS.MEDIUM;
    if (percentage < 75) return COLORS.MEDIUM_HIGH;
    if (percentage < 100) return COLORS.HIGH;
    return COLORS.FULL;
  };
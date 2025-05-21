// src/data/constants.js (Nova versão com cores mais vivas)

// Cores do SindMPU (versão mais viva)
export const COLORS = {
    NONE: '#FF3333',          // Vermelho mais intenso para não aderentes
    LOW: '#FF9999',           // Vermelho claro mais vibrante
    MEDIUM_LOW: '#FFC2A3',    // Laranja/salmon claro
    MEDIUM: '#FFE0B2',        // Amarelo claro (neutro mais quente)
    MEDIUM_HIGH: '#A7C5F2',   // Azul claro mais vibrante
    HIGH: '#4285F4',          // Azul médio mais vibrante
    FULL: '#0D47A1',          // Azul SindMPU mais intenso
  };
  
  // Cores para o gráfico de pizza (mais vibrantes)
  export const PIE_COLORS = ['#0D47A1', '#4285F4', '#64B5F6', '#8E24AA', '#1E88E5', '#3949AB'];
  
  // Definição das regiões e estados (manter o original)
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
  
  // Lista de órgãos do MPU (manter o original)
  export const mpuOrgans = [
    "MPF", "MPT", "MPM", "MPDFT", "CNMP", "ESMPU"
  ];
  
  // A função de cálculo de cor permanece a mesma
  export const getColorByPercentage = (percentage) => {
    if (percentage === 0) return COLORS.NONE;
    if (percentage < 25) return COLORS.LOW;
    if (percentage < 40) return COLORS.MEDIUM_LOW;
    if (percentage < 60) return COLORS.MEDIUM;
    if (percentage < 75) return COLORS.MEDIUM_HIGH;
    if (percentage < 100) return COLORS.HIGH;
    return COLORS.FULL;
  };
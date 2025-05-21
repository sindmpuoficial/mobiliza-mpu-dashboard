import { COLORS } from '../data/constants';

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

// Função para gerar um gradiente entre duas cores
export const generateGradient = (startColor, endColor, steps) => {
  // Converte cores hex para rgb
  const startRGB = hexToRgb(startColor);
  const endRGB = hexToRgb(endColor);
  
  // Array para armazenar as cores do gradiente
  const gradientColors = [];
  
  // Para cada passo no gradiente
  for (let i = 0; i < steps; i++) {
    // Calcula a proporção atual
    const ratio = i / (steps - 1);
    
    // Interpola entre as cores de início e fim
    const r = Math.round(startRGB.r + ratio * (endRGB.r - startRGB.r));
    const g = Math.round(startRGB.g + ratio * (endRGB.g - startRGB.g));
    const b = Math.round(startRGB.b + ratio * (endRGB.b - startRGB.b));
    
    // Converte de volta para hex e adiciona ao array
    gradientColors.push(rgbToHex(r, g, b));
  }
  
  return gradientColors;
};

// Função auxiliar para converter uma cor hex para rgb
const hexToRgb = (hex) => {
  // Remover o # se existir
  hex = hex.replace('#', '');
  
  // Converte componentes hex para decimal
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return { r, g, b };
};

// Função auxiliar para converter rgb para hex
const rgbToHex = (r, g, b) => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// Função para obter uma cor baseada em um valor dentro de um intervalo
export const getColorForRange = (value, min, max, colors) => {
  // Garante que o valor está dentro do intervalo
  const clampedValue = Math.max(min, Math.min(max, value));
  
  // Normaliza o valor para entre 0 e 1
  const normalizedValue = (clampedValue - min) / (max - min);
  
  // Determina o índice na paleta de cores
  const index = Math.floor(normalizedValue * (colors.length - 1));
  
  return colors[index];
};
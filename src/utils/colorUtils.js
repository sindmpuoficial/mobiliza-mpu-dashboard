// src/utils/colorUtils.js
import { COLORS } from '../data/constants';

// Função para calcular a cor baseada na porcentagem de adesão
export const getColorByPercentage = (percentage) => {
  if (percentage === 0) return COLORS.NONE;          // Vermelho
  if (percentage < 25) return COLORS.LOW;            // Tom vermelho claro
  if (percentage < 40) return COLORS.MEDIUM_LOW;     // Tom intermediário claro
  if (percentage < 60) return COLORS.MEDIUM;         // Tom neutro
  if (percentage < 75) return COLORS.MEDIUM_HIGH;    // Tom azul claro
  if (percentage < 100) return COLORS.HIGH;          // Azul intermediário
  return COLORS.FULL;                               // Azul escuro
};
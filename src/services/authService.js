// src/services/authService.js

// Constantes
const ADMIN_KEY = 'mobiliza-mpu-admin';
const ADMIN_PASSWORD = 'sindmpu2025'; // Alterar para uma senha forte em produção
const TOKEN_EXPIRY = 4 * 60 * 60 * 1000; // 4 horas em milissegundos

/**
 * Verifica a senha de administrador
 * @param {string} password - Senha fornecida
 * @returns {boolean} - Verdadeiro se a senha estiver correta
 */
export const authenticate = (password) => {
  if (password === ADMIN_PASSWORD) {
    const token = {
      expiry: Date.now() + TOKEN_EXPIRY,
      authenticated: true
    };
    localStorage.setItem(ADMIN_KEY, JSON.stringify(token));
    return true;
  }
  return false;
};

/**
 * Verifica se o usuário está autenticado
 * @returns {boolean} - Verdadeiro se autenticado e o token não tiver expirado
 */
export const isAuthenticated = () => {
  try {
    const tokenString = localStorage.getItem(ADMIN_KEY);
    if (!tokenString) return false;
    
    const token = JSON.parse(tokenString);
    const isValid = token.authenticated && token.expiry > Date.now();
    
    // Limpar token expirado
    if (!isValid && tokenString) {
      localStorage.removeItem(ADMIN_KEY);
    }
    
    return isValid;
  } catch (error) {
    console.error("Erro ao verificar autenticação:", error);
    return false;
  }
};

/**
 * Realiza o logout
 */
export const logout = () => {
  localStorage.removeItem(ADMIN_KEY);
};
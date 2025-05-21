// Serviço básico de autenticação
// NOTA: Este é um sistema simples. Para produção, use um sistema de autenticação mais robusto

// Senha fixa para admin - ALTERE PARA UMA SENHA FORTE EM PRODUÇÃO
const ADMIN_PASSWORD = "sindmpu2025"; // Você deve alterar esta senha!

// Chave para armazenar o token de autenticação
const AUTH_TOKEN_KEY = "mobilizaMPU_authToken";

// Tempo de expiração do token em milissegundos (4 horas)
const TOKEN_EXPIRATION = 4 * 60 * 60 * 1000;

// Função para verificar se a senha está correta
export const authenticate = (password) => {
  if (password === ADMIN_PASSWORD) {
    // Gerar token simples com data de expiração
    const token = {
      value: generateRandomToken(),
      expires: new Date().getTime() + TOKEN_EXPIRATION
    };
    
    // Salvar token no localStorage
    localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(token));
    return true;
  }
  return false;
};

// Verifica se o usuário está autenticado
export const isAuthenticated = () => {
  try {
    const tokenStr = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!tokenStr) return false;
    
    const token = JSON.parse(tokenStr);
    const now = new Date().getTime();
    
    // Verificar se o token expirou
    if (now > token.expires) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Erro ao verificar autenticação:", error);
    return false;
  }
};

// Fazer logout (remover token)
export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

// Função auxiliar para gerar tokens aleatórios
const generateRandomToken = () => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};
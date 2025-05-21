// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

/**
 * Hook para gerenciar estado com persistência no localStorage
 * @param {string} key - Chave para armazenamento no localStorage
 * @param {any} initialValue - Valor inicial caso não exista nada no localStorage
 * @returns {[any, Function]} - Valor atual e função para atualizar o valor
 */
const useLocalStorage = (key, initialValue) => {
  // Função que obtém o valor inicial
  const getValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erro ao recuperar ${key} do localStorage:`, error);
      return initialValue;
    }
  };

  // Estado para armazenar o valor atual
  const [storedValue, setStoredValue] = useState(getValue);

  // Função para atualizar o valor no state e no localStorage
  const setValue = (value) => {
    try {
      // Permitir que o valor seja uma função (como no setState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Salvar no state
      setStoredValue(valueToStore);
      
      // Salvar no localStorage
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Erro ao salvar ${key} no localStorage:`, error);
    }
  };

  // Efeito para sincronizar com alterações no localStorage
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };
    
    // Adicionar listener para mudanças no localStorage
    window.addEventListener('storage', handleStorageChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;
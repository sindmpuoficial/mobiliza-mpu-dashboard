import { useState, useEffect } from 'react';

// Hook personalizado para gerenciar estado com localStorage
function useLocalStorage(key, initialValue) {
  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Obter valor do localStorage ou retornar initialValue
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erro ao carregar ${key} do localStorage:`, error);
      return initialValue;
    }
  });

  // Função para atualizar o valor no estado e localStorage
  const setValue = (value) => {
    try {
      // Permitir que o valor seja uma função para seguir o mesmo padrão do useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      
      // Salvar estado
      setStoredValue(valueToStore);
      
      // Salvar no localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Erro ao salvar ${key} no localStorage:`, error);
    }
  };

  // Efeito para sincronizar o valor com o localStorage se o key mudar
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.error(`Erro ao sincronizar ${key} com localStorage:`, error);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;
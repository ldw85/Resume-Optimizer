// src/hooks/useApiKeyStorage.ts
import { useState, useEffect } from 'react';

const API_KEY_STORAGE_KEY = 'apiKeys';

interface ApiKeys {
  gemini?: string;
  tavily?: string;
}

const useApiKeyStorage = () => {
  const [apiKeys, setApiKeys] = useState<ApiKeys>(() => {
    const storedKeys = localStorage.getItem(API_KEY_STORAGE_KEY);
    return storedKeys ? JSON.parse(storedKeys) : {};
  });

  useEffect(() => {
    localStorage.setItem(API_KEY_STORAGE_KEY, JSON.stringify(apiKeys));
  }, [apiKeys]);

  const updateApiKey = (keyName: keyof ApiKeys, keyValue: string) => {
    setApiKeys(prevKeys => ({
      ...prevKeys,
      [keyName]: keyValue,
    }));
  };

  const getApiKey = (keyName: keyof ApiKeys) => {
    return apiKeys[keyName];
  };

  return { apiKeys, updateApiKey, getApiKey };
};

export default useApiKeyStorage;

import { useState } from 'react';
import callGeminiAPI from '../services/gemini';
import useApiKeyStorage from './useApiKeyStorage';

interface GeminiResponse {
  modificationIdeas: string;
  contentExplanation: string;
  modifiedResume: string;
}

const useGemini = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getApiKey } = useApiKeyStorage();

  const analyzeResume = async (resumeText: string, jobDescriptionText: string): Promise<GeminiResponse> => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = getApiKey('gemini') || 'AIzaSyCLxIsIAHjt18Hf9pi__hFplmGk2XIPWQU';
      const geminiResponse: any = await callGeminiAPI(apiKey, resumeText, jobDescriptionText);

      // 提取变量
      const modifiedResume = geminiResponse?.modified_resume || '';
      const modificationReasons = geminiResponse?.modification_reasons ? JSON.stringify(geminiResponse.modification_reasons) : '';
      const modifications = geminiResponse?.modifications ? JSON.stringify(geminiResponse.modifications) : '';

      return {
        modificationIdeas: modificationReasons,
        contentExplanation: modifications,
        modifiedResume: modifiedResume,
      };
    } catch (error: any) {
      setError(error.message || 'An error occurred while analyzing the resume.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { analyzeResume, loading, error };
};

export default useGemini;

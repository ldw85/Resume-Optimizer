import { useState } from 'react';
import { analyzeResumeWithLLM } from '../services/llmService';
import { AnalysisResponse } from '../types';

const useResumeAnalyzer = (language: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeResume = async (resumeText: string, jobDescriptionText: string): Promise<AnalysisResponse> => {
    setLoading(true);
    setError(null);

    try {
      const llmType = language === 'zh' ? 'deepseek' : 'gemini'; 

      const analysisResult: AnalysisResponse = await analyzeResumeWithLLM(llmType, resumeText, jobDescriptionText);
      return analysisResult;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || 'An error occurred while analyzing the resume.');
        throw error;
      } else {
        setError('An unknown error occurred while analyzing the resume.');
        throw new Error('An unknown error occurred while analyzing the resume.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { analyzeResume, loading, error };
};

export default useResumeAnalyzer;

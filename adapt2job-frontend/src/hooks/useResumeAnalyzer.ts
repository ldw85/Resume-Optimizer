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
      const llmType = language.startsWith('zh') ? 'deepseek' : 'gemini'; // 如果是中文，则使用 DeepSeek，否则使用 Gemini

      const analysisResult: AnalysisResponse = await analyzeResumeWithLLM(llmType, resumeText, jobDescriptionText);
      return analysisResult;
    } catch (error: any) {
      setError(error.message || 'An error occurred while analyzing the resume.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { analyzeResume, loading, error };
};

export default useResumeAnalyzer;

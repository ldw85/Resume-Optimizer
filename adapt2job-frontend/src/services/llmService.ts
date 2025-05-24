import { AnalysisResponse } from '../types';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const analyzeResumeWithLLM = async (
  llmType: 'gemini' | 'deepseek',
  resumeText: string,
  jobDescriptionText: string
): Promise<AnalysisResponse> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 600000); // 10 分钟超时

    const response = await fetch(`${BACKEND_URL}/api/analyze-resume`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resumeText: resumeText,
        jobDescriptionText: jobDescriptionText,
        llmType: llmType, // 添加 llmType 参数
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`后端 API 请求失败，状态码: ${response.status}`);
    }

    const data = await response.json();
    return {
      modificationIdeas: data?.contentExplanation || '',
      contentExplanation: data?.modificationIdeas || '',
      modifiedResume: data?.modifiedResume || '',
    };
  } catch (error: unknown) {
    console.error('调用后端 API 失败:', error);
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('调用后端 API 时发生未知错误。');
    }
  }
};

export { analyzeResumeWithLLM };

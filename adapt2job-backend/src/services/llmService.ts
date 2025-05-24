import { AnalysisResponse } from './../types';
import geminiPrompt from '../prompts/gemini.prompt';

// TODO: Implement analyze resume with Gemini
const callGeminiAPI = async (apiKey: string, resumeText: string, jobDescriptionText: string): Promise<AnalysisResponse> => {
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-001:generateContent?key=${apiKey}`; // 假设的 Gemini API 端点

  try {
    let prompt = geminiPrompt;
    prompt = prompt.replace('{{resumeText}}', resumeText);
    prompt = prompt.replace('{{jobDescriptionText}}', jobDescriptionText);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 600000); // 10分钟超时

    const response = await fetch(apiUrl, 
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt }
          ]
        }]
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error('Gemini API request failed with status', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Gemini API error response:', errorText);
      throw new Error('Gemini API request failed with status ' + response.status);
    }

    try {
      const responseData = await response.json();
      const candidates = responseData.candidates;

      if (candidates && candidates.length > 0) {
        const text = candidates[0].content.parts[0].text;
        const jsonString = text.substring(text.indexOf('```json') + 7, text.lastIndexOf('```'));
        try {
          const jsonData: AnalysisResponse = JSON.parse(jsonString);
          return jsonData;
        } catch (parseError: unknown) {
          console.error('JSON parse error:', parseError);
          // 返回一个符合 AnalysisResponse 结构的默认对象
          return {
            modificationIdeas: 'Error parsing Gemini response.',
            contentExplanation: '',
            modifiedResume: '',
          };
        }
      } else {
        console.warn('No candidates found in Gemini response.');
        // 返回一个符合 AnalysisResponse 结构的默认对象
        return {
          modificationIdeas: 'No analysis result from Gemini.',
          contentExplanation: '',
          modifiedResume: '',
        };
      }
    } catch (jsonError: any) {
      console.error('Error parsing JSON response from Gemini API:', jsonError);
      const errorText = await response.text();
      console.error('Gemini API raw response:', errorText);
      throw jsonError; // Re-throw the error to be caught by the outer catch block
    }
  } catch (error: unknown) {
    console.error('Gemini API call error:', error);
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('An unknown error occurred during Gemini API call.');
    }
  }
}

const analyzeResumeWithGemini = async (resumeText: string, jobDescriptionText: string): Promise<AnalysisResponse> => {
  // TODO: Implement analyze resume with Gemini
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Gemini API key not found in environment variables.');
  }
  return await callGeminiAPI(apiKey, resumeText, jobDescriptionText);
};


const preparePrompt = (prompt: string, resumeText: string, jobDescriptionText: string): string => {
  let preparedPrompt = prompt;
  preparedPrompt = preparedPrompt.replace('{{resumeText}}', resumeText);
  preparedPrompt = preparedPrompt.replace('{{jobDescriptionText}}', jobDescriptionText);
  return preparedPrompt;
};

const analyzeResumeWithDeepSeek = async (resumeText: string, jobDescriptionText: string): Promise<AnalysisResponse> => {
  const deepSeekEndpoint = 'https://api.deepseek.com/chat/completions';
  const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

  try {
    // 使用封装的方法准备 prompt
    const prompt = preparePrompt(geminiPrompt, resumeText, jobDescriptionText);

    const response = await fetch(deepSeekEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: 'You are a helpful assistant specializing in resume analysis and improvement.' },
          { role: 'user', content: prompt },
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const contentString = data?.choices?.[0]?.message?.content;

    if (contentString) {
      try {
        const jsonString = contentString.substring(contentString.indexOf('```json') + 7, contentString.lastIndexOf('```'));
        // 移除控制字符
        // eslint-disable-next-line no-control-regex
        const cleanedContentString = jsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        const content = JSON.parse(cleanedContentString);
        return {
          modifiedResume: content?.modifiedResume || '',
          modificationIdeas: content?.modificationIdeas || '',
          contentExplanation: content?. contentExplanation|| '',
        };
      } catch (parseError: unknown) {
        console.error('JSON parse error:', parseError);
        return {
          modificationIdeas: 'Error parsing DeepSeek response JSON.',
          contentExplanation: '',
          modifiedResume: '',
        };
      }
    } else {
      console.warn('No content found in DeepSeek response.');
      return {
        modificationIdeas: 'No analysis result from DeepSeek.',
        contentExplanation: '',
        modifiedResume: '',
      };
    }
  } catch (error: unknown) {
    console.error('DeepSeek API call failed:', error);
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('An unknown error occurred during DeepSeek API call.');
    }
  }
};

// TODO: Implement analyze resume with LLM
const analyzeResumeWithLLM = async (
  llmType: 'gemini' | 'deepseek',
  resumeText: string,
  jobDescriptionText: string
): Promise<AnalysisResponse> => {
  try {
    if (llmType === 'gemini') {
      return await analyzeResumeWithGemini(resumeText, jobDescriptionText);
    } else if (llmType === 'deepseek') {
      return await analyzeResumeWithDeepSeek(resumeText, jobDescriptionText);
    } else {
      throw new Error(`Unsupported LLM type: ${llmType}`);
    }
  } catch (error: any) {
    console.error(`LLM ${llmType} analysis failed:`, error);
    throw error;
  }
};

// TODO: Implement call Tavily API

export { analyzeResumeWithLLM };

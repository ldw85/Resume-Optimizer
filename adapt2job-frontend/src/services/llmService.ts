import { AnalysisResponse } from '../types';
import geminiPrompt from '../gemini.prompt';

const GEMINI_API_KEY = 'AIzaSyCLxIsIAHjt18Hf9pi__hFplmGk2XIPWQU'; // 替换为你的 Gemini API Key
const DEEPSEEK_API_KEY = 'sk-b417239dd8154fbcac87522e33d07427'; // 替换为你的 DeepSeek API Key

// 封装 prompt 字符串替换的方法
const preparePrompt = (prompt: string, resumeText: string, jobDescriptionText: string): string => {
  let preparedPrompt = prompt;
  preparedPrompt = preparedPrompt.replace('{{resumeText}}', resumeText);
  preparedPrompt = preparedPrompt.replace('{{jobDescriptionText}}', jobDescriptionText);
  return preparedPrompt;
};

const analyzeResumeWithGemini = async (resumeText: string, jobDescriptionText: string): Promise<AnalysisResponse> => {
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-001:generateContent?key=${GEMINI_API_KEY}`;

  try {
    const prompt = preparePrompt(geminiPrompt, resumeText, jobDescriptionText);

    const response = await fetch(apiUrl, {
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
    });

    if (!response.ok) {
      throw new Error(`Gemini API request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    const candidates = responseData?.candidates;

    if (candidates && candidates.length > 0) {
      const text = candidates[0].content.parts[0].text;
      const origjsonString = text.substring(text.indexOf('```json') + 7, text.lastIndexOf('```'));
      const jsonString = origjsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
      try {
        const jsonData = JSON.parse(jsonString);
        return {
          modificationIdeas: jsonData?.modification_reasons ? JSON.stringify(jsonData.modification_reasons) : '',
          contentExplanation: jsonData?.modifications ? JSON.stringify(jsonData.modifications) : '',
          modifiedResume: jsonData?.modified_resume || '',
        };
      } catch (error) {
        console.error('JSON parse error:', error);
        return {
          modificationIdeas: '',
          contentExplanation: '',
          modifiedResume: '',
        };
      }
    } else {
      console.warn('No candidates found in Gemini response.');
      return {
        modificationIdeas: '',
        contentExplanation: '',
        modifiedResume: '',
      };
    }
  } catch (error: any) {
    console.error('Gemini API call error:', error);
    throw error;
  }
};

const analyzeResumeWithDeepSeek = async (resumeText: string, jobDescriptionText: string): Promise<AnalysisResponse> => {
  const deepSeekEndpoint = 'https://api.deepseek.com/chat/completions';

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
        const cleanedContentString = jsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        const content = JSON.parse(cleanedContentString);
        return {
          modifiedResume: content?.modified_resume || '',
          modificationIdeas: content?.modification_reasons || '',
          contentExplanation: content?.modifications || '',
        };
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        return {
          modificationIdeas: '',
          contentExplanation: '',
          modifiedResume: '',
        };
      }
    } else {
      console.warn('No content found in DeepSeek response.');
      return {
        modificationIdeas: '',
        contentExplanation: '',
        modifiedResume: '',
      };
    }
  } catch (error: any) {
    console.error('DeepSeek API call failed:', error);
    throw error;
  }
};


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

export { analyzeResumeWithLLM };

// src/services/gemini.ts
import geminiPrompt from '../gemini.prompt';
/*
gemini调用例子：
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=$GOOGLE_API_KEY \
    -H 'Content-Type: application/json' \
    -X POST \
    -d '{
      "contents": [{
        "parts":[{
          "text": "Write a story about a magic backpack."}]}]}' 2> /dev/null
返回报文格式：
{
  "candidates": [  // 数组 (Array)，包含一个或多个候选结果对象
    {             // 对象 (Object)，代表一个候选结果
      "content": { // 对象 (Object)，包含内容详情
        "parts": [ // 数组 (Array)，包含内容的组成部分（通常是文本）
          {        // 对象 (Object)，代表一个内容部分
            "text": "..." // 字符串 (String)，具体的文本内容
          }
        ],
        "role": "..."   // 字符串 (String)，内容的来源角色（例如 "model"）
      },
      "finishReason": "...", // 字符串 (String)，生成结束的原因（例如 "STOP"）
      "avgLogprobs": ...    // 数字 (Number)，平均对数概率（可能用于评估生成质量）
    }
  ],
  "usageMetadata": { // 对象 (Object)，包含使用情况的元数据
    "promptTokenCount": ...,      // 数字 (Number)，提示（输入）的 token 数量
    "candidatesTokenCount": ..., // 数字 (Number)，候选结果（输出）的 token 数量
    "totalTokenCount": ...,      // 数字 (Number)，总 token 数量
    "promptTokensDetails": [    // 数组 (Array)，包含提示 token 的详细信息
      {                       // 对象 (Object)，代表一个 token 详情
        "modality": "...",      // 字符串 (String)，模态（例如 "TEXT"）
        "tokenCount": ...       // 数字 (Number)，该模态的 token 数量
      }
    ],
    "candidatesTokensDetails": [ // 数组 (Array)，包含候选结果 token 的详细信息
      {                        // 对象 (Object)，代表一个 token 详情
        "modality": "...",       // 字符串 (String)，模态（例如 "TEXT"）
        "tokenCount": ...        // 数字 (Number)，该模态的 token 数量
      }
    ],
    "modelVersion": "..."      // 字符串 (String)，所使用的模型版本
  }
}
*/
// 调用 Gemini API
async function callGeminiAPI(apiKey: string, resumeText: string, jobDescriptionText: string): Promise<any> {
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-001:generateContent?key=${apiKey}`; // 假设的 Gemini API 端点

  try {
    let prompt = geminiPrompt;
    prompt = prompt.replace('{{resumeText}}', resumeText);
    prompt = prompt.replace('{{jobDescriptionText}}', jobDescriptionText);

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
      throw new Error('Gemini API request failed with status ' + response.status);
    }

    const responseData = await response.json();
    const candidates = responseData.candidates;

    if (candidates && candidates.length > 0) {
      const text = candidates[0].content.parts[0].text;
      const jsonString = text.substring(text.indexOf('```json') + 7, text.lastIndexOf('```'));
      try {
        const jsonData = JSON.parse(jsonString);
        return jsonData;
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        return {};
      }
    } else {
      console.warn('No candidates found in Gemini response.');
      return {};
    }
  } catch (error: any) {
    console.error('Gemini API call error:', error);
    throw error;
  }
}

export default callGeminiAPI;

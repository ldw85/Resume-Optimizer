const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// 新增方法：使用 LLM 提取职位描述
const extractJobDescriptionWithLLM = async (rawContent: string): Promise<string | null> => {
  try {
    // TODO: 调用后端新的 LLM 接口来提取职位描述
    // 假设后端有一个新的接口 /api/extract-job-description
    const response = await fetch(`${BACKEND_URL}/api/extract-job-description`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rawContent }),
    });

    if (!response.ok) {
      console.error(`后端 LLM 提取接口请求失败，状态码: ${response.status}`);
      return null; // 请求失败，返回 null
    }

    const result = await response.json();
    // 假设后端返回的 JSON 格式为 { jobDescription: string | null }
    if (result && typeof result.jobDescription === 'string' && result.jobDescription.trim() !== '') {
      return result.jobDescription.trim();
    } else {
      console.warn('后端 LLM 提取接口返回结果为空或格式不正确。');
      return null; // 提取失败或结果为空，返回 null
    }
  } catch (error) {
    console.error('调用 LLM 提取职位描述时发生错误:', error);
    return null; // 发生错误，返回 null
  }
};


export const callTavilyAPI = async (url: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/fetch-url-content?url=${url}`);

    if (!response.ok) {
      throw new Error(`后端 API 请求失败，状态码: ${response.status}`);
    }

    const datastr = await response.json();
    //解析data  、提取raw_content
    const data = JSON.parse(datastr);
    //console.log('Tavily API call successful', data.results.length, data.results[0].raw_content); // Log the whole data object for debugging
    if (data && data.results && data.results.length > 0) {
     // console.log('data.results[0].raw_content:', data.results[0].raw_content); // Log the raw_content for debugging
      if (typeof data.results[0].raw_content === 'string') { // Check if raw_content is a string
        const rawContent = data.results[0].raw_content;
        // 调用 LLM 提取职位描述
        const llmExtractedDescription = await extractJobDescriptionWithLLM(rawContent);

        // 如果 LLM 提取结果不为空，则返回 LLM 结果
        if (llmExtractedDescription) {
          console.log('LLM 成功提取职位描述。');
          return llmExtractedDescription;
        } else {
          // 如果 LLM 提取失败或结果为空，返回 Tavily 原始结果
          console.warn('LLM 提取职位描述失败或结果为空，返回 Tavily 原始结果。');
          return rawContent;
        }
      } else {
        // If raw_content is missing or not a string, throw an error
        throw new Error('后端 API 返回的职位信息格式不正确或为空。raw_content 不是字符串。');
      }
    } else {
      throw new Error('后端 API 返回的职位信息格式不正确或为空。缺少 results 数组或其内容。');
    }
  } catch (error: unknown) {
    console.error('Tavily API call error:', error);
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('An unknown error occurred during Tavily API call.');
    }
  }
};

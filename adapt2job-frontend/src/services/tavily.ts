const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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
        return data.results[0].raw_content;
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

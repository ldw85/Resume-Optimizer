// src/services/tavily.ts

const TAVILY_API_KEY = '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'; // 默认 Tavily API 密钥 (存在安全风险)

export const callTavilyAPI = async (url: string) => {
  const apiUrl = 'https://api.tavily.com/search'; // 假设的 Tavily API 端点

  try {
    const response = await fetch(apiUrl, {
      method: 'POST', // Tavily API 可能是 POST 请求
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TAVILY_API_KEY}`, // 使用 API 密钥进行身份验证
      },
      body: JSON.stringify({
        q: `抓取并总结网页内容: ${url}` //  构造 Tavily API 请求体
      }),
    });

    if (!response.ok) {
      throw new Error(`Tavily API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data; // 返回 Tavily API 响应数据
  } catch (error: any) {
    console.error('Tavily API call error:', error);
    throw error; // 抛出错误以便组件处理
  }
};

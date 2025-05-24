const callTavilyAPI = async (url: string) => {
  const TAVILY_API_KEY = process.env.TAVILY_API_KEY; // 默认 Tavily API 密钥 (存在安全风险)
  const apiUrl = 'https://api.tavily.com/extract'; // Tavily Extract API 端点

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TAVILY_API_KEY}`, // 使用 API 密钥进行身份验证
      },
      body: JSON.stringify({
        urls: [url], // 构造 Tavily Extract API 请求体
        extract_depth: "advanced"
      }),
    });

    if (!response.ok) {
      throw new Error(`Tavily Extract API request failed with status ${response.status}`);
    }
    const data = await response.text();
    //console.log('Tavily Extract API response:', data); // Log response text for debugging
    return data; // 返回 Tavily Extract API 响应数据
  } catch (error: unknown) {
    console.error('Tavily Extract API call error:', error);
    if (error instanceof Error) {
      throw error; // 抛出错误以便组件处理
    } else {
      throw new Error('An unknown error occurred during Tavily Extract API call.');
    }
  }
};

export { callTavilyAPI };

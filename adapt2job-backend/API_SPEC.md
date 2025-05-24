# ResumeOptimizer Backend API 说明书

## 1. 简介

本文档旨在为前端开发者提供 ResumeOptimizer 后端 API 的详细说明，以便更好地调用相关接口。

## 2. 接口列表

### 2.1 简历解析

*   **接口:** `/api/parse-resume`
*   **方法:** POST
*   **功能描述:** 接收用户上传的简历文件（PDF、DOCX），提取文本内容。
*   **请求参数:**
    *   `resume`: 简历文件 (multipart/form-data)
*   **响应参数:**
    *   `text`: 提取的文本内容 (string)
*   **示例:**

    ```
    // 前端代码示例
    const formData = new FormData();
    formData.append('resume', resumeFile);

    fetch('/api/parse-resume', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.text);
    });
    ```

### 2.2 分析简历内容

*   **接口:** `/api/analyze-resume`
*   **方法:** POST
*   **功能描述:** 分析简历内容，提供优化建议。
*   **请求参数:**
    *   `resumeText`: 简历文本 (string)
    *   `jobDescription`: 职位描述文本 (string)
*   **响应参数:**
    *   `analysis`: 分析结果 (string)
*   **示例:**

    ```
    // 前端代码示例
    fetch('/api/analyze-resume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            resumeText: '...',
            jobDescription: '...'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.analysis);
    });
    ```

### 2.3 获取网页内容

*   **接口:** `/api/fetch-url-content`
*   **方法:** GET
*   **功能描述:** 根据 URL 获取网页内容。
*   **请求参数:**
    *   `url`: 网页 URL (string, query parameter)
*   **响应参数:**
    *   `content`: 网页内容 (string)
*   **示例:**

    ```
    // 前端代码示例
    fetch('/api/fetch-url-content?url=https://example.com')
    .then(response => response.json())
    .then(data => {
        console.log(data.content);
    });

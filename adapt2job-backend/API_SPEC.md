# ResumeOptimizer Backend API 说明书

## 1. 简介

本文档旨在为前端开发者提供 ResumeOptimizer 后端 API 的详细说明，以便更好地调用相关接口。

## 2. 接口列表

### 2.1 简历解析 (文件)

*   **接口:** `/api/resume/parse`
*   **方法:** POST
*   **功能描述:** 接收用户上传的简历文件（PDF、DOCX），提取文本内容。
*   **请求参数:**
    *   `resume`: 简历文件 (multipart/form-data)
*   **响应参数:**
    *   `text`: 提取的文本内容 (string)
*   **示例:**

    ```javascript
    // 前端代码示例
    const formData = new FormData();
    formData.append('resume', resumeFile);

    fetch('/api/resume/parse', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.text);
    });
    ```

### 2.2 简历解析 (图片)

*   **接口:** `/api/resume/parse-resume-images`
*   **方法:** POST
*   **功能描述:** 接收用户上传的简历图片文件（JPEG、PNG），提取文本内容。
*   **请求参数:**
    *   `files`: 简历图片文件数组 (multipart/form-data)
*   **响应参数:**
    *   `text`: 提取的文本内容 (string)
*   **示例:**

    ```javascript
    // 前端代码示例
    const formData = new FormData();
    for (const file of imageFiles) {
        formData.append('files', file);
    }

    fetch('/api/resume/parse-resume-images', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.text);
    });
    ```

### 2.3 分析简历内容

*   **接口:** `/api/analyze-resume`
*   **方法:** POST
*   **功能描述:** 分析简历内容，提供优化建议。
*   **请求参数:**
    *   `resumeText`: 简历文本 (string, body)
    *   `jobDescriptionText`: 职位描述文本 (string, body)
    *   `llmType`: LLM 模型类型 (string, optional, body, default: 'gemini')
*   **响应参数:**
    *   `analysis`: 分析结果 (string)
*   **示例:**

    ```javascript
    // 前端代码示例
    fetch('/api/analyze-resume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            resumeText: '...',
            jobDescriptionText: '...',
            llmType: 'gemini' // Optional
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.analysis);
    });
    ```

### 2.4 获取网页内容

*   **接口:** `/api/fetch-url-content`
*   **方法:** GET
*   **功能描述:** 根据 URL 获取网页内容。
*   **请求参数:**
    *   `url`: 网页 URL (string, query parameter)
*   **响应参数:**
    *   `content`: 网页内容 (string)
*   **示例:**

    ```javascript
    // 前端代码示例
    fetch('/api/fetch-url-content?url=https://example.com')
    .then(response => response.json())
    .then(data => {
        console.log(data.content);
    });
    ```


### 2.5 下载优化后的简历 (PDF)

*   **接口:** `/api/download/pdf`
*   **方法:** POST
*   **功能描述:** 根据提供的 HTML 内容生成并下载 PDF 文件。
*   **请求参数:**
    *   `htmlContent`: 简历的 HTML 内容 (string, body)
*   **响应参数:**
    *   PDF 文件 (application/pdf)
*   **示例:**

    ```javascript
    // 前端代码示例
    fetch('/api/download/pdf', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            htmlContent: '<div>...</div>'
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.blob();
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'modified-resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    })
    .catch(error => {
        console.error('Download failed:', error);
    });
    ```

### 2.6 下载优化后的简历 (DOCX)

*   **接口:** `/api/download/docx`
*   **方法:** POST
*   **功能描述:** 根据提供的 HTML 内容生成并下载 DOCX 文件。
*   **请求参数:**
    *   `htmlContent`: 简历的 HTML 内容 (string, body)
*   **响应参数:**
    *   DOCX 文件 (application/vnd.openxmlformats-officedocument.wordprocessingml.document)
*   **示例:**

    ```javascript
    // 前端代码示例
    fetch('/api/download/docx', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            htmlContent: '<div>...</div>'
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.blob();
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'modified-resume.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    })
    .catch(error => {
        console.error('Download failed:', error);
    });
    ```

### 2.6 提交用户反馈

*   **接口:** `/api/feedback`
*   **方法:** POST
*   **功能描述:** 接收用户反馈信息并保存。
*   **请求参数:**
    *   `comment`: 反馈评论 (string, body)
    *   `userId`: 用户ID (string, body)
*   **响应参数:**
    *   `message`: 成功消息 (string)
*   **示例:**

    ```javascript
    // 前端代码示例
    fetch('/api/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            comment: 'This is my feedback.',
            userId: 'user123'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    });
    ```

### 2.7 用户简历管理 (需要认证)

*   **接口:** `/api/resumes`
*   **功能描述:** 管理用户的保存的简历。所有接口都需要用户认证 (通过 Clerk Middleware)。

#### 2.7.1 保存或更新简历

*   **接口:** `/api/resumes`
*   **方法:** POST
*   **功能描述:** 保存或更新当前用户的简历。
*   **请求参数:**
    *   `title`: 简历标题 (string, body)
    *   `content`: 简历内容 (string, body)
*   **响应参数:**
    *   保存或更新后的简历对象 (object)
*   **示例:**

    ```javascript
    // 前端代码示例 (假设已获取认证 token)
    fetch('/api/resumes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_AUTH_TOKEN' // 替换为实际的认证 token
        },
        body: JSON.stringify({
            title: 'My Resume',
            content: '...'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    ```

#### 2.7.2 获取用户所有简历

*   **接口:** `/api/resumes`
*   **方法:** GET
*   **功能描述:** 获取当前用户所有保存的简历列表。
*   **请求参数:** 无
*   **响应参数:**
    *   用户简历对象数组 (array of objects)
*   **示例:**

    ```javascript
    // 前端代码示例 (假设已获取认证 token)
    fetch('/api/resumes', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer YOUR_AUTH_TOKEN' // 替换为实际的认证 token
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    ```

#### 2.7.3 删除用户简历

*   **接口:** `/api/resumes/:id`
*   **方法:** DELETE
*   **功能描述:** 删除当前用户指定ID的简历。
*   **请求参数:**
    *   `id`: 简历ID (string, URL parameter)
*   **响应参数:** 无 (成功返回 204 No Content)
*   **示例:**

    ```javascript
    // 前端代码示例 (假设已获取认证 token)
    const resumeIdToDelete = 'some-resume-id';
    fetch(`/api/resumes/${resumeIdToDelete}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer YOUR_AUTH_TOKEN' // 替换为实际的认证 token
        }
    })
    .then(response => {
        if (response.status === 204) {
            console.log('Resume deleted successfully.');
        } else {
            console.error('Failed to delete resume.');
        }
    });
    ```

### 2.8 用户注册信息

*   **接口:** `/api/user/register-info`
*   **方法:** POST
*   **功能描述:** 注册或更新用户的基本信息（如 Clerk User ID 和 Email）。
*   **请求参数:**
    *   `clerkUserId`: Clerk 用户ID (string, body)
    *   `email`: 用户邮箱 (string, body)
*   **响应参数:**
    *   新创建的用户信息对象 (object) 或已存在用户的消息 (object)
*   **示例:**

    ```javascript
    // 前端代码示例
    fetch('/api/user/register-info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            clerkUserId: 'user_clerk_id',
            email: 'user@example.com'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

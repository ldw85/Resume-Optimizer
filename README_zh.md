# ResumeOptimizer

ResumeOptimizer 是一个全栈应用程序，旨在帮助用户优化他们的简历以用于求职。它利用人工智能（Gemini, DeepSeek）进行简历分析和内容生成，并与 Tavily 集成以获取网页内容。该应用程序支持多种语言，并提供无缝的用户体验，以提高求职成功率。

## 特性

*   **AI 驱动的简历分析:** 将您的简历与职位描述进行对比分析，获取量身定制的优化建议和解释。
*   **简历解析:** 上传 PDF 或 DOCX 格式的简历以提取文本内容。
*   **文档生成:** 以 DOCX 格式生成优化的简历，支持样式转换。
*   **网页内容抓取:** 自动从提供的 URL 获取职位描述或相关内容。
*   **多语言支持:** 前端支持英语、中文、日语、西班牙语和德语。
*   **用户认证:** 由 Clerk 提供安全的登录和注册功能。
*   **一致的 UI/UX:** 简化的界面，在整个应用程序中具有一致的按钮样式。

## 入门指南

### 先决条件

*   Node.js (推荐 v18 或更高版本)
*   npm 或 yarn

### 安装

1.  克隆仓库:
    ```bash
    git clone https://github.com/ldw85/Adapt2Job.git
    cd Adapt2Job
    ```

2.  **后端设置:**
    *   进入后端目录: `cd adapt2job-backend`
    *   安装依赖:
        ```bash
        npm install
        # 或
        yarn install
        ```
    *   在 `adapt2job-backend` 目录下创建一个 `.env` 文件。复制 `.env.template` 的内容并填入您的 API 密钥和 Supabase 凭据。
        ```bash
        cp .env.template .env
        # 然后编辑 .env 文件
        ```

3.  **前端设置:**
    *   进入前端目录: `cd ../adapt2job-frontend`
    *   安装依赖:
        ```bash
        npm install
        # 或
        yarn install
        ```
    *   在 `adapt2job-frontend` 目录下创建一个 `.env` 文件。您需要配置 Clerk 密钥和后端 API URL。请参考前端目录中的 `.env.example` 文件获取指导。

### 运行应用程序

1.  **启动后端:**
    *   进入后端目录: `cd ../adapt2job-backend`
    *   运行启动脚本:
        ```bash
        npm run start
        # 或
        npm run dev
        ```

2.  **启动前端:**
    *   进入前端目录: `cd ../adapt2job-frontend`
    *   运行开发服务器:
        ```bash
        npm run dev
        # 或
        yarn dev
        ```
    前端通常会在 `http://localhost:5173` 启动。

## 项目结构

```
Adapt2Job/
├── adapt2job-backend/      # 后端服务 (Node.js, Express)
│   ├── src/                # 后端源代码
│   ├── package.json        # 后端依赖
│   ├── .env                # 后端环境变量 (API 密钥等)
│   └── ...
├── adapt2job-frontend/     # 前端应用程序 (React, Vite)
│   ├── public/             # 静态资源
│   ├── src/                # 前端源代码
│   ├── landing_pages/      # 多语言着陆页
│   ├── package.json        # 前端依赖
│   ├── .env                # 前端环境变量 (Clerk 密钥, API URL)
│   └── ...
├── README.md               # 项目概述 (此文件)
├── README_zh.md            # 项目概述 (中文版)
├── .env.template           # 环境变量模板
└── ...
```

## 使用技术栈

*   **后端:** Node.js, Express, TypeScript, Multer, PDF-parse, Mammoth, Gemini API, Tavily API, Supabase, Clerk API.
*   **前端:** React, Vite, Tailwind CSS, i18next, Clerk, Supabase SDK.

## 贡献

欢迎贡献！请参考 `adapt2job-frontend/CONTRIBUTING.md` 获取指南。

## 许可证

本项目采用 MIT 许可证。

## 已部署的应用

您可以在此处访问在线应用：
[https://resumeoptimizer.click](https://resumeoptimizer.click)

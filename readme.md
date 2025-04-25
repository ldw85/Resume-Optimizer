# Adapt2Job

## 项目简介

Adapt2Job 是一个根据职位要求优化简历的工具。 

## 代码结构

*   `adapt2job-frontend/`: 前端代码目录
    *   `src/`: 源代码目录
        *   `App.tsx`: 应用主组件，包含使用 TailwindCSS 实现的抬头栏（网站 Logo 和语言切换下拉框）
        *   `components/`: 组件目录
            *   `ResumeInput.tsx`: 简历输入组件
            *   `JobInput.tsx`: 职位输入组件
            *   `AnalysisOutput.tsx`: 分析结果展示组件
        *   `services/`: 服务目录
            *   `llmService.ts`: LLM API 服务 (Gemini 和 DeepSeek)
            *   `tavily.ts`: Tavily API 服务
        *   `hooks/`: Hooks 目录
            *   `useResumeAnalyzer.ts`: 简历分析 Hook
    *   `package.json`: 项目依赖和脚本配置

## 执行顺序

1.  用户输入简历和职位描述。
2.  点击“优化我的简历”按钮。
3.  前端调用 LLM API (首先尝试 Gemini, 失败则回退到 DeepSeek) 分析简历和职位描述。
4.  前端展示分析结果。

## 运行逻辑

1.  `App.tsx` 组件负责管理应用状态和调用 Gemini API。
2.  `ResumeInput.tsx` 和 `JobInput.tsx` 组件负责接收用户输入。
3.  `AnalysisOutput.tsx` 组件负责展示分析结果。
4.  `llmService.ts` 文件负责与 LLM API (Gemini 和 DeepSeek) 进行交互。
5.  `tavily.ts` 文件负责与 Tavily API 进行交互。
6.  `useResumeAnalyzer.ts` Hook 封装了简历分析的逻辑，包括 Gemini 和 DeepSeek 的回退机制。

## 详细注释

请参考代码中的注释。

## API Key

请在 `adapt2job-frontend/src/services/.ts` 文件中替换 `GEMINI_API_KEY` 和 `DEEPSEEK_API_KEY` 为你自己的 API Key。

## 多语言支持

本项目使用 i18next 实现了多语言支持。

*   多语言资源文件位于 `adapt2job-frontend/src/locales/` 目录下，包含 `zh-CN.json` 和 `en-US.json` 两个文件，分别对应中文和英文。
*   使用 `i18next-browser-languagedetector` 自动检测浏览器语言。
*   在 React 组件中使用 `useTranslation` Hook 获取 `t` 函数，并使用 `t('key')` 的方式来翻译文本。

## API Key

请在 `adapt2job-frontend/src/services/llmService.ts` 文件中替换 `GEMINI_API_KEY` 和 `DEEPSEEK_API_KEY` 为你自己的 API Key。

## Vercel 部署

*   **Build Command:** `npm run build`
*   **Output Directory:** `dist`
*   **Install Command:** `npm install`
*   **Development Command:** `vite dev`
*   **Root Directory:** `adapt2job-frontend`
*   **Node.js Version:** 推荐使用 Node.js 18 或更高版本。

## SEO 优化记录

*   更新了 `adapt2job-frontend/index.html` 文件中的 `<title>` 和 `<meta name="description">` 标签，优化了页面标题和描述。
*   在 `adapt2job-frontend/src/components/HowItWorks.tsx` 组件中添加了关于 Adapt2Job 的描述，以便搜索引擎更好地了解网站的功能和特点。
*   提供了创建 XML 网站地图并提交给搜索引擎的步骤和建议。
*   提供了注册 Google Search Console 和 Bing Webmaster Tools，并监控网站的 SEO 效果的步骤和建议。


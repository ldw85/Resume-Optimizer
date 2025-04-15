# Adapt2Job

## 项目简介

Adapt2Job 是一个根据职位要求优化简历的工具。

## 代码结构

*   `adapt2job-frontend/`: 前端代码目录
    *   `src/`: 源代码目录
        *   `App.tsx`: 应用主组件
        *   `components/`: 组件目录
            *   `ResumeInput.tsx`: 简历输入组件
            *   `JobInput.tsx`: 职位输入组件
            *   `AnalysisOutput.tsx`: 分析结果展示组件
        *   `services/`: 服务目录
            *   `gemini.ts`: Gemini API 服务
            *   `tavily.ts`: Tavily API 服务
        *   `hooks/`: Hooks 目录
            *   `useGemini.ts`: Gemini API Hook
    *   `package.json`: 项目依赖和脚本配置

## 执行顺序

1.  用户输入简历和职位描述。
2.  点击“优化我的简历”按钮。
3.  前端调用 Gemini API 分析简历和职位描述。
4.  前端展示分析结果。

## 运行逻辑

1.  `App.tsx` 组件负责管理应用状态和调用 Gemini API。
2.  `ResumeInput.tsx` 和 `JobInput.tsx` 组件负责接收用户输入。
3.  `AnalysisOutput.tsx` 组件负责展示分析结果。
4.  `gemini.ts` 和 `tavily.ts` 文件负责与 Gemini 和 Tavily API 进行交互。
5.  `useGemini.ts` Hook 封装了 Gemini API 的调用逻辑。

## 详细注释

请参考代码中的注释。

## Vercel 部署

*   **Build Command:** `npm run build`
*   **Output Directory:** `dist`
*   **Install Command:** `npm install`
*   **Development Command:** `vite dev`
*   **Root Directory:** `adapt2job-frontend`
*   **Node.js Version:** 推荐使用 Node.js 18 或更高版本。

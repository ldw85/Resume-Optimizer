# Adapt2Job - 简历优化工具

Adapt2Job 是一个根据目标职位要求来优化个人简历的前端应用。

## 项目简介

本工具旨在帮助求职者快速、有效地调整简历内容，使其更符合特定职位的需求，从而提高求职成功率。用户可以输入自己的简历和目标职位的描述，应用将分析两者并提供优化建议和修改后的简历版本。

## 技术栈

*   **框架:** React (v19.0.0)
*   **语言:** TypeScript (~5.7.2)
*   **构建工具:** Vite (6.2.0)
*   **样式:** Tailwind CSS (4.1.3)
*   **国际化:** i18next (25.0.0), react-i18next (15.4.1)
*   **UI 组件:** Radix UI (@radix-ui/react-accordion: 1.2.4), Lucide Icons (0.487.0)
*   **其他:** react-hot-toast (2.5.2), clsx (2.1.1)/tailwind-merge (3.2.0)

## 项目结构

```
adapt2job-frontend/
├── public/             # 静态资源
├── src/
│   ├── assets/         # 图片等资源
│   ├── components/     # React 组件 (AnalysisOutput, JobInput, ResumeInput, HowItWorks)
│   ├── hooks/          # 自定义 Hooks (useResumeAnalyzer)
│   ├── lib/            # 工具函数 (utils.ts)
│   ├── services/       # API 调用相关 (geminiService.ts)
│   ├── styles/         # 全局样式或特定样式文件
│   ├── App.css         # App 组件样式
│   ├── App.tsx         # 主应用组件
│   ├── gemini.prompt.ts # Gemini API 的 Prompt
│   ├── i18n.ts         # i18next 配置
│   ├── index.css       # 全局入口样式
│   ├── main.tsx        # 应用入口文件
│   ├── types.ts        # TypeScript 类型定义
│   └── vite-env.d.ts   # Vite 环境变量类型定义
├── .gitignore          # Git 忽略配置
├── README.md           # 项目说明文档 (本文件)
├── index.html          # HTML 入口文件
├── package.json        # 项目依赖和脚本配置
├── postcss.config.js   # PostCSS 配置
├── tailwind.config.js  # Tailwind CSS 配置
├── tsconfig.json       # TypeScript 基础配置
├── tsconfig.app.json   # TypeScript 应用编译配置
├── tsconfig.node.json  # TypeScript Node 环境配置
└── vite.config.ts      # Vite 配置
```

## 执行逻辑

1.  **入口 (`src/main.tsx`):** 初始化 React 应用，设置 i18next 进行国际化，并将根组件 `App` 渲染到 `index.html` 中的 `#root` 元素。
2.  **主组件 (`src/App.tsx`):**
    *   管理应用状态，包括简历文本 (`resumeText`)、职位描述文本 (`jobDescriptionText`)、分析结果 (`analysisResult`) 和当前语言 (`language`)。
    *   提供简历和职位描述的输入框 (`ResumeInput`, `JobInput`)。
    *   包含一个语言切换器 (`Select` from `react-select`)。
    *   点击“优化我的简历”按钮时，调用 `handleAnalyze` 函数。
    *   `handleAnalyze` 函数会进行输入校验，然后调用 `useResumeAnalyzer` Hook 中的 `analyzeResume` 方法。
    *   `analyzeResume` (在 `src/hooks/useResumeAnalyzer.ts` 中) 负责调用后端服务 (如 `src/services/geminiService.ts` 中的 `analyzeResumeWithGemini`) 来处理简历和职位描述，并返回分析结果。
    *   获取到结果后，更新 `analysisResult` 状态，并通过 `AnalysisOutput` 组件展示给用户。
    *   `HowItWorks` 组件 (位于 `src/components/HowItWorks.tsx`) 提供使用说明，展示简历优化的步骤。

## 如何运行

1.  **安装依赖:**
    ```bash
    npm install
    ```

2.  **启动开发服务器:**
    ```bash
    npm run dev
    ```
    应用将在本地启动，通常访问 `http://localhost:5173` (端口可能变化)。

3.  **构建生产版本:**
    ```bash
    npm run build
    ```
    构建后的文件将输出到 `dist` 目录。

4.  **预览生产版本:**
    ```bash
    npm run preview
    ```

5.  **代码检查:**
    ```bash
    npm run lint
    ```

## 注意事项

*   确保已配置必要的环境变量，特别是用于调用后端分析服务的 API 密钥（如果需要）。
*   国际化文件位于 `public/locales/` 目录下。

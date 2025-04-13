# Adapt2Job - 优化您的求职申请

## 目录结构

```
| 文件/目录 | 说明 |
|---|---|
| .gitignore |  指定 Git 应该忽略的文件和目录，例如日志文件、`node_modules` 目录、编辑器配置文件等。 |
| eslint.config.js |  ESLint 配置文件，用于定义代码风格规则和检查代码质量。 |
| index.html |  HTML 入口文件，定义了页面的基本结构，包括 `head` 和 `body` 标签，以及用于挂载 React 组件的 `div#root` 元素。 |
| package-lock.json |  记录了项目依赖的精确版本信息，用于确保在不同环境下安装相同的依赖。 |
| package.json |  定义了项目的元数据，包括名称、版本、依赖、脚本等。 |
| postcss.config.js |  PostCSS 配置文件，用于配置 PostCSS 插件，例如 Tailwind CSS 和 Autoprefixer。 |
| README.md |  项目说明文档，用于描述项目的功能、使用方法、目录结构、文件功能和调用关系等。 |
| tailwind.config.js |  Tailwind CSS 配置文件，用于配置 Tailwind CSS 的主题、变体和插件。 |
| tsconfig.app.json |  TypeScript 配置文件，用于配置 TypeScript 编译选项，适用于应用程序代码。 |
| tsconfig.json |  TypeScript 根配置文件，用于引用其他 TypeScript 配置文件，例如 `tsconfig.app.json` 和 `tsconfig.node.json`。 |
| tsconfig.node.json |  TypeScript 配置文件，用于配置 TypeScript 编译选项，适用于 Node.js 环境的代码，例如 `vite.config.ts`。 |
| vite.config.ts |  Vite 配置文件，用于配置 Vite 构建工具，例如插件（如 React 插件）。 |
| dist/ |  构建输出目录，包含用于生产环境部署的优化后的静态文件。 |
| node\_modules/ |  项目依赖的 Node.js 模块。 |
| public/ |  静态资源目录，包含 `vite.svg`（Vite 的 logo）等文件。 |
| src/ |  源代码目录，包含 React 组件、样式、hooks 和服务等。 |
| src/App.css |  定义了 `App.tsx` 组件的样式，例如 logo 样式、卡片样式等。 |
| src/App.tsx |  React 根组件，包含了整个应用的主要逻辑和 UI 结构。 |
| src/index.css |  全局 CSS 文件，定义了基础样式、Tailwind CSS 指令以及一些全局元素的样式。 |
| src/main.tsx |  应用程序的入口文件，使用 `createRoot` 将根组件 `App` 渲染到 `index.html` 中的 `div#root` 元素。 |
| src/vite-env.d.ts |  TypeScript 声明文件，用于声明 Vite 客户端类型。 |
| src/assets/ |  静态资源目录，包含 `react.svg`（React 的 logo）和 `resume.html`（简历模板）等文件。 |
| src/components/ |  React 组件目录，包含应用程序的 UI 组件。 |
| src/components/AnalysisOutput.tsx |  用于显示简历分析结果的 React 组件，包含修改思路、修改内容说明和修改后的完整简历，并支持 HTML 格式展示。 |
| src/components/HowItWorks.tsx |  用于显示“如何工作”说明的 React 组件（目前内容为空）。 |
| src/components/JobInput.tsx |  用于输入职位描述的 React 组件，支持粘贴文本和输入 URL（URL 功能待实现）。 |
| src/components/ResumeInput.tsx |  用于输入简历内容的 React 组件，支持粘贴文本和上传文件（上传文件功能待实现）。 |
| src/components/SettingsModal.tsx |  用于设置 API 密钥的 React 组件，包含 Gemini API 密钥和 Tavily API 密钥的输入框。 |
| src/hooks/ |  React Hooks 目录，包含自定义 React Hooks。 |
| src/hooks/useApiKeyStorage.ts |  自定义 React Hook，用于管理 API 密钥的存储和读取，使用 `localStorage` 实现。 |
| src/hooks/useGemini.ts |  自定义 React Hook，用于调用 Gemini 模型接口。该 Hook 首先从 `localStorage` 获取 API 密钥，如果不存在则使用默认密钥。 |
| src/services/ |  服务目录，包含用于外部服务交互的模块。 |
| src/services/gemini.ts |  用于调用 Gemini API 的服务模块，包含 `callGeminiAPI` 函数，用于发送请求并处理响应。该函数从 `gemini.prompt.ts` 导入 prompt 模板，并将简历和职位描述替换到模板中，然后调用 Gemini API。 API Key 作为查询参数添加到 URL 中，并返回 Gemini API 响应数据。 |
| src/services/tavily.ts |  用于调用 Tavily API 的服务模块，包含 `callTavilyAPI` 函数，用于发送请求并处理响应。 |

## 调用关系

*   `App.tsx`
    *   引入 `AnalysisOutput`, `JobInput`, `ResumeInput`, `useGemini`
    *   使用 `ResumeInput` 和 `JobInput` 组件获取用户输入
    *   使用 `useGemini` hook 调用 Gemini API
    *   使用 `AnalysisOutput` 组件显示分析结果
*   `AnalysisOutput.tsx`
    *   接收 `analysisResult` 作为 prop，显示分析结果。由于 `analysisResult` 中的 `modificationIdeas` 和 `contentExplanation` 字段现在是 JSON 字符串，需要在组件中进行解析。
*   `JobInput.tsx`
    *   接收 `value` 和 `onChange` 作为 prop，用于输入职位描述
*   `ResumeInput.tsx`
    *   接收 `value` 和 `onChange` 作为 prop，用于输入简历内容
*   `useGemini.ts`
    *   被 `App.tsx` 调用，用于调用 Gemini API。该 Hook 调用 `src/services/gemini.ts` 模块中的 `callGeminiAPI` 函数，并提取返回报文中的 `modificationIdeas`、`contentExplanation` 和 `modifiedResume` 字段，赋值给 `GeminiResponse` 接口。
*   `useApiKeyStorage.ts`
    *   被 `useGemini.ts` 调用，用于获取 API 密钥
*   `gemini.ts`
    *   被 `useGemini.ts` 调用，用于调用 Gemini API。该模块从 `gemini.prompt.ts` 导入 prompt 模板，并将简历和职位描述替换到模板中，然后调用 Gemini API。
*   `tavily.ts`
    *   未被调用

*   `useApiKeyStorage.ts`
    *   被 `useGemini.ts` 调用，用于获取 API 密钥

## 调用链路

1.  用户在 `ResumeInput` 和 `JobInput` 组件中输入简历和职位描述。
2.  用户点击“优化我的简历”按钮。
3.  `App.tsx` 中的 `handleAnalyze` 函数被触发。
4.  `handleAnalyze` 函数调用 `useGemini` hook。
5.  `useGemini` hook 调用 `src/services/gemini.ts` 模块中的 `callGeminiAPI` 函数。
6.  `callGeminiAPI` 函数从 `gemini.prompt.ts` 导入 prompt 模板，并将简历和职位描述替换到模板中。
7.  `callGeminiAPI` 函数调用 Gemini API。
8.  `App.tsx` 接收 Gemini API 的响应，并将结果传递给 `AnalysisOutput` 组件。
9.  `AnalysisOutput` 组件显示分析结果。

## 技术栈总结与建议

### 技术栈

*   **React**: 用于构建用户界面的 JavaScript 库。
*   **TypeScript**: 用于静态类型检查的 JavaScript 超集，提高代码质量和可维护性。
*   **Vite**:  用于构建和打包前端项目的快速构建工具。
*   **Tailwind CSS**: 用于快速构建用户界面的 CSS 框架。
*   **ESLint**: 用于代码风格检查和代码质量控制。
*   **PostCSS**: 用于处理 CSS 的工具，例如 Tailwind CSS 和 Autoprefixer。
*   **Gemini API**: 用于调用 Gemini 模型接口。
*   **Tavily API**: 用于调用 Tavily API。
*   **HTML**: 用于构建页面结构。
*   **CSS**: 用于页面样式。

### 技术栈特点

*   **React**: 提供了组件化的开发方式，易于构建可复用的 UI 组件。
*   **TypeScript**: 提供了类型检查，可以减少运行时错误，提高代码质量。
*   **Vite**: 提供了快速的开发体验和构建速度。
*   **Tailwind CSS**: 提供了快速的 UI 构建方式，通过实用程序类来定义样式。
*   **ESLint**: 确保代码风格一致性，提高代码可读性。
*   **PostCSS**: 提供了 CSS 预处理和后处理的能力。
*   **Gemini API & Tavily API**: 提供了与外部服务的交互能力。
*   **HTML**: 用于构建页面结构。
*   **CSS**: 用于页面样式。

### 技术栈选择建议

*   **考虑使用 Next.js**:  如果项目需要服务器端渲染 (SSR) 或静态站点生成 (SSG)，可以考虑使用 Next.js。Next.js 提供了更好的 SEO 和性能优化。
*   **优化 API 调用**:  对于 Gemini API 和 Tavily API 的调用，可以考虑使用缓存、错误处理和重试机制来提高性能和可靠性。
*   **代码模块化和可维护性**:  进一步优化代码结构，例如，将 API 调用相关的逻辑提取到单独的模块中，以便更好地组织和维护代码。

# ResumeOptimizer - Resume Optimization Tool

ResumeOptimizer is a frontend application designed to optimize personal resumes based on target job requirements.

For a detailed description of the website's functionality, please see [FUNCTIONALITY.md](FUNCTIONALITY.md).

For a history of changes made to the project, please see [CHANGELOG.md](CHANGELOG.md).

## Technology Stack

*   **框架:** React (v19.0.0)
*   **语言:** TypeScript (~5.7.2)
*   **样式:** Tailwind CSS (4.1.3)
*   **国际化:** i18next (25.0.0), react-i18next (15.4.1)
*   **UI 组件:** Radix UI (@radix-ui/react-accordion: 1.2.4), Lucide Icons (0.487.0)
*   **其他:** react-hot-toast (2.5.2), clsx (2.1.1)/tailwind-merge (3.2.0)

## Project Structure

```
.
├── adapt2job-frontend/ # Frontend application
│   ├── public/             # Static assets (accessible at root)
│   │   ├── locales/        # Internationalization files (en.json, zh.json, es.json, ja.json, de.json, etc.)
│   │   └── ...             # Other static assets (images, favicon.ico, manifest.json)
│   ├── src/
│   │   ├── assets/         # Images and other assets used by OptimizerPage
│   │   ├── components/     # Reusable React Components
│   │   │   ├── landing/      # Components specific to landing pages (now includes zh)
│   │   │   │   ├── en/
│   │   │   │   │   ├── components/ # Components for the English landing page (Navbar, Hero, etc.)
│   │   │   │   │   └── styles/     # Styles for the English landing page (main.css)
│   │   │   ├── es/
│   │   │   │   ├── components/ # Components for the Spanish landing page
│   │   │   │   └── styles/     # Styles for the Spanish landing page
│   │   │   ├── ja/
│   │   │   │   ├── components/ # Components for the Japanese landing page
│   │   │   │   └── styles/     # Styles for the Japanese landing page
│   │   │   └── zh/
│   │   │       ├── components/ # Components for the Chinese landing page (Navbar, Hero, etc.)
│   │   │       └── styles/     # Styles for the Chinese landing page (main.css)
│   │   │   ├── ui/         # General UI components (e.g., Shadcn UI if integrated)
│   │   │   └── ...         # Core application components (AnalysisOutput, JobInput, ResumeInput, HowItWorks for OptimizerPage)
│   │   ├── hooks/          # Custom Hooks (useResumeAnalyzer)
│   │   ├── lib/            # Utility functions (utils.ts)
│   │   ├── services/       # API call related (gemini.ts, llmService.ts, tavily.ts)
│   │   ├── OptimizerPage.tsx # Main component for the resume optimization tool
│   │   ├── App.css         # Styles for OptimizerPage
│   │   ├── index.css       # Global styles, Tailwind base
│   │   ├── main.jsx        # Main application entry point, handles routing using react-router-dom
│   │   ├── i18n.ts         # i18next configuration
│   │   ├── types.ts        # TypeScript type definitions
│   │   └── gemini.prompt.ts # Prompt for Gemini API
│   ├── index.html          # Main HTML entry point for the Vite application
│   ├── .gitignore          # Git ignore configuration
│   ├── README.md           # Project documentation (this file)
│   ├── package.json        # Project dependencies and scripts configuration
│   ├── postcss.config.js   # PostCSS configuration
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── tsconfig.json       # TypeScript configuration
│   ├── eslint.config.js    # ESLint configuration
│   └── components.json     # Shadcn UI components configuration
├── adapt2job-backend/ # Backend application
│   ├── src/
│   │   ├── app.ts            # 后端应用入口，Express 初始化和中间件配置
│   │   ├── api/
│   │   │   └── index.ts      # Vercel Serverless Function 入口
│   │   ├── routes/
│   │   ├── services/
│   │   ├── prompts/
│   │   └── types/
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env
│   └── .gitignore
├── vercel.json         # Vercel deployment configuration for the monorepo
└── package.json        # Root package.json (optional, for monorepo tooling)
```

## Execution Logic

This is a monorepo containing both a React frontend application (`adapt2job-frontend`) and a Node.js Express backend application (`adapt2job-backend`).

### Frontend (`adapt2job-frontend`)

1.  **Entry (`index.html` and `src/main.jsx`):** The application is a Single Page Application (SPA) built with Vite and React.
    *   `index.html` is the main HTML file that loads the application.
    *   `src/main.jsx` is the JavaScript entry point. It initializes React and configures routing using `react-router-dom`.
2.  **Page Routing (`src/main.jsx`):**
    *   `react-router-dom` is used to manage client-side routing.
    *   The root path `/` now serves the English landing page (`ResumeOptimizer-frontend/landing_pages/en/landing-en.jsx`).
    *   Language-specific landing pages are routed using the `/:lang` format (e.g., `/es`, `/ja`, `/zh`), pointing to their respective components in `ResumeOptimizer-frontend/landing_pages/:lang/`.
    *   New routes for usage instructions, FAQ, contact us, privacy policy, and terms of service are added for each language using the `/:lang/:page-name` format (e.g., `/en/usage-instructions`, `/es/faq`, `/ja/contact-us`, `/zh/privacy-policy`, `/en/terms-of-service`).
    *   The Optimizer Page is routed to `/optimizer`.
3.  **Landing Pages (`ResumeOptimizer-frontend/landing_pages/:lang/landing-:lang.jsx`):**
    *   Each language has its own landing page component within the `ResumeOptimizer-frontend/landing_pages/` directory.
    *   Call-to-action buttons on these landing pages now link directly to the `/optimizer` path, passing the language code as a URL parameter (e.g., `/optimizer?lang=en`).
4.  **Resume Optimizer Tool (`src/OptimizerPage.tsx`):**
    *   This is the core application page where users interact with the resume optimization features.
    *   It includes components like `ResumeInput`, `JobInput`, and `AnalysisOutput` (found in `src/components/`).
    *   Upon loading, `OptimizerPage.tsx` checks the URL for a `lang` query parameter. If found, it uses that language. Otherwise, it falls back to detecting the browser's language.
    *   State management for resume text, job description, and analysis results is handled within this component and its hooks (e.g., `useResumeAnalyzer`).
    *   Analysis is triggered by user action, making API calls to the backend services.
5.  **Internationalization:**
    *   i18next is configured in `src/i18n.ts`.
    *   Language files are located in `public/locales/`.
    *   The `I18nextProvider` in `src/main.jsx` makes translations available throughout the application. All pages can use the `useTranslation` hook.
6.  **API Interaction:**
    *   The frontend interacts with the backend API (e.g., `/api/parse-resume`, `/api/analyze-resume`, `/api/fetch-url-content`) to process resumes, analyze content, and fetch external data.

### Backend (`adapt2job-backend`)

The backend is an Express.js application designed to run as Vercel Serverless Functions.

1.  **Entry (`src/app.ts` and `api/index.ts`):**
    *   `src/app.ts` initializes the Express application, sets up middleware (CORS, body-parser), and defines API routes. It exports the Express `app` instance.
    *   `api/index.ts` serves as the entry point for Vercel Serverless Functions. It imports the Express `app` from `src/app.ts` and exports it as the handler.
2.  **API Routes (`src/routes/`):**
    *   `resume.ts`: Handles resume-related API endpoints (e.g., `/api/parse-resume` for file parsing).
    *   `llm.ts`: Handles LLM and Tavily related API endpoints (e.g., `/api/analyze-resume` for AI analysis, `/api/fetch-url-content` for web content extraction).
3.  **Services (`src/services/`):**
    *   `fileParser.ts`: Contains logic for parsing different resume file formats (PDF, DOCX).
    *   `llmService.ts`: Encapsulates logic for interacting with LLM (Gemini) and Tavily APIs.
4.  **Environment Variables:**
    *   API keys for external services (e.g., `GEMINI_API_KEY`, `TAVILY_API_KEY`) are loaded from environment variables. For Vercel deployment, these should be configured in the Vercel project settings.

## How to Run

### Local Development (Monorepo)

1.  **Install Dependencies:**
    *   Navigate to the root of the monorepo.
    *   Install frontend dependencies: `npm install --prefix adapt2job-frontend`
    *   Install backend dependencies: `npm install --prefix adapt2job-backend`
    *   Alternatively, if you have a root `package.json` with workspaces configured, `npm install` at the root might suffice.

2.  **Start Development Servers:**
    *   **Frontend:** Navigate to `adapt2job-frontend` and run `npm run dev`.
    *   **Backend:** Navigate to `adapt2job-backend` and run `npm run dev`.
    *   Ensure your frontend is configured to call the local backend API (e.g., `http://localhost:3000/api`).

### Vercel Deployment

This project is configured for deployment on Vercel as a monorepo with a static frontend and Serverless Functions for the backend.

1.  **Vercel Configuration (`vercel.json`):**
    *   A `vercel.json` file is located at the root of the monorepo. This file defines how Vercel should build and serve both the frontend and backend.
    *   It specifies the build commands for both sub-projects and routing rules to direct API requests to the backend Serverless Functions.
    *   It specifies the build commands for both sub-projects and uses `rewrites` to handle routing, directing API requests to the backend Serverless Functions and providing SPA fallback for the frontend.
    *   The `headers` property is used to configure caching for static assets served from the frontend build output.

2.  **Deployment Steps:**
    *   Push your changes to a Git repository (e.g., GitHub, GitLab, Bitbucket).
    *   Import your Git repository into Vercel. Vercel will automatically detect the `vercel.json` file and configure the deployment.
    *   **Environment Variables:** Configure `GEMINI_API_KEY` and `TAVILY_API_KEY` (and any other necessary backend environment variables) directly in your Vercel project settings (Project Settings -> Environment Variables). Do NOT commit `.env` files to your repository.

## Notes

*   Ensure necessary environment variables are configured in Vercel for the backend services.
*   Internationalization files are located in the `adapt2job-frontend/public/locales/` directory. German language support has been added.
*   修改了 `adapt2job-frontend/src/services/llmService.ts` 文件，将 fetch 请求的超时时间设置为 5 分钟 (300000 毫秒)，以避免请求超时问题。
*   已更新 [FUNCTIONALITY.md](FUNCTIONALITY.md) 文件，增加了 Job Input 功能的详细描述。
*   Added verbose build logs for frontend and backend in `vercel.json` to provide more detailed information during the Vercel build process.

## AnalysisOutput.tsx

### 代码结构说明

`AnalysisOutput.tsx` 组件负责展示简历分析结果，包括修改思路、修改内容说明和修改后的完整简历。

### 执行顺序

1.  接收 `analysisResult` prop，该 prop 包含 `modificationIdeas`、`contentExplanation` 和 `modifiedResume` 属性。
2.  使用 `dangerouslySetInnerHTML` 渲染 HTML 内容。

### 运行逻辑

如果 `analysisResult` 为空，则显示 "No analysis result to display."。否则，显示修改思路、修改内容说明和修改后的完整简历。

### 详细注释

*   `dangerouslySetInnerHTML` 用于渲染 HTML 内容。
*   如果 `analysisResult` 中的数据为空，则渲染空字符串，以防止渲染错误。

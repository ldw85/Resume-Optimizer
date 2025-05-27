# Changelog

This document records the significant changes made to the ResumeOptimizer frontend application.

## Changes Made

*   **2025-05-27:** Refactored backend server startup: Introduced `adapt2job-backend/src/index.ts` as the main entry point for local Express server execution, importing the Express app from `adapt2job-backend/src/app.ts`. This clarifies the separation of concerns between app configuration and server bootstrapping.

*   **2025-05-27:** Updated `vercel.json` to replace the deprecated `routes` property with `rewrites` for API and SPA fallback routing, and added `headers` configuration for caching static assets.

*   **2025-05-26:** Added a specific rewrite rule in `vercel.json` to handle the unexpected `/adapt2job-frontend` path, redirecting it to the correct `index.html`, as part of ongoing efforts to resolve 404 errors and output file issues.
*   **2025-05-26:** Further refined `vercel.json` routing rules to explicitly handle static assets and fallback to `index.html` for all other paths, aiming to resolve persistent 404 errors and the unexpected `adapt2job-frontend` file in the output.
*   **2025-05-26:** Refined `vercel.json` routing rules to explicitly handle the root path (`/`) and other paths (`/(.*)`) for the frontend, addressing the issue of an unexpected `adapt2job-frontend` file in the output.
*   **2025-05-26:** Updated `vercel.json` to correctly configure frontend build source and output directory for Vercel deployment, resolving potential 404 issues.
*   **2025-05-25:** Modified frontend build configuration in `vercel.json` to set `distDir` to `"dist"` instead of `"adapt2job-frontend/dist"`.
*   **2025-05-25:** Modified frontend route in `vercel.json` to explicitly map all paths to the `adapt2job-frontend/dist` directory (`"dest": "adapt2job-frontend/dist/$1"`).
*   **2025-05-25:** Added verbose build logs for frontend and backend in `vercel.json` to provide more detailed information during the Vercel build process.
*   将 `src/LandingZhPage.jsx` 的内容迁移到 `ResumeOptimizer-frontend/landing_pages/zh/landing-zh.jsx`。
*   更新了 `src/main.jsx` 文件，使用 `react-router-dom` 进行路由配置，并修复了导入路径错误。
    *   根路径 `/` 指向英文落地页。
    *   其他语言落地页通过 `/:lang` 路径访问。
    *   优化器页面通过 `/optimizer` 路径访问。
*   更新了所有语言落地页的 CallToAction 组件，使其链接到 `/optimizer?lang=xx`。
*   更新了 `src/OptimizerPage.tsx`，使其根据 URL 中的 `lang` 参数或浏览器语言自动切换语言。
*   更新了 `src/components/AnalysisOutput.tsx`，以确保在 `dangerouslySetInnerHTML` 中渲染 HTML 内容时，如果数据为空，则渲染空字符串。
*   **更新了 `ResumeOptimizer-frontend/landing_pages/es/components/Hero.jsx`，`ResumeOptimizer-frontend/landing_pages/es/components/Navbar.jsx` 和 `ResumeOptimizer-frontend/landing_pages/es/components/Pricing.jsx` 组件中的链接，使其跳转到 `/optimizer?lang=en`。**
*   新增了页脚链接对应的页面，包括使用说明、常见问题、联系我们、隐私与条款、隐私政策、服务条款，并支持多语言。
*   更新了路由配置，使这些页面可以通过 `/:lang/page-name` 访问。
*   更新了所有语言的页脚组件，添加了指向这些新页面的链接。
*   **新增了隐私条款页面 (`ResumeOptimizer-frontend/landing_pages/en/privacy-terms.jsx`)，该页面包含了网站的隐私政策声明，包括信息收集、使用、存储和共享等方面的内容。**
*   **更新了中文隐私政策页面 (`ResumeOptimizer-frontend/landing_pages/zh/privacy-policy.jsx`)，将英文内容翻译成了正宗的中文。**
*   **更新了日文隐私政策页面 (`ResumeOptimizer-frontend/landing_pages/ja/privacy-policy.jsx`)，将英文内容翻译成了日文。**
*   更新了网站地图 (`adapt2job-frontend/public/sitemap.xml`)，包含了所有新的语言落地页和附加页面的路由。
*   **2025-05-24: Monorepo 结构和 Vercel 部署适配**
    *   将前端和后端代码整合到同一个 Git 仓库中，形成 Monorepo 结构。
    *   后端 Express 应用适配为 Vercel Serverless Functions：
        *   `adapt2job-backend/src/index.ts` 重命名为 `adapt2job-backend/src/app.ts`，并修改为导出 Express 应用实例。
        *   新增 `adapt2job-backend/api/index.ts` 作为 Serverless Function 的入口文件，导入并导出 Express 应用。
    *   在项目根目录新增 `vercel.json` 文件，配置 Vercel 部署：
        *   定义前端静态构建和后端 Serverless Functions 的构建规则。
        *   配置路由，将 `/api/(.*)` 请求路由到后端 Serverless Functions，其他请求路由到前端静态资源。
        *   配置 `installCommand` 和 `buildCommand` 以支持 Monorepo 的依赖安装和构建。
    *   更新 `adapt2job-backend/README.md` 和 `adapt2job-frontend/README.md`，反映 Monorepo 结构、Vercel 部署方式以及后端代码结构的变化。
    *   更新 `adapt2job-frontend/FUNCTIONALITY.md`，增加后端交互的说明。

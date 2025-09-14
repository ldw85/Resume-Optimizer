# Copilot / AI Agent Instructions for Adapt2Job

Quick, actionable notes to help an AI coding agent be immediately productive in this repo.

1. Big picture
   - Monorepo with two apps: `adapt2job-backend` (Node.js + Express + TypeScript) and `adapt2job-frontend` (React + Vite + TypeScript/JSX). See top-level `README.md`.
   - Backend: exposes REST endpoints under `/api/*` and is structured for both local server (`src/index.ts`) and Vercel serverless (`api/index.ts` imports `src/app.ts`). Key files: `adapt2job-backend/src/app.ts`, `adapt2job-backend/src/index.ts`, `adapt2job-backend/src/services/llmService.ts`, `adapt2job-backend/src/services/docxGeneratorService.ts`, `adapt2job-backend/src/services/fileParser.ts`.
   - Frontend: Vite-powered React app. Routes and many static HTML blog pages are imported as raw strings in `adapt2job-frontend/src/main.jsx`. Key files: `adapt2job-frontend/src/main.jsx`, `adapt2job-frontend/src/OptimizerPage.tsx`, `adapt2job-frontend/src/components/*`.

2. Common developer workflows / commands
   - Backend:
     - Install: `cd adapt2job-backend && npm install`
     - Dev server: `npm run dev` (uses `ts-node-dev`, default PORT 3000)
     - Build: `npm run build` (runs `tsc` and copies assets)
     - Start (production): `npm run start` (run built `dist/index.js`)
   - Frontend:
     - Install: `cd adapt2job-frontend && npm install`
     - Dev server: `npm run dev` (Vite, default http://localhost:5173)
     - Build: `npm run build`

3. Environment variables and secrets
   - Backend expects: `GEMINI_API_KEY`, `TAVILY_API_KEY`, Supabase/Clerk keys in `.env` (see `adapt2job-backend/.env.template` referenced in README).
   - Frontend expects Clerk publishable key via `VITE_CLERK_PUBLISHABLE_KEY` and backend URL via `.env` / `import.meta.env`.
   - Never hardcode keys in code. On Vercel, set these in project environment variables.

4. Project-specific conventions & patterns
   - Vercel support: `api/index.ts` is a thin adapter that imports `src/app.ts` to run Express as a serverless function. When editing Express setup, prefer `src/app.ts` to keep parity.
   - HTML blog pages under `adapt2job-frontend/landing_pages/*` are imported into `main.jsx` using Vite raw-import (`?raw`) and rendered via `dangerouslySetInnerHTML`. Changing a blog page should not require React components.
   - Many routes are wired manually in `main.jsx` — add/remove routes there for new static pages.
   - DOCX generation: HTML is preprocessed (specific DIVs converted to `<hr>`) then passed to `html-to-docx` in `docxGeneratorService.ts`. Keep that preprocessing when adjusting output.
   - LLM integration lives in `adapt2job-backend/src/services/llmService.ts`. It reads keys from env and supports multiple LLM types (default: Gemini). If you add a new LLM, follow the existing `analyzeResumeWithLLM` pattern.
   - File parsing: `fileParser.ts` centralizes PDF/DOCX handling (uses `pdf-parse`, `mammoth`, `multer`). Reuse it for any new resume ingest endpoints.

5. Integration points & external deps to watch
   - Gemini API (LLM) and Tavily Extract API are the main external services; calls are proxied through `llmService.ts`.
   - Clerk (frontend auth) and Supabase (storage / DB) appear in dependencies — auth flows are implemented in the frontend with Clerk provider.
   - Puppeteer / chrome-aws-lambda used for some PDF/image tasks in backend dependencies — note potential CI/runtime issues (headless chrome in Lambda-like environments).

6. Quick debugging tips
   - Backend logs: run `npm run dev` in `adapt2job-backend` and watch server logs; errors usually include stack traces pointing to `src/*` files.
   - Vite dev: frontend will hot-reload; if a raw-imported HTML page stops loading, check the import path in `main.jsx` and that file exists under `landing_pages`.
   - 404 or missing route for blog pages: add the raw import in `main.jsx` and a corresponding `<Route>`.

7. Files & locations worth checking during edits
   - Backend: `adapt2job-backend/src/app.ts`, `src/index.ts`, `src/services/llmService.ts`, `src/services/docxGeneratorService.ts`, `src/services/fileParser.ts`, `api/index.ts`, `API_SPEC.md`, `package.json` (scripts).
   - Frontend: `adapt2job-frontend/src/main.jsx`, `src/OptimizerPage.tsx`, `src/components/InteractiveReportWrapper.jsx`, `landing_pages/**` (static blog HTML files), `package.json` (scripts), `.env.example`.

8. Safety & style constraints for AI edits
   - Don’t remove existing code unless fixing a clear bug. Preserve import formatting and comments.
   - Keep changes minimal and well-scoped per PR. If adding a new external dependency, update the appropriate `package.json` and include a short justification in the PR.
   - Avoid committing secrets; add instructions to the README if you need to change expected `.env` names.

9. PR checklist for agents
   - Run `npm run dev` for both backend and frontend locally and confirm endpoints and pages load.
   - Update README or add short notes in `.github/copilot-instructions.md` for any new developer-facing commands.
   - If adding LLM calls or external APIs, include mocks or fallbacks to avoid exposing keys in tests.

If anything here is incomplete or you want more detail on CI/deployment steps, tell me which area to expand and I will update this file.

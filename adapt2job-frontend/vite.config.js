import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { readFileSync } from 'fs' // 引入 Node.js 的文件系统模块
import { fileURLToPath } from 'url'

// ES Module 中 __dirname 的替代方案
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 1. 这是为【开发服务器】定制的插件
    {
      name: 'mpa-dev-server-robust',
      configureServer(server) {
        // This middleware intercepts all requests to the dev server.
        server.middlewares.use((req, res, next) => {
          // If the request is for the root path ('/'), we handle it manually.
          if (req.url === '/') {
            try {
              // 1. Read the content of landing-en.html.
              const htmlContent = readFileSync(
                resolve(__dirname, 'landing-en.html'),
                'utf-8'
              );

              // 2. Use Vite's HTML transformation engine.
              // This injects HMR and other development-time features.
              server.transformIndexHtml(req.url, htmlContent, req.originalUrl)
                .then(result => {
                  const finalHtml = typeof result === 'string' ? result : result.html;
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'text/html');
                  res.end(finalHtml);
                })
                .catch(error => {
                  server.ssrFixStacktrace(error);
                  next(error);
                });
            } catch (error) {
              next(error);
            }
            // End the request here, don't call next() for the root path.
            return;
          }

          // For all other requests (e.g., /optimizer, /src/main.jsx, etc.),
          // pass them to Vite's default handling.
          next();
        });
      },
    },
  ],

  // 2. 保持 'spa' 模式。这对于【开发服务器】至关重要。
  // 它能确保任何在文件系统中不存在的路径（比如 '/optimizer'）
  // 都能正确地回退到主 SPA 入口点 (即项目根目录下的 'index.html')，
  // 从而允许 React Router 接管并渲染正确的页面。
  appType: 'spa',

  build: {
    rollupOptions: {
      // 3. 这是为【生产构建】配置的，用于生成多页面应用
      input: {
        // 'index' 键: Vite 会读取 'landing-en.html' 并生成 'dist/index.html'
        index: resolve(__dirname, 'landing-en.html'),
        // 'optimizer' 键: Vite 会读取 'index.html' (React 应用的壳) 并生成 'dist/optimizer.html'
        optimizer: resolve(__dirname, 'index.html'),
      },
    },
  },
})

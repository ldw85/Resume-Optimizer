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
        const langHtmlMap = {
          '/': 'landing-en.html',
          '/de': 'landing-de.html',
          '/es': 'landing-es.html',
          '/ja': 'landing-ja.html',
          '/zh': 'landing-zh.html',
        };

        server.middlewares.use((req, res, next) => {
          const urlPath = (req.url?.split('?')[0] || '/').replace(/\/$/, '') || '/';

          if (langHtmlMap[urlPath]) {
            const htmlFile = langHtmlMap[urlPath];
            try {
              const htmlContent = readFileSync(
                resolve(__dirname, htmlFile),
                'utf-8'
              );

              server.transformIndexHtml(req.url, htmlContent, req.originalUrl)
                .then(result => {
                  const finalHtml = typeof result === 'string' ? result : result.html;
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'text/html');
                  res.end(finalHtml);
                  return; // End the request here.
                })
                .catch(error => {
                  server.ssrFixStacktrace(error);
                  next(error);
                });
            } catch (error) {
              return next(error);
            }
            return;
          }

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
        // 主应用 (SPA) - 会生成 dist/index.html
        main: resolve(__dirname, 'index.html'),
        // 英文着陆页 - 会生成 dist/landing-en.html
        'landing-en': resolve(__dirname, 'landing-en.html'), // Keep for clarity if needed, or remove as it's handled by '/'
        'landing-de': resolve(__dirname, 'landing-de.html'),
        'landing-es': resolve(__dirname, 'landing-es.html'),
        'landing-ja': resolve(__dirname, 'landing-ja.html'),
        'landing-zh': resolve(__dirname, 'landing-zh.html'),
      },
    },
  },
})

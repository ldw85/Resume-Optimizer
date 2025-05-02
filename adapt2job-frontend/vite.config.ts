import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // path is already imported

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // 保留 cssCodeSplit 配置
    cssCodeSplit: false, 
    // 添加 rollupOptions 来配置多入口
    rollupOptions: {
      input: {
        // 保留默认的主入口 (通常是项目根目录的 index.html)
        // 如果你的主入口不是 index.html 或不在根目录，请修改这里的路径
        main: path.resolve(__dirname, 'index.html'), 
        
        // 添加中文落地页入口
        landing_zh: path.resolve(__dirname, 'landing_pages/zh/landing-zh.html'),

        // 如果还有其他落地页，也可以继续添加
        // landing_en: path.resolve(__dirname, 'landing_pages/en/landing-en.html'),
      },
    },
  },
})

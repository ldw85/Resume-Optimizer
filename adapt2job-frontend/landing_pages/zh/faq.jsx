import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './styles/main.css';

function FAQ() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '10px', margin: '10px' }} className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">常见问题</h1>
        <ol className="mt-6 space-y-4">
          <li>
            <b>什么是 ResumeOptimizer？</b>
            <p className="mt-2">ResumeOptimizer 是一款旨在帮助求职者快速有效地调整其简历内容，以更好地匹配特定职位要求的工具，从而提高其求职成功率。</p>
          </li>
          <li>
            <b>ResumeOptimizer 使用了哪些技术？</b>
            <p className="mt-2">ResumeOptimizer 使用 React (v19.0.0)、TypeScript (~5.7.2)、Tailwind CSS (4.1.3)、i18next (25.0.0) 和其他库来提供用户友好的简历优化体验。</p>
          </li>
          <li>
            <b>如何在本地运行 ResumeOptimizer？</b>
            <p className="mt-2">要在本地运行 ResumeOptimizer，请按照以下步骤操作：</p>
            <ol type="a" className="ml-4 mt-2 space-y-2">
              <li>安装依赖项：<code>npm install</code></li>
              <li>启动开发服务器：<code>npm run dev</code></li>
              <li>应用程序将在本地启动，通常可以在 <code>http://localhost:5173</code> 访问</li>
            </ol>
          </li>
          <li>
            <b>ResumeOptimizer 是否支持多种语言？</b>
            <p className="mt-2">是的，ResumeOptimizer 支持多种语言。您可以使用导航栏中的语言选择器切换语言。国际化使用 i18next 进行管理。</p>
          </li>
          <li>
            <b>我可以上传我的简历文件吗？</b>
            <p className="mt-2">目前，ResumeOptimizer 侧重于基于文本的简历输入。未来的版本可能会包括对上传 PDF 或 Word 格式的简历文件的支持。</p>
          </li>
          <li>
            <b>我可以输入职位描述 URL 吗？</b>
            <p className="mt-2">目前，ResumeOptimizer 侧重于基于文本的职位描述输入。未来的版本可能会包括从 URL 获取职位描述的支持。</p>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

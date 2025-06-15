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
            <b>为什么优化简历很重要？</b>
            <p className="mt-2">当您在线申请时，您的简历通常会在到达招聘人员之前由解析和匹配软件进行处理。解析软件提取系统（如 ATS）所需的关键信息，而匹配软件则根据工作要求评估您的资质。这就是为什么优化简历至关重要——我们的服务能够有效地使您的简历符合这些标准。</p>
          </li>
          <li>
            <b>为什么没有生成 PDF 的选项？</b>
            <p className="mt-2">我们提供生成 PDF 和 DOCX 文件的选项。一键优化后，您可以将修改后的简历下载为 PDF 或 DOCX 文件。PDF 生成在客户端完成，而 DOCX 生成由后端 API 处理，以确保更好的兼容性和格式一致性。</p>
          </li>
          <li>
            <b>为什么我不能直接让 ChatGPT 优化我的简历？</b>
            <p className="mt-2">尽管我们确实使用 ChatGPT 等大型语言模型来增强你的简历，但有几件事 LLMs 无法为你做。</p>
            <p className="mt-2">首先，我们根据公认的简历写作最佳实践，分别优化每个部分（例如，工作经历、教育背景、技能等）。</p>
            <p className="mt-2">其次，只需几次点击，您就可以轻松调整简历以匹配任何特定的目标职位或招聘信息，实现快速优化。</p>
            <p className="mt-2">最后，我们提供多种.docx 模板，保证在任何招聘网站或申请人追踪系统（ATS）上都能兼容且表现良好。</p>
          </li>
          <li>
            <b>您的服务与其他简历服务有何不同？</b>
            <p className="mt-2">与其他需要复杂步骤和仪表盘的服务不同，我们为您处理繁重的工作，并将您的技能和关键词精确放置在需要的位置，以最大化您的匹配分数。</p>
          </li>
          <li>
            <b>ResumeOptimizer 是否支持多种语言？</b>
            <p className="mt-2">是的，ResumeOptimizer 支持多种语言（英语、中文、日语、西班牙语、德语）。您可以使用导航栏中的语言选择器切换语言。</p>
          </li>
          <li>
            <b>我可以上传我的简历文件吗？</b>
            <p className="mt-2">是的，您可以上传多种格式的简历文件，也可以直接粘贴文本内容。</p>
          </li>
          <li>
            <b>我可以输入职位描述 URL 吗？</b>
            <p className="mt-2">是的，您可以输入职位链接，应用程序将尝试获取职位描述内容。您也可以直接粘贴文本内容的职位描述。</p>
          </li>
          <li>
            <b>我可以保存我的简历吗？</b>
            <p className="mt-2">登录后，您可以保存常用简历，无需每次上传或粘贴。</p>
          </li>
          <li>
            <b>我可以提供反馈吗？</b>
            <p className="mt-2">登录用户可以提交文本反馈。您的反馈将用于内部改进服务。</p>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

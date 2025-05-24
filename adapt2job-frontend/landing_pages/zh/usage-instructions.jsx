import React from 'react';

const UsageInstructions = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">如何使用职位输入部分</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">项目介绍</h2>
        <p className="text-lg text-gray-700">
          ResumeOptimizer 工具旨在帮助求职者快速有效地调整简历内容，使其更好地匹配特定职位的要求，从而提高求职成功率。用户可以输入他们的简历和目标职位的描述，应用程序将分析两者并提供优化建议和修订后的简历版本。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">职位输入功能</h2>
        <p className="text-lg text-gray-700 mb-4">
          应用程序提供了一个专门的部分，供用户输入目标职位的描述。此部分通过支持两种主要方法来提供职位详细信息，从而提供了灵活性：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">1. 粘贴职位描述</h3>
            <p className="text-gray-700 mb-3">
              用户可以将职位描述的文本内容直接粘贴到专用的文本区域。
            </p>
            <p className="text-gray-700 mb-3">
              <strong>用法：</strong> 当职位描述以纯文本形式可用时（例如来自电子邮件、文档或直接从网站复制），此方法适用。
            </p>
            <p className="text-gray-700">
              <strong>特点：</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>提供了一个大型文本区域，方便粘贴可能较长的职位描述。</li>
              <li>清晰的说明和占位符会引导用户。</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">2. 提供职位链接</h3>
            <p className="text-gray-700 mb-3">
              用户可以提供在线职位发布的URL。然后，应用程序将尝试从提供的链接中获取并处理职位描述。
            </p>
            <p className="text-gray-700 mb-3">
              <strong>用法：</strong> 当职位描述托管在公共网页上时，此方法很方便。
            </p>
            <p className="text-gray-700">
              <strong>特点：</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>提供了一个输入字段，用于输入职位URL。</li>
              <li>应用程序会指示何时正在积极地从链接中获取职位描述（加载状态）。</li>
              <li>如果从链接获取职位描述失败，将显示错误消息。</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3">切换输入方法</h3>
        <p className="text-gray-700">
          用户可以使用直观的选项卡按钮轻松地在“粘贴职位描述”和“提供职位链接”方法之间切换。活动方法会清晰地突出显示。
        </p>
      </section>

      <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3">加载和错误处理</h3>
        <p className="text-gray-700">
          职位输入部分会视觉上指示应用程序何时正在处理职位链接（加载状态）。如果在获取或处理职位描述时出现问题，相关错误消息会直接显示在此部分中，为用户提供即时反馈。
        </p>
      </section>
    </div>
  );
};

export default UsageInstructions;

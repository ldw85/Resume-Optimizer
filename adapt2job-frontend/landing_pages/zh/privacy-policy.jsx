import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1 className="text-3xl font-semibold mb-6">隐私政策</h1>
        <p className="mb-4">本隐私政策描述了 ResumeOptimizer 在您使用我们的网站时如何收集、使用和共享关于您的信息。</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">我们收集的信息</h2>
          <p className="mb-4">当您访问我们的网站时，我们会自动收集某些信息，包括：</p>
          <ul className="list-disc pl-5 mb-4">
            <li>您的 IP 地址</li>
            <li>您的浏览器类型和操作系统</li>
            <li>您在我们网站上访问的页面</li>
            <li>您在我们网站上点击的链接</li>
            <li>您访问的日期和时间</li>
          </ul>
          <p className="mb-4">我们收集这些信息是为了帮助我们了解人们如何使用我们的网站，并改善客户体验。我们还将这些信息用于网站流量统计。</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
          <p className="mb-4">我们使用 cookies 来存储关于您的偏好的信息，并个性化您在我们网站上的体验。您可以在您的浏览器设置中禁用 cookies，但这可能会影响您使用我们网站的某些功能的能力。</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">我们如何使用您的信息</h2>
          <p className="mb-4">我们使用您的信息来：</p>
          <ul className="list-disc pl-5 mb-4">
            <li>为您提供您要求的服务</li>
            <li>改进我们的网站和服务</li>
            <li>个性化您在我们网站上的体验</li>
            <li>与您沟通关于我们的产品和服务</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">我们如何共享您的信息</h2>
          <p className="mb-4">我们不会与第三方共享您的个人信息，除非以下情况：</p>
          <ul className="list-disc pl-5 mb-4">
            <li>与帮助我们运营我们的网站和提供我们的服务的服务提供商共享</li>
            <li>当法律要求时</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">数据安全</h2>
          <p className="mb-4">我们采取合理的措施来保护您的信息免受未经授权的访问、使用或披露。然而，没有任何一种通过互联网传输的方法，或电子存储的方法，是 100% 安全的。因此，我们不能保证您的信息的绝对安全。</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">本隐私政策的变更</h2>
          <p className="mb-4">我们可能会不时更新本隐私政策。我们将在我们的网站上发布任何变更。在我们在我们的网站上发布任何变更后，您继续使用我们的网站构成您接受新的隐私政策。</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">联系我们</h2>
          <p className="mb-4">如果您对本隐私政策有任何问题，请联系我们。</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

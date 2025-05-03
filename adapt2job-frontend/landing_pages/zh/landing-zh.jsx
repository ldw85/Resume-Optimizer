import './styles/main.css'; 
// 确保 React 和 ReactDOM 已通过 npm/yarn 安装
import React from 'react';
import ReactDOM from 'react-dom/client';

// 导入此页面需要的组件 (假设它们在同级 components 目录且已是 .jsx)
import Navbar from './components/Navbar.jsx'; 
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Trust from './components/Trust.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';
// 可能还需要导入 Pricing 和 Testimonials? 根据 App 组件内容确定
// import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';

// 导入 CSS (推荐方式，确保路径正确)
// 例如，如果 styles/main.css 在项目根目录: import '../../styles/main.css';

// 请根据实际情况调整或添加 CSS 导入

// 假设 reportError 是一个全局函数或从某处导入
// declare function reportError(error: any): void; // 如果是全局的
// import { reportError } from '../../utils/errorReporting'; // 如果是从模块导入

function App() {
    try {
        return (
            <div data-name="app">
                <Navbar />
                <Hero />
                <Features />
                <HowItWorks />
                <Trust />
                {/* <Pricing /> */}
                {/* <Testimonials />  */}
                <CallToAction />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        // 确保 reportError 函数可用
        // reportError(error); 
        return <div>页面加载出错，请稍后重试。</div>; // 提供用户友好的错误提示
    }
}

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Target container #root not found in landing-zh.html');
}

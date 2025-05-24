'use client';

import './styles/main.css';
// 确保 React 已通过 npm/yarn 安装
import React, { useEffect } from 'react'; // 导入 useEffect

// 导入此页面需要的组件
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Trust from './components/Trust.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';
// 可能还需要导入 Pricing 和 Testimonials? 根据 App 组件内容确定
// import Pricing from '../components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';

// 导入 CSS (推荐方式，确保路径正确)
// 例如，如果 styles/main.css 在项目根目录: import '../../styles/main.css';

// 请根据实际情况调整或添加 CSS 导入

// 假设 reportError 是一个全局函数或从某处导入
// declare function reportError(error: any): void; // 如果是全局的
// import { reportError } from '../../utils/errorReporting'; // 如果是从模块导入

const LandingZh = () => { // Renamed component and removed navigateToOptimizer prop
    useEffect(() => {
        // 添加 Font Awesome
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.id = 'font-awesome-cdn-link'; // 确保 ID 唯一
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        document.head.appendChild(fontAwesomeLink);

        // 添加 Tailwind CSS
        const tailwindScript = document.createElement('script');
        tailwindScript.id = 'tailwind-cdn-script'; // 确保 ID 唯一
        tailwindScript.src = 'https://cdn.tailwindcss.com';
        document.head.appendChild(tailwindScript);

        // 组件卸载时移除
        return () => {
            const existingFontAwesomeLink = document.getElementById('font-awesome-cdn-link');
            if (existingFontAwesomeLink && existingFontAwesomeLink.parentNode) {
                existingFontAwesomeLink.parentNode.removeChild(existingFontAwesomeLink);
            }

            const existingTailwindScript = document.getElementById('tailwind-cdn-script');
            if (existingTailwindScript && existingTailwindScript.parentNode) {
                existingTailwindScript.parentNode.removeChild(existingTailwindScript);
            }
        };
    }, []); // 空依赖数组，确保只在挂载和卸载时运行

    try {
        return (
            <div data-name="landing-zh-page" className="w-full"> {/* 添加 w-full 确保组件尝试铺满 */}
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

export default LandingZh; // Export as LandingZh

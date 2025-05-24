'use client';

import './styles/main.css';
// React と ReactDOM が npm/yarn でインストールされていることを確認してください
import React from 'react';
import ReactDOM from 'react-dom/client';

// このページに必要なコンポーネントをインポートします (同階層の components ディレクトリにあり、.jsx であると仮定)
import Navbar from './components/Navbar.jsx'; 
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Trust from './components/Trust.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';
// Pricing と Testimonials もインポートする必要があるかもしれませんか？ App コンポーネントの内容に基づいて判断してください
// import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';

// CSS をインポートします (推奨される方法、パスが正しいことを確認してください)
// 例: styles/main.css がプロジェクトのルートディレクトリにある場合: import '../../styles/main.css';

// 実際の状況に応じて CSS のインポートを調整または追加してください

// reportError がグローバル関数であるか、どこかからインポートされていると仮定します
// declare function reportError(error: any): void; // グローバルな場合
// import { reportError } from '../../utils/errorReporting'; // モジュールからインポートする場合

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
        // reportError 関数が利用可能であることを確認してください
        // reportError(error); 
        return <div>ページの読み込み中にエラーが発生しました。しばらくしてからもう一度お試しください。</div>; // ユーザーフレンドリーなエラーメッセージを提供
    }
}

export default App;

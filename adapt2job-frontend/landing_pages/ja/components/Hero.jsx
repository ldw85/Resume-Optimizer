import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const handleOptimizeClick = () => {
        sessionStorage.setItem('i18nextLng', 'ja');
        navigate('/optimizer');
    };

    try {
        return (
            <div data-name="hero" className="hero-gradient pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block">ワンクリックで完璧な履歴書を生成</span>
                            <span className="block text-indigo-200 text-3xl sm:text-4xl mt-3">
                                就職成功率を向上させるAI履歴書最適化アシスタント
                            </span>
                        </h1>
                        <p className="mt-6 max-w-lg mx-auto text-xl text-indigo-100">
                            職務要件をインテリジェントにマッチングし、履歴書の内容とレイアウトを最適化します。
                            <br className="hidden sm:block" />
                            あなたの履歴書を際立たせましょう
                        </p>
                        <div className="mt-10">
                            {/* button タグを a タグに変更し、href="#" を追加 */}
                            <a onClick={handleOptimizeClick} className="btn-primary text-xl px-8 py-4 rounded-lg text-white font-medium cursor-pointer">
                                今すぐ履歴書を最適化
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                            <p className="mt-3 text-indigo-200 text-sm">
                                <i className="fas fa-clock mr-1"></i>
                                最適化はわずか1分で完了します
                            </p>
                        </div>
                    </div>
                    <div className="mt-20">
                        <img 
                            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80" 
                            alt="AI履歴書最適化デモ" 
                            className="rounded-lg shadow-2xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}

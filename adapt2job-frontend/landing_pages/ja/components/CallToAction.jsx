// export default キーワードを追加
import { Link } from 'react-router-dom'; // Import Link

export default function CallToAction() {
    try {
        return (
            <section data-name="call-to-action" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-600 rounded-2xl py-16 px-6 sm:py-24 sm:px-12 lg:px-16">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                履歴書をレベルアップする準備はできていますか？
                            </h2>
                            <p className="mt-4 text-lg text-indigo-100">
                                今すぐAI履歴書最適化を試して、あなたの履歴書を際立たせましょう
                            </p>
                            <div className="mt-10">
                                <Link to="/optimizer?lang=ja" className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-50 transition-colors">
                                    無料で始める
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('CallToAction component error:', error);
        // reportError 関数が利用可能であることを確認してください
        // reportError(error);
        return null; // またはエラーメッセージUIを返す
    }
}

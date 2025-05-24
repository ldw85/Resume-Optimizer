export default function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                <i className="fas fa-file-alt mr-2"></i>
                                AI履歴書最適化
                            </h3>
                            <p className="text-gray-400">
                                スマート履歴書最適化アシスタント、完璧な履歴書作成を支援します
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
                            <ul className="space-y-2">
                                <li><a href="/ja/usage-instructions" className="text-gray-400 hover:text-white">利用方法</a></li>
                                <li><a href="/ja/faq" className="text-gray-400 hover:text-white">よくある質問</a></li>
                                <li><a href="/ja/contact-us" className="text-gray-400 hover:text-white">お問い合わせ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">プライバシーと規約</h4>
                            <ul className="space-y-2">
                                <li><a href="/ja/privacy-policy" className="text-gray-400 hover:text-white">プライバシーポリシー</a></li>
                                <li><a href="/ja/terms-of-service" className="text-gray-400 hover:text-white">利用規約</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2024 AI履歴書最適化. 全ての権利を保有します</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}

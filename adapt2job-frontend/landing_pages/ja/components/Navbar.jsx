export default function Navbar() {
    try {
        return (
            <nav data-name="navbar" className="bg-white shadow-sm w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="/optimizer?lang=ja" className="text-2xl font-bold text-indigo-600">
                                <i className="fas fa-file-alt mr-2"></i>
                                AI履歴書最適化
                            </a>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <a href="/optimizer?lang=ja" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                無料トライアル
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}

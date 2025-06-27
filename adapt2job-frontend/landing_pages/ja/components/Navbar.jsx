import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const handleOptimizeClick = () => {
        sessionStorage.setItem('i18nextLng', 'ja');
        navigate('/optimizer');
    };

    try {
        return (
            <nav data-name="navbar" className="bg-white shadow-sm w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a onClick={handleOptimizeClick} className="text-2xl font-bold text-indigo-600 cursor-pointer">
                                <i className="fas fa-file-alt mr-2"></i>
                                AI履歴書最適化
                            </a>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <a onClick={handleOptimizeClick} className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
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

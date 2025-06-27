import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CallToAction() {
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const handleOptimizeClick = () => {
        sessionStorage.setItem('i18nextLng', i18n.language);
        navigate('/optimizer');
    };

    try {
        return (
            <section data-name="call-to-action" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-600 rounded-2xl py-16 px-6 sm:py-24 sm:px-12 lg:px-16">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                Bereit, Ihren Lebenslauf aufzuwerten?
                            </h2>
                            <p className="mt-4 text-lg text-indigo-100">
                                Probieren Sie jetzt die KI-Lebenslaufoptimierung aus und heben Sie Ihren Lebenslauf hervor!
                            </p>
                            <div className="mt-10">
                                <a onClick={handleOptimizeClick} className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-50 transition-colors cursor-pointer">
                                    Kostenlos starten
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('CallToAction component error:', error);
        return null;
    }
}

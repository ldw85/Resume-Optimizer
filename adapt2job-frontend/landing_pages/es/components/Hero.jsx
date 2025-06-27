import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const handleOptimizeClick = () => {
        sessionStorage.setItem('i18nextLng', 'es');
        navigate('/optimizer');
    };

    try {
        return (
            <div data-name="hero" className="hero-gradient pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block">Genera un Currículum Perfecto con un Clic</span>
                            <span className="block text-indigo-200 text-3xl sm:text-4xl mt-3">
                                Optimizador de Currículum con IA para Aumentar tu Tasa de Éxito en la Solicitud de Empleo
                            </span>
                        </h1>
                        <p className="mt-6 max-w-lg mx-auto text-xl text-indigo-100">
                            Coincide inteligentemente los requisitos del puesto, optimiza el contenido y diseño del currículum,
                            <br className="hidden sm:block" />
                            haz que tu currículum destaque
                        </p>
                        <div className="mt-10">
                            {/* Change button tag to a tag and add href="#" */}
                            <a onClick={handleOptimizeClick} className="btn-primary text-xl px-8 py-4 rounded-lg text-white font-medium cursor-pointer">
                                Optimiza tu Currículum Ahora
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                            <p className="mt-3 text-indigo-200 text-sm">
                                <i className="fas fa-clock mr-1"></i>
                                Solo se necesita 1 minuto para una optimización rápida
                            </p>
                        </div>
                    </div>
                    <div className="mt-20">
                        <img
                            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80"
                            alt="Demostración del Optimizador de Currículum con IA"
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

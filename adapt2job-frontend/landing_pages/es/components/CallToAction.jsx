// Add export default keyword
import { Link } from 'react-router-dom'; // Import Link

export default function CallToAction() {
    try {
        return (
            <section data-name="call-to-action" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-600 rounded-2xl py-16 px-6 sm:py-24 sm:px-12 lg:px-16">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                ¿Listo para potenciar tu currículum?
                            </h2>
                            <p className="mt-4 text-lg text-indigo-100">
                                Prueba la Optimización de Currículum con IA ahora y haz que tu currículum destaque
                            </p>
                            <div className="mt-10">
                                <Link to="/optimizer?lang=es" className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-50 transition-colors">
                                    Empezar gratis
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
        // Ensure reportError function is available
        // reportError(error);
        return null; // Or return an error message UI
    }
}

export default function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                <i className="fas fa-file-alt mr-2"></i>
                                Optimización de Currículum con IA
                            </h3>
                            <p className="text-gray-400">
                                Asistente inteligente de optimización de currículum para ayudarte a crear un currículum perfecto
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                            <ul className="space-y-2">
                                <li><a href="/es/usage-instructions" className="text-gray-400 hover:text-white">Cómo Usar</a></li>
                                <li><a href="/es/faq" className="text-gray-400 hover:text-white">Preguntas Frecuentes</a></li>
                                <li><a href="/es/contact-us" className="text-gray-400 hover:text-white">Contáctanos</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Privacidad y Términos</h4>
                            <ul className="space-y-2">
                                <li><a href="/es/privacy-policy" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
                                <li><a href="/es/terms-of-service" className="text-gray-400 hover:text-white">Términos de Servicio</a></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2024 Optimización de Currículum con IA. Todos los derechos reservados</p>
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

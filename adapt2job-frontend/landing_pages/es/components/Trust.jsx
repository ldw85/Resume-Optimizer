export default function Trust() {
    try {
        return (
            <section data-name="trust" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Seguro y Confiable
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Valoramos tu privacidad y seguridad
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div className="trust-card p-6 rounded-xl">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-shield-alt text-indigo-600 text-xl"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Seguridad de Datos
                            </h3>
                            <p className="text-gray-600">
                                Todos los datos se procesan en tiempo real y no se almacenan
                            </p>
                        </div>
                        
                        <div className="trust-card p-6 rounded-xl">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-lock text-indigo-600 text-xl"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Protección de Privacidad
                            </h3>
                            <p className="text-gray-600">
                                Estrictos mecanismos de protección de privacidad para garantizar la seguridad de la información personal
                            </p>
                        </div>
                        
                        <div className="trust-card p-6 rounded-xl">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-check-circle text-indigo-600 text-xl"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Servicio Confiable
                            </h3>
                            <p className="text-gray-600">
                                Soporte de equipo técnico profesional para garantizar la estabilidad del servicio
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Trust component error:', error);
        reportError(error);
        return null;
    }
}

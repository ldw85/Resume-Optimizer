export default function HowItWorks() {
    try {
        const steps = [
            {
                number: "01",
                title: "Pegar Contenido del Currículum",
                description: "Copia el contenido de tu currículum actual y pégalo en el cuadro de entrada"
            },
            {
                number: "02",
                title: "Ingresar Requisitos del Puesto",
                description: "Pega la descripción de los requisitos del puesto objetivo para ayudar a la IA a coincidir mejor"
            },
            {
                number: "03",
                title: "Optimización con un Clic",
                description: "El sistema analiza rápidamente y genera un currículum profesional optimizado"
            }
        ];

        return (
            <section data-name="how-it-works" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Cómo Funciona
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Tres pasos para completar la optimización del currículum, rápido y sencillo
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={index} className="step-card p-6 rounded-xl">
                                <div className="text-4xl font-bold text-indigo-600 mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-gray-100 p-4 rounded-lg inline-block">
                            <p className="text-gray-600">
                                <i className="fas fa-info-circle mr-2 text-indigo-600"></i>
                                Video de demostración próximamente
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('HowItWorks component error:', error);
        reportError(error);
        return null;
    }
}

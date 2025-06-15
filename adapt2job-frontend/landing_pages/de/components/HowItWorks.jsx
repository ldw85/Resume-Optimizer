export default function HowItWorks() {
    try {
        const steps = [
            {
                number: "01",
                title: "Lebenslauf eingeben",
                description: "Fügen Sie den Inhalt Ihres Lebenslaufs ein oder laden Sie eine Datei hoch (PDF, DOCX, JPG, PNG). Angemeldete Benutzer können Lebensläufe speichern und wiederverwenden."
            },
            {
                number: "02",
                title: "Stellenbeschreibung eingeben",
                description: "Fügen Sie die Stellenbeschreibung ein oder geben Sie einen Stellenlink an."
            },
            {
                number: "03",
                title: "Optimieren und herunterladen",
                description: "Erhalten Sie sofort einen optimierten Lebenslauf und laden Sie ihn als PDF oder Word herunter."
            }
        ];

        return (
            <section data-name="how-it-works" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            So funktioniert's
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Drei Schritte zur vollständigen Lebenslaufoptimierung, schnell und einfach
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
                                Demo-Video folgt in Kürze
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('HowItWorks component error:', error);
        // reportError(error); // Assuming reportError is not globally available or needed here
        return null;
    }
}

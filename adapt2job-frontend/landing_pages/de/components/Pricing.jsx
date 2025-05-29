export default function Pricing() {
    try {
        const plans = [
            {
                name: "Starter",
                price: "29",
                features: ["5 Teammitglieder", "10 GB Speicher", "Grundlegende Analysen", "E-Mail-Support"]
            },
            {
                name: "Professional",
                price: "99",
                features: ["15 Teammitglieder", "50 GB Speicher", "Erweiterte Analysen", "Prioritäts-Support"],
                popular: true
            },
            {
                name: "Enterprise",
                price: "299",
                features: ["Unbegrenzte Teammitglieder", "500 GB Speicher", "Benutzerdefinierte Analysen", "24/7 Support"]
            }
        ];

        return (
            <section data-name="pricing" id="pricing" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Einfache, transparente Preise
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Wählen Sie den perfekten Plan für Ihr Unternehmen
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {plans.map((plan, index) => (
                            <div 
                                key={index}
                                className={`pricing-card relative p-8 bg-white rounded-lg border-2 
                                    ${plan.popular ? 'border-indigo-600' : 'border-gray-200'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 -mt-4 mr-4">
                                        <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full">
                                            Beliebt
                                        </span>
                                    </div>
                                )}
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {plan.name}
                                </h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                        ${plan.price}
                                    </span>
                                    <span className="ml-1 text-xl text-gray-500">/Monat</span>
                                </div>
                                <ul className="mt-6 space-y-4">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <i className="fas fa-check text-indigo-600 mr-2"></i>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="/optimizer?lang=de" className={`mt-8 w-full py-3 px-4 rounded-md font-medium
                                    ${plan.popular 
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                    Jetzt starten
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Pricing component error:', error);
        // reportError(error); // Assuming reportError is not globally available or needed here
        return null;
    }
}

export default function Features() {
    try {
        const features = [
            {
                icon: "fa-bolt",
                title: "Schnelle Optimierung",
                description: "Lebenslaufoptimierung in Sekunden bis Minuten abgeschlossen, spart wertvolle Zeit"
            },
            {
                icon: "fa-bullseye",
                title: "Präzise Übereinstimmung",
                description: "Intelligente Analyse der Stellenanforderungen, Hervorhebung der relevantesten Fähigkeiten und Erfahrungen"
            },
            {
                icon: "fa-palette",
                title: "Professionell & Ästhetisch",
                description: "Ausgabe im standardisierten Lebenslauf-Format, klare Hierarchie und ordentliches Layout-Design"
            },
            {
                icon: "fa-shield-alt",
                title: "Datenschutz",
                description: "Alle Daten werden in Echtzeit verarbeitet, keine persönlichen Informationen werden gespeichert, um die Privatsphäre zu gewährleisten"
            }
        ];

        return (
            <section data-name="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Warum Sie uns wählen sollten
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Erstellen Sie einen professionellen Lebenslauf und steigern Sie Ihre Wettbewerbsfähigkeit bei der Jobsuche
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card relative p-6 bg-white rounded-xl"
                            >
                                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                    <i className={`fas ${feature.icon} text-white text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        // reportError(error); // Assuming reportError is not globally available or needed here
        return null;
    }
}

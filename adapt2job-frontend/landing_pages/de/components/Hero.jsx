export default function Hero() {
    try {
        return (
            <div data-name="hero" className="hero-gradient pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block">Erstellen Sie einen perfekten Lebenslauf mit einem Klick</span>
                            <span className="block text-indigo-200 text-3xl sm:text-4xl mt-3">
                                KI-Lebenslaufoptimierer zur Steigerung Ihrer Bewerbungserfolgsquote
                            </span>
                        </h1>
                        <p className="mt-6 max-w-lg mx-auto text-xl text-indigo-100">
                            Intelligente Anpassung an Stellenanforderungen, Optimierung von Lebenslauf-Inhalt und -Layout,
                            <br className="hidden sm:block" />
                            damit Ihr Lebenslauf heraussticht
                        </p>
                        <div className="mt-10">
                            <a href="/optimizer?lang=de" className="btn-primary text-xl px-8 py-4 rounded-lg text-white font-medium">
                                Lebenslauf jetzt optimieren
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                            <p className="mt-3 text-indigo-200 text-sm">
                                <i className="fas fa-clock mr-1"></i>
                                Nur 1 Minute für schnelle Optimierung benötigt
                            </p>
                        </div>
                    </div>
                    <div className="mt-20">
                        <img
                            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80"
                            alt="KI-Lebenslaufoptimierung Demo"
                            className="rounded-lg shadow-2xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        // reportError(error); // Assuming reportError is not globally available or needed here
        return null;
    }
}

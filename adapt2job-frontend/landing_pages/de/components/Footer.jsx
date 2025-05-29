export default function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                <i className="fas fa-file-alt mr-2"></i>
                                KI-Lebenslaufoptimierung
                            </h3>
                            <p className="text-gray-400">
                                Intelligenter Lebenslauf-Optimierungsassistent, der Ihnen hilft, einen perfekten Lebenslauf zu erstellen
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Schnellzugriff</h4>
                            <ul className="space-y-2">
                                <li><a href="/de/usage-instructions" className="text-gray-400 hover:text-white">Anleitung</a></li>
                                <li><a href="/de/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                                <li><a href="/de/contact-us" className="text-gray-400 hover:text-white">Kontakt</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Datenschutz & Bedingungen</h4>
                            <ul className="space-y-2">
                                <li><a href="/de/privacy-policy" className="text-gray-400 hover:text-white">Datenschutzerklärung</a></li>
                                <li><a href="/de/terms-of-service" className="text-gray-400 hover:text-white">Nutzungsbedingungen</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2024 KI-Lebenslaufoptimierung. Alle Rechte vorbehalten</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        // reportError(error); // Assuming reportError is not globally available or needed here
        return null;
    }
}

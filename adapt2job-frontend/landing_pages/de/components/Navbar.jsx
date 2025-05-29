export default function Navbar() {
    try {
        return (
            <nav data-name="navbar" className="bg-white shadow-sm w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="/optimizer?lang=de" className="text-2xl font-bold text-indigo-600">
                                <i className="fas fa-file-alt mr-2"></i>
                                KI-Lebenslaufoptimierung
                            </a>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <a href="/optimizer?lang=de" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                Kostenlose Testversion
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        // reportError(error); // Assuming reportError is not globally available or needed here
        return null;
    }
}

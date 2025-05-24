export default function Trust() {
    try {
        return (
            <section data-name="trust" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Secure and Reliable
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            We value your privacy and security
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div className="trust-card p-6 rounded-xl">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-shield-alt text-indigo-600 text-xl"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Data Security
                            </h3>
                            <p className="text-gray-600">
                                All data is processed in real-time and not stored
                            </p>
                        </div>
                        
                        <div className="trust-card p-6 rounded-xl">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-lock text-indigo-600 text-xl"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Privacy Protection
                            </h3>
                            <p className="text-gray-600">
                                Strict privacy protection mechanisms to ensure personal information security
                            </p>
                        </div>
                        
                        <div className="trust-card p-6 rounded-xl">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-check-circle text-indigo-600 text-xl"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Reliable Service
                            </h3>
                            <p className="text-gray-600">
                                Professional technical team support to ensure service stability
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

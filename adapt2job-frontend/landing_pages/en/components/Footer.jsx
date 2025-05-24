export default function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                <i className="fas fa-file-alt mr-2"></i>
                                AI Resume Optimization
                            </h3>
                            <p className="text-gray-400">
                                Smart resume optimization assistant to help you create a perfect resume
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="/en/usage-instructions" className="text-gray-400 hover:text-white">How to Use</a></li>
                                <li><a href="/en/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                                <li><a href="/en/contact-us" className="text-gray-400 hover:text-white">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Privacy & Terms</h4>
                            <ul className="space-y-2">
                                <li><a href="/en/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="/en/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2024 AI Resume Optimization. All rights reserved</p>
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

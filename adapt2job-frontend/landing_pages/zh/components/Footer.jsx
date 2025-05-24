export default function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                <i className="fas fa-file-alt mr-2"></i>
                                AI简历优化
                            </h3>
                            <p className="text-gray-400">
                                智能简历优化助手，助你打造完美简历
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
                            <ul className="space-y-2">
                                <li><a href="/zh/usage-instructions" className="text-gray-400 hover:text-white">使用说明</a></li>
                                <li><a href="/zh/faq" className="text-gray-400 hover:text-white">常见问题</a></li>
                                <li><a href="/zh/contact-us" className="text-gray-400 hover:text-white">联系我们</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">隐私与条款</h4>
                            <ul className="space-y-2">
                                <li><a href="/zh/privacy-policy" className="text-gray-400 hover:text-white">隐私政策</a></li>
                                <li><a href="/zh/terms-of-service" className="text-gray-400 hover:text-white">服务条款</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2024 AI简历优化. 保留所有权利</p>
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

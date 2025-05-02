export default function Trust() {
    try {
        return (
            <section data-name="trust" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            安全可靠
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            我们重视您的隐私安全
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div className="trust-card p-6 rounded-xl">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-shield-alt text-indigo-600 text-xl"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                数据安全
                            </h3>
                            <p className="text-gray-600">
                                所有数据实时处理，不进行任何存储
                            </p>
                        </div>
                        
                        <div className="trust-card p-6 rounded-xl">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-lock text-indigo-600 text-xl"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                隐私保护
                            </h3>
                            <p className="text-gray-600">
                                严格的隐私保护机制，确保个人信息安全
                            </p>
                        </div>
                        
                        <div className="trust-card p-6 rounded-xl">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fas fa-check-circle text-indigo-600 text-xl"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                可靠服务
                            </h3>
                            <p className="text-gray-600">
                                专业的技术团队支持，确保服务稳定性
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

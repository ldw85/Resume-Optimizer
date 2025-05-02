// 添加 export default 关键字
export default function CallToAction() {
    try {
        return (
            <section data-name="call-to-action" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-600 rounded-2xl py-16 px-6 sm:py-24 sm:px-12 lg:px-16">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                准备好提升你的简历了吗？
                            </h2>
                            <p className="mt-4 text-lg text-indigo-100">
                                立即尝试AI简历优化，让你的简历脱颖而出
                            </p>
                            <div className="mt-10">
                                <a href="/" className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-50 transition-colors">
                                    免费开始使用
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('CallToAction component error:', error);
        // 确保 reportError 函数可用
        // reportError(error); 
        return null; // 或者返回一个错误提示 UI
    }
}

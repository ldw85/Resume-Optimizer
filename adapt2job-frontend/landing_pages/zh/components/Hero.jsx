export default function Hero() {
    try {
        return (
            <div data-name="hero" className="hero-gradient pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block">一键生成完美简历</span>
                            <span className="block text-indigo-200 text-3xl sm:text-4xl mt-3">
                                提升求职成功率的AI简历优化助手
                            </span>
                        </h1>
                        <p className="mt-6 max-w-lg mx-auto text-xl text-indigo-100">
                            智能匹配职位要求，优化简历内容与排版，
                            <br className="hidden sm:block" />
                            让你的简历脱颖而出
                        </p>
                        <div className="mt-10">
                            {/* 将 button 标签改为 a 标签，并添加 href="#" */}
                            <a href="/" className="btn-primary text-xl px-8 py-4 rounded-lg text-white font-medium">
                                立即优化简历
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                            <p className="mt-3 text-indigo-200 text-sm">
                                <i className="fas fa-clock mr-1"></i>
                                仅需1分钟，快速完成优化
                            </p>
                        </div>
                    </div>
                    <div className="mt-20">
                        <img 
                            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80" 
                            alt="AI简历优化展示" 
                            className="rounded-lg shadow-2xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}

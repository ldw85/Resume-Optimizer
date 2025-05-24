export default function Hero() {
    try {
        return (
            <div data-name="hero" className="hero-gradient pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block">Generate a Perfect Resume with One Click</span>
                            <span className="block text-indigo-200 text-3xl sm:text-4xl mt-3">
                                AI Resume Optimizer to Boost Your Job Application Success Rate
                            </span>
                        </h1>
                        <p className="mt-6 max-w-lg mx-auto text-xl text-indigo-100">
                            Intelligently match job requirements, optimize resume content and layout,
                            <br className="hidden sm:block" />
                            make your resume stand out
                        </p>
                        <div className="mt-10">
                            {/* Change button tag to a tag and add href="#" */}
                            <a href="/optimizer?lang=en" className="btn-primary text-xl px-8 py-4 rounded-lg text-white font-medium">
                                Optimize Your Resume Now
                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                            <p className="mt-3 text-indigo-200 text-sm">
                                <i className="fas fa-clock mr-1"></i>
                                Only 1 minute needed for quick optimization
                            </p>
                        </div>
                    </div>
                    <div className="mt-20">
                        <img
                            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80"
                            alt="AI Resume Optimization Demo"
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

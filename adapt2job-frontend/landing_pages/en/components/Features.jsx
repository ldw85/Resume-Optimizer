export default function Features() {
    try {
        const features = [
            {
                icon: "fa-bolt",
                title: "Fast Optimization",
                description: "Resume optimization completed in seconds to minutes, saving valuable time"
            },
            {
                icon: "fa-bullseye",
                title: "Precise Matching",
                description: "Intelligently analyze job requirements, highlighting the most relevant skills and experience"
            },
            {
                icon: "fa-palette",
                title: "Professional & Aesthetic",
                description: "Output standardized resume format, clear hierarchy, and neat layout design"
            },
            {
                icon: "fa-shield-alt",
                title: "Privacy Protection",
                description: "All data is processed in real-time, no personal information is saved, ensuring privacy security"
            }
        ];

        return (
            <section data-name="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Why Choose Us
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Create a professional resume and enhance your job search competitiveness
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card relative p-6 bg-white rounded-xl"
                            >
                                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                    <i className={`fas ${feature.icon} text-white text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
        return null;
    }
}

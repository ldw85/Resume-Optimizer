export default function Features() {
    try {
        const features = [
            {
                icon: "fa-gem",
                title: "Powered by Elite AI Models",
                description: "Leveraging cutting-edge AI models like Gemini 2.5 and DeepSeek R1, our platform performs deep analysis to intelligently identify and supplement crucial, job-related keywords, ensuring your resume stands out."
            },
            {
                icon: "fa-dollar-sign",
                title: "100% Free & Ad-Free",
                description: "Forget paywalls, distracting ads, and mandatory sign-ups. ResumeOptimizer.click is completely free and instantly accessible, allowing you to focus entirely on crafting an interview-winning resume without any cost."
            },
            {
                icon: "fa-cogs",
                title: "Smart Keyword Matching & Content Optimization",
                description: "Our AI compares your resume to job requirements, providing clear, actionable suggestions to refine your experience with powerful language and standardize formatting. See tangible improvements in real-time with side-by-side comparisons."
            },
            {
                icon: "fa-file-export",
                title: "Multi-Format Export & Download",
                description: "Once perfected, download your new document in professional PDF or Word (.docx) formats with one click, ready for immediate submission. Our advanced AI ensures your resume sails through ATS screenings."
            },
            {
                icon: "fa-copy",
                title: "Manage Multiple Resumes",
                description: "For logged-in users, our platform allows you to save and manage multiple versions of your resume, enabling efficient mass applications and quick tailoring for different roles."
            },
            {
                icon: "fa-upload",
                title: "Flexible Input Methods",
                description: "Upload your resume file (PDF, DOCX, JPG, PNG), paste your resume text, paste a job link to auto-fetch the description, or paste the description text directly for maximum convenience."
            }
        ];

        return (
            <section data-name="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                            Why Choose ResumeOptimizer.click?
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                            Unlock your potential with our unique advantages designed to get your resume noticed by both machines and humans.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                                    <i className={`fas ${feature.icon} text-white text-2xl`}></i>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-600">
                            We are the only platform offering an end-to-end, truly free resume optimization experience powered by elite AI models, delivering premium results without the premium price tag.
                        </p>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        // In a real application, you might want to log this error to a service
        // and/or display a user-friendly message.
        return null;
    }
}

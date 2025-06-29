export default function HowItWorks() {
    try {
        const steps = [
            {
                number: "01",
                title: "Input Resume",
                description: "Upload your resume file (PDF, DOCX, JPG, PNG) or simply paste your resume text. Our platform offers ultimate flexibility to streamline your workflow. For logged-in users, you can save and reuse multiple resume versions, making mass applications efficient."
            },
            {
                number: "02",
                title: "Input Job Description",
                description: "Paste the job description text directly or provide a job link. Our AI will then perform a deep analysis, comparing your resume to the job's core requirements to identify crucial keywords and skills."
            },
            {
                number: "03",
                title: "Optimize and Download",
                description: "Receive clear, actionable suggestions for optimizing your resume. See the changes in a clear, side-by-side comparison. Once perfected, download your new document in professional PDF or Word (.docx) formats, ready for immediate submission. Our advanced AI ensures your resume sails through ATS screenings."
            }
        ];

        return (
            <section data-name="how-it-works" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            How It Works: Your Path to Interview Success
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Three simple, powerful steps to instantly optimize your resume and land more interviews.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={index} className="step-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="text-5xl font-extrabold text-indigo-700 mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-indigo-50 p-6 rounded-lg inline-block shadow-inner">
                            <p className="text-indigo-800 text-lg font-medium">
                                <i className="fas fa-info-circle mr-3 text-indigo-600"></i>
                                Unlock your full potential: ResumeOptimizer.click leverages cutting-edge AI models like Gemini 2.5 and DeepSeek R1 to give you a decisive edge in your job search.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('HowItWorks component error:', error);
        // In a real application, you might want to log this error to a service
        // and/or display a user-friendly message.
        return null;
    }
}

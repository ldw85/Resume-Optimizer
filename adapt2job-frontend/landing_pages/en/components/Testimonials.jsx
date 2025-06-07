export default function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Li Hua",
                role: "Job Seeker",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
                quote: "Before, I'd send out generic resumes and barely get any interview invites. But with ResumeOptimizer, I tailor each one perfectly and landed my dream offer super fast! So grateful!"
            },
            {
                name: "Wang Lei",
                role: "Marketing Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
                quote: "ResumeOptimizer totally transformed my resume, boosting its professionalism! My interview success rate shot up, and I felt completely secure about my privacy. Such a relief!"
            },
            {
                name: "Zhang Min",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
                quote: "Job hunting used to be a nightmare, with generic resumes going nowhere. ResumeOptimizer made tailoring so easy, giving me confidence with every application. I finally found my dream job! Highly recommend!"
            }
        ];

        return (
            <section data-name="testimonials" id="testimonials" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            See what our customers have to say
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="testimonial-card bg-white rounded-lg p-6"
                            >
                                <div className="flex items-center">
                                    <img 
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-600 italic">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        reportError(error);
        return null;
    }
}

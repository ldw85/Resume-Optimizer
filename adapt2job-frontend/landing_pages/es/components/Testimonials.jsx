export default function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Sarah Johnson",
                role: "CEO en TechCorp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
                quote: "CloudFlow ha transformado nuestra forma de operar. ¡Las funciones de análisis son increíbles!"
            },
            {
                name: "Mark Wilson",
                role: "CTO en StartupX",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
                quote: "La mejor plataforma SaaS que hemos utilizado. Las herramientas de colaboración en equipo son excepcionales."
            },
            {
                name: "Emily Chen",
                role: "Gerente de Producto en InnovateCo",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
                quote: "La implementación fue fluida y los resultados fueron inmediatos. ¡Altamente recomendado!"
            }
        ];

        return (
            <section data-name="testimonials" id="testimonials" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Con la Confianza de Líderes de la Industria
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Mira lo que dicen nuestros clientes
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

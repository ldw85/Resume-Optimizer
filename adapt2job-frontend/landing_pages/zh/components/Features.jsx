export default function Features() {
    try {
        const features = [
            {
                icon: "fa-bolt",
                title: "快速优化",
                description: "秒级到分钟级完成简历优化，节省宝贵时间"
            },
            {
                icon: "fa-bullseye",
                title: "精准匹配",
                description: "智能分析职位要求，突出匹配度最高的技能和经验"
            },
            {
                icon: "fa-palette",
                title: "专业美观",
                description: "输出规范的简历格式，清晰的层次结构，整洁的版面设计"
            },
            {
                icon: "fa-shield-alt",
                title: "隐私保护",
                description: "所有数据实时处理，不保存任何个人信息，确保隐私安全"
            }
        ];

        return (
            <section data-name="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            为什么选择我们
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            打造专业简历，提升求职竞争力
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

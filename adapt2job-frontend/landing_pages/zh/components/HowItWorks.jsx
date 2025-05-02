export default function HowItWorks() {
    try {
        const steps = [
            {
                number: "01",
                title: "粘贴简历内容",
                description: "复制你当前的简历内容，粘贴到输入框中"
            },
            {
                number: "02",
                title: "输入职位要求",
                description: "粘贴目标职位的要求描述，让AI更好地匹配"
            },
            {
                number: "03",
                title: "一键生成优化",
                description: "系统快速分析并生成优化后的专业简历"
            }
        ];

        return (
            <section data-name="how-it-works" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            使用流程
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            三步完成简历优化，快速又简单
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={index} className="step-card p-6 rounded-xl">
                                <div className="text-4xl font-bold text-indigo-600 mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-gray-100 p-4 rounded-lg inline-block">
                            <p className="text-gray-600">
                                <i className="fas fa-info-circle mr-2 text-indigo-600"></i>
                                演示视频即将上线
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('HowItWorks component error:', error);
        reportError(error);
        return null;
    }
}

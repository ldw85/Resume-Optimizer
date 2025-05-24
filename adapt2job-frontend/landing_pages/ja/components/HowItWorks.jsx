export default function HowItWorks() {
    try {
        const steps = [
            {
                number: "01",
                title: "履歴書の内容を貼り付け",
                description: "現在の履歴書の内容をコピーして、入力ボックスに貼り付けます"
            },
            {
                number: "02",
                title: "職務要件を入力",
                description: "応募する職務の要件説明を貼り付け、AIがより適切にマッチングできるようにします"
            },
            {
                number: "03",
                title: "ワンクリックで最適化を生成",
                description: "システムが迅速に分析し、最適化されたプロフェッショナルな履歴書を生成します"
            }
        ];

        return (
            <section data-name="how-it-works" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            使用方法
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            3ステップで履歴書最適化を完了、素早く簡単に
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
                                デモビデオは近日公開予定です
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

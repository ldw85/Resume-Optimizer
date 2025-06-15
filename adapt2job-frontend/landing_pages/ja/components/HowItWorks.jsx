export default function HowItWorks() {
    try {
        const steps = [
            {
                number: "01",
                title: "履歴書を入力",
                description: "履歴書の内容を貼り付けるか、ファイルをアップロードします（PDF、DOCX、JPG、PNG）。ログインユーザーは履歴書を保存して再利用できます。"
            },
            {
                number: "02",
                title: "職務内容を入力",
                description: "職務内容を貼り付けるか、求人リンクを提供します。"
            },
            {
                number: "03",
                title: "最適化してダウンロード",
                description: "最適化された履歴書を即座に入手し、PDFまたはWordとしてダウンロードします。"
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

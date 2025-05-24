export default function Features() {
    try {
        const features = [
            {
                icon: "fa-bolt",
                title: "迅速な最適化",
                description: "数秒から数分で履歴書の最適化を完了し、貴重な時間を節約します"
            },
            {
                icon: "fa-bullseye",
                title: "正確なマッチング",
                description: "職務要件をインテリジェントに分析し、最も一致するスキルと経験を強調します"
            },
            {
                icon: "fa-palette",
                title: "プロフェッショナルで美しい",
                description: "標準化された履歴書フォーマット、明確な階層構造、整然としたレイアウトを出力します"
            },
            {
                icon: "fa-shield-alt",
                title: "プライバシー保護",
                description: "すべてのデータはリアルタイムで処理され、個人情報は一切保存されず、プライバシーの安全性を確保します"
            }
        ];

        return (
            <section data-name="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            私たちを選ぶ理由
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            プロフェッショナルな履歴書を作成し、就職競争力を向上させます
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

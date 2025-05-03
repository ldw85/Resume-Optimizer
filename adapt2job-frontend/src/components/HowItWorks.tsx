import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">{t('ResumeOptimizer 如何工作')}</h2>
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        {t('ResumeOptimizer 是一款免费在线工具，旨在帮助求职者更有效地优化他们的简历，使其与目标职位要求相匹配。\n' +
          '        通过简单的步骤，您可以快速提升简历的质量，增加获得面试的机会。')}
      </p>
      {/* Steps Container */}
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
      {/* Privacy Note */}
      <p className="text-gray-600 mt-8 text-center text-sm">
        {t('ResumeOptimizer 承诺不保留任何用户信息，保障您的隐私安全。')}
      </p>
    </div>
  );
};

export default HowItWorks;

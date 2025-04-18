import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <h2 className="text-2xl font-semibold mb-4 text-left">{t('ResumeOptimizer 如何工作')}</h2>
      <p className="text-gray-700 mb-4 text-left">
        {t('ResumeOptimizer 是一款免费在线工具，旨在帮助求职者更有效地优化他们的简历，使其与目标职位要求相匹配。\n' +
          '        通过简单的步骤，您可以快速提升简历的质量，增加获得面试的机会。')}
      </p>
      <ul className="pl-4">
        <li className="mb-2 text-left">
          <strong className="font-medium">{t('输入您的简历：')}</strong>{' '}
          {t('复制粘贴您的简历内容到 ResumeOptimizer 的简历输入框。')}
        </li>
        <li className="mb-2 text-left">
          <strong className="font-medium">{t('输入职位要求：')}</strong>{' '}
          {t('复制粘贴您感兴趣的职位要求到 ResumeOptimizer 的职位要求输入框。')}
        </li>
        <li className="mb-2 text-left">
          <strong className="font-medium">{t('获取优化建议：')}</strong>{' '}
          {t('ResumeOptimizer 将分析您的简历和职位要求，并提供针对性的优化建议。')}
        </li>
        <li className="mb-2 text-left">
          <strong className="font-medium">{t('优化您的简历：')}</strong>{' '}
          {t('根据 ResumeOptimizer 的建议，修改和完善您的简历。')}
        </li>
      </ul>
      <p className="text-gray-700 mt-4 text-left">
        {t('ResumeOptimizer 承诺不保留任何用户信息，保障您的隐私安全。')}
      </p>
    </div>
  );
};

export default HowItWorks;

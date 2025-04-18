import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

i18n.on('initialized', () => {
  const description_zh = i18n.t('ResumeOptimizer 是一款免费在线简历优化工具，帮助您根据职位要求快速优化简历，提升求职成功率。');
  const description_en = i18n.t('ResumeOptimizer is a free online tool designed to help job seekers optimize their resumes more effectively to match target job requirements.');
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', `${description_zh} - ${description_en}`);
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)

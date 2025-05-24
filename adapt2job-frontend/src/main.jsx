import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import './index.css';
import OptimizerPage from './OptimizerPage'; // Import OptimizerPage
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

// Import landing pages for different languages
import LandingEn from '../landing_pages/en/landing-en.jsx';
import LandingEs from '../landing_pages/es/landing-es.jsx';
import LandingJa from '../landing_pages/ja/landing-ja.jsx';
import LandingZh from '../landing_pages/zh/landing-zh.jsx'; // Use the new path
import UsageInstructionsEn from '../landing_pages/en/usage-instructions.jsx';
import FAQEn from '../landing_pages/en/faq.jsx';
import ContactUsEn from '../landing_pages/en/contact-us.jsx';
import PrivacyPolicyEn from '../landing_pages/en/privacy-policy.jsx';
import TermsOfServiceEn from '../landing_pages/en/terms-of-service.jsx';
import UsageInstructionsEs from '../landing_pages/es/usage-instructions.jsx';
import FAQEs from '../landing_pages/es/faq.jsx';
import ContactUsEs from '../landing_pages/es/contact-us.jsx';
import PrivacyPolicyEs from '../landing_pages/es/privacy-policy.jsx';
import TermsOfServiceEs from '../landing_pages/es/terms-of-service.jsx';
import UsageInstructionsJa from '../landing_pages/ja/usage-instructions.jsx';
import FAQJa from '../landing_pages/ja/faq.jsx';
import ContactUsJa from '../landing_pages/ja/contact-us.jsx';
import PrivacyPolicyJa from '../landing_pages/ja/privacy-policy.jsx';
import TermsOfServiceJa from '../landing_pages/ja/terms-of-service.jsx';
import UsageInstructionsZh from '../landing_pages/zh/usage-instructions.jsx';
import FAQZh from '../landing_pages/zh/faq.jsx';
import ContactUsZh from '../landing_pages/zh/contact-us.jsx';
import PrivacyPolicyZh from '../landing_pages/zh/privacy-policy.jsx';
import TermsOfServiceZh from '../landing_pages/zh/terms-of-service.jsx';

// i18n 初始化逻辑保持不变
i18n.on('initialized', () => {
    const description_zh = i18n.t('ResumeOptimizer 是一款免费在线简历优化工具，帮助您根据职位要求快速优化简历，提升求职成功率。');
    const description_en = i18n.t('ResumeOptimizer is a free online tool designed to help job seekers optimize their resumes more effectively to match target job requirements.');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', `${description_zh} - ${description_en}`);
    }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter> {/* Use BrowserRouter for routing */}
        <Routes> {/* Define routes */}
          {/* Default English landing page */}
          <Route path="/" element={<LandingEn />} />
          {/* Other language landing pages */}
          <Route path="/en" element={<LandingEn />} />
          <Route path="/es" element={<LandingEs />} />
          <Route path="/ja" element={<LandingJa />} />
          <Route path="/zh" element={<LandingZh />} />
          {/* New routes for English pages */}
          <Route path="/en/usage-instructions" element={<UsageInstructionsEn />} />
          <Route path="/en/faq" element={<FAQEn />} />
          <Route path="/en/contact-us" element={<ContactUsEn />} />
          <Route path="/en/privacy-policy" element={<PrivacyPolicyEn />} />
          <Route path="/en/terms-of-service" element={<TermsOfServiceEn />} />
          {/* New routes for Spanish pages */}
          <Route path="/es/usage-instructions" element={<UsageInstructionsEs />} />
          <Route path="/es/faq" element={<FAQEs />} />
          <Route path="/es/contact-us" element={<ContactUsEs />} />
          <Route path="/es/privacy-policy" element={<PrivacyPolicyEs />} />
          <Route path="/es/terms-of-service" element={<TermsOfServiceEs />} />
          {/* New routes for Japanese pages */}
          <Route path="/ja/usage-instructions" element={<UsageInstructionsJa />} />
          <Route path="/ja/faq" element={<FAQJa />} />
          <Route path="/ja/contact-us" element={<ContactUsJa />} />
          <Route path="/ja/privacy-policy" element={<PrivacyPolicyJa />} />
          <Route path="/ja/terms-of-service" element={<TermsOfServiceJa />} />
          {/* New routes for Chinese pages */}
          <Route path="/zh/usage-instructions" element={<UsageInstructionsZh />} />
          <Route path="/zh/faq" element={<FAQZh />} />
          <Route path="/zh/contact-us" element={<ContactUsZh />} />
          <Route path="/zh/privacy-policy" element={<PrivacyPolicyZh />} />
          <Route path="/zh/terms-of-service" element={<TermsOfServiceZh />} />
          {/* Optimizer page */}
          <Route path="/optimizer" element={<OptimizerPage />} />
          {/* Optional: Add a catch-all route for 404 */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);

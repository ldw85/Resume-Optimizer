import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';
import OptimizerPage from './OptimizerPage'; // Import OptimizerPage
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

// Import landing pages for different languages
import LandingEn from '../landing_pages/en/landing-en.jsx';
import LandingEs from '../landing_pages/es/landing-es.jsx';
import LandingJa from '../landing_pages/ja/landing-ja.jsx';
import LandingZh from '../landing_pages/zh/landing-zh.jsx';
import LandingDe from '../landing_pages/de/landing-de.jsx';
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
import UsageInstructionsDe from '../landing_pages/de/usage-instructions.jsx';
import FAQDe from '../landing_pages/de/faq.jsx';
import ContactUsDe from '../landing_pages/de/contact-us.jsx';
import PrivacyPolicyDe from '../landing_pages/de/privacy-policy.jsx';
import TermsOfServiceDe from '../landing_pages/de/terms-of-service.jsx';
import BlogIndexEn from '../landing_pages/en/blog/blogIndex.html?raw';
import BlogIndexDe from '../landing_pages/de/blog/blogIndex.html?raw'; // 假设文件存在于此路径
import BlogIndexEs from '../landing_pages/es/blog/blogIndex.html?raw';
import BlogIndexJa from '../landing_pages/ja/blog/blogIndex.html?raw';
import BlogIndexZh from '../landing_pages/zh/blog/blogIndex.html?raw';
import HowToTailorResumesForJobsEn from '../landing_pages/en/blog/how-to-tailor-resumes-for-jobs.html?raw';
import HowToCreateAGreatResumeEn from '../landing_pages/en/blog/how-to-create-a-great-resume.html?raw';
import ProfessionalResumeWritingServicesEn from '../landing_pages/en/blog/professional-resume-writing-services.html?raw';
import ProfessionalResumeWritingServicesZh from '../landing_pages/zh/blog/professional-resume-writing-services.html?raw';
import CanAResumeBe2PagesEn from '../landing_pages/en/blog/can-a-resume-be-2-pages-your-ultimate-guide-to-optimal-length.html?raw';
import HowToImproveResumeQualityEn from '../landing_pages/en/blog/how-to-improve-resume-quality-land-more-interviews-in-2025.html?raw';
import IsProfessionallyWrittenAtsFriendlyResumeWorthTheInvestmentEn from '../landing_pages/en/blog/is-a-professionally-written-ats-friendly-resume-worth-the-investment.html?raw';
import WhyYourResumeGetsIgnoredEn from '../landing_pages/en/blog/why-your-resume-gets-ignored-and-the-free-ai-trick-to-fix-it-instantly.html?raw';
import MasterAiResumeOptimizationEn from '../landing_pages/en/blog/Master-AI-Resume-Optimization-Beat-ATS-Land-Interviews-Faster.html?raw';
import ExpertChatGptPromptsEn from '../landing_pages/en/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025.html?raw';
import ExpertChatGptPromptsDe from '../landing_pages/de/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025.html?raw';
import ExpertChatGptPromptsEs from '../landing_pages/es/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025.html?raw';
import ExpertChatGptPromptsJa from '../landing_pages/ja/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025.html?raw';
import ExpertChatGptPromptsZh from '../landing_pages/zh/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025.html?raw';
import InteractiveReportWrapper from './components/InteractiveReportWrapper';
import HeroReportWrapper from './components/HeroReportWrapper';
import ultimateGuideToAIResumeOptimization from '../landing_pages/en/blog/The-Ultimate-Guide-to-AI-Resume-Optimization-Tools-Benefits-Strategies-for-2025-CareerBoost-AI.html?raw';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key')
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
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
            <Route path="/de" element={<LandingDe />} />
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
            {/* New routes for German pages */}
            <Route path="/de/usage-instructions" element={<UsageInstructionsDe />} />
            <Route path="/de/faq" element={<FAQDe />} />
            <Route path="/de/contact-us" element={<ContactUsDe />} />
            <Route path="/de/privacy-policy" element={<PrivacyPolicyDe />} />
            <Route path="/de/terms-of-service" element={<TermsOfServiceDe />} />
            {/* 为德语博客添加路由 */}
            <Route path="/de/blog" element={<div dangerouslySetInnerHTML={{ __html: BlogIndexDe }} />} />
            <Route path="/de/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025" element={<div dangerouslySetInnerHTML={{ __html: ExpertChatGptPromptsDe }} />} />
            {/* New routes for Spanish blog pages */}
            <Route path="/es/blog" element={<div dangerouslySetInnerHTML={{ __html: BlogIndexEs }} />} />
            <Route path="/es/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025" element={<div dangerouslySetInnerHTML={{ __html: ExpertChatGptPromptsEs }} />} />
            {/* New routes for Japanese blog pages */}
            <Route path="/ja/blog" element={<div dangerouslySetInnerHTML={{ __html: BlogIndexJa }} />} />
            <Route path="/ja/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025" element={<div dangerouslySetInnerHTML={{ __html: ExpertChatGptPromptsJa }} />} />
            {/* New routes for English blog pages */}
            <Route path="/en/blog" element={<div dangerouslySetInnerHTML={{ __html: BlogIndexEn }} />} />
            <Route path="/en/blog/how-to-tailor-resumes-for-jobs" element={<div dangerouslySetInnerHTML={{ __html: HowToTailorResumesForJobsEn }} />} />
            <Route path="/en/blog/how-to-create-a-great-resume" element={<div dangerouslySetInnerHTML={{ __html: HowToCreateAGreatResumeEn }} />} />
            <Route path="/en/blog/professional-resume-writing-services" element={<div dangerouslySetInnerHTML={{ __html: ProfessionalResumeWritingServicesEn }} />} />
            <Route path="/en/blog/interactive-report-ai-resume-optimization-tools" element={<InteractiveReportWrapper />} />
            <Route path="/en/blog/can-a-resume-be-2-pages-your-ultimate-guide-to-optimal-length" element={<div dangerouslySetInnerHTML={{ __html: CanAResumeBe2PagesEn }} />} />
            <Route path="/en/blog/how-to-improve-resume-quality-land-more-interviews-in-2025" element={<div dangerouslySetInnerHTML={{ __html: HowToImproveResumeQualityEn }} />} />
            <Route path="/en/blog/is-a-professionally-written-ats-friendly-resume-worth-the-investment" element={<div dangerouslySetInnerHTML={{ __html: IsProfessionallyWrittenAtsFriendlyResumeWorthTheInvestmentEn }} />} />
            <Route path="/en/blog/why-your-resume-gets-ignored-and-the-free-ai-trick-to-fix-it-instantly" element={<div dangerouslySetInnerHTML={{ __html: WhyYourResumeGetsIgnoredEn }} />} />
            <Route path="/en/blog/Master-AI-Resume-Optimization-Beat-ATS-Land-Interviews-Faster" element={<div dangerouslySetInnerHTML={{ __html: MasterAiResumeOptimizationEn }} />} />
            <Route path="/en/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025" element={<div dangerouslySetInnerHTML={{ __html: ExpertChatGptPromptsEn }} />} />
            {/* New routes for Chinese blog pages */}
            <Route path="/zh/blog" element={<div dangerouslySetInnerHTML={{ __html: BlogIndexZh }} />} />
            <Route path="/zh/blog/professional-resume-writing-services" element={<div dangerouslySetInnerHTML={{ __html: ProfessionalResumeWritingServicesZh }} />} />
            <Route path="/zh/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025" element={<div dangerouslySetInnerHTML={{ __html: ExpertChatGptPromptsZh }} />} />
            <Route path="/en/blog/interactive-report-ai-resume-optimization-tools" element={<div dangerouslySetInnerHTML={{ __html: InteractiveReportWrapper }} />} />
            <Route path="/en/blog/the-2025-guide-to-ai-resume-optimizers" element={<div dangerouslySetInnerHTML={{ __html: HeroReportWrapper }} />} />
            <Route path="/blog/The-2025-Guide-to-AI-Resume-Optimizers.html" element={<HeroReportWrapper />} />
            <Route path="/en/blog/The-Ultimate-Guide-to-AI-Resume-Optimization-Tools-Benefits-Strategies-for-2025-CareerBoost-AI" element={<div dangerouslySetInnerHTML={{ __html: ultimateGuideToAIResumeOptimization }} />} />

            {/* Optimizer page */}
            <Route path="/optimizer" element={<OptimizerPage />} />
            {/* Optional: Add a catch-all route for 404 */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ClerkProvider>
  </StrictMode>
);

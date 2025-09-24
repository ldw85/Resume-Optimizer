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
import WhyYourResumeGetsIgnoredEs from '../landing_pages/es/blog/why-your-resume-gets-ignored-and-the-free-ai-trick-to-fix-it-instantly.html?raw';
import CanAResumeBe2PagesEn from '../landing_pages/en/blog/can-a-resume-be-2-pages-your-ultimate-guide-to-optimal-length.html?raw';
import HowToImproveResumeQualityEn from '../landing_pages/en/blog/how-to-improve-resume-quality-land-more-interviews-in-2025.html?raw';
import IsProfessionallyWrittenAtsFriendlyResumeWorthTheInvestmentEn from '../landing_pages/en/blog/is-a-professionally-written-ats-friendly-resume-worth-the-investment.html?raw';
import WhyYourResumeGetsIgnoredEn from '../landing_pages/en/blog/why-your-resume-gets-ignored-and-the-free-ai-trick-to-fix-it-instantly.html?raw';
import MasterAiResumeOptimizationEn from '../landing_pages/en/blog/Master-AI-Resume-Optimization-Beat-ATS-Land-Interviews-Faster.html?raw';
import ExpertChatGptPromptsEn from '../landing_pages/en/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025.html?raw';
import ExpertChatGptPromptsDe from '../landing_pages/de/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025.html?raw';
import TwentyFiveEssentialAtsResumeOptimizationTipsDe from '../landing_pages/de/blog/25-Essential-ATS-Resume-Optimization-Tips-&-Best-Practices-for-Job-Seekers.html?raw';
import AiResumeOptimizationServicesDe from '../landing_pages/de/blog/AI-Resume-Optimization-Services:-When-to-Hire-an-Expert-vs.-Using-a-Tool.html?raw';
import AtsResumeOptimizationIn2025De from '../landing_pages/de/blog/ATS-Resume-Optimization-in-2025-and-Beyond:-Staying-Ahead-of-Applicant-Tracking-Systems.html?raw';
import ChoosingTheBestResumeBuilderDe from '../landing_pages/de/blog/Choosing-the-Best-Resume-Builder:-Free-Tools-vs.-Paid-Services.html?raw';
import CompleteGuideChatGptResumeOptimizationDe from '../landing_pages/de/blog/Complete-Guide-to-ChatGPT-Resume-Optimization:-From-Keywords-to-Cover-Letters.html?raw';
import CraftingAWinningComboDe from '../landing_pages/de/blog/Crafting-a-Winning-Combo:-How-to-Write-a-Resume-Cover-Letter.html?raw';
import DownloadFreeResumeTemplatesDe from '../landing_pages/de/blog/Download-Free-Resume-Templates-&-Examples-for-Every-Industry.html?raw';
import ChatGptResumeKeywordOptimizationDe from '../landing_pages/de/blog/How-to-Use-ChatGPT-for-Perfect-Resume-Keyword-Optimization.html?raw';
import Top7FreeResumeAnalyzersDe from '../landing_pages/de/blog/Top-7-Free-Resume-Analyzer-Tools-to-Score-Your-CV-in-Seconds.html?raw';
import ExpertChatGptPromptsEs from '../landing_pages/es/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025.html?raw';
import ExpertChatGptPromptsJa from '../landing_pages/ja/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025.html?raw';
import ExpertChatGptPromptsZh from '../landing_pages/zh/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025.html?raw';
import InteractiveReportWrapper from './components/InteractiveReportWrapper';
import HeroReportWrapper from './components/HeroReportWrapper';
import ultimateGuideToAIResumeOptimization from '../landing_pages/en/blog/The-Ultimate-Guide-to-AI-Resume-Optimization-Tools-Benefits-Strategies-for-2025-CareerBoost-AI.html?raw';
import HowToOptimizeYourResumeUsingAIEn from '../landing_pages/en/blog/How-to-Optimize-Your-Resume-Using-AI-A-Step-by-Step-Guide.html?raw';
import AiResumeOptimizationToolVsExpertEn from '../landing_pages/en/blog/ai-resume-optimization-tool-vs-expert.html?raw';
import the10BestAiResumeToolsEn from '../landing_pages/en/blog/the-10-best-ai-resume-optimization-tools-in-2025-reviewed-compared.html?raw';
import AiResumeOptimizationServicesEn from '../landing_pages/en/blog/AI-Resume-Optimization-Services:-When-to-Hire-an-Expert-vs.-Using-a-Tool.html?raw';
import JobscanVsOtherAiToolsEn from '../landing_pages/en/blog/Jobscan-vs.-Other-AI-Tools:-Which-Resume-Optimizer-is-Right-for-You.html?raw';
import ChatGptResumeKeywordOptimizationEn from '../landing_pages/en/blog/How-to-Use-ChatGPT-for-Perfect-Resume-Keyword-Optimization.html?raw';
import OptimizingLinkedInWithChatGptEn from '../landing_pages/en/blog/Optimizing-Your-LinkedIn-Profile-and-Resume-with-ChatGPT.html?raw';
import CompleteGuideChatGptResumeOptimizationEn from '../landing_pages/en/blog/Complete-Guide-to-ChatGPT-Resume-Optimization:-From-Keywords-to-Cover-Letters.html?raw';
import Top7FreeResumeAnalyzersEn from '../landing_pages/en/blog/Top-7-Free-Resume-Analyzer-Tools-to-Score-Your-CV-in-Seconds.html?raw';
import DiyResumeSeoForAtsEn from '../landing_pages/en/blog/DIY-Resume-SEO:-How-to-Manually-Optimize-for-Applicant-Tracking-Systems-(ATS).html?raw';
import ChoosingTheBestResumeBuilderEn from '../landing_pages/en/blog/Choosing-the-Best-Resume-Builder:-Free-Tools-vs.-Paid-Services.html?raw';
import HowToWriteAResumeCoverLetterEn from '../landing_pages/en/blog/Crafting-a-Winning-Combo:-How-to-Write-a-Resume-Cover-Letter.html?raw';
import HowToUpdateAndRewriteYourResumeEn from '../landing_pages/en/blog/Download-Free-Resume-Templates-&-Examples-for-Every-Industry.html?raw';
import FreeResumeTemplatesAndExamplesEn from '../landing_pages/en/blog/Mastering-ATS:-How-to-Optimize-Your-Resume-for-Applicant-Tracking-Systems.html?raw';
import UpdateAndRewriteResumeStrategiesEn from '../landing_pages/en/blog/Effective-Strategies: How-to-Update-and-Rewrite-Your-Resume.html?raw';
import FindLocalResumeServicesEn from '../landing_pages/en/blog/Find-the-Best-Resume-Writing-Services-Near-You.html?raw';
import UltimateDiyResumeGuideEn from '../landing_pages/en/blog/The-Ultimate-DIY-Guide:-How-to-Write-a-Professional-Resume-That-Gets-Hired.html?raw';
import WhyHireCertifiedWritersEn from '../landing_pages/en/blog/Why-Hire-Certified-Professional-Resume-Writers-for-Your-Job-Search.html?raw';
import AiResumeOptimizationServicesEs from '../landing_pages/es/blog/AI-Resume-Optimization-Services-When-to-Hire-an-Expert-vs-Using-a-Tool.html?raw';
import ChoosingTheBestResumeBuilderEs from '../landing_pages/es/blog/Choosing-the-Best-Resume-Builder-Free-Tools-vs-Paid-Services.html?raw';
import CompleteGuideToChatGPTResumeOptimizationEs from '../landing_pages/es/blog/Complete-Guide-to-ChatGPT-Resume-Optimization-From-Keywords-to-Cover-Letters.html?raw';
import CraftingAWinningComboEs from '../landing_pages/es/blog/Crafting-a-Winning-Combo-How-to-Write-a-Resume-Cover-Letter.html?raw';
import DiyResumeSeoForAtsEs from '../landing_pages/es/blog/DIY-Resume-SEO-How-to-Manually-Optimize-for-Applicant-Tracking-Systems-ATS.html?raw';
import DownloadFreeResumeTemplatesEs from '../landing_pages/es/blog/Download-Free-Resume-Templates-&-Examples-for-Every-Industry.html?raw';
import EffectiveStrategiesEs from '../landing_pages/es/blog/Effective-Strategies-How-to-Update-and-Rewrite-Your-Resume.html?raw';
import FindTheBestResumeWritingServicesNearYouEs from '../landing_pages/es/blog/Find-the-Best-Resume-Writing-Services-Near-You.html?raw';
import HowToOptimizeYourResumeUsingAiEs from '../landing_pages/es/blog/How-to-Optimize-Your-Resume-Using-AI-A-Step-by-Step-Guide.html?raw';
import HowToUseChatGptForPerfectResumeKeywordOptimizationEs from '../landing_pages/es/blog/How-to-Use-ChatGPT-for-Perfect-Resume-Keyword-Optimization.html?raw';
import JobscanVsOtherAiToolsEs from '../landing_pages/es/blog/Jobscan-vs.-Other-AI-Tools:-Which-Resume-Optimizer-is-Right-for-You.html?raw';
import MasterAiResumeOptimizationBeatAtsLandInterviewsFasterEs from '../landing_pages/es/blog/Master-AI-Resume-Optimization-Beat-ATS-Land-Interviews-Faster.html?raw';
import BestAtsResumeOptimizationToolsEn from '../landing_pages/en/blog/Best-ATS-Resume-Optimization-Tools-(Free-&-Paid)-to-Get-Your-CV-Noticed.html?raw';
import TwentyFiveEssentialAtsResumeOptimizationTipsEn from '../landing_pages/en/blog/25-Essential-ATS-Resume-Optimization-Tips-&-Best-Practices-for-Job-Seekers.html?raw';
import HowToTailorYourResumeForAtsEn from '../landing_pages/en/blog/How-to-Tailor-Your-Resume-for-ATS:-Optimizing-Keywords-&-Skills-for-Success.html?raw';
import AtsResumeOptimizationIn2025En from '../landing_pages/en/blog/ATS-Resume-Optimization-in-2025-and-Beyond:-Staying-Ahead-of-Applicant-Tracking-Systems.html?raw';

import beyondTwoPagesEn from '../landing_pages/en/blog/Beyond-Two-Pages-Is-a-3-Page-Resume-Ever-Justified.html?raw';
import choosingOptimalResumeFormatEn from '../landing_pages/en/blog/Choosing-the-Optimal-Resume-Format-Design-Layout-and-Readability-Tips.html?raw';
import howToCreateProfessionalResumeEn from '../landing_pages/en/blog/How-to-Create-a-Professional-Resume-That-Gets-Noticed.html?raw';
import howToTailorSkillsSectionEn from '../landing_pages/en/blog/How-to-Tailor-Your-Skills-Section-on-a-Resume-for-Maximum-Impact.html?raw';
import isA1PageResumeRightForYouEn from '../landing_pages/en/blog/Is-a-1-Page-Resume-Right-for-You-Pros-Cons-and-When-to-Use-It.html?raw';
import tailoredResumeExamplesEn from '../landing_pages/en/blog/Tailored-Resume-Examples-See-How-to-Match-Your-Skills-to-Any-Job.html?raw';
import ultimateGuideOptimalLengthEn from '../landing_pages/en/blog/The-Ultimate-Guide-to-Optimal-Resume-Length-When-to-Go-Short-Long-or-Just-Right.html?raw';
import ultimateGuideTailoringResumeEn from '../landing_pages/en/blog/The-Ultimate-Guide-to-Tailoring-Your-Resume-to-a-Job-Description.html?raw';
import ultimateGuideWritingPerfectResumeEn from '../landing_pages/en/blog/The-Ultimate-Guide-to-Writing-a-Perfect-Resume-Land-Your-Dream-Job.html?raw';
import whatMakesEffectiveResumeEn from '../landing_pages/en/blog/What-Makes-an-Effective-Resume-Key-Strategies-for-Impact.html?raw';
import whenToUse2PageResumeEn from '../landing_pages/en/blog/When-to-Use-a-2-Page-Resume-Maximizing-Impact-Without-Overdoing-It.html?raw';
import writingCvVsResumeEn from '../landing_pages/en/blog/Writing-a-Professional-CV-vs-Resume-A-Comprehensive-Guide.html?raw';

// New imports requested by user
import TenEssentialResumeOptimizationTipsEn from '../landing_pages/en/blog/10-Essential-Resume-Optimization-Tips-to-Improve-Your-Resume-Quality.html?raw';
import BoostYourResumePowerfulSynonymsEn from '../landing_pages/en/blog/Boost-Your-Resume-Powerful-Synonyms-for-Optimize-and-Other-Action-Verbs.html?raw';
import ChoosingTheRightResumeTypeEn from '../landing_pages/en/blog/Choosing-the-Right-Resume-Type-A-Guide-to-Formats-and-Styles.html?raw';
import CraftingTheBestResumeForExperiencedEn from '../landing_pages/en/blog/Crafting-the-Best-Resume-for-Experienced-Professionals-Examples--Strategies.html?raw';
import ExploringAdvancedResumeFormatsEn from '../landing_pages/en/blog/Exploring-Advanced-Resume-Formats-X-Y-Z-5S-and-More.html?raw';
import HowToKeywordOptimizeYourResumeEn from '../landing_pages/en/blog/How-to-Keyword-Optimize-Your-Resume-to-Beat-ATS-(Applicant-Tracking-Systems).html?raw';
import SampleResumeForTailoringJobEn from '../landing_pages/en/blog/Sample-Resume-for-a-Tailoring-Job-Key-Skills-and-Experience.html?raw';
import UltimateCollectionOfResumeExamplesEn from '../landing_pages/en/blog/The-Ultimate-Collection-of-Resume-Examples-for-Every-Industry-and-Career-Level.html?raw';
import UltimateGuideToResumeOptimizationEn from '../landing_pages/en/blog/The-Ultimate-Guide-to-Resume-Optimization-Maximize-Your-Job-Search-Success.html?raw';
import UltimateGuideToWritingResumeThatGetsYouHiredEn from '../landing_pages/en/blog/The-Ultimate-Guide-to-Writing-a-Resume-That-Gets-You-Hired.html?raw';
import Top5ResumeTipsEn from '../landing_pages/en/blog/Top-5-Resume-Tips-to-Boost-Your-Job-Application-Success.html?raw';
import TopITResumeExamplesEn from '../landing_pages/en/blog/Top-IT-Resume-Examples-Stand-Out-in-the-Tech-Industry.html?raw';
import UnlockingBestFreeAIResumeToolsEn from '../landing_pages/en/blog/Unlocking-the-Best-Free-AI-Resume-Optimization-Tools-of-2025.html?raw';
import WhenToUseA2PageResumeEn from '../landing_pages/en/blog/When-to-Use-a-2-Page-Resume-Examples--Best-Practices.html?raw';
import BoostYourResumeWithStrongActionVerbsAndSentenceExamplesEn from '../landing_pages/en/blog/Boost-Your-Resume-with-Strong-Action-Verbs-and-Sentence-Examples.html?raw';
import HowToIncludeRecommendationsOnYourResumeWithExamplesEn from '../landing_pages/en/blog/How-to-Include-Recommendations-on-Your-Resume-(With-Examples).html?raw';
import PowerfulResumeSummaryExamplesToGrabAttentionIncludingRetailEn from '../landing_pages/en/blog/Powerful-Resume-Summary-Examples-to-Grab-Attention-(Including-Retail).html?raw';
import ShowcasingProfessionalDevelopmentOnYourResumeAGuideEn from '../landing_pages/en/blog/Showcasing-Professional-Development-on-Your-Resume-A-Guide.html?raw';
import TheUltimateGuideToOptimizingEverySectionOfYourResumeEn from '../landing_pages/en/blog/The-Ultimate-Guide-to-Optimizing-Every-Section-of-Your-Resume.html?raw';







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
            <Route path="/de/blog/25-Essential-ATS-Resume-Optimization-Tips-&-Best-Practices-for-Job-Seekers" element={<div dangerouslySetInnerHTML={{ __html: TwentyFiveEssentialAtsResumeOptimizationTipsDe }} />} />
            <Route path="/de/blog/AI-Resume-Optimization-Services:-When-to-Hire-an-Expert-vs.-Using-a-Tool" element={<div dangerouslySetInnerHTML={{ __html: AiResumeOptimizationServicesDe }} />} />
            <Route path="/de/blog/ATS-Resume-Optimization-in-2025-and-Beyond:-Staying-Ahead-of-Applicant-Tracking-Systems" element={<div dangerouslySetInnerHTML={{ __html: AtsResumeOptimizationIn2025De }} />} />
            <Route path="/de/blog/Choosing-the-Best-Resume-Builder:-Free-Tools-vs.-Paid-Services" element={<div dangerouslySetInnerHTML={{ __html: ChoosingTheBestResumeBuilderDe }} />} />
            <Route path="/de/blog/Complete-Guide-to-ChatGPT-Resume-Optimization:-From-Keywords-to-Cover-Letters" element={<div dangerouslySetInnerHTML={{ __html: CompleteGuideChatGptResumeOptimizationDe }} />} />
            <Route path="/de/blog/Crafting-a-Winning-Combo:-How-to-Write-a-Resume-Cover-Letter" element={<div dangerouslySetInnerHTML={{ __html: CraftingAWinningComboDe }} />} />
            <Route path="/de/blog/Download-Free-Resume-Templates-&-Examples-for-Every-Industry" element={<div dangerouslySetInnerHTML={{ __html: DownloadFreeResumeTemplatesDe }} />} />
            <Route path="/de/blog/How-to-Use-ChatGPT-for-Perfect-Resume-Keyword-Optimization" element={<div dangerouslySetInnerHTML={{ __html: ChatGptResumeKeywordOptimizationDe }} />} />
            <Route path="/de/blog/Top-7-Free-Resume-Analyzer-Tools-to-Score-Your-CV-in-Seconds" element={<div dangerouslySetInnerHTML={{ __html: Top7FreeResumeAnalyzersDe }} />} />
            {/* New routes for Spanish blog pages */}
            <Route path="/es/blog" element={<div dangerouslySetInnerHTML={{ __html: BlogIndexEs }} />} />
            <Route path="/es/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025" element={<div dangerouslySetInnerHTML={{ __html: ExpertChatGptPromptsEs }} />} />
            <Route path="/es/blog/why-your-resume-gets-ignored-and-the-free-ai-trick-to-fix-it-instantly" element={<div dangerouslySetInnerHTML={{ __html: WhyYourResumeGetsIgnoredEs }} />} />
            <Route path="/es/blog/AI-Resume-Optimization-Services-When-to-Hire-an-Expert-vs-Using-a-Tool" element={<div dangerouslySetInnerHTML={{ __html: AiResumeOptimizationServicesEs }} />} />
            <Route path="/es/blog/Choosing-the-Best-Resume-Builder-Free-Tools-vs-Paid-Services" element={<div dangerouslySetInnerHTML={{ __html: ChoosingTheBestResumeBuilderEs }} />} />
            <Route path="/es/blog/Complete-Guide-to-ChatGPT-Resume-Optimization-From-Keywords-to-Cover-Letters" element={<div dangerouslySetInnerHTML={{ __html: CompleteGuideToChatGPTResumeOptimizationEs }} />} />
            <Route path="/es/blog/Crafting-a-Winning-Combo-How-to-Write-a-Resume-Cover-Letter" element={<div dangerouslySetInnerHTML={{ __html: CraftingAWinningComboEs }} />} />
            <Route path="/es/blog/DIY-Resume-SEO-How-to-Manually-Optimize-for-Applicant-Tracking-Systems-ATS" element={<div dangerouslySetInnerHTML={{ __html: DiyResumeSeoForAtsEs }} />} />
            <Route path="/es/blog/Download-Free-Resume-Templates-&-Examples-for-Every-Industry" element={<div dangerouslySetInnerHTML={{ __html: DownloadFreeResumeTemplatesEs }} />} />
            <Route path="/es/blog/Effective-Strategies-How-to-Update-and-Rewrite-Your-Resume" element={<div dangerouslySetInnerHTML={{ __html: EffectiveStrategiesEs }} />} />
            <Route path="/es/blog/Find-the-Best-Resume-Writing-Services-Near-You:-Find-the-Best-Resume-Writing-Services-Near-You" element={<div dangerouslySetInnerHTML={{ __html: FindTheBestResumeWritingServicesNearYouEs }} />} />
            <Route path="/es/blog/How-to-Optimize-Your-Resume-Using-AI-A-Step-by-Step-Guide" element={<div dangerouslySetInnerHTML={{ __html: HowToOptimizeYourResumeUsingAiEs }} />} />
            <Route path="/es/blog/How-to-Use-ChatGPT-for-Perfect-Resume-Keyword-Optimization" element={<div dangerouslySetInnerHTML={{ __html: HowToUseChatGptForPerfectResumeKeywordOptimizationEs }} />} />
            <Route path="/es/blog/Jobscan-vs.-Other-AI-Tools:-Which-Resume-Optimizer-is-Right-for-You" element={<div dangerouslySetInnerHTML={{ __html: JobscanVsOtherAiToolsEs }} />} />
            <Route path="/es/blog/Master-AI-Resume-Optimization-Beat-ATS-Land-Interviews-Faster" element={<div dangerouslySetInnerHTML={{ __html: MasterAiResumeOptimizationBeatAtsLandInterviewsFasterEs }} />} />
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
            <Route path="/en/blog/the-10-best-ai-resume-optimization-tools-in-2025-reviewed-compared" element={<div dangerouslySetInnerHTML={{ __html: the10BestAiResumeToolsEn }} />} />
            <Route path="/en/blog/AI-Resume-Optimization-Services-When-to-Hire-an-Expert-vs-Using-a-Tool" element={<div dangerouslySetInnerHTML={{ __html: AiResumeOptimizationServicesEn }} />} />
            <Route path="/en/blog/Jobscan-vs-Other-AI-Tools-Which-Resume-Optimizer-is-Right-for-You" element={<div dangerouslySetInnerHTML={{ __html: JobscanVsOtherAiToolsEn }} />} />
            <Route path="/en/blog/How-to-Use-ChatGPT-for-Perfect-Resume-Keyword-Optimization" element={<div dangerouslySetInnerHTML={{ __html: ChatGptResumeKeywordOptimizationEn }} />} />
            <Route path="/en/blog/Optimizing-Your-LinkedIn-Profile-and-Resume-with-ChatGPT" element={<div dangerouslySetInnerHTML={{ __html: OptimizingLinkedInWithChatGptEn }} />} />
            <Route path="/en/blog/Complete-Guide-to-ChatGPT-Resume-Optimization-From-Keywords-to-Cover-Letters" element={<div dangerouslySetInnerHTML={{ __html: CompleteGuideChatGptResumeOptimizationEn }} />} />
            <Route path="/en/blog/Top-7-Free-Resume-Analyzer-Tools-to-Score-Your-CV-in-Seconds" element={<div dangerouslySetInnerHTML={{ __html: Top7FreeResumeAnalyzersEn }} />} />
            <Route path="/en/blog/DIY-Resume-SEO-How-to-Manually-Optimize-for-Applicant-Tracking-Systems-ATS" element={<div dangerouslySetInnerHTML={{ __html: DiyResumeSeoForAtsEn }} />} />
            <Route path="/en/blog/choosing-the-best-resume-builder" element={<div dangerouslySetInnerHTML={{ __html: ChoosingTheBestResumeBuilderEn }} />} />
            <Route path="/en/blog/how-to-write-a-resume-cover-letter" element={<div dangerouslySetInnerHTML={{ __html: HowToWriteAResumeCoverLetterEn }} />} />
            <Route path="/en/blog/how-to-update-and-rewrite-your-resume" element={<div dangerouslySetInnerHTML={{ __html: HowToUpdateAndRewriteYourResumeEn }} />} />
            <Route path="/en/blog/free-resume-templates-and-examples" element={<div dangerouslySetInnerHTML={{ __html: FreeResumeTemplatesAndExamplesEn }} />} />
            <Route path="/en/blog/effective-strategies-how-to-update-and-rewrite-your-resume" element={<div dangerouslySetInnerHTML={{ __html: UpdateAndRewriteResumeStrategiesEn }} />} />
            <Route path="/en/blog/find-the-best-resume-writing-services-near-you" element={<div dangerouslySetInnerHTML={{ __html: FindLocalResumeServicesEn }} />} />
            <Route path="/en/blog/ultimate-diy-guide-to-writing-a-professional-resume" element={<div dangerouslySetInnerHTML={{ __html: UltimateDiyResumeGuideEn }} />} />
            <Route path="/en/blog/why-hire-certified-professional-resume-writers" element={<div dangerouslySetInnerHTML={{ __html: WhyHireCertifiedWritersEn }} />} />
            <Route path="/en/blog/Best-ATS-Resume-Optimization-Tools-(Free-&-Paid)-to-Get-Your-CV-Noticed" element={<div dangerouslySetInnerHTML={{ __html: BestAtsResumeOptimizationToolsEn }} />} />
            <Route path="/en/blog/25-Essential-ATS-Resume-Optimization-Tips-&-Best-Practices-for-Job-Seekers" element={<div dangerouslySetInnerHTML={{ __html: TwentyFiveEssentialAtsResumeOptimizationTipsEn }} />} />
            <Route path="/en/blog/How-to-Tailor-Your-Resume-for-ATS:-Optimizing-Keywords-&-Skills-for-Success" element={<div dangerouslySetInnerHTML={{ __html: HowToTailorYourResumeForAtsEn }} />} />
            <Route path="/en/blog/ATS-Resume-Optimization-in-2025-and-Beyond:-Staying-Ahead-of-Applicant-Tracking-Systems" element={<div dangerouslySetInnerHTML={{ __html: AtsResumeOptimizationIn2025En }} />} />
            <Route path="/en/blog/beyond-two-pages-is-a-3-page-resume-ever-justified" element={<div dangerouslySetInnerHTML={{ __html: beyondTwoPagesEn }} />} />
            <Route path="/en/blog/choosing-the-optimal-resume-format-design-layout-and-readability-tips" element={<div dangerouslySetInnerHTML={{ __html: choosingOptimalResumeFormatEn }} />} />
            <Route path="/en/blog/how-to-create-a-professional-resume-that-gets-noticed" element={<div dangerouslySetInnerHTML={{ __html: howToCreateProfessionalResumeEn }} />} />
            <Route path="/en/blog/how-to-tailor-your-skills-section-on-a-resume-for-maximum-impact" element={<div dangerouslySetInnerHTML={{ __html: howToTailorSkillsSectionEn }} />} />
            <Route path="/en/blog/is-a-1-page-resume-right-for-you-pros-cons-and-when-to-use-it" element={<div dangerouslySetInnerHTML={{ __html: isA1PageResumeRightForYouEn }} />} />
            <Route path="/en/blog/tailored-resume-examples-see-how-to-match-your-skills-to-any-job" element={<div dangerouslySetInnerHTML={{ __html: tailoredResumeExamplesEn }} />} />
            <Route path="/en/blog/the-ultimate-guide-to-optimal-resume-length-when-to-go-short-long-or-just-right" element={<div dangerouslySetInnerHTML={{ __html: ultimateGuideOptimalLengthEn }} />} />
            <Route path="/en/blog/the-ultimate-guide-to-tailoring-your-resume-to-a-job-description" element={<div dangerouslySetInnerHTML={{ __html: ultimateGuideTailoringResumeEn }} />} />
            <Route path="/en/blog/the-ultimate-guide-to-writing-a-perfect-resume-land-your-dream-job" element={<div dangerouslySetInnerHTML={{ __html: ultimateGuideWritingPerfectResumeEn }} />} />
            <Route path="/en/blog/what-makes-an-effective-resume-key-strategies-for-impact" element={<div dangerouslySetInnerHTML={{ __html: whatMakesEffectiveResumeEn }} />} />
            <Route path="/en/blog/when-to-use-a-2-page-resume-maximizing-impact-without-overdoing-it" element={<div dangerouslySetInnerHTML={{ __html: whenToUse2PageResumeEn }} />} />
            <Route path="/en/blog/writing-a-professional-cv-vs-resume-a-comprehensive-guide" element={<div dangerouslySetInnerHTML={{ __html: writingCvVsResumeEn }} />} />

            {/* New English blog routes added per user request */}
            <Route path="/en/blog/10-Essential-Resume-Optimization-Tips-to-Improve-Your-Resume-Quality" element={<div dangerouslySetInnerHTML={{ __html: TenEssentialResumeOptimizationTipsEn }} />} />
            <Route path="/en/blog/Boost-Your-Resume-Powerful-Synonyms-for-Optimize-and-Other-Action-Verbs" element={<div dangerouslySetInnerHTML={{ __html: BoostYourResumePowerfulSynonymsEn }} />} />
            <Route path="/en/blog/Choosing-the-Right-Resume-Type-A-Guide-to-Formats-and-Styles" element={<div dangerouslySetInnerHTML={{ __html: ChoosingTheRightResumeTypeEn }} />} />
            <Route path="/en/blog/Crafting-the-Best-Resume-for-Experienced-Professionals-Examples--Strategies" element={<div dangerouslySetInnerHTML={{ __html: CraftingTheBestResumeForExperiencedEn }} />} />
            <Route path="/en/blog/Exploring-Advanced-Resume-Formats-X-Y-Z-5S-and-More" element={<div dangerouslySetInnerHTML={{ __html: ExploringAdvancedResumeFormatsEn }} />} />
            <Route path="/en/blog/How-to-Keyword-Optimize-Your-Resume-to-Beat-ATS-(Applicant-Tracking-Systems)" element={<div dangerouslySetInnerHTML={{ __html: HowToKeywordOptimizeYourResumeEn }} />} />
            <Route path="/en/blog/Sample-Resume-for-a-Tailoring-Job-Key-Skills-and-Experience" element={<div dangerouslySetInnerHTML={{ __html: SampleResumeForTailoringJobEn }} />} />
            <Route path="/en/blog/The-Ultimate-Collection-of-Resume-Examples-for-Every-Industry-and-Career-Level" element={<div dangerouslySetInnerHTML={{ __html: UltimateCollectionOfResumeExamplesEn }} />} />
            <Route path="/en/blog/The-Ultimate-Guide-to-Resume-Optimization-Maximize-Your-Job-Search-Success" element={<div dangerouslySetInnerHTML={{ __html: UltimateGuideToResumeOptimizationEn }} />} />
            <Route path="/en/blog/The-Ultimate-Guide-to-Writing-a-Resume-That-Gets-You-Hired" element={<div dangerouslySetInnerHTML={{ __html: UltimateGuideToWritingResumeThatGetsYouHiredEn }} />} />
            <Route path="/en/blog/Top-5-Resume-Tips-to-Boost-Your-Job-Application-Success" element={<div dangerouslySetInnerHTML={{ __html: Top5ResumeTipsEn }} />} />
            <Route path="/en/blog/Top-IT-Resume-Examples-Stand-Out-in-the-Tech-Industry" element={<div dangerouslySetInnerHTML={{ __html: TopITResumeExamplesEn }} />} />
            <Route path="/en/blog/Unlocking-the-Best-Free-AI-Resume-Optimization-Tools-of-2025" element={<div dangerouslySetInnerHTML={{ __html: UnlockingBestFreeAIResumeToolsEn }} />} />
            <Route path="/en/blog/When-to-Use-a-2-Page-Resume-Examples--Best-Practices" element={<div dangerouslySetInnerHTML={{ __html: WhenToUseA2PageResumeEn }} />} />
            
            <Route path="/en/blog/Boost-Your-Resume-with-Strong-Action-Verbs-and-Sentence-Examples" element={<div dangerouslySetInnerHTML={{ __html: BoostYourResumeWithStrongActionVerbsAndSentenceExamplesEn }} />} />
            <Route path="/en/blog/How-to-Include-Recommendations-on-Your-Resume-(With-Examples)" element={<div dangerouslySetInnerHTML={{ __html: HowToIncludeRecommendationsOnYourResumeWithExamplesEn }} />} />
            <Route path="/en/blog/Powerful-Resume-Summary-Examples-to-Grab-Attention-(Including-Retail)" element={<div dangerouslySetInnerHTML={{ __html: PowerfulResumeSummaryExamplesToGrabAttentionIncludingRetailEn }} />} />
            <Route path="/en/blog/Showcasing-Professional-Development-on-Your-Resume-A-Guide" element={<div dangerouslySetInnerHTML={{ __html: ShowcasingProfessionalDevelopmentOnYourResumeAGuideEn }} />} />
            <Route path="/en/blog/The-Ultimate-Guide-to-Optimizing-Every-Section-of-Your-Resume" element={<div dangerouslySetInnerHTML={{ __html: TheUltimateGuideToOptimizingEverySectionOfYourResumeEn }} />} />


            {/* New routes for Chinese blog pages */}
            <Route path="/zh/blog" element={<div dangerouslySetInnerHTML={{ __html: BlogIndexZh }} />} />
            <Route path="/zh/blog/professional-resume-writing-services" element={<div dangerouslySetInnerHTML={{ __html: ProfessionalResumeWritingServicesZh }} />} />
            <Route path="/zh/blog/10-expert-level-chatgpt-prompts-to-make-your-resume-stand-out-in-2025" element={<div dangerouslySetInnerHTML={{ __html: ExpertChatGptPromptsZh }} />} />
            <Route path="/en/blog/interactive-report-ai-resume-optimization-tools" element={<div dangerouslySetInnerHTML={{ __html: InteractiveReportWrapper }} />} />
            <Route path="/en/blog/the-2025-guide-to-ai-resume-optimizers" element={<div dangerouslySetInnerHTML={{ __html: HeroReportWrapper }} />} />
            <Route path="/blog/The-2025-Guide-to-AI-Resume-Optimizers.html" element={<HeroReportWrapper />} />
            <Route path="/en/blog/The-Ultimate-Guide-to-AI-Resume-Optimization-Tools-Benefits-Strategies-for-2025-CareerBoost-AI" element={<div dangerouslySetInnerHTML={{ __html: ultimateGuideToAIResumeOptimization }} />} />

            {/* 新增：How to Optimize Your Resume Using AI 博客路由 */}
            <Route path="/en/blog/How-to-Optimize-Your-Resume-Using-AI-A-Step-by-Step-Guide" element={<div dangerouslySetInnerHTML={{ __html: HowToOptimizeYourResumeUsingAIEn }} />} />

            {/* 新增：AI Resume Optimization: Tool vs. Expert 博客路由 */}
            <Route path="/en/blog/ai-resume-optimization-tool-vs-expert" element={<div dangerouslySetInnerHTML={{ __html: AiResumeOptimizationToolVsExpertEn }} />} />

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

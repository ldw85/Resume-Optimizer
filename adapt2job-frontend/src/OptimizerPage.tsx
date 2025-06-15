import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Import useSearchParams and useNavigate
import './App.css';
// import AnalysisOutput from './components/AnalysisOutput'; // 将被懒加载
import JobInput from './components/JobInput';
import ResumeInput from './components/ResumeInput';
import useResumeAnalyzer from './hooks/useResumeAnalyzer';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next'; // 引入 useTranslation
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser, // Import useUser hook
} from "@clerk/clerk-react";

import Select from 'react-select'; // 导入 react-select
import { callTavilyAPI } from './services/tavily'; // Import callTavilyAPI
import FeedbackForm from './components/FeedbackForm'; // Import FeedbackForm
// import HowItWorks from './components/HowItWorks'; // 将被懒加载

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// 懒加载组件
const AnalysisOutput = React.lazy(() => {
  return import('./components/AnalysisOutput');
});
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));

// 定义语言选项类型
interface LanguageOption {
  value: string;
  label: string;
}

const OptimizerPage: React.FC = () => { // Use const and specify type
  const [searchParams] = useSearchParams(); // Get search params
  const navigate = useNavigate(); // Get navigate function
  const { t, i18n } = useTranslation(); // Use useTranslation and get i18n instance
  const { user, isSignedIn } = useUser(); // Get user and isSignedIn from Clerk
  const [hasRegisteredInfoBeenSaved, setHasRegisteredInfoBeenSaved] = useState(false); // New state to track if user info has been saved

  const [resumeText, setResumeText] = useState<string>('');
  const [jobDescriptionText, setJobDescriptionText] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState({
    modificationIdeas: '',
    contentExplanation: '',
    modifiedResume: '',
  });
  // const [isResumeInputLoading, setIsResumeInputLoading] = useState(false); // New state for ResumeInput loading - Removed as unused
  // const [isFileParsedSuccessfully, setIsFileParsedSuccessfully] = useState(false); // New state for file parsing status - Removed as unused
  // const [resumeInputActiveMethod, setResumeInputActiveMethod] = useState<'upload' | 'paste'>('upload'); // New state for ResumeInput active method - Removed as unused
  const [isResumeContentAvailable, setIsResumeContentAvailable] = useState(false); // New state for resume content availability

  const [language, setLanguage] = useState(i18n.language); // Initialize language state
  const { analyzeResume } = useResumeAnalyzer(language);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const resumeInputRef = useRef<any>(null); // Change ref type to any or a specific interface

  // Function to handle saving the resume - now triggers the save in ResumeInput
  const handleSaveResume = async () => {
    console.log('handleSaveResume called in OptimizerPage');
    if (resumeInputRef.current && resumeInputRef.current.triggerSaveResume) {
      await resumeInputRef.current.triggerSaveResume();
    }
  };

  // State for JobInput link functionality
  const [activeMethod, setActiveMethod] = useState<'paste' | 'link'>('paste');
  const [jobLink, setJobLink] = useState<string>('');
  const [isLoadingJobFetch, setIsLoadingJobFetch] = useState<boolean>(false);
  const [jobFetchError, setJobFetchError] = useState<string | null>(null);

  // State for feedback form visibility
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);


  // 定义语言选项
  const languageOptions: LanguageOption[] = [
    { value: 'en', label: t('en') },
    { value: 'zh', label: t('zh') },
    { value: 'ja', label: t('ja') },
    { value: 'es', label: t('es') },
    { value: 'de', label: t('de') },
  ];

  // 获取当前选中的语言选项
  const selectedLanguageOption = languageOptions.find(option => option.value === language);

  useEffect(() => {
    const langParam = searchParams.get('lang'); // Get lang parameter from URL
    let targetLanguage = langParam;

    if (!targetLanguage) {
      // If no lang parameter in URL, check localStorage or browser language
      const savedLanguage = localStorage.getItem('i18nextLng');
      if (savedLanguage) {
        targetLanguage = savedLanguage;
      } else {
        targetLanguage = i18n.language || navigator.language;
      }
    }

    // Ensure language code format is correct, e.g., 'en-US' -> 'en'
    const shortLang = targetLanguage.split('-')[0];

    // Switch language if different from current
    if (i18n.language !== shortLang) {
      i18n.changeLanguage(shortLang);
    }

    // Update HTML language tag
    document.documentElement.lang = shortLang;
    setLanguage(shortLang); // Update local language state
  }, [searchParams, i18n]); // Depend on searchParams and i18n

  // Effect to save user info on initial sign-in/registration
  useEffect(() => {
    if (isSignedIn && user && !hasRegisteredInfoBeenSaved) {
      const saveUserInfo = async () => {
        try {
          const response = await fetch(`${BACKEND_URL}/api/user/register-info`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              clerkUserId: user.id,
              email: user.emailAddresses[0]?.emailAddress,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error('Failed to save user info:', errorData.message);
          } else {
            console.log('User info saved successfully or already exists.');
            setHasRegisteredInfoBeenSaved(true); // Mark as saved to prevent re-execution
          }
        } catch (error) {
          console.error('Error calling save user info API:', error);
        }
      };
      saveUserInfo();
    }
  }, [isSignedIn, user, hasRegisteredInfoBeenSaved]); // Dependencies for this effect

  const changeLanguage = (selectedOption: LanguageOption | null) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value);
      // setLanguage(selectedOption.value); // Language state updated by useEffect
    }
  };

  const handleResumeTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeText(event.target.value);
  };

  const handleJobDescriptionTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescriptionText(event.target.value);
  };

  // New handler for content changes from file upload or other sources
  const handleResumeContentChange = (content: string) => {
    setResumeText(content);
  };

  // Handlers for JobInput link functionality
  const handleMethodChange = (method: 'paste' | 'link') => {
    setActiveMethod(method);
    setJobLink('');
    setIsLoadingJobFetch(false);
    setJobFetchError(null);
    if (method === 'paste') {
      setJobDescriptionText(''); // Clear job description when switching to paste
    }
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJobLink(event.target.value);
    setJobFetchError(null); // Clear error on link change
  };

  const handleAnalyze = async () => {
    // console.log('handleAnalyze called.');
    // console.log('Current activeMethod:', activeMethod);
    // console.log('Current jobLink:', jobLink);
    // console.log('Current isOptimizing:', isOptimizing);
    // console.log('Current isLoadingJobFetch:', isLoadingJobFetch);
    // console.log('Current isResumeContentAvailable:', isResumeContentAvailable);
    // console.log('Current jobDescriptionText length:', jobDescriptionText.length);
    // console.log('Current jobDescriptionText is empty:', !jobDescriptionText);

    // Simplified validation for resume input using isResumeContentAvailable
    if (!isResumeContentAvailable) {
      console.log('Resume content not available, returning early.');
      if (resumeInputRef.current) {
        resumeInputRef.current.focus();
        resumeInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        toast.error(t('请先输入或上传您的简历内容'), {
          duration: 3000,
        });
      }
      return;
    }

    if ((!jobDescriptionText && jobDescriptionText.trim() === '') && (!jobLink || jobLink.trim() === '')) {
        console.log('Job description or link is empty, returning early.');
        toast.error(t('请先输入您的职位描述或职位链接'), {
          duration: 3000,
        });
      return;
    }

    setIsOptimizing(true);
    const optimizingToastId = toast(
      () => (
        <span>
          {t('优化简历需要花费几秒时间，请耐心等待')}
        </span>
      ),
      { duration: Infinity } // Set duration to Infinity
    );

    let jobDescriptionToAnalyze = jobDescriptionText;

    // If active method is link, fetch the job description first
    if (activeMethod === 'link') {
      if (!jobLink) {
        setJobFetchError(t('jobInput.linkRequiredError'));
        return;
      }

      setIsLoadingJobFetch(true);
      setJobFetchError(null);

      try {
        const content = await callTavilyAPI(jobLink);
        if (typeof content === 'string') {
          jobDescriptionToAnalyze = content;
          setJobDescriptionText(content); // Update the state with fetched content
          // setJobLink(''); // Decide if you want to clear the link input after fetching
        } else {
          console.error('Tavily API returned non-string content:', content);
          setJobFetchError(t('jobInput.fetchFormatError'));
          setIsLoadingJobFetch(false);
          return; // Stop analysis if fetch fails or returns wrong format
        }
      } catch (err: unknown) {
        console.error('Error fetching job description:', err);
        setJobFetchError(t('jobInput.fetchLinkError'));
        setIsLoadingJobFetch(false);
        return; // Stop analysis if fetch fails
      } finally {
        setIsLoadingJobFetch(false);
        // Optionally switch back to paste view after fetching or on error
        // setActiveMethod('paste');
      }
    }

    if (!jobDescriptionToAnalyze) {
        //console.log('Job description is empty, returning early.');
        toast.error(t('职位链接解析失败，请粘贴职位信息'), {
          duration: 3000,
        });
      return;
    }

    // Trigger saving the resume before analysis
    await handleSaveResume();

    try {
      const geminiResponse = await analyzeResume(resumeText, jobDescriptionToAnalyze);
      setAnalysisResult(geminiResponse);
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        // TODO: 显示错误信息
        toast.error(`优化失败: ${error.message}`, {
          duration: 5000,
        });
      } else {
        toast.error('优化失败: 发生未知错误', {
          duration: 5000,
        });
      }
    } finally {
      toast.dismiss(optimizingToastId);
      setIsOptimizing(false);
    }
  };

  return (
    <div className="w-full optimizer-page-container"> {/* 添加 optimizer-page-container 类 */}
      <Toaster />
      {/* Header */}
      <header className="bg-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between"> {/* 移除 h-48 */}
          {/* Logo */}
          <div className="flex items-center">
            {/* <img src="/resume-icon.svg" alt="Logo" className="h-4 w-4" /> */}
            {/* <span className="ml-2 text-3xl font-bold font-serif"></span> */}
            <h1 className="text-3xl font-bold mb-2"> {t('ResumeOptimizer')} </h1>
          </div>

          {/* Right side: Back Button and Language Switcher */}
          <div className="flex items-center"> {/* New wrapper div */}
            
            {/* Language Switcher */}
            <div className="w-32 ml-4"> {/* Added ml-4 */}
              <Select<LanguageOption>
                value={selectedLanguageOption}
              onChange={changeLanguage}
              options={languageOptions}
              classNamePrefix="react-select" // 用于自定义样式
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? '#a5b4fc' : '#d1d5db', // Tailwind indigo-300 and gray-300
                  boxShadow: state.isFocused ? '0 0 0 1px #a5b4fc' : 'none', // Tailwind ring-indigo-300
                  '&:hover': {
                    borderColor: '#a5b4fc', // Tailwind indigo-300
                  },
                  borderRadius: '0.375rem', // Tailwind rounded-md
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: state.isSelected ? '#6366f1' : state.isFocused ? '#e0e7ff' : 'white', // Tailwind indigo-600, indigo-100, white
                  color: state.isSelected ? 'white' : '#1f2937', // Tailwind white, gray-800
                  '&:active': {
                    backgroundColor: '#4f46e5', // Tailwind indigo-700
                  },
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: '#1f2937', // Tailwind gray-800
                }),
              }}
            />
            </div> {/* Closing tag for w-32 ml-4 div */}
            {/* Back Button */}
            <button
              onClick={() => navigate('/')} // Navigate to home page
              className="px-4 py-2 bg-white text-black text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" // Removed mr-4, added text-sm
            >
              {t('返回首页')} {/* Localize the button text */}
            </button>
            
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
              <div className="clerk-buttons-none">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </header>

      <main className="space-y-8">
        <section className="card">
          <ResumeInput
            value={resumeText}
            onChange={handleResumeTextChange} // Keep this for textarea changes
            onContentChange={handleResumeContentChange} // New prop for content updates
            onLoadingChange={() => {}} // Pass a no-op function as the loading state setter
            onFileParsedChange={() => {}} // Pass a no-op function as the file parsed status setter
            onActiveMethodChange={() => {}} // Pass a no-op function as the active method setter
            onResumeContentAvailableChange={setIsResumeContentAvailable} // Pass the new state setter
            // onSaveResume={handleSaveResume} // Pass the save resume handler - This prop is no longer strictly needed for triggering save from parent, but kept for potential other uses or if ResumeInput still calls it internally. - Removed as unused
            // required={true} // Removed as unused
            ref={resumeInputRef} // Use ref instead of resumeInputRef prop
          />
        </section>

        <section className="card">
          <JobInput
            value={jobDescriptionText}
            onChange={handleJobDescriptionTextChange} // Keep this for textarea changes
            activeMethod={activeMethod}
            onMethodChange={handleMethodChange}
            jobLink={jobLink}
            onLinkChange={handleLinkChange}
            //isLoading={isLoadingJobFetch}
            error={jobFetchError}
            required={true}
          />
        </section>

        <section>
          <button
            onClick={handleAnalyze}
            className="w-full py-3 text-white font-medium rounded-md bg-gray-500 hover:bg-gray-600"
            disabled={isOptimizing || !isResumeContentAvailable || !jobDescriptionText && !jobLink} // Disable button while fetching, optimizing, resume content is not available, or job description is empty
          >
            {isOptimizing ? t('优化中...') : t('优化我的简历')}
          </button>
        </section>

       <Suspense fallback={<>{t('loading')}</>}>
          {(() => {
            return null;
          })()}
          {analysisResult && analysisResult.modificationIdeas && (
            <AnalysisOutput analysisResult={analysisResult} />
          )}
          <HowItWorks />
        </Suspense>

        {/* Feedback Section */}
        {isSignedIn && user?.id && (
          <section className="mt-8 text-center">
            <button
              onClick={() => setShowFeedbackForm(!showFeedbackForm)}
              className="py-2 px-4 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {showFeedbackForm ? t('feedback.hideForm') : t('feedback.provideFeedback')}
            </button>
            {showFeedbackForm && (
              <FeedbackForm
                userId={user.id}
                onFeedbackSubmitted={() => setShowFeedbackForm(false)}
              />
            )}
          </section>
        )}
      </main>

      {/* <footer className="mt-10 pt-4 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-slate-800">常见问题</h2>
      </footer> */}
    </div>
  );
}

export default OptimizerPage; // 重命名导出

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom'; // Import useSearchParams
import './App.css';
// import AnalysisOutput from './components/AnalysisOutput'; // 将被懒加载
import JobInput from './components/JobInput';
import ResumeInput from './components/ResumeInput';
import useResumeAnalyzer from './hooks/useResumeAnalyzer';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next'; // 引入 useTranslation
import i18n from './i18n';
import Select from 'react-select'; // 导入 react-select
import { callTavilyAPI } from './services/tavily'; // Import callTavilyAPI
// import HowItWorks from './components/HowItWorks'; // 将被懒加载

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
  const { t, i18n } = useTranslation(); // Use useTranslation and get i18n instance

  const [resumeText, setResumeText] = useState<string>('');
  const [jobDescriptionText, setJobDescriptionText] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState({
    modificationIdeas: '',
    contentExplanation: '',
    modifiedResume: '',
  });

  const [language, setLanguage] = useState(i18n.language); // Initialize language state
  const { analyzeResume } = useResumeAnalyzer(language);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const resumeInputRef = useRef<HTMLTextAreaElement>(null);

  // State for JobInput link functionality
  const [activeMethod, setActiveMethod] = useState<'paste' | 'link'>('paste');
  const [jobLink, setJobLink] = useState<string>('');
  const [isLoadingJobFetch, setIsLoadingJobFetch] = useState<boolean>(false);
  const [jobFetchError, setJobFetchError] = useState<string | null>(null);


  // 定义语言选项
  const languageOptions: LanguageOption[] = [
    { value: 'en', label: t('English') },
    { value: 'zh', label: t('中文') },
    { value: 'ja', label: t('日本語') }, // 添加日语选项
    { value: 'es', label: t('Español') }, // 添加西班牙语选项
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
    if (!resumeText) {
      if (resumeInputRef.current) {
        resumeInputRef.current.focus();
        resumeInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        toast.error(t('请先输入您的简历内容'), {
          duration: 3000,
        });
      }
      return;
    }

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
        toast.error(t('请先输入您的职位描述'), {
          duration: 3000,
        });
      return;
    }


    setIsOptimizing(true);
    toast(
      () => (
        <span>
          {t('优化简历需要花费几秒时间，请耐心等待')}
        </span>
      ),
      {
        duration: 3000,
      }
    );
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

          {/* Language Switcher */}
          <div className="w-32"> {/* 控制下拉框宽度 */}
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
          </div>
        </div>
      </header>

      <main className="space-y-8">
        <section className="card">
          <ResumeInput
            value={resumeText}
            onChange={handleResumeTextChange} // Keep this for textarea changes
            onContentChange={handleResumeContentChange} // New prop for content updates
            required={true}
            resumeInputRef={resumeInputRef}
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
            isLoading={isLoadingJobFetch}
            error={jobFetchError}
            required={true}
          />
        </section>

        <section>
          <button
            onClick={handleAnalyze}
            className="w-full py-3 text-white font-medium rounded-md"
            disabled={isOptimizing || isLoadingJobFetch} // Disable button while fetching or optimizing
          >
            {isOptimizing || isLoadingJobFetch ? t('优化中...') : t('优化我的简历')}
          </button>
        </section>

       <Suspense fallback={<>{t('加载中...')}</>}>
          {(() => {
            return null;
          })()}
          {analysisResult && analysisResult.modificationIdeas && (
            <AnalysisOutput analysisResult={analysisResult} />
          )}
          <HowItWorks />
        </Suspense>
      </main>

      {/* <footer className="mt-10 pt-4 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-slate-800">常见问题</h2>
      </footer> */}
    </div>
  );
}

export default OptimizerPage; // 重命名导出

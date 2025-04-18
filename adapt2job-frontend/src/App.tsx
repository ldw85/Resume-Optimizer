import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import AnalysisOutput from './components/AnalysisOutput';
import JobInput from './components/JobInput';
import ResumeInput from './components/ResumeInput';
import useResumeAnalyzer from './hooks/useResumeAnalyzer';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next'; // 引入 useTranslation
import i18n from './i18n';
import Select from 'react-select'; // 导入 react-select
import HowItWorks from './components/HowItWorks';

// 定义语言选项类型
interface LanguageOption {
  value: string;
  label: string;
}

function App() {
  const { t } = useTranslation(); // 使用 useTranslation

  const [resumeText, setResumeText] = useState<string>('');
  const [jobDescriptionText, setJobDescriptionText] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState({
    modificationIdeas: '',
    contentExplanation: '',
    modifiedResume: '',
  });

  const [language, setLanguage] = useState(i18n.language); // 初始化语言状态
  console.log('i18n.language:', i18n.language);
  const { analyzeResume } = useResumeAnalyzer(language);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const resumeInputRef = useRef<HTMLTextAreaElement>(null);

  // 定义语言选项
  const languageOptions: LanguageOption[] = [
    { value: 'en', label: t('English') },
    { value: 'zh', label: t('中文') },
  ];

  // 获取当前选中的语言选项
  const selectedLanguageOption = languageOptions.find(option => option.value === language);

  useEffect(() => {
    // 只在组件首次加载时设置默认语言
    const savedLanguage = localStorage.getItem('i18nextLng'); // 获取已保存的语言选择
    if (!savedLanguage) {
      // 只有在没有保存的语言选择时，才使用浏览器语言
      const browserLang = navigator.language.split('-')[0];
      i18n.changeLanguage(browserLang);
      setLanguage(browserLang);
    } else {
      // 使用保存的语言选择
      setLanguage(savedLanguage);
    }
    
    // 更新 HTML 语言标签
    document.documentElement.lang = language;
  }, []); // 移除 language 和 navigator.language 依赖

  const changeLanguage = (selectedOption: LanguageOption | null) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value);
      setLanguage(selectedOption.value);
      console.log('language changed to:', selectedOption.value);
    }
  };

  const handleResumeTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeText(event.target.value);
  };

  const handleJobDescriptionTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescriptionText(event.target.value);
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

    if (!jobDescriptionText) {
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
      const geminiResponse = await analyzeResume(resumeText, jobDescriptionText);
      setAnalysisResult(geminiResponse);
    } catch (error: any) {
      console.error(error);
      // TODO: 显示错误信息
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <div className="w-full">
      <Toaster />
      {/* Header */}
      <header className="bg-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between h-48"> {/* 增加高度 */}
          {/* Logo */}
          <div className="flex items-center">
            {/* <img src="/resume-icon.svg" alt="Logo" className="h-4 w-4" /> */}
            {/* <span className="ml-2 text-3xl font-bold font-serif"></span> */}
            <h1 className="text-3xl font-bold mb-2"> ResumeOptimizer </h1>
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
            onChange={handleResumeTextChange}
            required={true}
            resumeInputRef={resumeInputRef}
          />
        </section>

        <section className="card">
          <JobInput 
            value={jobDescriptionText}
            onChange={handleJobDescriptionTextChange}
            required={true}
          />
        </section>

        <section>
          <button
            onClick={handleAnalyze}
            className="w-full py-3 text-white font-medium rounded-md"
            disabled={isOptimizing}
          >
            {isOptimizing ? t('优化中...') : t('优化我的简历')}
          </button>
        </section>

        {analysisResult && (
          <AnalysisOutput analysisResult={analysisResult} />
        )}
        <HowItWorks />
      </main>

      {/* <footer className="mt-10 pt-4 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-slate-800">常见问题</h2>
      </footer> */}
    </div>
  );
}

export default App;

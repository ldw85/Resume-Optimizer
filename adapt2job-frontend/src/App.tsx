import React, { useState, useRef } from 'react';
import './App.css';
import AnalysisOutput from './components/AnalysisOutput';
import JobInput from './components/JobInput';
import ResumeInput from './components/ResumeInput';
import useGemini from './hooks/useGemini';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [resumeText, setResumeText] = useState<string>('');
  const [jobDescriptionText, setJobDescriptionText] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState({
    modificationIdeas: '',
    contentExplanation: '',
    modifiedResume: '',
  });

  const { analyzeResume } = useGemini();
  const [isOptimizing, setIsOptimizing] = useState(false);
  const resumeInputRef = useRef<HTMLTextAreaElement>(null);

  // 定义一个异步函数，用于处理简历分析
  const handleAnalyze = async () => {
    // 如果简历内容为空
    if (!resumeText) {
      // 如果简历输入框存在
      if (resumeInputRef.current) {
        // 将焦点设置到简历输入框
        resumeInputRef.current.focus();
        // 将简历输入框滚动到视图中
        resumeInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        // 显示错误提示
        toast.error('请先输入您的简历内容', {
          duration: 3000,
        });
      }
      // 结束函数
      return;
    }

    // 如果职位描述为空
    if (!jobDescriptionText) {
      // 显示错误提示
      toast.error('请先输入您的职位描述', {
        duration: 3000,
      });
      // 结束函数
      return;
    }

    // 设置正在优化状态为true
    setIsOptimizing(true);
    toast(
      () => (
        <span>
          优化简历需要花费几秒时间，请耐心等待
        </span>
      ),
      {
        duration: 3000,
      }
    );
    try {
      // 调用analyzeResume函数，传入简历内容和职位描述，获取分析结果
      const geminiResponse = await analyzeResume(resumeText, jobDescriptionText);
      // 设置分析结果
      setAnalysisResult(geminiResponse);
    } catch (error: any) {
      // 打印错误信息
      console.error(error);
      // TODO: 显示错误信息
    } finally {
      // 设置正在优化状态为false
      setIsOptimizing(false);
    }
  };

  const handleResumeTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeText(event.target.value);
  };

  const handleJobDescriptionTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescriptionText(event.target.value);
  };

  return (
    <div className="w-full">
      <Toaster />
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-slate-800">Adapt2Job</h1>
        <p className="text-lg text-slate-600">根据职位要求优化您的简历</p>
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
            {isOptimizing ? "优化中..." : "优化我的简历"}
          </button>
        </section>

        {analysisResult && (
          <AnalysisOutput analysisResult={analysisResult} />
        )}
      </main>

      {/* <footer className="mt-10 pt-4 border-t border-gray-200">
        <h2 className="text-xl font-semibold text-slate-800">常见问题</h2>
      </footer> */}
    </div>
  );
}

export default App;

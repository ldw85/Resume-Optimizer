import React, { useState } from 'react';
import './App.css';
import AnalysisOutput from './components/AnalysisOutput';
import JobInput from './components/JobInput';
import ResumeInput from './components/ResumeInput';
import useGemini from './hooks/useGemini';
import { Tooltip } from '@material-tailwind/react';

function App() {
  const [resumeText, setResumeText] = useState<string>('');
  const [jobDescriptionText, setJobDescriptionText] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState({
    modificationIdeas: '',
    contentExplanation: '',
    modifiedResume: '',
  });

  const { analyzeResume, loading, error } = useGemini();
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleAnalyze = async () => {
    setIsOptimizing(true);
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

  const handleResumeTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeText(event.target.value);
  };

  const handleJobDescriptionTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescriptionText(event.target.value);
  };

  return (
    <div className="w-full">
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
          <Tooltip content="优化简历需要花费几秒时间，请耐心等待">
            <button
              onClick={handleAnalyze}
              className="w-full py-3 text-white font-medium rounded-md"
              disabled={isOptimizing}
            >
              {isOptimizing ? "优化中..." : "优化我的简历"}
            </button>
          </Tooltip>
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

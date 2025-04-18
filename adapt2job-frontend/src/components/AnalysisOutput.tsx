import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useTranslation } from 'react-i18next';

interface AnalysisOutputProps {
  analysisResult: {
    modificationIdeas: string;
    contentExplanation: string;
    modifiedResume: string;
  } | null; // 允许 analysisResult 为 null
}

const AnalysisOutput: React.FC<AnalysisOutputProps> = ({ analysisResult }) => {
  const [modificationIdeas, setModificationIdeas] = useState('');
  const [contentExplanation, setContentExplanation] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    if (analysisResult) {
      if (analysisResult.modificationIdeas) {
        try {
          setModificationIdeas(analysisResult.modificationIdeas);
        } catch (e) {
          console.error("Failed to parse modificationIdeas", e);
          setModificationIdeas(analysisResult.modificationIdeas);
        }
      }

      if (analysisResult.contentExplanation) {
        try {
          setContentExplanation(analysisResult.contentExplanation);
        } catch (e) {
          console.error("Failed to parse contentExplanation", e);
          setContentExplanation(analysisResult.contentExplanation);
        }
      }
    }
  }, [analysisResult]);

  if (!analysisResult) {
    return <section className="card rounded-lg shadow-md bg-white">
             <h2 className="text-2xl font-bold mb-4 text-center">{t('分析结果')}</h2>
             <p>No analysis result to display.</p>
           </section>;
  }

  return (
    <section className="card rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">{t('分析结果')}</h2>
      <div className="mb-4 text-left bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-2">{t('修改思路')}</h3>
        <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: modificationIdeas }} />
      </div>
      <div className="mb-4 text-left bg-gray-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-2">{t('修改内容说明')}</h3>
        
          <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: contentExplanation }} />
      
      </div>
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl text-left font-semibold mb-2 flex items-center justify-between">
          {t('修改后的完整简历')}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const element = document.getElementById('modifiedResumeContent');
              if (element) {
                html2canvas(element as HTMLElement).then((canvas) => {
                  const pdf = new jsPDF();
                  const imgData = canvas.toDataURL('image/png');
                  const imgProps = pdf.getImageProperties(imgData);
                  const pdfWidth = pdf.internal.pageSize.getWidth();
                  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                  pdf.save('modified-resume.pdf');
                });
              }
            }}
          >
            {t('下载PDF')}
          </button>
        </h3>
        <div id="modifiedResumeContent" className="text-gray-800 text-left" dangerouslySetInnerHTML={{ __html: analysisResult.modifiedResume }} />
      </div>
    </section>
  );
};

export default AnalysisOutput;

import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface AnalysisOutputProps {
  analysisResult: {
    modificationIdeas: string;
    contentExplanation: string;
    modifiedResume: string;
  };
}

const AnalysisOutput: React.FC<AnalysisOutputProps> = ({ analysisResult }) => {
  let modificationIdeas = '';
  try {
    modificationIdeas = JSON.parse(analysisResult.modificationIdeas);
  } catch (e) {
    modificationIdeas = analysisResult.modificationIdeas;
  }

  let contentExplanation = '';
  try {
    contentExplanation = JSON.parse(analysisResult.contentExplanation);
  } catch (e) {
    contentExplanation = analysisResult.contentExplanation
  }

  return (
    <section className="card rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 te xt-center">分析结果</h2>
      <div className="mb-4 text-left bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-2">修改思路</h3>
        <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: modificationIdeas }} />
      </div>
      <div className="mb-4 text-left bg-gray-100 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-2">修改内容说明</h3>
        
          <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: contentExplanation }} />
      
      </div>
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl text-left font-semibold mb-2 flex items-center justify-between">
          修改后的完整简历
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
            下载PDF
          </button>
        </h3>
        <div id="modifiedResumeContent" className="text-gray-800 text-left" dangerouslySetInnerHTML={{ __html: analysisResult.modifiedResume }} />
      </div>
    </section>
  );
};

export default AnalysisOutput;

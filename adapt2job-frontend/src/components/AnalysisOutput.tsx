import React, { useState, useEffect } from 'react';
// @ts-ignore
import html2pdf from 'html2pdf.js';
// import jsPDF from 'jspdf'; // 将被动态导入
// import html2canvas from 'html2canvas'; // 将被动态导入
import { useTranslation } from 'react-i18next';

interface AnalysisOutputProps {
  analysisResult: {
    modificationIdeas: string;
    contentExplanation: string;
    modifiedResume: string;
  } | null; // 允许 analysisResult 为 null
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AnalysisOutput: React.FC<AnalysisOutputProps> = ({ analysisResult }) => {
  const [modificationIdeas, setModificationIdeas] = useState('');
  const [contentExplanation, setContentExplanation] = useState('');
  const { t } = useTranslation();

  const sanitizeHtmlForPdf = (html: string) => {
    // Replace oklch() with a fallback color. This is a simple regex and might not cover all edge cases.
    // A more robust solution would involve a proper CSS parser, but this should handle most cases.
    return html.replace(/oklch\([^)]+\)/g, '#888888'); // Fallback to a gray color
  };

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
             <p>{t('No analysis result to display.')}</p>
           </section>;
  }

  return (
    <section className="card rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">{t('分析结果')}</h2>
      <div className="mb-4 text-left bg-gray-50 p-4 rounded-md">
        {/* <h3 className="text-xl font-semibold mb-2">{t('修改思路')}</h3> */}
        <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: modificationIdeas || '' }} />
      </div>
      <div className="mb-4 text-left bg-gray-100 p-4 rounded-md">
        {/* <h3 className="text-xl font-semibold mb-2">{t('修改内容说明')}</h3> */}
        
          <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: contentExplanation || '' }} />
      
      </div>
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          {t('修改后的完整简历')}
          <div> {/* Add a div to group buttons for right alignment */}
            <button
              className="small-button mr-4"
              onClick={async () => {
                const modifiedResumeHtml = analysisResult?.modifiedResume;
                if (!modifiedResumeHtml) {
                  alert(t('没有简历内容可供下载。'));
                  return;
                }
                // 创建一个临时div用于渲染HTML
                const elementToExport = document.createElement('div');
                // `onclone` 回调是更可靠的处理方式，因此这里不再需要 sanitizeHtmlForPdf
                elementToExport.innerHTML = modifiedResumeHtml;
                // 使用 html2pdf.js 生成PDF
                await html2pdf()
                  .set({
                    margin: 0.5,
                    filename: 'modified-resume.pdf',
                    html2canvas: {
                      scale: 2,
                      onclone: (doc: Document) => {
                        // onclone 回调会在克隆的文档渲染前执行
                        // 让我们能修改 html2canvas 不支持的样式
                        // 错误信息指向 `parseBackgroundColor`, 所以我们主要处理这个属性
                        doc.body.querySelectorAll('*').forEach((node: Element) => {
                          if (window.getComputedStyle(node).getPropertyValue('background-color').includes('oklch')) {
                            (node as HTMLElement).style.setProperty('background-color', '#f9fafb', 'important'); // 对应 tailwind gray-50 的安全备用色
                          }
                        });
                      }
                    },
                    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
                  })
                  .from(elementToExport)
                  .save();
              }}
            >
              {t('下载PDF')}
            </button>
            <button
              className="small-button"
              onClick={async () => {
                const modifiedResumeHtml = analysisResult?.modifiedResume;
                if (!modifiedResumeHtml) {
                  alert(t('没有简历内容可供下载。'));
                  return;
                }

                try {
                  const response = await fetch(`${BACKEND_URL}/api/download/docx`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ htmlContent: modifiedResumeHtml }),
                  });

                  if (response.ok) {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'modified-resume.docx';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    window.URL.revokeObjectURL(url);
                  } else {
                    const errorText = await response.text();
                    console.error('Error downloading DOCX:', response.status, errorText);
                    alert(t('下载DOCX失败，请稍后再试。'));
                  }
                } catch (error) {
                  console.error('Error in DOCX download fetch:', error);
                  alert(t('下载DOCX失败，请检查网络连接。'));
                }
              }}
            >
              {t('下载DOCX')}
            </button>
          </div>
        </h3>
        <div id="modifiedResumeContent" className="text-gray-800 text-left" dangerouslySetInnerHTML={{ __html: sanitizeHtmlForPdf(analysisResult.modifiedResume || '') }} />
      </div>
    </section>
  );
};

export default AnalysisOutput;

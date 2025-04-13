import React from 'react';

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
        {Array.isArray(contentExplanation) ? (
          <ul className="list-disc pl-5">
            {contentExplanation.map((item: any, index: number) => (
              <li key={index} className="mb-2">
                <p className="font-semibold">
                  Section: {item.section}
                </p>
                <p>
                  <span className="text-green-500">Original:</span> {item.original}
                </p>
                <p>
                  <span className="text-purple-500">Modified:</span> {item.modified}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: contentExplanation }} />
        )}
      </div>
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="text-xl text-left font-semibold mb-2">修改后的完整简历</h3>
        <div className="text-gray-800 text-left" dangerouslySetInnerHTML={{ __html: analysisResult.modifiedResume }} />
      </div>
    </section>
  );
};

export default AnalysisOutput;

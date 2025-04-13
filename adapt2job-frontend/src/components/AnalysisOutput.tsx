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
    <section className="card">
      <h2 className="text-2xl font-bold mb-4 text-center">分析结果</h2>
      <div className="mb-4 text-left">
        <h3 className="text-xl font-semibold mb-2">修改思路</h3>
        <p className="text-gray-700">{modificationIdeas}</p>
      </div>
      <div className="mb-4 text-left">
        <h3 className="text-xl font-semibold mb-2">修改内容说明</h3>
        {Array.isArray(contentExplanation) ? (
          <ul className="list-disc pl-5">
            {contentExplanation.map((item: any, index: number) => (
              <li key={index} className="mb-2">
                <p className="font-semibold">
                  <span className="text-blue-500">Section:</span> {item.section}
                </p>
                <p>
                  <span className="text-green-500">Original:</span> {item.original}
                </p>
                <p>
                  <span className="text-purple-500">Modified:</span> {item.modified}
                </p>
                <p>
                  <span className="text-red-500">Reason:</span> {item.reason}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">{contentExplanation}</p>
        )}
      </div>
      <div className="">
        <h3 className="text-xl text-left font-semibold mb-2">修改后的完整简历</h3>
        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: analysisResult.modifiedResume }} />
      </div>
    </section>
  );
};

export default AnalysisOutput;

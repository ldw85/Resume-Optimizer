import React from 'react';

const UsageInstructions = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">How to Effectively Use ResumeOptimizer.click</h1>

      <section className="mb-10 p-6 bg-indigo-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Project Introduction: Your AI-Powered Job Search Advantage</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Welcome to ResumeOptimizer.click, your free, ad-free, and powerful AI resume optimization tool. In today's competitive job market, 98% of Fortune 500 companies use Applicant Tracking Systems (ATS) to filter resumes. This means your resume is often rejected by a machine before a human ever sees it. Our mission is to level the playing field for ambitious job seekers like you.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mt-4">
          We leverage cutting-edge AI models like <strong>Gemini 2.5 and DeepSeek R1</strong> to perform a deep analysis of your resume and the target job description. This isn't just basic keyword matching; our AI intelligently identifies and supplements crucial, job-related keywords, refines your experience with powerful language, and standardizes your formatting. The result? A highly optimized resume designed to sail through any ATS screening, dramatically increasing your chances of landing in the "yes" pile and securing the interviews you deserve.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Step-by-Step Usage Instructions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">1. Input Your Resume</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our platform offers maximum convenience for inputting your resume. You have two flexible options:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li><strong>Upload a File:</strong> Easily upload your resume in various formats, including PDF, Word (.docx), JPG, or PNG. This is ideal if your resume is already in a document format.</li>
              <li><strong>Paste Resume Text:</strong> If your resume content is readily available as plain text (e.g., from an email or a document you can copy from), simply paste it directly into the provided text area.</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Benefit:</strong> Save time and eliminate hassle. No matter where your resume lives, you can import it instantly and effortlessly, streamlining your initial setup. For logged-in users, you can also save and manage multiple versions of your resume for efficient mass applications.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-indigo-700">2. Input the Job Description</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This is a crucial step for our AI to understand the target role. We provide flexible methods for you to input the job description:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li><strong>Paste Job Description:</strong> Directly paste the text content of the job description into the dedicated text area. This is suitable when the job description is available as plain text from any source.</li>
              <li><strong>Provide Job Link:</strong> Enter the URL of the online job posting. Our application will then attempt to automatically fetch and process the job description content from the provided link.</li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Benefit:</strong> Our AI needs this information to perform its smart keyword matching and content optimization. By providing the job description, you enable the platform to precisely tailor your resume to the specific requirements of the role, ensuring maximum relevance.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">3. Optimize and Download Your Resume</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Once both your resume and the job description are inputted, the magic happens. Our AI will analyze the content and provide clear, actionable suggestions for optimization.
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
          <li><strong>Smart Keyword Matching & Content Optimization:</strong> Our AI compares your resume to the job's core requirements and helps you supplement key skills, refine your experience with powerful language, and standardize your formatting. You can see the changes in a clear, side-by-side comparison, understanding exactly how your resume is being improved.</li>
          <li><strong>Multi-Format Export & Download:</strong> After optimization, with just one click, you can download your new, perfected document. Choose between professional PDF or Word (.docx) formats, both ready for immediate submission to any job portal.</li>
        </ul>
        <p className="text-gray-700 mt-4 leading-relaxed">
          <strong>Benefit:</strong> Optimize your resume with data-driven precision and get application-ready documents instantly. This process transforms your document into a highly optimized tool designed to sail through any ATS screening, dramatically increasing your chances of landing in the "yes" pile.
        </p>
      </section>

      <section className="mb-10 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Seamless Experience: Switching Input Methods & Error Handling</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Users can easily switch between the "Paste Job Description" and "Provide Job Link" methods using intuitive tab buttons, with the active method clearly highlighted for a smooth user experience.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The Job Input section visually indicates when the application is processing a job link (loading state). Relevant error messages are displayed directly within this section if there are issues with fetching or processing the job description, providing immediate and transparent feedback to the user.
        </p>
      </section>

      <section className="p-6 bg-indigo-50 rounded-lg shadow-md text-center">
        <p className="text-indigo-800 text-lg font-medium">
          <i className="fas fa-lightbulb mr-3 text-indigo-600"></i>
          Ready to transform your job search? Start optimizing your resume for free now and unlock your full potential!
        </p>
      </section>
    </div>
  );
};

export default UsageInstructions;

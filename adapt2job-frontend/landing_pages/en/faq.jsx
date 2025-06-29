import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function FAQ() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
        <ol className="mt-10 space-y-8">
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What is ResumeOptimizer.click?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ResumeOptimizer.click is a powerful, end-to-end AI resume writer and optimization tool designed to give job seekers a decisive edge in their job search. It helps you instantly and precisely optimize your resume for any job, dramatically increasing your success rate, all without spending a dime or even signing up. Our platform is 100% free, ad-free, and instantly accessible.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why is optimizing your resume crucial in today's job market?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In today's competitive landscape, 98% of Fortune 500 companies use Applicant Tracking Systems (ATS). These ATS bots are programmed to scan for specific keywords, skills, and formatting. If your resume isn't perfectly aligned with the job description, it's flagged as irrelevant and often rejected before a human ever sees it. Optimizing your resume ensures it speaks directly to these machines, helping you bypass the initial screening hurdle and land in the "yes" pile.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What AI models power ResumeOptimizer.click?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform leverages cutting-edge AI models like <strong>Gemini 2.5 and DeepSeek R1</strong>. This advanced AI performs a deep analysis of your resume and the target job description to intelligently identify and supplement crucial, job-related keywords. It's not just basic keyword stuffing; our AI refines your experience with powerful language and standardizes your formatting for outstanding results.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How does ResumeOptimizer.click help me save time?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Manually tailoring your resume for every single application is incredibly time-consuming and tedious. ResumeOptimizer.click automates this process. You can instantly and precisely optimize your resume for any job, dramatically increasing your success rate. Our multiple input methods (upload file, paste text, paste job link) and multi-format export options (PDF, DOCX) streamline your workflow, allowing you to apply faster and more efficiently.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Can I upload my resume file and input a job description URL?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Yes, absolutely! We offer maximum convenience. You can upload your resume file in various formats (PDF, DOCX, JPG, PNG) or simply paste your resume text. For job descriptions, you can either paste the text directly or provide a job link, and our application will attempt to fetch the content automatically.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why should I use ResumeOptimizer.click instead of just ChatGPT or other generic LLMs?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              While we utilize advanced large language models, ResumeOptimizer.click offers specialized functionalities that generic LLMs cannot provide:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed ml-6 mt-2 space-y-1">
              <li><strong>Targeted Optimization:</strong> We optimize each section (e.g., work experience, education, skills) separately based on accepted resume writing best practices and specifically against the job description's requirements.</li>
              <li><strong>ATS Compatibility:</strong> We provide multiple .docx templates that guarantee compatibility and perform exceptionally well on any job board or Applicant Tracking System (ATS).</li>
              <li><strong>User-Friendly Workflow:</strong> With just a few clicks, you can easily adjust your resume to match any specific target position for rapid optimization, seeing changes in a clear, side-by-side comparison.</li>
              <li><strong>Free and Ad-Free:</strong> Unlike many services that charge for premium features or bombard you with ads, ResumeOptimizer.click provides unrestricted access to superior ATS-beating analysis at zero cost and with zero distractions.</li>
            </ul>
          </li>
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How is ResumeOptimizer.click different from other resume services?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We stand out by offering an end-to-end, truly free resume optimization experience powered by elite AI models. While competitors charge for their best features or hide them behind sign-ups, we provide unrestricted access to superior ATS-beating analysis, multi-resume management (for logged-in users), and flexible import/export options at zero cost and with zero ads. We handle the heavy lifting for you, precisely placing your skills and keywords where they need to be to maximize your match score.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Can I download my optimized resume in different formats?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Yes! Once your resume is perfected, you can download your new document in professional PDF or Word (.docx) formats with just one click. Both formats are ready for immediate submission to any job portal, ensuring your resume always looks its best.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Does ResumeOptimizer.click support multiple languages?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Yes, ResumeOptimizer.click supports multiple languages, including English, Chinese, Japanese, Spanish, and German. You can easily switch the language using the language selector in the navigation bar to suit your needs.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Can I save my resume for future use?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Yes, once you are signed in, you can save frequently used resumes and manage multiple versions. This eliminates the need to upload or paste them each time, making it incredibly efficient for applying to different roles.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How can I provide feedback?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Signed-in users can submit text-based feedback directly through the platform. Your valuable feedback is used for internal service improvement, helping us continuously enhance ResumeOptimizer.click for all users.
            </p>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

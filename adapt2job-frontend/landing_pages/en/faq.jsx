import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function FAQ() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '10px', margin: '10px' }}>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Frequently Asked Questions</h1>
        <ol className="mt-6 space-y-4">
          <li>
            <b>What is ResumeOptimizer?</b>
            <p className="mt-2">ResumeOptimizer is a tool designed to help job seekers quickly and effectively adjust their resume content to better match the requirements of specific positions, thereby increasing their job application success rate.</p>
          </li>
          <li>
            <b>Why is optimizing your resume important?</b>
            <p className="mt-2">When you apply online, your resume is often processed by parsing and matching software before it reaches the recruiter. Parsing software extracts key information needed by systems like ATS, while matching software evaluates your qualifications against job requirements. This is why optimizing your resume is crucial—our service effectively aligns your resume with these criteria.</p>
          </li>
          <li>
            <b>Why isn't there an option to generate a PDF?</b>
            <p className="mt-2">We offer options to generate both PDF and DOCX files. After one-click optimization, you can download your modified resume as a PDF or DOCX file. PDF generation is done client-side, while DOCX generation is handled by the backend API to ensure better compatibility and formatting consistency.</p>
          </li>
          <li>
            <b>Why can't I just have ChatGPT optimize my resume?</b>
            <p className="mt-2">While we do use large language models like ChatGPT to enhance your resume, there are several things LLMs cannot do for you.</p>
            <p className="mt-2">First, we optimize each section (e.g., work experience, education, skills, etc.) separately based on accepted resume writing best practices.</p>
            <p className="mt-2">Second, with just a few clicks, you can easily adjust your resume to match any specific target position or job posting for rapid optimization.</p>
            <p className="mt-2">Finally, we provide multiple .docx templates that guarantee compatibility and perform well on any job board or Applicant Tracking System (ATS).</p>
          </li>
          <li>
            <b>How is your service different from other resume services?</b>
            <p className="mt-2">Unlike other services that require complex steps and dashboards, we handle the heavy lifting for you and precisely place your skills and keywords where they need to be to maximize your match score.</p>
          </li>
          <li>
            <b>Does ResumeOptimizer support multiple languages?</b>
            <p className="mt-2">Yes, ResumeOptimizer supports multiple languages (English, Chinese, Japanese, Spanish, German). You can switch the language using the language selector in the navigation bar.</p>
          </li>
          <li>
            <b>Can I upload my resume file?</b>
            <p className="mt-2">Yes, you can upload resume files in multiple formats, or simply paste text content.</p>
          </li>
          <li>
            <b>Can I input a job description URL?</b>
            <p className="mt-2">Yes, you can input a job link, and the application will attempt to fetch the job description content. You can also simply paste text content of the job description.</p>
          </li>
          <li>
            <b>Can I save my resume?</b>
            <p className="mt-2">Once you are signed in, you can save frequently used resumes, eliminating the need to upload or paste them each time.</p>
          </li>
          <li>
            <b>Can I provide feedback?</b>
            <p className="mt-2">Signed-in users can submit text-based feedback. Your feedback is used for internal service improvement.</p>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

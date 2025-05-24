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
            <b>What technologies are used in ResumeOptimizer?</b>
            <p className="mt-2">ResumeOptimizer uses React (v19.0.0), TypeScript (~5.7.2), Tailwind CSS (4.1.3), i18next (25.0.0), and other libraries to provide a user-friendly resume optimization experience.</p>
          </li>
          <li>
            <b>How do I run ResumeOptimizer locally?</b>
            <p className="mt-2">To run ResumeOptimizer locally, follow these steps:</p>
            <ol type="a" className="ml-4 mt-2 space-y-2">
              <li>Install dependencies: <code>npm install</code></li>
              <li>Start the development server: <code>npm run dev</code></li>
              <li>The application will start locally, usually accessible at <code>http://localhost:5173</code></li>
            </ol>
          </li>
          <li>
            <b>Does ResumeOptimizer support multiple languages?</b>
            <p className="mt-2">Yes, ResumeOptimizer supports multiple languages. You can switch the language using the language selector in the navigation bar. The internationalization is managed using i18next.</p>
          </li>
          <li>
            <b>Can I upload my resume file?</b>
            <p className="mt-2">Currently, ResumeOptimizer focuses on text-based resume input. Future versions may include support for uploading resume files in PDF or Word format.</p>
          </li>
          <li>
            <b>Can I input a job description URL?</b>
            <p className="mt-2">Currently, ResumeOptimizer focuses on text-based job description input. Future versions may include support for fetching job descriptions from URLs.</p>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

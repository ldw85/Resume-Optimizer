import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function TermsOfService() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '10px', margin: '10px' }} className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Terms of Service</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to ResumeOptimizer.click. These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing or using ResumeOptimizer.click, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Service</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            ResumeOptimizer.click provides a powerful, end-to-end AI resume writer and optimization tool designed to help job seekers enhance their resumes for specific job applications. Our platform leverages cutting-edge AI models like Gemini 2.5 and DeepSeek R1 to intelligently identify and supplement crucial, job-related keywords, helping your resume pass Applicant Tracking Systems (ATS).
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Our service is <strong>100% free, ad-free, and does not require any sign-ups</strong> to access its core features. We are committed to providing a seamless, cost-free experience focused entirely on crafting an interview-winning resume.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Responsibilities</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed ml-4">
            <li>You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of ResumeOptimizer.click.</li>
            <li>You are responsible for the content you upload, including your resume and job descriptions. Ensure that you have the necessary rights to use and share this content.</li>
            <li>While our AI assists in optimizing your resume, the final responsibility for the content and accuracy of your resume lies with you.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer of Warranties</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            ResumeOptimizer.click is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the service will be uninterrupted, error-free, or completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            In no event shall ResumeOptimizer.click or its affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you have any questions about these Terms, please contact us through the methods provided on our website.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TermsOfService;

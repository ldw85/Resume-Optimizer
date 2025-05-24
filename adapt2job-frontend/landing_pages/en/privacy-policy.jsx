import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
        <p className="mb-4">This Privacy Policy describes how ResumeOptimizer collects, uses, and shares information about you when you use our website.</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p className="mb-4">We collect certain information automatically when you visit our website, including:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Your IP address</li>
            <li>Your browser type and operating system</li>
            <li>The pages you visit on our website</li>
            <li>The links you click on our website</li>
            <li>The date and time of your visit</li>
          </ul>
          <p className="mb-4">We collect this information to help us understand how people use our website and to improve the customer experience. We also use this information for website traffic statistics.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
          <p className="mb-4">We use cookies to store information about your preferences and to personalize your experience on our website. You can disable cookies in your browser settings, but this may affect your ability to use certain features of our website.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Provide you with the services you request</li>
            <li>Improve our website and services</li>
            <li>Personalize your experience on our website</li>
            <li>Communicate with you about our products and services</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">How We Share Your Information</h2>
          <p className="mb-4">We do not share your personal information with third parties, except as follows:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>With service providers who help us operate our website and provide our services</li>
            <li>When required by law</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
          <p className="mb-4">We take reasonable steps to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee the absolute security of your information.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. We will post any changes on our website. Your continued use of our website after we post any changes constitutes your acceptance of the new Privacy Policy.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

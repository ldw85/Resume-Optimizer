import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function ContactUs() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '10px', margin: '10px' }} className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1>Contact Us</h1>
        <p>You can contact us at: <a href="mailto:ldwldw85@gmail.com">ldwldw85@gmail.com</a></p>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;

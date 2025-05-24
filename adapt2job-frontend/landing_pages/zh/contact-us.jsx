import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function ContactUs() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '10px', margin: '10px' }}>
        <h1>联系我们</h1>
        <p>您可以通过以下方式联系我们: <a href="mailto:ldwldw85@gmail.com">ldwldw85@gmail.com</a></p>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;

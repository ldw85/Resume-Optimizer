import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function ContactUs() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '10px', margin: '10px' }}>
        <h1>お問い合わせ</h1>
        <p>お問い合わせはこちらまで: <a href="mailto:ldwldw85@gmail.com">ldwldw85@gmail.com</a></p>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;

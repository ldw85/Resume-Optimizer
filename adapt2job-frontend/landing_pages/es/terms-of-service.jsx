import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function TermsOfService() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '10px', margin: '10px' }} className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1>Términos de Servicio</h1>
        <p>Contenido del marcador de posición para los términos de servicio.</p>
      </main>
      <Footer />
    </div>
  );
}

export default TermsOfService;

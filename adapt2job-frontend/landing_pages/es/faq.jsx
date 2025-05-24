import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function FAQ() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '10px', margin: '10px' }} className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Preguntas Frecuentes</h1>
        <ol className="mt-6 space-y-4">
          <li>
            <b>¿Qué es ResumeOptimizer?</b>
            <p className="mt-2">ResumeOptimizer es una herramienta diseñada para ayudar a los solicitantes de empleo a ajustar de manera rápida y efectiva el contenido de su currículum para que coincida mejor con los requisitos de puestos específicos, lo que aumenta su tasa de éxito en la solicitud de empleo.</p>
          </li>
          <li>
            <b>¿Qué tecnologías se utilizan en ResumeOptimizer?</b>
            <p className="mt-2">ResumeOptimizer utiliza React (v19.0.0), TypeScript (~5.7.2), Tailwind CSS (4.1.3), i18next (25.0.0) y otras bibliotecas para proporcionar una experiencia de optimización de currículum fácil de usar.</p>
          </li>
          <li>
            <b>¿Cómo ejecuto ResumeOptimizer localmente?</b>
            <p className="mt-2">Para ejecutar ResumeOptimizer localmente, sigue estos pasos:</p>
            <ol type="a" className="ml-4 mt-2 space-y-2">
              <li>Instala las dependencias: <code>npm install</code></li>
              <li>Inicia el servidor de desarrollo: <code>npm run dev</code></li>
              <li>La aplicación se iniciará localmente, generalmente accesible en <code>http://localhost:5173</code></li>
            </ol>
          </li>
          <li>
            <b>¿ResumeOptimizer es compatible con varios idiomas?</b>
            <p className="mt-2">Sí, ResumeOptimizer es compatible con varios idiomas. Puedes cambiar el idioma utilizando el selector de idioma en la barra de navegación. La internacionalización se gestiona mediante i18next.</p>
          </li>
          <li>
            <b>¿Puedo subir mi archivo de currículum?</b>
            <p className="mt-2">Actualmente, ResumeOptimizer se centra en la entrada de currículum basada en texto. Las versiones futuras pueden incluir soporte para cargar archivos de currículum en formato PDF o Word.</p>
          </li>
          <li>
            <b>¿Puedo ingresar una URL de descripción de trabajo?</b>
            <p className="mt-2">Actualmente, ResumeOptimizer se centra en la entrada de descripción de trabajo basada en texto. Las versiones futuras pueden incluir soporte para obtener descripciones de trabajo de las URL.</p>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

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
            <b>¿Por qué es importante optimizar tu currículum?</b>
            <p className="mt-2">Cuando postulas en línea, tu currículum a menudo es procesado por software de análisis y coincidencia antes de llegar al reclutador. El software de análisis extrae información clave necesaria para sistemas como ATS, mientras que el software de coincidencia evalúa tus cualificaciones según los requisitos del puesto. Por eso es crucial optimizar tu currículum: nuestro servicio alinea eficazmente tu currículum con estos criterios.</p>
          </li>
          <li>
            <b>¿Por qué no hay una opción para generar un PDF?</b>
            <p className="mt-2">Ofrecemos opciones para generar archivos PDF y DOCX. Después de la optimización con un clic, puedes descargar tu currículum modificado como archivo PDF o DOCX. La generación de PDF se realiza en el lado del cliente, mientras que la generación de DOCX es manejada por la API backend para garantizar una mejor compatibilidad y consistencia de formato.</p>
          </li>
          <li>
            <b>¿Por qué no puedo simplemente hacer que ChatGPT optimice mi currículum?</b>
            <p className="mt-2">Aunque utilizamos modelos de lenguaje grandes como ChatGPT para mejorar tu currículum, hay varias cosas que los LLMs no pueden hacer por ti.</p>
            <p className="mt-2">Primero, optimizamos cada sección (por ejemplo, experiencia laboral, educación, habilidades, etc.) por separado basándonos en las mejores prácticas aceptadas para la redacción de currículums.</p>
            <p className="mt-2">Segundo, con solo unos pocos clics, puedes ajustar fácilmente tu currículum para que coincida con cualquier puesto objetivo específico o publicación de empleo para una optimización rápida.</p>
            <p className="mt-2">Finalmente, proporcionamos múltiples plantillas .docx que garantizan la compatibilidad y funcionan bien en cualquier bolsa de trabajo o sistema de seguimiento de candidatos (ATS).</p>
          </li>
          <li>
            <b>¿En qué se diferencia tu servicio de otros servicios de currículum?</b>
            <p className="mt-2">A diferencia de otros servicios que requieren pasos complejos y paneles de control, nosotros nos encargamos del trabajo pesado por ti y colocamos precisamente tus habilidades y palabras clave donde deben estar para maximizar tu puntuación de coincidencia.</p>
          </li>
          <li>
            <b>¿ResumeOptimizer es compatible con varios idiomas?</b>
            <p className="mt-2">Sí, ResumeOptimizer es compatible con varios idiomas (inglés, chino, japonés, español, alemán). Puedes cambiar el idioma utilizando el selector de idioma en la barra de navegación.</p>
          </li>
          <li>
            <b>¿Puedo subir mi archivo de currículum?</b>
            <p className="mt-2">Sí, puedes subir archivos de currículum en múltiples formatos, o simplemente pegar contenido de texto.</p>
          </li>
          <li>
            <b>¿Puedo ingresar una URL de descripción de trabajo?</b>
            <p className="mt-2">Sí, puedes ingresar un enlace de trabajo, y la aplicación intentará obtener el contenido de la descripción del trabajo. También puedes simplemente pegar contenido de texto de la descripción del trabajo.</p>
          </li>
          <li>
            <b>¿Puedo guardar mi currículum?</b>
            <p className="mt-2">Una vez que hayas iniciado sesión, puedes guardar los currículums utilizados con frecuencia, eliminando la necesidad de subirlos o pegarlos cada vez.</p>
          </li>
          <li>
            <b>¿Puedo proporcionar comentarios?</b>
            <p className="mt-2">Los usuarios que han iniciado sesión pueden enviar comentarios basados en texto. Tus comentarios se utilizan para la mejora interna del servicio.</p>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

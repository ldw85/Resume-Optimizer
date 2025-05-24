import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1 className="text-3xl font-semibold mb-6">Política de Privacidad</h1>
        <p className="mb-4">Esta Política de Privacidad describe cómo ResumeOptimizer recopila, utiliza y comparte información sobre usted cuando utiliza nuestro sitio web.</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Información que Recopilamos</h2>
          <p className="mb-4">Recopilamos cierta información automáticamente cuando visita nuestro sitio web, incluyendo:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Su dirección IP</li>
            <li>Su tipo de navegador y sistema operativo</li>
            <li>Las páginas que visita en nuestro sitio web</li>
            <li>Los enlaces en los que hace clic en nuestro sitio web</li>
            <li>La fecha y hora de su visita</li>
          </ul>
          <p className="mb-4">Recopilamos esta información para ayudarnos a comprender cómo las personas utilizan nuestro sitio web y para mejorar la experiencia del cliente. También utilizamos esta información para estadísticas de tráfico del sitio web.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
          <p className="mb-4">Utilizamos cookies para almacenar información sobre sus preferencias y para personalizar su experiencia en nuestro sitio web. Puede deshabilitar las cookies en la configuración de su navegador, pero esto puede afectar su capacidad para utilizar ciertas funciones de nuestro sitio web.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Cómo Utilizamos Su Información</h2>
          <p className="mb-4">Utilizamos su información para:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Proporcionarle los servicios que solicita</li>
            <li>Mejorar nuestro sitio web y servicios</li>
            <li>Personalizar su experiencia en nuestro sitio web</li>
            <li>Comunicarnos con usted sobre nuestros productos y servicios</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Cómo Compartimos Su Información</h2>
          <p className="mb-4">No compartimos su información personal con terceros, excepto de la siguiente manera:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Con proveedores de servicios que nos ayudan a operar nuestro sitio web y proporcionar nuestros servicios</li>
            <li>Cuando lo exige la ley</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Seguridad de Datos</h2>
          <p className="mb-4">Tomamos medidas razonables para proteger su información contra acceso, uso o divulgación no autorizados. Sin embargo, ningún método de transmisión por Internet, o método de almacenamiento electrónico, es 100% seguro. Por lo tanto, no podemos garantizar la seguridad absoluta de su información.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Cambios a Esta Política de Privacidad</h2>
          <p className="mb-4">Podemos actualizar esta Política de Privacidad de vez en cuando. Publicaremos cualquier cambio en nuestro sitio web. Su uso continuado de nuestro sitio web después de que publiquemos cualquier cambio constituye su aceptación de la nueva Política de Privacidad.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Contáctenos</h2>
          <p className="mb-4">Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

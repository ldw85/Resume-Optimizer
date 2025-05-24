import React from 'react';

const UsageInstructions = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Cómo Usar la Sección de Entrada de Puesto</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introducción del Proyecto</h2>
        <p className="text-lg text-gray-700">
          La herramienta ResumeOptimizer ayuda a los solicitantes de empleo a ajustar de manera rápida y efectiva el contenido de su currículum para que coincida mejor con los requisitos de puestos específicos, aumentando así su tasa de éxito en la solicitud de empleo. Los usuarios pueden ingresar su currículum y la descripción del puesto objetivo, y la aplicación analizará ambos y proporcionará sugerencias de optimización y una versión revisada del currículum.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Funcionalidad de Entrada de Puesto</h2>
        <p className="text-lg text-gray-700 mb-4">
          La aplicación proporciona una sección dedicada para que los usuarios ingresen la descripción del puesto objetivo. Esta sección ofrece flexibilidad al admitir dos métodos principales para proporcionar detalles del puesto:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">1. Pegar Descripción del Puesto</h3>
            <p className="text-gray-700 mb-3">
              Los usuarios pueden pegar directamente el contenido de texto de la descripción del puesto en un área de texto dedicada.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Uso:</strong> Este método es adecuado cuando la descripción del puesto está disponible como texto plano, como de un correo electrónico, documento o copiada directamente de un sitio web.
            </p>
            <p className="text-gray-700">
              <strong>Características:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Se proporciona un área de texto grande para pegar fácilmente descripciones de puestos potencialmente largas.</li>
              <li>Instrucciones claras y un marcador de posición guían al usuario.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">2. Proporcionar Enlace del Puesto</h3>
            <p className="text-gray-700 mb-3">
              Los usuarios pueden proporcionar una URL a la publicación de empleo en línea. La aplicación intentará obtener y procesar la descripción del puesto desde el enlace proporcionado.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Uso:</strong> Este método es conveniente cuando la descripción del puesto está alojada en una página web pública.
            </p>
            <p className="text-gray-700">
              <strong>Características:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Hay un campo de entrada disponible para ingresar la URL del puesto.</li>
              <li>La aplicación indica cuándo está obteniendo activamente la descripción del puesto desde el enlace (estado de carga).</li>
              <li>Se muestran mensajes de error si falla la obtención de la descripción del puesto desde el enlace.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3">Cambio de Métodos de Entrada</h3>
        <p className="text-gray-700">
          Los usuarios pueden cambiar fácilmente entre los métodos "Pegar Descripción del Puesto" y "Proporcionar Enlace del Puesto" utilizando botones de pestaña intuitivos. El método activo se resalta claramente.
        </p>
      </section>

      <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3">Manejo de Carga y Errores</h3>
        <p className="text-gray-700">
          La sección de Entrada de Puesto indica visualmente cuando la aplicación está procesando un enlace de puesto (estado de carga). Se muestran mensajes de error relevantes directamente dentro de esta sección si hay problemas al obtener o procesar la descripción del puesto, proporcionando retroalimentación inmediata al usuario.
        </p>
      </section>
    </div>
  );
};

export default UsageInstructions;

import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function FAQ() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '10px', margin: '10px' }}>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Häufig gestellte Fragen</h1>
        <ol className="mt-6 space-y-4">
          <li>
            <b>Was ist ResumeOptimizer?</b>
            <p className="mt-2">ResumeOptimizer ist ein Tool, das Arbeitssuchenden hilft, ihre Lebenslauf-Inhalte schnell und effektiv an die Anforderungen spezifischer Positionen anzupassen, wodurch die Erfolgsquote ihrer Bewerbungen erhöht wird.</p>
          </li>
          <li>
            <b>Welche Technologien werden in ResumeOptimizer verwendet?</b>
            <p className="mt-2">ResumeOptimizer verwendet React (v19.0.0), TypeScript (~5.7.2), Tailwind CSS (4.1.3), i18next (25.0.0) und andere Bibliotheken, um eine benutzerfreundliche Lebenslaufoptimierung zu ermöglichen.</p>
          </li>
          <li>
            <b>Wie führe ich ResumeOptimizer lokal aus?</b>
            <p className="mt-2">Um ResumeOptimizer lokal auszuführen, befolgen Sie diese Schritte:</p>
            <ol type="a" className="ml-4 mt-2 space-y-2">
              <li>Abhängigkeiten installieren: <code>npm install</code></li>
              <li>Entwicklungsserver starten: <code>npm run dev</code></li>
              <li>Die Anwendung startet lokal, normalerweise erreichbar unter <code>http://localhost:5173</code></li>
            </ol>
          </li>
          <li>
            <b>Unterstützt ResumeOptimizer mehrere Sprachen?</b>
            <p className="mt-2">Ja, ResumeOptimizer unterstützt mehrere Sprachen. Sie können die Sprache über die Sprachauswahl in der Navigationsleiste wechseln. Die Internationalisierung wird mit i18next verwaltet.</p>
          </li>
          <li>
            <b>Kann ich meine Lebenslaufdatei hochladen?</b>
            <p className="mt-2">Derzeit konzentriert sich ResumeOptimizer auf die Texteingabe von Lebensläufen. Zukünftige Versionen könnten die Unterstützung für das Hochladen von Lebenslaufdateien im PDF- oder Word-Format umfassen.</p>
          </li>
          <li>
            <b>Kann ich eine URL zur Stellenbeschreibung eingeben?</b>
            <p className="mt-2">Derzeit konzentriert sich ResumeOptimizer auf die Texteingabe von Stellenbeschreibungen. Zukünftige Versionen könnten die Unterstützung für das Abrufen von Stellenbeschreibungen von URLs umfassen.</p>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

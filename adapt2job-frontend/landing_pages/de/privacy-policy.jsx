import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-700 mt-20 min-h-[500px]">
        <h1 className="text-3xl font-semibold mb-6">Datenschutzerklärung</h1>
        <p className="mb-4">Diese Datenschutzerklärung beschreibt, wie ResumeOptimizer Informationen über Sie sammelt, verwendet und weitergibt, wenn Sie unsere Website nutzen.</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Informationen, die wir sammeln</h2>
          <p className="mb-4">Wir sammeln bestimmte Informationen automatisch, wenn Sie unsere Website besuchen, einschließlich:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Ihre IP-Adresse</li>
            <li>Ihren Browsertyp und Ihr Betriebssystem</li>
            <li>Die Seiten, die Sie auf unserer Website besuchen</li>
            <li>Die Links, die Sie auf unserer Website anklicken</li>
            <li>Datum und Uhrzeit Ihres Besuchs</li>
          </ul>
          <p className="mb-4">Wir sammeln diese Informationen, um zu verstehen, wie Menschen unsere Website nutzen, und um die Kundenerfahrung zu verbessern. Wir verwenden diese Informationen auch für Website-Verkehrsstatistiken.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
          <p className="mb-4">Wir verwenden Cookies, um Informationen über Ihre Präferenzen zu speichern und Ihre Erfahrung auf unserer Website zu personalisieren. Sie können Cookies in Ihren Browsereinstellungen deaktivieren, dies kann jedoch Ihre Fähigkeit beeinträchtigen, bestimmte Funktionen unserer Website zu nutzen.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Wie wir Ihre Informationen verwenden</h2>
          <p className="mb-4">Wir verwenden Ihre Informationen, um:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Ihnen die von Ihnen angeforderten Dienste bereitzustellen</li>
            <li>Unsere Website und Dienste zu verbessern</li>
            <li>Ihre Erfahrung auf unserer Website zu personalisieren</li>
            <li>Mit Ihnen über unsere Produkte und Dienstleistungen zu kommunizieren</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Wie wir Ihre Informationen weitergeben</h2>
          <p className="mb-4">Wir geben Ihre persönlichen Daten nicht an Dritte weiter, außer wie folgt:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Mit Dienstleistern, die uns beim Betrieb unserer Website und der Bereitstellung unserer Dienste unterstützen</li>
            <li>Wenn gesetzlich vorgeschrieben</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Datensicherheit</h2>
          <p className="mb-4">Wir ergreifen angemessene Schritte, um Ihre Informationen vor unbefugtem Zugriff, Verwendung oder Offenlegung zu schützen. Keine Methode der Übertragung über das Internet oder der elektronischen Speicherung ist jedoch 100% sicher. Daher können wir die absolute Sicherheit Ihrer Informationen nicht garantieren.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Änderungen dieser Datenschutzerklärung</h2>
          <p className="mb-4">Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden alle Änderungen auf unserer Website veröffentlichen. Ihre fortgesetzte Nutzung unserer Website nach der Veröffentlichung von Änderungen stellt Ihre Zustimmung zur neuen Datenschutzerklärung dar.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Kontaktieren Sie uns</h2>
          <p className="mb-4">Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

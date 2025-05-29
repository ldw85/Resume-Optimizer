import React from 'react';

const UsageInstructions = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Anleitung zur Nutzung des Stellenanzeigen-Eingabebereichs</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projekteinführung</h2>
        <p className="text-lg text-gray-700">
          Das ResumeOptimizer-Tool hilft Arbeitssuchenden, ihre Lebenslauf-Inhalte schnell und effektiv an die Anforderungen spezifischer Positionen anzupassen, wodurch die Erfolgsquote ihrer Bewerbungen erhöht wird. Benutzer können ihren Lebenslauf und die Beschreibung der Zielposition eingeben, und die Anwendung analysiert beides und bietet Optimierungsvorschläge sowie eine überarbeitete Lebenslaufversion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Funktionalität der Stellenanzeigen-Eingabe</h2>
        <p className="text-lg text-gray-700 mb-4">
          Die Anwendung bietet einen speziellen Bereich, in dem Benutzer die Zielstellenbeschreibung eingeben können. Dieser Bereich bietet Flexibilität, indem er zwei primäre Methoden zur Bereitstellung von Stelleninformationen unterstützt:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">1. Stellenbeschreibung einfügen</h3>
            <p className="text-gray-700 mb-3">
              Benutzer können den Textinhalt der Stellenbeschreibung direkt in ein dafür vorgesehenes Textfeld einfügen.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Verwendung:</strong> Diese Methode eignet sich, wenn die Stellenbeschreibung als einfacher Text vorliegt, z. B. aus einer E-Mail, einem Dokument oder direkt von einer Website kopiert.
            </p>
            <p className="text-gray-700">
              <strong>Funktionen:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Ein großes Textfeld ist für das einfache Einfügen potenziell langer Stellenbeschreibungen vorgesehen.</li>
              <li>Klare Anweisungen und ein Platzhalter leiten den Benutzer.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">2. Stellenlink angeben</h3>
            <p className="text-gray-700 mb-3">
              Benutzer können eine URL zur Online-Stellenanzeige angeben. Die Anwendung versucht dann, die Stellenbeschreibung von dem angegebenen Link abzurufen und zu verarbeiten.
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Verwendung:</strong> Diese Methode ist praktisch, wenn die Stellenbeschreibung auf einer öffentlichen Webseite gehostet wird.
            </p>
            <p className="text-gray-700">
              <strong>Funktionen:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Ein Eingabefeld ist für die Eingabe der Stellen-URL verfügbar.</li>
              <li>Die Anwendung zeigt an, wenn sie die Stellenbeschreibung aktiv vom Link abruft (Ladezustand).</li>
              <li>Fehlermeldungen werden angezeigt, wenn das Abrufen der Stellenbeschreibung vom Link fehlschlägt.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3">Wechseln der Eingabemethoden</h3>
        <p className="text-gray-700">
          Benutzer können einfach zwischen den Methoden "Stellenbeschreibung einfügen" und "Stellenlink angeben" wechseln, indem sie intuitive Tab-Schaltflächen verwenden. Die aktive Methode wird deutlich hervorgehoben.
        </p>
      </section>

      <section className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3">Laden und Fehlerbehandlung</h3>
        <p className="text-gray-700">
          Der Stellenanzeigen-Eingabebereich zeigt visuell an, wenn die Anwendung einen Stellenlink verarbeitet (Ladezustand). Relevante Fehlermeldungen werden direkt in diesem Bereich angezeigt, wenn Probleme beim Abrufen oder Verarbeiten der Stellenbeschreibung auftreten, wodurch dem Benutzer sofortiges Feedback gegeben wird.
        </p>
      </section>
    </div>
  );
};

export default UsageInstructions;

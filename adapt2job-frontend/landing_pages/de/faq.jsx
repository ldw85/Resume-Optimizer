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
            <b>Warum ist die Optimierung Ihres Lebenslaufs wichtig?</b>
            <p className="mt-2">Wenn Sie sich online bewerben, wird Ihr Lebenslauf oft von Parsing- und Matching-Software verarbeitet, bevor er den Personalverantwortlichen erreicht. Parsing-Software extrahiert wichtige Informationen für Systeme wie ATS, während Matching-Software Ihre Qualifikationen anhand der Stellenanforderungen bewertet. Deshalb ist die Optimierung Ihres Lebenslaufs entscheidend – unser Service stellt sicher, dass Ihr Lebenslauf diese Kriterien effektiv erfüllt.</p>
          </li>
          <li>
            <b>Warum gibt es keine Option zur PDF-Generierung?</b>
            <p className="mt-2">Wir bieten Optionen zur Generierung von PDF- und DOCX-Dateien. Nach der Optimierung mit einem Klick können Sie Ihren geänderten Lebenslauf als PDF- oder DOCX-Datei herunterladen. Die PDF-Generierung erfolgt clientseitig, während die DOCX-Generierung von der Backend-API übernommen wird, um eine bessere Kompatibilität und Formatkonsistenz zu gewährleisten.</p>
          </li>
          <li>
            <b>Warum kann ich meinen Lebenslauf nicht einfach von ChatGPT optimieren lassen?</b>
            <p className="mt-2">Obwohl wir große Sprachmodelle wie ChatGPT zur Verbesserung Ihres Lebenslaufs verwenden, gibt es einige Dinge, die LLMs nicht für Sie tun können.</p>
            <p className="mt-2">Erstens optimieren wir jeden Abschnitt (z. B. Berufserfahrung, Ausbildung, Fähigkeiten usw.) separat, basierend auf anerkannten Best Practices für das Verfassen von Lebensläufen.</p>
            <p className="mt-2">Zweitens können Sie mit nur wenigen Klicks Ihren Lebenslauf einfach an jede spezifische Zielposition oder Stellenanzeige anpassen, um eine schnelle Optimierung zu erreichen.</p>
            <p className="mt-2">Schließlich bieten wir verschiedene .docx-Vorlagen an, die die Kompatibilität und gute Leistung auf jeder Jobbörse oder jedem Bewerber-Tracking-System (ATS) gewährleisten.</p>
          </li>
          <li>
            <b>Wie unterscheidet sich Ihr Service von anderen Lebenslauf-Services?</b>
            <p className="mt-2">Im Gegensatz zu anderen Services, die komplexe Schritte und Dashboards erfordern, übernehmen wir die schwere Arbeit für Sie und platzieren Ihre Fähigkeiten und Schlüsselwörter genau dort, wo sie benötigt werden, um Ihre Übereinstimmungsrate zu maximieren.</p>
          </li>
          <li>
            <b>Unterstützt ResumeOptimizer mehrere Sprachen?</b>
            <p className="mt-2">Ja, ResumeOptimizer unterstützt mehrere Sprachen (Englisch, Chinesisch, Japanisch, Spanisch, Deutsch). Sie können die Sprache über die Sprachauswahl in der Navigationsleiste wechseln.</p>
          </li>
          <li>
            <b>Kann ich meine Lebenslaufdatei hochladen?</b>
            <p className="mt-2">Ja, Sie können Lebenslaufdateien in verschiedenen Formaten hochladen oder einfach Textinhalte einfügen.</p>
          </li>
          <li>
            <b>Kann ich eine URL zur Stellenbeschreibung eingeben?</b>
            <p className="mt-2">Ja, Sie können einen Stellenlink eingeben, und die Anwendung wird versuchen, den Inhalt der Stellenbeschreibung abzurufen. Sie können auch einfach Textinhalte der Stellenbeschreibung einfügen.</p>
          </li>
          <li>
            <b>Kann ich meinen Lebenslauf speichern?</b>
            <p className="mt-2">Nachdem Sie sich angemeldet haben, können Sie häufig verwendete Lebensläufe speichern, sodass Sie sie nicht jedes Mal hochladen oder einfügen müssen.</p>
          </li>
          <li>
            <b>Kann ich Feedback geben?</b>
            <p className="mt-2">Angemeldete Benutzer können Text-Feedback einreichen. Ihr Feedback wird zur internen Verbesserung des Dienstes verwendet.</p>
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

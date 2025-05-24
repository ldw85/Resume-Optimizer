import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector'; // Temporarily disable detector

i18n
  .use(HttpApi)
  // .use(LanguageDetector) // Temporarily disable detector
  .use(initReactI18next)
  .init({
    lng: 'zh', // Hardcode language for testing
    fallbackLng: 'en',
    debug: true,
    ns: ['translation'], // Ensure namespace is defined if your JSON files use it
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/{{lng}}.json', // Use standard placeholder
    },
    interpolation: {
      escapeValue: false,
    },
    // detection: { // Temporarily disable detection options
    //   order: ['navigator'],
    //   lookupQuerystring: 'lng',
    //   lookupCookie: 'i18next',
    //   lookupLocalStorage: 'i18nextLng',
    //   caches: ['localStorage', 'cookie'],
    //   excludeCacheFor: ['cimode'],
    // },
  });

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'; // Enable detector

i18n
  .use(HttpApi)
  .use(LanguageDetector) // Enable detector
  .use(initReactI18next)
  .init({
    // lng: 'zh', // Remove hardcoded language
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
    detection: { // Enable detection options
      order: ['localStorage', 'cookie', 'querystring', 'navigator'],
      lookupQuerystring: 'lang', // Use 'lang' as query parameter
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'],
    },
    react: {
      bindI18n: 'languageChanged', // Bind to languageChanged event
      // bindStore: 'added removed', // Remove bindStore as it's causing a TypeScript error
      useSuspense: false, // Disable suspense for easier debugging if needed
    },
  });

export default i18n;

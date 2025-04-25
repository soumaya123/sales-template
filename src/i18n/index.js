import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './translations/translation.en.json';
import translationAR from './translations/translation.ar.json';
import translationFr from './translations/translation.fr.json';

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
  fr: { translation: translationFr },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // fallback/default
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as enTranslations from './locales/en';
import * as arTranslations from './locales/ar';

export const resources = {
  en: {
    ...enTranslations,
  },
  ar: {
    ...arTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar', // Set Arabic as the fallback language
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import zhTranslation from './locales/zh/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  zh: {
    translation: zhTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('preferred-language') || 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    load: 'languageOnly',
    preload: ['zh', 'en'],
    initImmediate: false
  });

export default i18n;

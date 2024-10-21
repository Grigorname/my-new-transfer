import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../language/en/en.json";
import ruTranslation from "../language/ru/ru.json";
import hyTranslation from "../language/hy/hy.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
    hy: {
      translation: hyTranslation,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationVI from "./locales/vi/translation.json";

const resources = {
    en: { translation: translationEN },
    vi: { translation: translationVI },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "vi", // ngôn ngữ mặc định
    fallbackLng: "en", // fallback nếu không tìm thấy
    interpolation: {
        escapeValue: false, // React đã tự escape
    },
});

export default i18n;
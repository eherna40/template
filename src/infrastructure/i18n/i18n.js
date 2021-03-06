import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const resources = {
    en: {
        translation: {
            "screen": "Screen {{ order }}",
            "tab": "Tab {{ order }}",
            "change_language_english": "In english",
            "change_language_french": "In french"
        }
    },
    fr: {
        translation: {
            "screen": "Écran {{ order }}",
            "tab": "Onglet {{ order }}",
            "change_language_english": "En anglais",
            "change_language_french": "En français"
        }
    }
};

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
        
    });


export default i18n;
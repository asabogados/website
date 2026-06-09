
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext.jsx';
import { translations } from '../lib/translations.js';

export function useTranslation() {
  const { language, setLanguage } = useContext(LanguageContext);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value === undefined) {
        return key;
      }
      value = value[k];
    }
    
    return value || key;
  };

  return { t, language, setLanguage };
}

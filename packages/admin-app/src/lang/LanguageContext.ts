import React from 'react';
import languages from './languages';

export const defaultLanguage = languages.en;

export const LanguageContext = React.createContext(defaultLanguage);

export default LanguageContext;

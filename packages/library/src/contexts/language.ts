import React from 'react';

import { supported } from '../lang';

export const defaultLanguage = supported.english;

export const LanguageContext = React.createContext(defaultLanguage);

export default LanguageContext;

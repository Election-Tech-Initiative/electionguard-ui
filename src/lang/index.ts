import { enUS } from '@material-ui/core/locale';

import Language from '../models/language';
import en from './en.json';

export const supported = {
    english: {
        name: 'English',
        locale: 'en',
        messages: en,
        mui: enUS,
    },
};

export const getLanguage = (): Language => {
    const locale = navigator.language;
    switch (locale) {
        case 'en':
            return supported.english;
        default:
            return supported.english;
    }
};

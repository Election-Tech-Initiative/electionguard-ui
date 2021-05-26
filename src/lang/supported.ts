import { enUS } from '@material-ui/core/locale';

import Language from '../models/language';
import EnumDictionary from '../utils/EnumDictionary';
import en from './en.json';
import MessageId from './MessageId';

const Locale = {
    English: 'en',
};

export const supported = {
    english: {
        name: 'English',
        locale: Locale.English,
        messages: en as EnumDictionary<MessageId, string>,
        mui: enUS,
    },
};

export const getLanguage = (): Language => {
    const locale = navigator.language;
    switch (locale) {
        case Locale.English:
            return supported.english;
        default:
            return supported.english;
    }
};

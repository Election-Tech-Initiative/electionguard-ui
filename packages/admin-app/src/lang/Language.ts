import { enUS, Localization } from '@mui/material/locale';

import { EnumDictionary } from '../utils/EnumDictionary';

import Locale from './Locale';

export interface Language {
    name: string;
    locale: Locale;
    messages: { [key: string]: string };
    mui: Localization;
}

/**
 * Get language for locale based on list of supported languages
 * @param languages
 * @returns Language
 */
export const getLanguage = (languages: EnumDictionary<Locale, Language>): Language => {
    const locale = navigator.language;

    if (locale in Locale) {
        return languages[locale as Locale];
    }

    return languages.en;
};

/**
 * Get a dictionary of languages mapped to locales
 * @param messages
 * @returns Dictionary of Languages
 */
export const setupLanguages = (
    messages: EnumDictionary<Locale, { [key: string]: string }>
): EnumDictionary<Locale, Language> => {
    const english = {
        name: 'English',
        locale: Locale.English,
        messages: messages[Locale.English] || {},
        mui: enUS,
    };
    return {
        [Locale.English]: english,
    };
};

export default Language;

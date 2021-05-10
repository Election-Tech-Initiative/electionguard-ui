import React from 'react';
import { IntlProvider } from 'react-intl';

import { LanguageContext } from '../../src/contexts/language';
import { supported } from '../../src/lang';

export const languageGlobals = {
    language: {
        name: 'Language',
        description: 'Change the language',
        defaultValue: supported.english,
        toolbar: {
            icon: 'globe',
            items: [{ title: 'English', value: supported.english }],
        },
    },
};

export default function languageDecorator(Story: any, context: any) {
    const {
        globals: { language },
    } = context;
    return (
        <LanguageContext.Provider value={language}>
            <IntlProvider locale={language.locale} messages={language.messages}>
                <Story />
            </IntlProvider>
        </LanguageContext.Provider>
    );
}

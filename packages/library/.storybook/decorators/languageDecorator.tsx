import React from 'react';
import { IntlProvider } from 'react-intl';

import { LanguageContext } from '../../src/contexts/language';
import { languages } from '../../src/lang';

export const languageGlobals = {
    language: {
        name: 'Language',
        description: 'Change the language',
        defaultValue: languages.en,
        toolbar: {
            icon: 'globe',
            items: [
                {
                    title: languages.en.name,
                    value: languages.en,
                },
            ],
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

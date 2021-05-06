import { render, screen } from '@testing-library/react';
import React from 'react';
import { IntlProvider } from 'react-intl';

import App from './App';
import { ConfigContext, defaultConfig } from './contexts/config';
import { LanguageContext, defaultLanguage } from './contexts/language';

test('renders logo', () => {
    render(
        <ConfigContext.Provider value={defaultConfig}>
            <LanguageContext.Provider value={defaultLanguage}>
                <IntlProvider locale={defaultLanguage.locale} messages={defaultLanguage.messages}>
                    <App />
                </IntlProvider>
            </LanguageContext.Provider>
        </ConfigContext.Provider>
    );
    const logos = screen.getAllByText(/electionguard-logo.svg/i);
    const firstLogo = logos[0];
    expect(firstLogo).toBeInTheDocument();
});

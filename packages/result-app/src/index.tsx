import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { Language, theme } from '@electionguard-ui/library';

import App from './App';
import { LanguageContext, defaultLanguage } from './lang';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <LanguageContext.Provider value={defaultLanguage}>
                <LanguageContext.Consumer>
                    {(language: Language) => (
                        <IntlProvider locale={language.locale} messages={language.messages}>
                            <MuiThemeProvider theme={theme(language.mui)}>
                                <CssBaseline />
                                <App />
                            </MuiThemeProvider>
                        </IntlProvider>
                    )}
                </LanguageContext.Consumer>
            </LanguageContext.Provider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

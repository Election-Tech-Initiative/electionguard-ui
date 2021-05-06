import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import App from './App';
import { ConfigContext, defaultConfig } from './contexts/config';
import { LanguageContext, defaultLanguage } from './contexts/language';
import Language from './models/language';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

ReactDOM.render(
    <React.StrictMode>
        <ConfigContext.Provider value={defaultConfig}>
            <LanguageContext.Provider value={defaultLanguage}>
                {(language: Language) => (
                    <IntlProvider locale={language.locale} messages={language.messages}>
                        <MuiThemeProvider theme={theme(language.mui)}>
                            <CssBaseline />
                            <App />
                        </MuiThemeProvider>
                    </IntlProvider>
                )}
            </LanguageContext.Provider>
        </ConfigContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material';

import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Locale, MessageId, setupLanguages } from './lang';
// import { EnumDictionary } from './utils';
import en from './lang/en.json';

const queryClient = new QueryClient();
// const languages = setupLanguages({ [Locale.English]: en as EnumDictionary<MessageId, string> });
// const defaultLanguage = languages.en;
// const LanguageContext = React.createContext(defaultLanguage);

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <IntlProvider locale="en" messages={en}>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={createTheme()}>
                        <CssBaseline />
                        <App />
                    </ThemeProvider>
                </StyledEngineProvider>
            </IntlProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

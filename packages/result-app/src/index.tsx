import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, MuiThemeProvider, createTheme } from '@material-ui/core';

import App from './App';
import reportWebVitals from './reportWebVitals';
import en from './lang/en.json';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <IntlProvider locale="en" messages={en}>
                <MuiThemeProvider theme={createTheme()}>
                    <CssBaseline />
                    <App />
                </MuiThemeProvider>
            </IntlProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

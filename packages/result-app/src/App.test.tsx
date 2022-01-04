import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IntlProvider } from 'react-intl';
import { createTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import App from './App';
import en from './lang/en.json';

test('renders learn react link', () => {
    const queryClient = new QueryClient();

    render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <IntlProvider locale="en" messages={en}>
                    <MuiThemeProvider theme={createTheme()}>
                        <CssBaseline />
                        <App />
                    </MuiThemeProvider>
                </IntlProvider>
            </QueryClientProvider>
        </React.StrictMode>
    );
});

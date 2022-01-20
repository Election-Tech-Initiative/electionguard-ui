import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IntlProvider } from 'react-intl';
import { createTheme, CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';
import App from './App';
import en from './lang/en.json';

test('renders learn react link', () => {
    const queryClient = new QueryClient();

    render(
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
        </React.StrictMode>
    );
});

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import { AuthenticatedLayout } from './layouts';
import { LoginPage } from './pages';
import useToken from './useToken';

import AuthenticatedRoutes from './routes/AuthenticatedRoutes';
import UnauthenticatedLayout from './layouts/UnauthenticatedLayout';
import theme from './theme';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const App: React.FunctionComponent = () => {
    const { setToken, token } = useToken();

    const getContent = () => {
        const unauthenticated = !token;
        if (unauthenticated) {
            return (
                <UnauthenticatedLayout>
                    <LoginPage setToken={setToken} />
                </UnauthenticatedLayout>
            );
        }

        return (
            <Router>
                <AuthenticatedLayout>
                    <AuthenticatedRoutes />
                </AuthenticatedLayout>
            </Router>
        );
    };

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme()}>{getContent()}</ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;

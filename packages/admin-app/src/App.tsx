import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { AuthenticatedLayout } from './layouts';
import { LoginPage } from './pages';
import useToken from './useToken';

import AuthenticatedRoutes from './routes/AuthenticatedRoutes';
import UnauthenticatedLayout from './layouts/UnauthenticatedLayout';
import theme from './theme';

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

    return <ThemeProvider theme={theme()}>{getContent()}</ThemeProvider>;
};

export default App;

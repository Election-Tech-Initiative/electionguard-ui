import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthenticatedLayout } from './layouts';
import { LoginPage } from './pages';
import useToken from './useToken';

import AuthenticatedRoutes from './routes/AuthenticatedRoutes';
import UnauthenticatedLayout from './layouts/UnauthenticatedLayout';

const App: React.FunctionComponent = () => {
    const { setToken, token } = useToken();

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

export default App;

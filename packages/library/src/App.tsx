import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import MainRoutes from './routes/MainRoutes';

const App: React.FunctionComponent = () => (
    <DefaultLayout>
        <Router>
            <MainRoutes />
        </Router>
    </DefaultLayout>
);

export default App;

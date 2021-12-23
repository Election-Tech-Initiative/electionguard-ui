import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DefaultLayout } from './layouts';

import MainRoutes from './routes/MainRoutes';

const App: React.FunctionComponent = () => (
    <Router>
        <DefaultLayout>
            <MainRoutes />
        </DefaultLayout>
    </Router>
);

export default App;

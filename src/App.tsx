import React from 'react';

import config from './config';
import DefaultLayout from './layouts/DefaultLayout';
import MenuPage from './pages/MenuPage';

const App: React.FunctionComponent = () => (
    <DefaultLayout config={config}>
        <MenuPage />
    </DefaultLayout>
);

export default App;

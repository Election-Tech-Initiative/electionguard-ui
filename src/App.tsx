import React from 'react';

import DefaultLayout from './layouts/DefaultLayout';
import MenuPage from './pages/MenuPage';

const App: React.FunctionComponent = () => (
    <DefaultLayout>
        <MenuPage />
    </DefaultLayout>
);

export default App;

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ElectionListPage from '../pages/ElectionListPage';
import ElectionSetupPage from '../pages/ElectionSetupPage';
import JointKeyListPage from '../pages/JointKeyListPage';
import JointKeySetupPage from '../pages/JointKeySetupPage';
import KeyCeremonyListPage from '../pages/KeyCeremonyListPage';
import MenuPage from '../pages/MenuPage';

/**
 * The routes to display when the user is fully authenticated
 * and able to view the main UI
 */
const MainRoutes: React.FC = () => (
    <Switch>
        <Route path="/" exact>
            <Redirect to="/menu" />
        </Route>
        <Route path="/menu" component={MenuPage} />
        <Route path="/key-ceremony" component={KeyCeremonyListPage} />
        <Route path="/joint-key" component={JointKeyListPage} />
        <Route path="/joint-key-setup" component={JointKeySetupPage} />
        <Route path="/election" component={ElectionListPage} />
        <Route path="/election-setup" component={ElectionSetupPage} />
    </Switch>
);

export default MainRoutes;

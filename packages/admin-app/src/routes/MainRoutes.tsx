import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
    ElectionListPage,
    ElectionSetupPage,
    ElectionKeyPage,
    KeyCeremonyPage,
    KeyListPage,
    KeySetupPage,
    MenuPage,
    TallyListPage,
    TallySetupPage,
    TallyCeremonyPage,
    UploadBallotPage,
    UserManagementPage,
} from '../pages';

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

        <Route path="/election" component={ElectionListPage} />
        <Route path="/election-setup" component={ElectionSetupPage} />
        <Route path="/election/:election-id/key" component={ElectionKeyPage} />
        <Route path="/election/:election-id/upload-ballot" component={UploadBallotPage} />

        <Route path="/key" component={KeyListPage} />
        <Route path="/key-setup" component={KeySetupPage} />
        <Route path="/key/:key-id/ceremony" component={KeyCeremonyPage} />

        <Route path="/tally" component={TallyListPage} />
        <Route path="/tally-setup" component={TallySetupPage} />
        <Route path="/tally/:key-id/ceremony" component={TallyCeremonyPage} />

        <Route path="/manage-users" component={UserManagementPage} />
    </Switch>
);

export default MainRoutes;

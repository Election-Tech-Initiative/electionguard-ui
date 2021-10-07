import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ElectionPage from '../pages/ElectionPage';
import RecordsPage from '../pages/RecordsPage';
import ResultsPage from '../pages/ResultsPage';
import BallotConfirmationPage from '../pages/BallotConfirmationPage';
import SelectElectionPage from '../pages/SelectElectionPage';

const MainRoutes: React.FC = () => (
    <Switch>
        <Route path="/" exact>
            <Redirect to="/menu" />
        </Route>
        <Route path="/menu" component={SelectElectionPage} />
        <Route path="/:election" component={ElectionPage} />
        <Route path="/:election/results" component={ResultsPage} />
        <Route path="/:election/records" component={RecordsPage} />
        <Route path="/:election/:ballot" component={BallotConfirmationPage} />
    </Switch>
);

export default MainRoutes;

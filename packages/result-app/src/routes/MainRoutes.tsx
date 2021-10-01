
import React from "react";
import { Router, Route, Switch,Redirect } from "react-router-dom";


import ElectionPage from '../pages/ElectionPage';
import RecordsPage from '../pages/RecordsPage';
import ResultsPage from '../pages/ResultsPage';
import BallotConfirmationPage from '../pages/BallotConfirmationPage';
import SelectElectionPage from "../pages/SelectElectionPage";

const MainRoutes: React.FC = () => (
    <Switch>
        <Route path="/" exact>
            <Redirect to="/menu" />
        </Route>
        <Route path="/menu" component={SelectElectionPage} />
        <Route path="/key-ceremony" component={ElectionPage} />
        <Route path="/joint-key" component={ResultsPage} />
        <Route path="/joint-key-setup" component={RecordsPage} />
        <Route path="/election" component={BallotConfirmationPage} />
    </Switch>
);


export default MainRoutes;
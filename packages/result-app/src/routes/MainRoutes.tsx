import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ElectionPage from '../pages/ElectionPage';
import RecordsPage from '../pages/RecordsPage';
import ResultsPage from '../pages/ResultsPage';
import BallotConfirmationPage from '../pages/BallotConfirmationPage';
import SelectElectionPage from '../pages/SelectElectionPage';

const MainRoutes: React.FC = () => (
    <Routes>
        <Route path="/">
            <Navigate to="/menu" />
        </Route>
        <Route path="/menu">
            <SelectElectionPage />
        </Route>
        <Route path="/:election">
            <ElectionPage />
        </Route>
        <Route path="/:election/results">
            <ResultsPage />
        </Route>
        <Route path="/:election/records">
            <RecordsPage />
        </Route>
        <Route path="/:election/:ballot">
            <BallotConfirmationPage />
        </Route>
    </Routes>
);

export default MainRoutes;

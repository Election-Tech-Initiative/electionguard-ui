import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ElectionPage from '../pages/ElectionPage';
import RecordsPage from '../pages/RecordsPage';
import ResultsPage from '../pages/ResultsPage';
import BallotConfirmationPage from '../pages/BallotConfirmationPage';
import SelectElectionPage from '../pages/SelectElectionPage';

const MainRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<SelectElectionPage />} />
        <Route path="/:election" element={<ElectionPage />} />
        <Route path="/:election/results" element={<ResultsPage />} />
        <Route path="/:election/records" element={<RecordsPage />} />
        <Route path="/:election/:ballot" element={<BallotConfirmationPage />} />
    </Routes>
);

export default MainRoutes;

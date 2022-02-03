import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

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
import routeIds from './RouteIds';

/**
 * The routes to display when the user is fully authenticated
 * and able to view the main UI
 */
const AuthenticatedRoutes: React.FC = () => (
    <Routes>
        <Route path={routeIds.home} element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<MenuPage />} />

        <Route path={routeIds.electionList} element={<ElectionListPage />} />
        <Route path="/election-setup" element={<ElectionSetupPage />} />
        <Route path="/election/:election-id/key" element={<ElectionKeyPage />} />
        <Route path="/election/:election-id/upload-ballot" element={<UploadBallotPage />} />

        <Route path="/key" element={<KeyListPage />} />
        <Route path="/key-setup" element={<KeySetupPage />} />
        <Route path="/key/:key-id/ceremony" element={<KeyCeremonyPage />} />

        <Route path="/tally" element={<TallyListPage />} />
        <Route path="/tally-setup" element={<TallySetupPage />} />
        <Route path="/tally/:key-id/ceremony" element={<TallyCeremonyPage />} />

        <Route path="/manage-users" element={<UserManagementPage />} />
    </Routes>
);

export default AuthenticatedRoutes;

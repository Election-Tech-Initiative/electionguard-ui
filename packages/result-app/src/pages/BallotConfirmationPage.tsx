import React from 'react';
import { Box } from '@material-ui/core';

const BallotConfirmationPage: React.FC = ({ children }) => (
    <Box height="100vh" display="flex" flexDirection="column">
        {children}
        <h1> Ballot Confirmation Page</h1>
    </Box>
);

export default BallotConfirmationPage;

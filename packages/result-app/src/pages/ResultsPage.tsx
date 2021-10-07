import React from 'react';
import { Box } from '@material-ui/core';

const ResultsPage: React.FC = ({ children }) => (
    <Box height="100vh" display="flex" flexDirection="column">
        {children}
        <h1> Results Page</h1>
    </Box>
);

export default ResultsPage;

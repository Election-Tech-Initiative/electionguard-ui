import React from 'react';
import { Box } from '@material-ui/core';

const RecordsPage: React.FC = ({ children }) => (
    <Box height="100vh" display="flex" flexDirection="column">
        {children}
        <h1> Records Page</h1>
    </Box>
);

export default RecordsPage;

import React from 'react';
import { Box } from '@material-ui/core';

const ElectionPage: React.FC = ({ children }) => (
    <Box height="100vh" display="flex" flexDirection="column">
        {children}
        <h1> Election Page</h1>
    </Box>
);

export default ElectionPage;

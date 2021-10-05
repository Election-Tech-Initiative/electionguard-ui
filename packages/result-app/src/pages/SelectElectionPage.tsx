import React from 'react';
import { Box } from '@material-ui/core';

const SelectElectionPage: React.FC = ({ children }) => (
    <Box height="100vh" display="flex" flexDirection="column">
        {children}
        <h1> Select Election Page</h1>
    </Box>
);

export default SelectElectionPage;

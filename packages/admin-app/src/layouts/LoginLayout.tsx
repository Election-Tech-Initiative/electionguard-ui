import { Box } from '@material-ui/core';
import React from 'react';

import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

export const LoginLayout: React.FC = ({ children }) => (
    <Box height="100vh" display="flex" flexDirection="column">
        <AppBar />
        <Box display="flex" flexDirection="column" flexGrow={1}>
            {children}
        </Box>
        <Footer />
    </Box>
);

export default LoginLayout;

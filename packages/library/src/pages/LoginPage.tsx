import { Box } from '@material-ui/core';
import React from 'react';

import LoginForm from '../components/LoginForm';
import WelcomeHeader from '../components/WelcomeHeader';
import { ReactComponent as ElectionGuardLogo } from '../images/electionguard-logo.svg';

const MenuPage: React.FC = () => (
    <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
    >
        <WelcomeHeader Logo={ElectionGuardLogo} />
        <LoginForm />
    </Box>
);

export default MenuPage;

import { Box } from '@material-ui/core';
import React from 'react';

import { LoginForm, WelcomeHeader } from '@electionguard-ui/library';
import { ReactComponent as ElectionGuardLogo } from '../images/electionguard-logo.svg';

export const LoginPage: React.FC = () => (
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

export default LoginPage;

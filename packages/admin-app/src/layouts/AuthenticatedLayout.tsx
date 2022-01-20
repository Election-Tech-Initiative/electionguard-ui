import { Box, CircularProgress } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
    },
    loader: {
        padding: theme.spacing(5),
    },
}));

export interface DefaultLayoutProps {
    isLoading?: boolean;
}

export const AuthenticatedLayout: React.FC<DefaultLayoutProps> = ({
    children,
    isLoading = false,
}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} height="100vh" display="flex" flexDirection="column">
            <AppBar title="Admin App" loggedIn />
            <Box display="flex" flexDirection="column" flexGrow={1}>
                {isLoading ? (
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        className={classes.loader}
                    >
                        <CircularProgress size={100} />
                    </Box>
                ) : (
                    children
                )}
            </Box>
            <Footer />
        </Box>
    );
};

export default AuthenticatedLayout;

import { Box, CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';

import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Config from '../models/config';

const useStyles = makeStyles((theme) => ({
    loader: {
        padding: theme.spacing(5),
    },
}));

export interface DefaultLayoutProps {
    isLoading?: boolean;
    config: Config;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ config, children, isLoading = false }) => {
    const classes = useStyles();
    return (
        <Box height="100vh" display="flex" flexDirection="column">
            <AppBar title={config.appName} Logo={config.logo} />
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
                    <>{children}</>
                )}
            </Box>
            <Footer />
        </Box>
    );
};

export default DefaultLayout;

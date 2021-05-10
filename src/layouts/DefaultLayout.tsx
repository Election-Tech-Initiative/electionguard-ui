import { Box, CircularProgress, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';

import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { ConfigContext } from '../contexts/config';

const useStyles = makeStyles((theme) => ({
    loader: {
        padding: theme.spacing(5),
    },
}));

export interface DefaultLayoutProps {
    isLoading?: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, isLoading = false }) => {
    const config = useContext(ConfigContext);
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

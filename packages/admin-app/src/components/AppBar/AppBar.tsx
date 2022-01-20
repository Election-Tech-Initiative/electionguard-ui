import { Box, Button, AppBar as MaterialAppBar, Toolbar } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { MessageId } from '../../lang';
import useToken from '../../useToken';
import { ReactComponent as ElectionGuardLogo } from '../../images/electionguard-logo.svg';

export interface AppBarProps {
    title?: string;
    loggedIn?: boolean;
}

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexGrow: 1,
    },
    logo: {
        height: 24,
        width: 150,
        fill: theme.palette.getContrastText(theme.palette.primary.main),
        [theme.breakpoints.up('sm')]: {
            height: 30,
            width: 190,
        },
    },
}));

/**
 * A persistent top App Bar with side drawer and optional additional content.
 */
export const AppBar: React.FunctionComponent<AppBarProps> = ({ title, loggedIn }) => {
    const { setToken } = useToken();
    const classes = useStyles();

    const logoutButton = (
        <Button href="/" color="inherit" onClick={() => setToken(undefined)}>
            <FormattedMessage
                id={MessageId.AuthLogout}
                description="Sign out of application"
                defaultMessage="Sign Out"
            />
        </Button>
    );

    return (
        <MaterialAppBar position="static" title={title}>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.logoContainer}>
                    <ElectionGuardLogo className={classes.logo} />
                </Box>
                {loggedIn ? logoutButton : null}
            </Toolbar>
        </MaterialAppBar>
    );
};

export default AppBar;

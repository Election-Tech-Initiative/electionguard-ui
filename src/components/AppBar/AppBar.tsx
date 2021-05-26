import { Box, Button, AppBar as MaterialAppBar, Toolbar, makeStyles } from '@material-ui/core';
import React, { SVGProps, useState } from 'react';
import { FormattedMessage } from 'react-intl';

export interface AppBarProps {
    title?: string;
    Logo?: React.ComponentType<SVGProps<SVGSVGElement>>;
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
const AppBar: React.FunctionComponent<AppBarProps> = ({ title, Logo, loggedIn = false }) => {
    const [signedIn, setSignIn] = useState(loggedIn);
    const classes = useStyles();
    return (
        <MaterialAppBar position="static" title={title}>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.logoContainer}>
                    {Logo && <Logo className={classes.logo} />}
                </Box>
                {signedIn && (
                    <Button color="inherit" onClick={() => setSignIn(!signedIn)}>
                        <FormattedMessage
                            id="auth.logout"
                            description="Sign out of application"
                            defaultMessage="Sign Out"
                        />
                    </Button>
                )}
            </Toolbar>
        </MaterialAppBar>
    );
};

export default AppBar;

import { Box, Button, AppBar as MaterialAppBar, Toolbar, makeStyles } from '@material-ui/core';
import React, { SVGProps, useState } from 'react';

export interface AppBarProps {
    title?: string;
    Logo: React.ComponentType<SVGProps<SVGSVGElement>>;
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
const AppBar: React.FunctionComponent<AppBarProps> = ({ title, Logo }) => {
    const [signIn, setSignIn] = useState(true);
    const classes = useStyles();
    return (
        <MaterialAppBar position="static" title={title}>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.logoContainer}>
                    <Logo className={classes.logo} />
                </Box>
                <Button color="inherit" onClick={() => setSignIn(!signIn)}>
                    {signIn ? 'Sign Out' : 'Sign In'}
                </Button>
            </Toolbar>
        </MaterialAppBar>
    );
};

export default AppBar;

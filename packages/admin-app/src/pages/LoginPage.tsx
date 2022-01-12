import { Box, Button, Container, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginBottom: theme.spacing(3),
        width: '100%',
    },
    submit: {
        marginTop: theme.spacing(3),
        width: '100%',
    },
}));

export const LoginPage: React.FC = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xs" className={classes.root}>
            <TextField
                id="username"
                label="Username"
                variant="standard"
                className={classes.text}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                id="password"
                label="Password"
                variant="standard"
                className={classes.text}
                type="password"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock />
                        </InputAdornment>
                    ),
                }}
            />
            <Button variant="contained" color="primary" className={classes.submit}>
                Log In
            </Button>
        </Container>
    );
};

export default LoginPage;

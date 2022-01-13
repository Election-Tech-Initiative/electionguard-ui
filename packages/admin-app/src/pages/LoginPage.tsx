import { ApiClientFactory } from '@electionguard/api-client';
import { Button, Container, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';
import React, { useState } from 'react';

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

export interface LoginPageProps {
    setToken: (token: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ setToken }) => {
    const classes = useStyles();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const service = ApiClientFactory.getMediatorApiClient();
        console.log(`logging in with ${username} and ${password}`);
        setToken('[success token]');
    };

    return (
        <Container maxWidth="xs" className={classes.root}>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="username"
                    label="Username"
                    variant="standard"
                    className={classes.text}
                    onChange={(e) => setUserName(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Log In
                </Button>
            </form>
        </Container>
    );
};

export default LoginPage;

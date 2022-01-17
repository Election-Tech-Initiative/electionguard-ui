/* tslint:disable */
/* eslint-disable */

import {
    Body_login_for_access_token_api_v1_auth_login_post,
    AuthClient,
    ApiException,
    UrlGetter,
    ErrorMessage,
} from '@electionguard/api-client';
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
    errorMessage: {
        color: 'red',
        marginBottom: theme.spacing(3),
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
    const [result, setResult] = useState<string>();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const url = UrlGetter.GetUrl();
        const authClient = new AuthClient(url);
        const loginParams = new Body_login_for_access_token_api_v1_auth_login_post();
        loginParams.username = username;
        loginParams.password = password;
        loginParams.grant_type = 'password';
        loginParams.scope = 'admin';
        loginParams.client_id = 'electionguard-default-client-id';
        loginParams.client_secret = 'electionguard-default-client-secret';
        await authClient
            .login(loginParams)
            .then((token) => {
                const tokenJson = JSON.stringify(token);
                setToken(tokenJson);
            })
            .catch((ex) => {
                if (typeof ex === 'string') {
                    setResult(ex);
                } else if (ex instanceof ErrorMessage) {
                    setResult(ex.detail);
                } else {
                    console.error(ex);
                    setResult('An error occurred');
                }
            });
    };

    return (
        <Container maxWidth="xs" className={classes.root}>
            <div className={classes.errorMessage}>{result}</div>
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

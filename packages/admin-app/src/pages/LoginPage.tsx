import {
    Body_login_for_access_token_api_v1_auth_login_post,
    ErrorMessage,
    ClientFactory,
} from '@electionguard/api-client';
import { Token } from '@electionguard/api-client/dist/nswag/clients';
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

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const isErrorMessage = (object: any): object is ErrorMessage => 'detail' in object;

export const LoginPage: React.FC<LoginPageProps> = ({ setToken }) => {
    const classes = useStyles();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState<string>();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const authClient = ClientFactory.GetAuthClient();
        const loginParams = {
            username,
            password,
            grant_type: 'password',
            scope: 'admin',
            client_id: 'electionguard-default-client-id',
            client_secret: 'electionguard-default-client-secret',
        } as Body_login_for_access_token_api_v1_auth_login_post;

        await authClient
            .login(loginParams)
            .then((token: Token) => {
                const tokenJson = JSON.stringify(token);
                setToken(tokenJson);
            })
            .catch((ex: unknown) => {
                if (typeof ex === 'string') {
                    setResult(ex);
                } else if (isErrorMessage(ex)) {
                    setResult(ex.detail);
                } else {
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

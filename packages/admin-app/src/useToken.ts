import { Token } from '@electionguard/api-client';
import { useState } from 'react';

/**
 * A custom hook for an authentication token.  Currently uses session storage, thus token is lost when user
 * closes tab.  To sacrifice security for convenience replace 'sessionStorage' with  'localStorage' and user
 * will not need to log back in after closing tab.
 */
export default function useToken(): {
    setToken: (token?: Token) => void;
    token: Token;
} {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = tokenString ? JSON.parse(tokenString) : undefined;
        return userToken;
    };
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken?: Token) => {
        const tokenString = JSON.stringify(userToken);
        if (userToken) {
            sessionStorage.setItem('token', tokenString);
        } else {
            sessionStorage.removeItem('token');
        }
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token,
    };
}

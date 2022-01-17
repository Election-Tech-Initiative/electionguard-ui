import { useState } from 'react';

/**
 * A custom hook for an authentication token.  Currently uses session storage, thus token is lost when user
 * closes tab.  To sacrifice security for convenience replace 'sessionStorage' with  'localStorage' and user
 * will not need to log back in after closing tab.
 */
export default function useToken(): {
    setToken: (token: string | null) => void;
    token: string | null;
} {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        // const userToken = JSON.parse(tokenString);
        // return userToken?.token;
        return tokenString;
    };
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken: string | null) => {
        // JSON.stringify(userToken) ?
        if (userToken) {
            sessionStorage.setItem('token', userToken);
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
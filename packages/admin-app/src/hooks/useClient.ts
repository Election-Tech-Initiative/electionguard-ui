import {
    AuthClient,
    CeremonyClient,
    ClientFactory,
    KeyClient,
    V1Client,
    Token,
} from '@electionguard/api-client';
import { UserClient } from '@electionguard/api-client/dist/nswag/clients';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import routeIds from '../routes/RouteIds';
import useToken from './useToken';

function onTokenExpired(
    setToken: (token?: Token) => void,
    navigate: NavigateFunction,
    newToken?: Token
) {
    setToken(newToken);
    navigate(routeIds.home);
}

export function useV1Client(): V1Client {
    return ClientFactory.GetV1Client();
}

export function useCeremonyClient(): CeremonyClient {
    return ClientFactory.GetCeremonyClient();
}

export function useAuthClient(): AuthClient {
    return ClientFactory.GetAuthClient();
}

export function useKeyClient(): KeyClient {
    return ClientFactory.GetKeyClient();
}

export function useUserClient(): UserClient {
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    return ClientFactory.GetUserClient(token?.access_token, (newToken?: Token) =>
        onTokenExpired(setToken, navigate, newToken)
    );
}

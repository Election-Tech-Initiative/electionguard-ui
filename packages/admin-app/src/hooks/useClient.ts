import {
    AuthClient,
    CeremonyClient,
    ClientFactory,
    KeyClient,
    V1Client,
    Token,
} from '@electionguard/api-client';
import { UserClient } from '@electionguard/api-client/dist/nswag/clients';
import useToken from './useToken';

function onTokenExpired(setToken: (token?: Token) => void, newToken?: Token) {
    setToken(newToken);
    window.location.reload();
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

    return ClientFactory.GetUserClient(token?.access_token, (newToken?: Token) =>
        onTokenExpired(setToken, newToken)
    );
}

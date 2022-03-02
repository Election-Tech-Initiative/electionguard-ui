import {
    AuthClient,
    CeremonyClient,
    ClientFactory,
    KeyClient,
    V1Client,
    Token,
} from '@electionguard/api-client';
import { BallotClient, UserClient } from '@electionguard/api-client/dist/nswag/clients';
import useToken from './useToken';

function onTokenExpired(setToken: (token?: Token) => void, newToken?: Token) {
    setToken(newToken);
    window.location.reload();
}

export function useV1Client(): V1Client {
    const { token, setToken } = useToken();
    return ClientFactory.GetV1Client(token?.access_token, (newToken?: Token) =>
        onTokenExpired(setToken, newToken)
    );
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

export function useBallotClient(): BallotClient {
    const { token, setToken } = useToken();

    return ClientFactory.GetBallotClient(token?.access_token, (newToken?: Token) =>
        onTokenExpired(setToken, newToken)
    );
}

export function useUserClient(): UserClient {
    const { token, setToken } = useToken();

    return ClientFactory.GetUserClient(token?.access_token, (newToken?: Token) =>
        onTokenExpired(setToken, newToken)
    );
}

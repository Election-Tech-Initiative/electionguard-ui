import {
    AuthClient,
    CeremonyClient,
    ClientFactory,
    KeyClient,
    V1Client,
} from '@electionguard/api-client';

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

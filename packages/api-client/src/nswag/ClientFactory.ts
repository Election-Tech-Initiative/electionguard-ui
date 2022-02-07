import { KeyClient } from '.';
import { AuthClient, CeremonyClient, V1Client } from './clients';

export class ClientFactory {
    private static GetUrl(): string {
        return process.env.REACT_APP_MEDIATOR_SERVICE || '';
    }

    public static GetAuthClient(): AuthClient {
        const url = this.GetUrl();
        return new AuthClient(url);
    }

    public static GetCeremonyClient(): CeremonyClient {
        const url = this.GetUrl();
        return new CeremonyClient(url);
    }

    public static GetV1Client(): V1Client {
        const url = this.GetUrl();
        return new V1Client(url);
    }

    public static GetKeyClient(): KeyClient {
        const url = this.GetUrl();
        return new KeyClient(url);
    }
}

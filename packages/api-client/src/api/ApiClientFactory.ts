import ElectionGuardGuardianApiClient, { ElectionGuardMediatorApiClient } from './Api';
import GuardianApi from './GuardianApi';
import MediatorApi from './MediatorApi';
import MockGuardianApi from './MockGuardianApi';
import MockMediatorApi from './MockMediatorApi';

export class ApiClientFactory {
    private static mediatorClient: ElectionGuardMediatorApiClient;

    private static guardianClient: ElectionGuardGuardianApiClient;

    public static getGuardianApiClient(): ElectionGuardGuardianApiClient {
        if (!ApiClientFactory.guardianClient) {
            ApiClientFactory.guardianClient =
                process.env.REACT_APP_MOCK_ENABLED === 'true'
                    ? new MockGuardianApi()
                    : new GuardianApi();
        }
        return ApiClientFactory.guardianClient;
    }

    public static getMediatorApiClient(): ElectionGuardMediatorApiClient {
        if (!ApiClientFactory.mediatorClient) {
            ApiClientFactory.mediatorClient =
                process.env.REACT_APP_MOCK_ENABLED === 'true'
                    ? new MockMediatorApi()
                    : new MediatorApi();
        }
        return ApiClientFactory.mediatorClient;
    }
}

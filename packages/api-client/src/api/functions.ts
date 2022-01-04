import { ElectionGuardGuardianApiClient, ElectionGuardMediatorApiClient } from './Api';
import GuardianApi from './GuardianApi';
import MediatorApi from './MediatorApi';
import MockGuardianApi from './MockGuardianApi';
import MockMediatorApi from './MockMediatorApi';

export interface UrlHolder {
    url: string;
}

export const filterByTerm = (inputArr: UrlHolder[], searchTerm: string): UrlHolder[] =>
    inputArr.filter((arrayElement) => arrayElement.url.match(searchTerm));

let guardianClient: ElectionGuardGuardianApiClient;

export function getGuardianApiClient(): ElectionGuardGuardianApiClient {
    if (!guardianClient) {
        guardianClient =
            process.env.REACT_APP_MOCK_ENABLED === 'true'
                ? new MockGuardianApi()
                : new GuardianApi();
    }
    return guardianClient;
}

let mediatorClient: ElectionGuardMediatorApiClient;

export function getMediatorApiClient(): ElectionGuardMediatorApiClient {
    if (!mediatorClient) {
        mediatorClient =
            process.env.REACT_APP_MOCK_ENABLED === 'true'
                ? new MockMediatorApi()
                : new MediatorApi();
    }
    return mediatorClient;
}

export default getMediatorApiClient;

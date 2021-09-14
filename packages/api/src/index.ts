import ElectionGuardApiClient from "./Api"
import MockApi from './MockApi';
import ServiceApi from './ServiceApi';

export type { default as ElectionGuardApiClient } from './Api';
export type { default as AssignedGuardian } from './models/assignedGuardian';
export type { BaseJointKey, JointKey } from './models/jointKey';
export type { default as User } from './models/user';
export type { default as ManifestPreview } from './models/manifestPreview';
export { default as TaskStatus } from './models/taskStatus';
export type { KeyCeremony, BackupVerification, KeyCeremonyGuardian } from './models/keyCeremony';
export { KeyCeremonyStatus } from './models/keyCeremony';

export { default as MockApi } from './MockApi';
export { default as ServiceApi } from './ServiceApi';

let data: ElectionGuardApiClient;

export function  getApiClient() : ElectionGuardApiClient {
    if(!data) {
        if (process.env.REACT_APP_MOCK_ENABLED === 'true') {
            data = new MockApi();
        }    
    
        data = new ServiceApi();
    }
    return data;
}


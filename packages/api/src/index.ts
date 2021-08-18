import Api from "./Api"
import MockApi from './MockApi';
import ServiceApi from './ServiceApi';

export type { default as API } from './Api';
export type { default as AssignedGuardian } from './models/assignedGuardian';
export type { BaseJointKey } from './models/jointKey';
export type { default as User } from './models/user';

export { default as MockApi } from './MockApi';
export { default as ServiceApi } from './ServiceApi';

export function  getApi(mock = false) : Api {
    if(mock) return new MockApi();
    
    return new ServiceApi();
}


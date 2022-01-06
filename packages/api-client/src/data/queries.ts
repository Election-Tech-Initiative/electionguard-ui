import { useQuery } from 'react-query';
import ApiClientFactory from '../api/ApiClientFactory';

import { BaseJointKey, JointKey, User, Election, KeyCeremony } from '../models';
import { AsyncResult } from './AsyncResult';
import { QUERY_NAMES } from './query_names';

export function useGetUsersWithGuardianRole(): AsyncResult<User[]> {
    const service = ApiClientFactory.getGuardianApiClient();
    return useQuery(QUERY_NAMES.GUARDIANS, () => service.findGuardians());
}

export function useCreateJointKey(data: BaseJointKey): AsyncResult<boolean> {
    const service = ApiClientFactory.getMediatorApiClient();
    return useQuery(QUERY_NAMES.CREATE_KEY, () => service.postJointKey(data));
}

export function useGetJointKeys(): AsyncResult<JointKey[]> {
    const service = ApiClientFactory.getMediatorApiClient();
    return useQuery(QUERY_NAMES.JOINT_KEYS, () => service.getJointKeys());
}

export function useGetElection(election_id: string): AsyncResult<Election[]> {
    const service = ApiClientFactory.getMediatorApiClient();
    return useQuery(QUERY_NAMES.ELECTIONS, () => service.getElection(election_id));
}

export function useGetKeyCeremonies(): AsyncResult<KeyCeremony[]> {
    const service = ApiClientFactory.getMediatorApiClient();
    return useQuery(QUERY_NAMES.KEY_CEREMONIES, () => service.getKeyCeremonies(''));
}

export default useGetUsersWithGuardianRole;

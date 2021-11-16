import {
    BaseJointKey,
    JointKey,
    User,
    Election,
    KeyCeremony,
    getMediatorApiClient,
    getGuardianApiClient,
} from '@electionguard/api-client';

import { useQuery } from 'react-query';

import { AsyncResult } from './AsyncResult';
import { QUERY_NAMES } from './query_names';

export function useGetUsersWithGuardianRole(): AsyncResult<User[]> {
    const service = getGuardianApiClient();
    return useQuery(QUERY_NAMES.GUARDIANS, () => service.findGuardians());
}

export function useCreateJointKey(data: BaseJointKey): AsyncResult<boolean> {
    const service = getMediatorApiClient();
    return useQuery(QUERY_NAMES.CREATE_KEY, () => service.postJointKey(data));
}

export function useGetJointKeys(): AsyncResult<JointKey[]> {
    const service = getMediatorApiClient();
    return useQuery(QUERY_NAMES.JOINT_KEYS, () => service.getJointKeys());
}

export function useGetElection(election_id: string): AsyncResult<Election[]> {
    const service = getMediatorApiClient();
    return useQuery(QUERY_NAMES.ELECTIONS, () => service.getElection(election_id));
}

export function useGetKeyCeremonies(): AsyncResult<KeyCeremony[]> {
    const service = getMediatorApiClient();
    return useQuery(QUERY_NAMES.KEY_CEREMONIES, () => service.getKeyCeremonies(''));
}

export default useGetUsersWithGuardianRole;

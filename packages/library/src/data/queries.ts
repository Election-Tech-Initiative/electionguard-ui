import {
    BaseJointKey,
    JointKey,
    User,
    MediatorClient,
    Election,
    KeyCeremony,
    getApiClient,
} from '@electionguard-ui/api-client';

import { useQuery } from 'react-query';

import { AsyncResult } from './AsyncResult';
import { QUERY_NAMES } from './query_names';

export function useGetUsersWithGuardianRole(): AsyncResult<User[]> {
    const service = getApiClient();
    return useQuery(QUERY_NAMES.GUARDIANS, () => service.getUsersWithGuardianRole());
}

export function useCreateJointKey(data: BaseJointKey): Promise<boolean> {
    const service = getApiClient();
    return service.createJointKey(data);
}

export function useGetJointKeys(): AsyncResult<JointKey[]> {
    const service = getApiClient();
    return useQuery(QUERY_NAMES.JOINT_KEYS, () => service.getJointKeys());
}

export function useGetElection(election_id: string): AsyncResult<Election[]> {
    const service = new MediatorClient();
    return useQuery(QUERY_NAMES.ELECTIONS, () => service.getElection(election_id));
}

export function useGetKeyCeremonies(): AsyncResult<KeyCeremony[]> {
    const service = new MediatorClient();
    return useQuery(QUERY_NAMES.KEY_CEREMONIES, () => service.getKeyCeremonies(''));
}

export default useGetUsersWithGuardianRole;

import { useQuery } from 'react-query';
import { ApiClientFactory } from '../api/ApiClientFactory';

import { JointKey, Election, KeyCeremonyDeprecated } from '../models';
import { AsyncResult } from './AsyncResult';
import { QUERY_NAMES } from './query_names';

export function useGetJointKeys(): AsyncResult<JointKey[]> {
    const service = ApiClientFactory.getMediatorApiClient();
    return useQuery(QUERY_NAMES.JOINT_KEYS, () => service.getJointKeys());
}

export function useGetElection(election_id: string): AsyncResult<Election[]> {
    const service = ApiClientFactory.getMediatorApiClient();
    return useQuery(QUERY_NAMES.ELECTIONS, () => service.getElection(election_id));
}

export function useGetKeyCeremonies(): AsyncResult<KeyCeremonyDeprecated[]> {
    const service = ApiClientFactory.getMediatorApiClient();
    return useQuery(QUERY_NAMES.KEY_CEREMONIES, () => service.getKeyCeremonies(''));
}

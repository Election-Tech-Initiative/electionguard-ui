/* eslint-disable max-classes-per-file */
import { BaseQueryRequest, BaseResponse } from '../models/base';
import { CiphertextElectionContext } from '../models/election';
import {
    DecryptionShareResponse,
    CiphertextTally,
    CiphertextTallyDecryptionShare,
    CiphertextTallyQueryResponse,
    DecryptionShareRequest,
    DecryptTallyRequest,
    DecryptTallyShareRequest,
    PlaintextTally,
    PlaintextTallyQueryResponse,
} from '../models/tally';
import { get, post } from '../utils/http';

export const decryptShareTally = async (
    election_id: string,
    tally_name: string
): Promise<CiphertextTallyDecryptionShare[] | undefined> => {
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}tally/decrypt-share?election_id=${election_id}&tally_name=${tally_name}`;
    const response = await get<{ resp: DecryptionShareResponse }>(path);
    return response.parsedBody?.resp.shares;
};

export const decryptSharePostTally = async (
    guardian_id: string,
    encrypted_tally: CiphertextTally,
    context: CiphertextElectionContext
): Promise<CiphertextTallyDecryptionShare[] | undefined> => {
    const data: DecryptTallyShareRequest = {
        guardian_id,
        encrypted_tally,
        context,
    };

    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}tally/decrypt-share`;
    const response = await post<{ resp: DecryptionShareResponse }>(path, data);
    return response.parsedBody?.resp.shares;
};

export const getTallyDecrypt = async (
    election_id: string,
    tally_name: string,
    guardian_id: string
): Promise<CiphertextTallyDecryptionShare[] | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}tally/decrypt?election_id=${election_id}&tally_name=${tally_name}&guardian_id=${guardian_id}`;
    const response = await get<{ resp: DecryptionShareResponse }>(path);
    return response.parsedBody?.resp.shares;
};

export const postShareTally = async (
    share: CiphertextTallyDecryptionShare
): Promise<boolean | undefined> => {
    const data: DecryptionShareRequest = {
        share,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}tally/submit-share`;
    const response = await post<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const findTallyDecrypt = async (
    tally_name: string,
    skip: number,
    limit: number
): Promise<CiphertextTallyDecryptionShare[] | undefined> => {
    const data: BaseQueryRequest = {
        filter: {},
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}tally/find?tally_name=${tally_name}&skip=${skip}&limit=${limit}`;
    const response = await post<{ resp: DecryptionShareResponse }>(path, data);
    return response.parsedBody?.resp.shares;
};

export const getTally = async (
    election_id: string,
    tally_name: string
): Promise<CiphertextTally | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}tally?election_id=${election_id}&tally_name=${tally_name}`;
    const response = await get<{ resp: CiphertextTally }>(path);
    return response.parsedBody?.resp;
};

export const postTally = async (
    election_id: string,
    tally_name: string
): Promise<CiphertextTally | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}tally?election_id=${election_id}&tally_name=${tally_name}`;
    const response = await post<{ resp: CiphertextTally }>(path, {});
    return response.parsedBody?.resp;
};

export const findTally = async (
    election_id: string,
    skip: number,
    limit: number,
    filter: any
): Promise<CiphertextTally[] | undefined> => {
    const data: BaseQueryRequest = {
        filter,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}tally/find?election_id=${election_id}skip=${skip}&limit=${limit}`;
    const response = await post<{ resp: CiphertextTallyQueryResponse }>(path, data);
    return response.parsedBody?.resp.tallies;
};

export const decryptTally = async (
    election_id: string,
    tally_name: string,
    restart: boolean
): Promise<PlaintextTally[] | undefined> => {
    const data: DecryptTallyRequest = {
        election_id,
        tally_name,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}tally/decrypt?restart=${restart}`;
    const response = await post<{ resp: PlaintextTallyQueryResponse }>(path, data);
    return response.parsedBody?.resp.tallies;
};

export default decryptShareTally;

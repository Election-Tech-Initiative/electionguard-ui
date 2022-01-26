/* eslint-disable max-classes-per-file */
import { get, post } from '../utils/http';
import {
    ElectionConstants,
    Election,
    ElectionQueryResponse,
    CiphertextElectionContext,
    MakeElectionContextRequest,
    MakeElectionContextResponse,
    ElectionQueryRequest,
} from '../models/election';
import { BaseResponse } from '../models/base';

export const getConstants = async (): Promise<ElectionConstants | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}/api/v1/election/constants`;
    const response = await get<{ data: ElectionConstants }>(path);
    return response.parsedBody?.data;
};

export const getElection = async (election_id: string): Promise<Election[] | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}/api/v1/election?election_id=${election_id}`;
    const response = await get<{ data: ElectionQueryResponse }>(path);
    return response.parsedBody?.data.elections;
};

export const findElection = async (
    filter: any,
    skip: number,
    limit: number
): Promise<Election[] | undefined> => {
    const data: ElectionQueryRequest = {
        filter,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}/api/v1/election/find?skip=${skip}&limit=${limit}`;
    const response = await post<ElectionQueryResponse>(path, data);
    return response.parsedBody?.elections;
};

export const openElection = async (election_id: string): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}/api/v1/election/open?election_id=${election_id}`;

    const response = await post<{ resp: BaseResponse }>(path, {});
    return response.parsedBody?.resp.is_success();
};

export const closeElection = async (election_id: string): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}/api/v1/election/close?election_id=${election_id}`;

    const response = await post<{ resp: BaseResponse }>(path, {});
    return response.parsedBody?.resp.is_success();
};

export const publishElection = async (election_id: string): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}/api/v1/election/publish?election_id=${election_id}`;

    const response = await post<{ resp: BaseResponse }>(path, {});
    return response.parsedBody?.resp.is_success();
};

export const makeContextElection = async (
    elgamal_public_key: string,
    commitment_hash: string,
    number_of_guardians: number,
    quorum: number,
    manifest_hash = '',
    manifest = {}
): Promise<CiphertextElectionContext | undefined> => {
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}/api/v1/election/context`;
    const data: MakeElectionContextRequest = {
        elgamal_public_key,
        commitment_hash,
        number_of_guardians,
        quorum,
        manifest_hash,
        manifest,
    };
    const response = await post<{ resp: MakeElectionContextResponse }>(path, data);
    return response.parsedBody?.resp.context;
};

export default getElection;

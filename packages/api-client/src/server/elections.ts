/* eslint-disable max-classes-per-file */
import { get, post, put } from '../utils/http';
import {
    ElectionConstants,
    Election,
    ElectionQueryResponse,
    SubmitElectionRequest,
    ElectionManifest,
    CiphertextElectionContext,
    MakeElectionContextRequest,
    MakeElectionContextResponse,
    ElectionQueryRequest,
} from '../models/election';
import { BaseResponse } from '../models/base';

export const getConstants = async (): Promise<ElectionConstants | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}election/constants`;
    const response = await get<{ data: ElectionConstants }>(path);
    return response.parsedBody?.data;
};

export const getElection = async (election_id: string): Promise<Election[] | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}election?election_id=${election_id}`;
    const response = await get<{ data: ElectionQueryResponse }>(path);
    return response.parsedBody?.data.elections;
};

export const putElection = async (
    election_id: string,
    key_name: string,
    manifest: ElectionManifest,
    context: CiphertextElectionContext
): Promise<boolean | undefined> => {
    const data: SubmitElectionRequest = {
        election_id,
        key_name,
        manifest,
        context,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}election`;
    const response = await put<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const findElection = async (
    filter: any,
    skip: number,
    limit: number
): Promise<Election[] | undefined> => {
    const data: ElectionQueryRequest = {
        filter,
    };
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}election/find?skip=${skip}&limit=${limit}`;
    const response = await post<{ resp: ElectionQueryResponse }>(path, data);
    return response.parsedBody?.resp.elections;
};

export const openElection = async (election_id: string): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}election/open?election_id=${election_id}`;

    const response = await post<{ resp: BaseResponse }>(path, {});
    return response.parsedBody?.resp.is_success();
};

export const closeElection = async (election_id: string): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}election/close?election_id=${election_id}`;

    const response = await post<{ resp: BaseResponse }>(path, {});
    return response.parsedBody?.resp.is_success();
};

export const publishElection = async (election_id: string): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}election/publish?election_id=${election_id}`;

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
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}election/context`;
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

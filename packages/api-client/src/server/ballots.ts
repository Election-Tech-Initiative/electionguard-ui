// eslint-disable-next-line max-classes-per-file
import { get, post, put } from '../utils/http';
import { ElectionManifest, CiphertextElectionContext } from '../models/election';
import { BaseQueryRequest, BaseResponse, Schema } from '../models/base';
import {
    BallotInventory,
    BallotInventoryResponse,
    BallotQueryResponse,
    CastBallotsRequest,
    CiphertextBallot,
    DecryptBallotSharesRequest,
    DecryptBallotSharesResponse,
    DecryptBallotsWithSharesRequest,
    DecryptedBallots,
    DecryptionShare,
    EncryptBallotsRequest,
    EncryptBallotsResponse,
    PlaintextBallot,
    SpoilBallotsRequest,
    SubmitBallotsRequest,
    SubmittedBallot,
    ValidateBallotsRequest,
} from '../models/ballot';

export const decryptSharesBallot = async (
    encrypted_ballots: SubmittedBallot[],
    id: string,
    context: CiphertextElectionContext
): Promise<DecryptionShare[] | undefined> => {
    const data: DecryptBallotSharesRequest = {
        encrypted_ballots,
        guardian: { id, name: '' },
        context,
    };
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}ballot/decrypt-shares`;
    const response = await post<{ resp: DecryptBallotSharesResponse }>(path, data);
    return response.parsedBody?.resp.shares;
};

export const getBallot = async (
    election_id: string,
    ballot_id: string
): Promise<CiphertextBallot[] | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}ballot?election_id=${election_id}&ballot_id=${ballot_id}`;
    const response = await get<{ resp: BallotQueryResponse }>(path);
    return response.parsedBody?.resp.ballots;
};

export const getBallotInventory = async (
    election_id: string
): Promise<BallotInventory | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}ballot?election_id=${election_id}`;
    const response = await get<{ resp: BallotInventoryResponse }>(path);
    return response.parsedBody?.resp.inventory;
};

export const findBallots = async (
    election_id: string,
    skip: number,
    limit: number,
    _ballot_id: string
): Promise<CiphertextBallot[] | undefined> => {
    const data: BaseQueryRequest = {
        filter: {},
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}ballot/find?election_id=${election_id}&skip=${skip}&limit=${limit}`;
    const response = await post<{ resp: BallotQueryResponse }>(path, data);
    return response.parsedBody?.resp.ballots;
};

export const castBallots = async (
    election_id: string,
    manifest: ElectionManifest,
    context: CiphertextElectionContext,
    ballots: CiphertextBallot[]
): Promise<boolean | undefined> => {
    const data: CastBallotsRequest = {
        election_id,
        manifest,
        context,
        ballots,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}ballot/cast?election_id=${election_id}`;
    const response = await post<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const spoilBallots = async (
    election_id: string,
    manifest: ElectionManifest,
    context: CiphertextElectionContext,
    ballots: CiphertextBallot[]
): Promise<boolean | undefined> => {
    const data: SpoilBallotsRequest = {
        election_id,
        manifest,
        context,
        ballots,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}ballot/spoil?election_id=${election_id}`;
    const response = await post<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const submitBallots = async (
    election_id: string,
    manifest: ElectionManifest,
    context: CiphertextElectionContext,
    ballots: CiphertextBallot[]
): Promise<boolean | undefined> => {
    const data: SubmitBallotsRequest = {
        election_id,
        manifest,
        context,
        ballots,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}ballot/spoil?election_id=${election_id}`;
    const response = await put<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const validateBallot = async (
    ballot: CiphertextBallot,
    manifest: ElectionManifest,
    context: CiphertextElectionContext,
    schema_override: Schema
): Promise<boolean | undefined> => {
    const data: ValidateBallotsRequest = {
        ballot,
        manifest,
        context,
        schema_override,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}ballot/validate`;
    const response = await post<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const decryptBallot = async (
    encrypted_ballots: SubmittedBallot[],
    shares: Map<string, DecryptionShare[]>,
    context: CiphertextElectionContext
): Promise<DecryptedBallots | undefined> => {
    const data: DecryptBallotsWithSharesRequest = {
        encrypted_ballots,
        shares,
        context,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}ballot/validate`;
    const response = await post<{ resp: DecryptedBallots }>(path, data);
    return response.parsedBody?.resp;
};

export const encryptBallot = async (
    election_id: string,
    seed_hash: string,
    ballots: PlaintextBallot[]
): Promise<CiphertextBallot[] | undefined> => {
    const data: EncryptBallotsRequest = {
        election_id,
        seed_hash,
        ballots,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}ballot/validate`;
    const response = await post<{ resp: EncryptBallotsResponse }>(path, data);
    return response.parsedBody?.resp.encrypted_ballots;
};

export default decryptSharesBallot;

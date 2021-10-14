/* eslint-disable max-classes-per-file */
import AssignedGuardian from '../models/assignedGuardian';
import {
    Guardian,
    ApiGuardianQueryResponse,
    BackupChallengeResponse,
    ChallengeVerificationRequest,
    ElectionPartialKeyChallenge,
    GuardianBackupChallengeRequest,
    GuardianBackupRequest,
    GuardianBackupResponse,
    GuardianBackupVerificationRequest,
    GuardianPublicKeysResponse,
    PublicKeySetApi,
} from '../models/guardian';
import { post, get, put } from '../utils/http';
import {
    ElectionPartialKeyBackup,
    GuardianQueryResponse,
    KeyCeremonyGuardian,
} from '../models/keyCeremony';
import { BaseQueryRequest, BaseResponse } from '../models/base';

// import getUsersWithGuardianRole from './users';

export const getAssignedGuardians = (): AssignedGuardian[] => [
    { sequenceOrder: 1, id: '1', name: 'Snow server' },
    { sequenceOrder: 2, id: '2', name: 'Lannister server' },
    { sequenceOrder: 3, id: '3', name: 'Magic server' },
    { sequenceOrder: 4, id: '4', name: 'Stark server' },
    { sequenceOrder: 5, id: '5', name: 'Targaryen server' },
];

export const createGuardian = async (
    id: string,
    username: string,
    sequenceOrder: number
): Promise<string> => {
    const data = {
        guardian_id: id,
        sequence_order: sequenceOrder,
        number_of_guardians: 3,
        quorum: 2,
        name: username,
        key_name: '',
    };
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}guardian`;
    const response = await post<string>(path, data);

    return response.arrayBuffer.toString();
};

export const getGuardian = async (guardian_id: string): Promise<Guardian | undefined> => {
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}guardian?guardian_id=${guardian_id}`;
    const response = await get<{ guardian: Guardian }>(path);
    return response.parsedBody?.guardian;
};

// get public-keys
//  {{guardian-url}}/api/{{version}}/guardian/public-keys?guardian_id=guardian_1
export const getGuardianPublicKeys = async (
    guardian_id: string
): Promise<PublicKeySetApi[] | undefined> => {
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}guardian/public-keys?guardian_id=${guardian_id}`;
    const response = await get<{ resp: GuardianPublicKeysResponse }>(path);
    return response.parsedBody?.resp.public_keys;
};

export const findGuardians = async (): Promise<Guardian[] | undefined> => {
    const data = {};
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}guardian/find?skip=0&limit=100`;

    const response = await post<{ resp: ApiGuardianQueryResponse }>(path, data);
    return response.parsedBody?.resp.guardians;
};

export const backupGuardian = async (
    guardian_id: string,
    quorum: number,
    public_keys: [],
    override_rsa: boolean
): Promise<ElectionPartialKeyBackup[] | undefined> => {
    const data: GuardianBackupRequest = {
        guardian_id,
        quorum,
        public_keys,
        override_rsa,
    };
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}guardian/backup`;
    const response = await post<{ resp: GuardianBackupResponse }>(path, data);
    return response.parsedBody?.resp.backups;
};

export const backupVerificationGuardian = async (
    guardian_id: string,
    backup: any,
    override_rsa: boolean
): Promise<boolean | undefined> => {
    const data: GuardianBackupVerificationRequest = {
        guardian_id,
        backup,
        override_rsa,
    };
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}guardian/backup/verify`;
    const response = await post<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const backupChallengeGuardian = async (
    guardian_id: string,
    backup: any
): Promise<ElectionPartialKeyChallenge | undefined> => {
    const data: GuardianBackupChallengeRequest = {
        guardian_id,
        backup,
    };
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}guardian/challenge`;
    const response = await post<{ resp: BackupChallengeResponse }>(path, data);
    return response.parsedBody?.resp.challenge;
};

export const verifyChallengeGuardian = async (
    verifier_id: string,
    challenge: any
): Promise<string | undefined> => {
    const data: ChallengeVerificationRequest = {
        verifier_id,
        challenge,
    };
    const path = `${process.env.REACT_APP_GUARDIAN_SERVICE}guardian/challenge/verify`;
    const response = await post<{ resp: string }>(path, data);
    return response.parsedBody?.resp;
};

export const getGuardians = async (
    key_name: string,
    guardian_id: string
): Promise<KeyCeremonyGuardian[] | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}guardian?key_name=${key_name}&guardian_id=${guardian_id}`;
    const response = await get<{ resp: GuardianQueryResponse }>(path);
    return response.parsedBody?.resp.guardians;
};

export const putGuardians = async (data: KeyCeremonyGuardian): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}guardian`;
    const response = await put<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const postGuardians = async (data: KeyCeremonyGuardian): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}guardian`;
    const response = await post<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const findKeyGuardians = async (
    skip: number,
    limit: number,
    guardian_id: string
): Promise<KeyCeremonyGuardian[] | undefined> => {
    const data: BaseQueryRequest = {
        filter: { guardian_id },
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}guardian/find?skip=${skip}&limit=${limit}`;
    const response = await post<{ resp: GuardianQueryResponse }>(path, data);
    return response.parsedBody?.resp.guardians;
};

export default getAssignedGuardians;

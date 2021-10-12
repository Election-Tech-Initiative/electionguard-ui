import KeyCeremonyStep from '../models/KeyCeremonyStep';
import {
    KeyCeremonyUi,
    KeyCeremonyGuardianApi,
    KeyCeremonyStatus,
    KeyCeremonyQueryResponse,
    KeyCeremony,
    KeyCeremonyCreateRequest,
    GuardianId,
    KeyCeremonyStateResponse,
    KeyCeremonyState,
    ElectionJointKeyResponse,
    ElectionJointKey,
    PublishElectionJointKeyRequest,
    ElectionPublicKey,
    GuardianAnnounceRequest,
    PublicKeySet,
    GuardianSubmitBackupRequest,
    GuardianSubmitVerificationRequest,
    ElectionPartialKeyVerification,
    GuardianSubmitChallengeRequest,
} from '../models/keyCeremony';
import TaskStatus from '../models/taskStatus';
import { getAssignedGuardians } from './guardians';
import { get, post, put } from '../utils/http';
import { BaseQueryRequest, BaseResponse } from '../models/base';
import { ElectionPartialKeyBackup } from '../mocks/guardians';
import { ElectionPartialKeyChallenge } from '../models/guardian';

export const getKeyCeremonyGuardians = (): KeyCeremonyGuardianApi[] =>
    getAssignedGuardians().map((guardian) => ({
        ...guardian,
        keypairCreated: TaskStatus.Incomplete,
        backupsCreated: TaskStatus.Incomplete,
        publicKeyShared: TaskStatus.Incomplete,
        backupsShared: TaskStatus.Incomplete,
        backupsVerified: TaskStatus.Incomplete,
        verifications: [],
    }));

export const setKeyCeremonyGuardianToStep = (
    guardian: KeyCeremonyGuardianApi,
    step: KeyCeremonyStep
): KeyCeremonyGuardianApi => ({
    ...guardian,
    keypairCreated:
        step > KeyCeremonyStep.CreateKeyPair ? TaskStatus.Complete : TaskStatus.Incomplete,
    backupsCreated:
        step > KeyCeremonyStep.CreateBackups ? TaskStatus.Complete : TaskStatus.Incomplete,
    publicKeyShared:
        step > KeyCeremonyStep.SharePublicKey ? TaskStatus.Complete : TaskStatus.Incomplete,
    backupsShared:
        step > KeyCeremonyStep.ShareBackups ? TaskStatus.Complete : TaskStatus.Incomplete,
    backupsVerified:
        step > KeyCeremonyStep.VerifyBackups ? TaskStatus.Complete : TaskStatus.Incomplete,
    verifications: getAssignedGuardians()
        .filter((g) => g.id !== guardian.id)
        .map((g) => ({
            verifier: guardian,
            owner: g,
            verified: TaskStatus.Incomplete,
        })),
});

export const getKeyCeremonyGuardiansByStep = (step: KeyCeremonyStep): KeyCeremonyGuardianApi[] =>
    getKeyCeremonyGuardians().map((guardian) => setKeyCeremonyGuardianToStep(guardian, step));

export const getKeyCeremoniesOld = (): KeyCeremonyUi[] => [
    {
        id: 'key-ceremony-1',
        status: KeyCeremonyStatus.Active,
        name: 'Montgomery County Election',
        numberOfGuardians: 5,
        quorum: 3,
        guardians: getKeyCeremonyGuardians(),
        dateCreated: new Date(),
    },
];

export const getKeyCeremonies = async (key_name: string): Promise<KeyCeremony[] | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony?key_name=${key_name}`;
    const response = await get<{ resp: KeyCeremonyQueryResponse }>(path);
    return response.parsedBody?.resp.key_ceremonies;
};

export const putKeyCeremony = async (
    key_name: string,
    number_of_guardians: number,
    quorum: number,
    guardian_ids: GuardianId[]
): Promise<boolean | undefined> => {
    const data: KeyCeremonyCreateRequest = {
        key_name,
        number_of_guardians,
        quorum,
        guardian_ids,
    };

    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony`;
    const response = await put<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const getKeyCeremonyState = async (
    key_name: string
): Promise<KeyCeremonyState | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/state?key_name=${key_name}`;
    const response = await get<{ resp: KeyCeremonyStateResponse }>(path);
    return response.parsedBody?.resp.state;
};

export const findKeyCeremonies = async (
    skip: number,
    limit: number,
    _ballot_id: string
): Promise<KeyCeremony[] | undefined> => {
    const data: BaseQueryRequest = {
        filter: {},
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/find?skip=${skip}&limit=${limit}`;
    const response = await post<{ resp: KeyCeremonyQueryResponse }>(path, data);
    return response.parsedBody?.resp.key_ceremonies;
};

export const openKeyCeremony = async (key_name: string): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/open?key_name=${key_name}`;
    const response = await post<{ resp: BaseResponse }>(path, {});
    return response.parsedBody?.resp.is_success();
};

export const closeKeyCeremony = async (key_name: string): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/close?key_name=${key_name}`;
    const response = await post<{ resp: BaseResponse }>(path, {});
    return response.parsedBody?.resp.is_success();
};

export const challengeKeyCeremony = async (key_name: string): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/challenge?key_name=${key_name}`;
    const response = await post<{ resp: BaseResponse }>(path, {});
    return response.parsedBody?.resp.is_success();
};

export const challengeVerifyKeyCeremony = async (
    key_name: string
): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/challenge/verify?key_name=${key_name}`;
    const response = await get<{ resp: BaseResponse }>(path);
    return response.parsedBody?.resp.is_success();
};

export const cancelKeyCeremony = async (key_name: string): Promise<boolean | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/cancel?key_name=${key_name}`;
    const response = await post<{ resp: BaseResponse }>(path, {});
    return response.parsedBody?.resp.is_success();
};

export const getJointKeyKeyCeremony = async (
    key_name: string
): Promise<ElectionJointKey | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/joint_key?key_name=${key_name}`;
    const response = await get<{ resp: ElectionJointKeyResponse }>(path);
    return response.parsedBody?.resp.elgamal_public_key;
};

export const combineKeyCeremony = async (
    key_name: string,
    election_public_keys: ElectionPublicKey[]
): Promise<ElectionJointKey | undefined> => {
    const data: PublishElectionJointKeyRequest = {
        key_name,
        election_public_keys,
    };

    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/combine`;
    const response = await post<{ resp: ElectionJointKeyResponse }>(path, data);
    return response.parsedBody?.resp.elgamal_public_key;
};

export const publishKeyCeremony = async (
    key_name: string
): Promise<ElectionJointKey | undefined> => {
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/ceremony/publish?key_name=${key_name}`;
    const response = await post<{ resp: ElectionJointKeyResponse }>(path, {});
    return response.parsedBody?.resp.elgamal_public_key;
};

export const announceGuardianKeyCeremony = async (
    key_name: string,
    public_keys: PublicKeySet
): Promise<ElectionJointKey | undefined> => {
    const data: GuardianAnnounceRequest = {
        key_name,
        public_keys,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/guardian/announce`;
    const response = await post<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const backupGuardianKeyCeremony = async (
    key_name: string,
    guardian_id: string,
    backups: ElectionPartialKeyBackup[]
): Promise<ElectionJointKey | undefined> => {
    const data: GuardianSubmitBackupRequest = {
        key_name,
        guardian_id,
        backups,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/guardian/backup`;
    const response = await post<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const verifyGuardianKeyCeremony = async (
    key_name: string,
    guardian_id: string,
    verifications: ElectionPartialKeyVerification[]
): Promise<ElectionJointKey | undefined> => {
    const data: GuardianSubmitVerificationRequest = {
        key_name,
        guardian_id,
        verifications,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/guardian/verify`;
    const response = await post<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

export const challengeGuardianKeyCeremony = async (
    key_name: string,
    guardian_id: string,
    challenges: ElectionPartialKeyChallenge[]
): Promise<ElectionJointKey | undefined> => {
    const data: GuardianSubmitChallengeRequest = {
        key_name,
        guardian_id,
        challenges,
    };
    const path = `${process.env.REACT_APP_MEDIATOR_SERVICE}key/guardian/challenge`;
    const response = await post<{ resp: BaseResponse }>(path, data);
    return response.parsedBody?.resp.is_success();
};

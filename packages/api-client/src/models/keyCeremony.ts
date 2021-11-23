/* eslint-disable max-classes-per-file */
import { BaseRequest, BaseResponse } from './base';
import { ElectionPublicKey, GuardianId, PublicKeySet } from './election';
import { AssignedGuardian, ElectionPartialKeyChallenge } from './guardian';
import { TaskStatus } from './taskStatus';

export type ElGamalKeyPair = any;

export type ElectionJointKey = any;
export type ElementModQ = any;

export type MESSAGE = string;
export type AuxiliarySecretKey = string;
export type EncryptedMessage = string;

export type ElectionPartialKeyBackup = any;
export type ElectionPartialKeyVerification = any;

/**
 * @enum {number}
 */
export enum KeyCeremonyStatus {
    Canceled = -1,
    Inactive = 0,
    Active = 1,
    Complete = 2,
}

/**
 * @interface KeyCeremonyGuardianApi data used by the KeyCeremony UI for dislaying steps
 * @extends AssignedGuardian
 */
export interface KeyCeremonyGuardianApi extends AssignedGuardian {
    keypairCreated: TaskStatus;
    backupsCreated: TaskStatus;

    publicKeyShared: TaskStatus;
    backupsShared: TaskStatus;
    backupsVerified: TaskStatus;

    verifications: BackupVerification[];
}

/**
 * @interface BackupVerification
 * data for backup verification
 */
export interface BackupVerification {
    verifier: AssignedGuardian;
    owner: AssignedGuardian;
    verified: TaskStatus;
}

/**
 * @interface KeyCeremonyUi
 * data used by UI for showing KeyCeremonies
 */
export interface KeyCeremonyUi {
    id: string;
    status: KeyCeremonyStatus;
    name: string;
    numberOfGuardians: number;
    quorum: number;
    guardians: KeyCeremonyGuardianApi[];
    dateCreated: Date;
}

/**
 * @enum {string}
 */
export enum KeyCeremonyState {
    // Enumeration expressing the state of the key ceremony.
    CREATED = 'CREATED',
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    CHALLENGED = 'CHALLENGED',
    CANCELLED = 'CANCELLED',
}

/**
 * @enum {string}
 */
export enum KeyCeremonyGuardianStatus {
    // Enumeration expressing the status of a guardian's operations.
    INCOMPLETE = 'INCOMPLETE',
    ERROR = 'ERROR',
    COMPLETE = 'COMPLETE',
}

/**
 * @class KeyCeremonyGuardianState
 * Describes the operations each guardian must fulfill to complete a key ceremony.
 */
export class KeyCeremonyGuardianState {
    public_key_shared: KeyCeremonyGuardianStatus = KeyCeremonyGuardianStatus.INCOMPLETE;

    backups_shared: KeyCeremonyGuardianStatus = KeyCeremonyGuardianStatus.INCOMPLETE;

    backups_verified: KeyCeremonyGuardianStatus = KeyCeremonyGuardianStatus.INCOMPLETE;
}

/**
 * @class KeyCEremony
 * The Key Ceremony is a record of the state of a key ceremony.
 */
export class KeyCeremony {
    key_name = '';

    state: KeyCeremonyState = KeyCeremonyState.CREATED;

    number_of_guardians = 0;

    quorum = 0;

    guardian_ids: GuardianId[] = [];

    guardian_status: Map<GuardianId, KeyCeremonyGuardianState> = new Map<
        GuardianId,
        KeyCeremonyGuardianState
    >();

    elgamal_public_key: ElectionJointKey = null;

    commitment_hash: ElementModQ = null;
}

/**
 * @class KeyCeremonyQueryResponse Returns a collection of Key Ceremonies.
 * @extends BaseResponse
 */
export class KeyCeremonyQueryResponse extends BaseResponse {
    key_ceremonies: KeyCeremony[] = [];
}

/**
 * @class KeyCeremonyCreateRequest Request to create a new key ceremony.
 * @extends BaseRequest
 */
export class KeyCeremonyCreateRequest extends BaseRequest {
    key_name = '';

    number_of_guardians = 0;

    quorum = 0;

    guardian_ids: GuardianId[] = [];
}

/**
 * @class KeyCeremonyStateResponse Returns a subset of KeyCeremony data that describes only the state.
 * @extends BaseResponse
 */
export class KeyCeremonyStateResponse {
    key_name = '';

    state: KeyCeremonyState = KeyCeremonyState.CREATED;

    guardian_status: Map<GuardianId, KeyCeremonyGuardianState> = new Map<
        GuardianId,
        KeyCeremonyGuardianState
    >();
}

/**
 * @class ElectionJointKeyResponse Response object containing the Election Joint Key.
 * @extends BaseResponse
 */
export class ElectionJointKeyResponse extends BaseResponse {
    elgamal_public_key: ElectionJointKey;

    commitment_hash: ElementModQ;
}

/**
 * @class PublishElectionJointKeyRequest Request to publish the election joint key.
 * @extends BaseRequest
 */
export class PublishElectionJointKeyRequest extends BaseRequest {
    key_name = '';

    election_public_keys: ElectionPublicKey[] = [];
}

/**
 * @class GuardianAnnounceRequest A set of public auxiliary and election keys.
 * @extends BaseRequest
 */
export class GuardianAnnounceRequest extends BaseRequest {
    key_name = '';

    public_keys: PublicKeySet = new PublicKeySet();
}

/**
 * @class GuardianQueryResponse Returns a collection of KeyCeremonyGuardians.
 * @extends BaseResponse
 */
export class GuardianQueryResponse extends BaseResponse {
    guardians: KeyCeremonyGuardian[] = [];
}

/**
 * @class GuardianSubmitBackupRequest Submit a collection of backups for a guardian.
 * @extends BaseRequest
 */
export class GuardianSubmitBackupRequest extends BaseRequest {
    key_name = '';

    guardian_id = '';

    backups: ElectionPartialKeyBackup[] = [];
}

/**
 * @class GuardianSubmitVerificationRequest Submit a collection of verifications for a guardian.
 * @extends BaseRequest
 */
export class GuardianSubmitVerificationRequest extends BaseRequest {
    key_name = '';

    guardian_id = '';

    verifications: ElectionPartialKeyVerification[] = [];
}

/**
 * @class GuardianSubmitChallengeRequest Submit a collection of challenges for a guardian.
 * @extends BaseRequest
 */
export class GuardianSubmitChallengeRequest extends BaseRequest {
    key_name = '';

    guardian_id = '';

    challenges: ElectionPartialKeyChallenge[] = [];
}

/**
 * @class KeyCeremonyGuardian
 *
 * A record of the public data exchanged between guardians.
 */
export class KeyCeremonyGuardian {
    key_name = '';

    guardian_id: GuardianId = '';

    name = '';

    sequence_order = 0;

    number_of_guardians = 0;

    quorum = 0;

    public_keys: PublicKeySet = new PublicKeySet();

    backups: ElectionPartialKeyBackup[] = [];

    verifications: ElectionPartialKeyVerification[] = [];

    challenges: ElectionPartialKeyChallenge[] = [];
}

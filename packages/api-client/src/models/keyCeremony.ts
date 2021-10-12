/* eslint-disable max-classes-per-file */
import AssignedGuardian from './assignedGuardian';
import { BaseRequest, BaseResponse } from './base';
import { ElectionPartialKeyChallenge } from './guardian';
import TaskStatus from './taskStatus';

export type GuardianId = string;
export type ElectionPublicKey = any;
export type ElGamalKeyPair = any;

export type ElectionJointKey = any;
export type ElementModQ = any;

export type MESSAGE = string;
export type AuxiliaryPublicKeyType = string;
export type AuxiliarySecretKey = string;
export type EncryptedMessage = string;

export type ElectionPartialKeyBackup = any;
export type ElectionPartialKeyVerification = any;

export enum KeyCeremonyStatus {
    Canceled = -1,
    Inactive = 0,
    Active = 1,
    Complete = 2,
}

export interface KeyCeremonyGuardianApi extends AssignedGuardian {
    // From Guardian API
    keypairCreated: TaskStatus;
    backupsCreated: TaskStatus;

    // From Mediator API
    publicKeyShared: TaskStatus;
    backupsShared: TaskStatus;
    backupsVerified: TaskStatus;

    verifications: BackupVerification[];
}

export interface BackupVerification {
    verifier: AssignedGuardian;
    owner: AssignedGuardian;
    verified: TaskStatus;
}

export interface KeyCeremonyUi {
    id: string;
    status: KeyCeremonyStatus;
    name: string;
    numberOfGuardians: number;
    quorum: number;
    guardians: KeyCeremonyGuardianApi[];
    dateCreated: Date;
}

export enum KeyCeremonyState {
    // Enumeration expressing the state of the key ceremony.
    CREATED = 'CREATED',
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    CHALLENGED = 'CHALLENGED',
    CANCELLED = 'CANCELLED',
}

export enum KeyCeremonyGuardianStatus {
    // Enumeration expressing the status of a guardian's operations.
    INCOMPLETE = 'INCOMPLETE',
    ERROR = 'ERROR',
    COMPLETE = 'COMPLETE',
}

export class KeyCeremonyGuardianState {
    // Describes the operations each guardian must fulfill to complete a key ceremony.

    public_key_shared: KeyCeremonyGuardianStatus = KeyCeremonyGuardianStatus.INCOMPLETE;

    backups_shared: KeyCeremonyGuardianStatus = KeyCeremonyGuardianStatus.INCOMPLETE;

    backups_verified: KeyCeremonyGuardianStatus = KeyCeremonyGuardianStatus.INCOMPLETE;
}

export class KeyCeremony {
    // The Key Ceremony is a record of the state of a key ceremony.

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

export class KeyCeremonyQueryResponse extends BaseResponse {
    // Returns a collection of Key Ceremonies.

    key_ceremonies: KeyCeremony[] = [];
}

export class KeyCeremonyCreateRequest extends BaseRequest {
    // Request to create a new key ceremony.

    key_name = '';

    number_of_guardians = 0;

    quorum = 0;

    guardian_ids: GuardianId[] = [];
}

export class KeyCeremonyStateResponse {
    // Returns a subset of KeyCeremony data that describes only the state.

    key_name = '';

    state: KeyCeremonyState = KeyCeremonyState.CREATED;

    guardian_status: Map<GuardianId, KeyCeremonyGuardianState> = new Map<
        GuardianId,
        KeyCeremonyGuardianState
    >();
}

export class ElectionJointKeyResponse extends BaseResponse {
    // Response object containing the Election Joint Key.

    elgamal_public_key: ElectionJointKey;

    commitment_hash: ElementModQ;
}

export class PublishElectionJointKeyRequest extends BaseRequest {
    // Request to publish the election joint key.

    key_name = '';

    election_public_keys: ElectionPublicKey[] = [];
}

export class AuxiliaryPublicKey {
    // A tuple of auxiliary public key and owner information that can be shared between guardians"""

    owner_id: GuardianId = '';
    /*
    The unique identifier of the guardian owning the key
    */

    sequence_order = 0;
    /*
    The sequence order of the auxiliary public key (usually the guardian's sequence order)
    */

    key: AuxiliaryPublicKeyType = '';
    /*
    A string representation of the Auxiliary public key that can be shared between guardians.
    It is up to the external `AuxiliaryEncrypt` function to know how to parse this value
    */
}

export class PublicKeySet {
    // A convenience set of public auxiliary and election keys

    election: ElectionPublicKey;

    auxiliary: AuxiliaryPublicKey = new AuxiliaryPublicKey();
}

export class GuardianAnnounceRequest extends BaseRequest {
    // A set of public auxiliary and election keys.

    key_name = '';

    // The Key Ceremony to announce
    public_keys: PublicKeySet = new PublicKeySet();
}

export class GuardianQueryResponse extends BaseResponse {
    // Returns a collection of KeyCeremonyGuardians.

    guardians: KeyCeremonyGuardian[] = [];
}

export class GuardianSubmitBackupRequest extends BaseRequest {
    // Submit a collection of backups for a guardian.

    key_name = '';

    guardian_id = '';

    backups: ElectionPartialKeyBackup[] = [];
}

export class GuardianSubmitVerificationRequest extends BaseRequest {
    // Submit a collection of verifications for a guardian.

    key_name = '';

    guardian_id = '';

    verifications: ElectionPartialKeyVerification[] = [];
}

export class GuardianSubmitChallengeRequest extends BaseRequest {
    // Submit a collection of challenges for a guardian.

    key_name = '';

    guardian_id = '';

    challenges: ElectionPartialKeyChallenge[] = [];
}

export class KeyCeremonyGuardian {
    /*
    A record of the public data exchanged between guardians.
    */

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

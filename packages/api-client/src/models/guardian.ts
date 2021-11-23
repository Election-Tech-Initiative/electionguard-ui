/* eslint-disable max-classes-per-file */
import { BaseRequest, BaseResponse } from './base';
import { GuardianId, PublicKeySet } from './election';

export class GuardianUI {
    id = '';

    name = '';
}

export type ElectionKeyPair = any;
export type AuxiliaryKeyPair = any;
export type ElectionPartialKeyBackup = any;
export type PublicKeySetApi = any;
export type ElectionPartialKeyChallenge = any;
export type ElectionPartialKeyVerification = any;

/**
 * @class Guardian
 * The API guardian tracks the state of a guardain's interactions with other guardians.
 */
export class Guardian {
    guardian_id = '';

    name = '';

    sequence_order = 0;

    number_of_guardians = 0;

    quorum = 0;

    election_keys: ElectionKeyPair;

    auxiliary_keys: AuxiliaryKeyPair;

    backups: Map<GuardianId, ElectionPartialKeyBackup> = new Map<
        GuardianId,
        ElectionPartialKeyBackup
    >();

    cohort_public_keys: Map<GuardianId, PublicKeySet> = new Map<GuardianId, PublicKeySet>();

    cohort_backups: Map<GuardianId, ElectionPartialKeyBackup> = new Map<
        GuardianId,
        ElectionPartialKeyBackup
    >();

    cohort_verifications: Map<GuardianId, ElectionPartialKeyVerification> = new Map<
        GuardianId,
        ElectionPartialKeyVerification
    >();

    cohort_challenges: Map<GuardianId, ElectionPartialKeyChallenge> = new Map<
        GuardianId,
        ElectionPartialKeyChallenge
    >();
}

/**
 * @class GuardianPublicKeysResponse reply from server with teh public key info
 * @extends BaseResponse
 */
export class GuardianPublicKeysResponse extends BaseResponse {
    public_keys: PublicKeySetApi;
}

/**
 * @class GuardianBackupResponse reply from server with the guardian backup info
 * @extends BaseResponse
 */
export class GuardianBackupResponse extends BaseResponse {
    guardian_id = '';

    backups: ElectionPartialKeyBackup[] = [];
}

/**
 * @class BackupVerificationResponse Returns a collection of verifications.
 * @extends BaseResponse
 */
export class BackupVerificationResponse extends BaseResponse {
    verification: ElectionPartialKeyVerification;
}

/**
 * @class GuardianBackupVerificationRequest Request to generate ElectionPartialKeyBackups for the given PublicKeySets.
 * @extends BaseRequest
 */
export class GuardianBackupVerificationRequest extends BaseRequest {
    guardian_id = '';

    backup: any = {};

    override_rsa = false;
}

/**
 * @class GuardianBackupChallengeRequest Request to generate ElectionPartialKeyBackups for the given PublicKeySets.
 * @extends BaseRequest
 */
export class GuardianBackupChallengeRequest extends BaseRequest {
    guardian_id = '';

    backup: any = {};
}

/**
 * @class ChallengeVerificationRequest Request to generate ElectionPartialKeyBackups for the given PublicKeySets.
 * @extends BaseRequest
 */
export class ChallengeVerificationRequest extends BaseRequest {
    verifier_id = '';

    challenge: any = {};
}

/**
 * @class BackupChallengeResponse reply from server with the key challenge data
 * @extends BaseResponse
 */
export class BackupChallengeResponse extends BaseResponse {
    challenge: ElectionPartialKeyChallenge;
}

/**
 * @class GuardianBackupRequest Request to generate ElectionPartialKeyBackups for the given PublicKeySets.
 * @extends BaseRequest
 */
export class GuardianBackupRequest extends BaseRequest {
    guardian_id = '';

    quorum = 0;

    public_keys: any[] = [];

    override_rsa = false;
}

/**
 * @class ApiGuardianQueryResponse Returns a collection of KeyCeremonyGuardians.
 * @extends BaseResponse
 */
export class ApiGuardianQueryResponse extends BaseResponse {
    guardians: Guardian[] = [];
}

/**
 * @class AssignedGuardian class for UI work for showning assigned guardians
 * @extends GuardianUI
 */
export interface AssignedGuardian extends GuardianUI {
    sequenceOrder: number;
}

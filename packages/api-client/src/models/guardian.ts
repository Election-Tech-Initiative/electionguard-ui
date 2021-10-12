/* eslint-disable max-classes-per-file */
import { BaseResponse } from './base';
import { ElectionPartialKeyVerification, GuardianId, PublicKeySet } from './keyCeremony';

export class GuardianUI {
    id = '';

    name = '';
}

export type ElectionKeyPair = any;
export type AuxiliaryKeyPair = any;
export type ElectionPartialKeyBackup = any;
export type PublicKeySetApi = any;
export type ElectionPartialKeyChallenge = any;

export class Guardian {
    // The API guardian tracks the state of a guardain's interactions with other guardians.

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

export class GuardianPublicKeysResponse extends BaseResponse {
    public_keys: PublicKeySetApi;
}

export class GuardianBackupResponse extends BaseResponse {
    guardian_id = '';

    backups: ElectionPartialKeyBackup[] = [];
}

export class GuardianBackupVerificationRequest {
    // Request to generate ElectionPartialKeyBackups for the given PublicKeySets."""

    guardian_id = '';

    backup: any = {};

    override_rsa = false;
}

export class GuardianBackupChallengeRequest {
    // Request to generate ElectionPartialKeyBackups for the given PublicKeySets."""

    guardian_id = '';

    backup: any = {};
}

export class ChallengeVerificationRequest {
    // Request to generate ElectionPartialKeyBackups for the given PublicKeySets."""

    verifier_id = '';

    challenge: any = {};
}

export class BackupChallengeResponse extends BaseResponse {
    challenge: ElectionPartialKeyChallenge;
}

export class GuardianBackupRequest {
    // Request to generate ElectionPartialKeyBackups for the given PublicKeySets."""

    guardian_id = '';

    quorum = 0;

    public_keys: any[] = [];

    override_rsa = false;
}

export class ApiGuardianQueryResponse extends BaseResponse {
    // Returns a collection of KeyCeremonyGuardians.

    guardians: Guardian[] = [];
}

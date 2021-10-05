/* eslint-disable max-classes-per-file */
import { BaseResponse } from "./base";

export default interface Guardian {
    id: string;
    name: string;
}

export type ElectionPartialKeyBackup = any;

export type PublicKeySetApi = any;
export class GuardianPublicKeysResponse extends BaseResponse {
    public_keys: PublicKeySetApi;
}

export class GuardianBackupResponse extends BaseResponse {
    guardian_id = "";
    
    backups: ElectionPartialKeyBackup[] = [];
}

export class GuardianBackupVerificationRequest {
    // Request to generate ElectionPartialKeyBackups for the given PublicKeySets."""

    guardian_id = "";

    backup: any = {};

    override_rsa = false;
}

export class GuardianBackupChallengeRequest {
    // Request to generate ElectionPartialKeyBackups for the given PublicKeySets."""

    guardian_id = "";
    
    backup: any = {};
}

export class ChallengeVerificationRequest {
    // Request to generate ElectionPartialKeyBackups for the given PublicKeySets."""

    verifier_id = "";
    
    challenge: any = {};
}

export type ElectionPartialKeyChallenge = any;
export class BackupChallengeResponse extends BaseResponse{
    challenge: ElectionPartialKeyChallenge
}

export class GuardianBackupRequest {
    // Request to generate ElectionPartialKeyBackups for the given PublicKeySets."""

    guardian_id = "";
    
    quorum = 0;

    public_keys: any[] = [];
    
    override_rsa = false;
}

export class ApiGuardianQueryResponse extends BaseResponse {
    // Returns a collection of KeyCeremonyGuardians.

    guardians: Guardian[] = []
}


import AssignedGuardian from './assignedGuardian';
import { KeyCeremony } from './keyCeremony';

// TODO Migrate to api folder
export interface KeyCeremonyApi extends GuardianKeyCeremonyApi, MediatorKeyCeremonyApi {}

export interface GuardianKeyCeremonyApi {
    generateElectionKeyPair: (guardian: AssignedGuardian) => Promise<void>;
    shareElectionPublicKey: (guardian: AssignedGuardian) => Promise<void>;
    generateElectionPartialKeyBackup: (guardian: AssignedGuardian) => Promise<void>;
    sharePartialKeyBackups: (guardian: AssignedGuardian) => Promise<void>;
    verifyPartialKeyBackup: (
        backupOwner: AssignedGuardian,
        verifier: AssignedGuardian
    ) => Promise<void>;
}

export interface MediatorKeyCeremonyApi {
    getKeyCeremonyState: () => Promise<KeyCeremony>;
    combineKeys: () => Promise<void>;
}

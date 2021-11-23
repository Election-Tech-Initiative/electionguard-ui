import { AssignedGuardian } from './guardian';
import { KeyCeremonyUi } from './keyCeremony';

/**
 * @interface KeyCeremoneyApi
 * @extends GuardianKeyCeremonyApi, MediatorKeyCeremonyApi
 */
export interface KeyCeremonyApi extends GuardianKeyCeremonyApi, MediatorKeyCeremonyApi {}

/**
 * @interface GuardianKeyCeremonyApi
 * promises for the KeyCeremony for Guardians
 */
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

/**
 * @interface MediatorKeyCeremonyApi
 * promises for the KeyCeremony for Mediator
 */
export interface MediatorKeyCeremonyApi {
    getKeyCeremonyState: () => Promise<KeyCeremonyUi>;
    combineKeys: () => Promise<void>;
}

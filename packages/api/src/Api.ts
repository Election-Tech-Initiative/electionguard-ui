import ElectionRow from './models/ElectionRow';
import User from './models/user';
import AssignedGuardian from './models/assignedGuardian';
import { BaseJointKey, JointKey } from './models/jointKey';
import ManifestPreview from './models/manifestPreview';
import { KeyCeremonyUi, KeyCeremonyGuardianApi } from './models/keyCeremony';
import KeyCeremonyStep from './models/KeyCeremonyStep';

export default interface ElectionGuardApiClient {
    healthCheck: () => boolean;
    getUsersWithGuardianRole(): Promise<User[]>;
    createJointKey(data: BaseJointKey): Promise<boolean>;

    getJointKeys(): Promise<JointKey[]>;

    getElections(): ElectionRow[];
    getAssignedGuardians(): AssignedGuardian[];
    getManifestPreview(): ManifestPreview;

    // key ceremony methods
    getKeyCeremonyGuardians(): KeyCeremonyGuardianApi[];
    setKeyCeremonyGuardianToStep(
        guardian: KeyCeremonyGuardianApi,
        step: KeyCeremonyStep
    ): KeyCeremonyGuardianApi; 
    getKeyCeremonyGuardiansByStep(step: KeyCeremonyStep): KeyCeremonyGuardianApi[];
    getKeyCeremonies(): KeyCeremonyUi[];
    createGuardian(id: string, name: string, sequenceOrder:  number): void;

}


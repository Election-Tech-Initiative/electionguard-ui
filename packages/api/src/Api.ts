import ElectionRow from './models/ElectionRow';
import User from './models/user';
import AssignedGuardian from './models/assignedGuardian';
import { BaseJointKey, JointKey } from './models/jointKey';
import ManifestPreview from './models/manifestPreview';
import { KeyCeremony, KeyCeremonyGuardian } from './models/keyCeremony';
import KeyCeremonyStep from './models/KeyCeremonyStep';

export default interface Api {
    healthCheck: () => boolean;
    getUsersWithGuardianRole(): Promise<User[]>;
    createJointKey(data: BaseJointKey): Promise<boolean>;

    getElections(): ElectionRow[];
    getAssignedGuardians(): AssignedGuardian[];
    getJointKeys(): JointKey[];
    getManifestPreview(): ManifestPreview;

    // key ceremony methods
    getKeyCeremonyGuardians(): KeyCeremonyGuardian[];
    setKeyCeremonyGuardianToStep(
        guardian: KeyCeremonyGuardian,
        step: KeyCeremonyStep
    ): KeyCeremonyGuardian; 
    getKeyCeremonyGuardiansByStep(step: KeyCeremonyStep): KeyCeremonyGuardian[];
    getKeyCeremonies(): KeyCeremony[];
    createGuardian(id: string, name: string, sequenceOrder:  number): void;

    }


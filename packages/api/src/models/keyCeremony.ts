import AssignedGuardian from './assignedGuardian';
import TaskStatus from './taskStatus';

export enum KeyCeremonyStatus {
    Canceled = -1,
    Inactive = 0,
    Active = 1,
    Complete = 2,
}

export interface KeyCeremonyGuardian extends AssignedGuardian {
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

export interface KeyCeremony {
    id: string;
    status: KeyCeremonyStatus;
    name: string;
    numberOfGuardians: number;
    quorum: number;
    guardians: KeyCeremonyGuardian[];
    dateCreated: Date;
}

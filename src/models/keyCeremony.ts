import AssignedGuardian from './assignedGuardian';
import TaskStatus from './taskStatus';

export enum KeyCeremonyStatus {
    Canceled = -1,
    Inactive = 0,
    SharePublicKeys = 1,
    SharePartialKeyBackups = 2,
    VerifyBackups = 3,
    ConfirmReadyToCombine = 4,
    Complete = 5,
}

export interface KeyCeremonyGuardian extends AssignedGuardian {
    sharedPublicKey: TaskStatus;
    sharedPartialKeyBackups: TaskStatus;
    backupsVerified: TaskStatus;
    readyForCombine: TaskStatus;
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

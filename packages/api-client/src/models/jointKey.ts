import { AssignedGuardian } from './guardian';

export interface BaseJointKey {
    name: string;
    numberOfGuardians: number;
    quorum: number;
    guardians: AssignedGuardian[];
}

export interface JointKey extends BaseJointKey {
    id: string;
    dateCreated: Date;
}

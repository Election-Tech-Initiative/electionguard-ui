import AssignedGuardian from './assignedGuardian';

export interface BaseJointKey {
    name: string;
    numberOfGuardians: number;
    quorum: number;
    guardians: AssignedGuardian[];
}

export default interface JointKey extends BaseJointKey {
    id: string;
    dateCreated: Date;
}

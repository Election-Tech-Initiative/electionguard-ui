import { AssignedGuardian } from './guardian';

/**
 * @class BaseJointKey data to descript the joint key
 */
export interface BaseJointKey {
    name: string;
    numberOfGuardians: number;
    quorum: number;
    guardians: AssignedGuardian[];
}

/**
 * @class JointKey data for the joint key with additional data
 * @extends BaseJointKey
 */
export interface JointKey extends BaseJointKey {
    id: string;
    dateCreated: Date;
}

import ElectionRow from './models/ElectionRow';
import User from './models/user';
import AssignedGuardian from './models/assignedGuardian';
import { BaseJointKey } from './models/jointKey';

export default interface Api {
    healthCheck: () => boolean;
    getElections(): ElectionRow[];
    getUsersWithGuardianRole(): User[];
    getAssignedGuardians(): AssignedGuardian[];
    createJointKey(data: BaseJointKey): boolean;
}


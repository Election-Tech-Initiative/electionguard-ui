import Api from './Api';
import AssignedGuardian from './models/assignedGuardian';
import ElectionRow from './models/ElectionRow';
import user from './models/user';
import { BaseJointKey } from './models/jointKey';

export default class ServiceApi implements Api {
    getElections(): ElectionRow[] {
        throw new Error("Method not implemented.");
    };

    getUsersWithGuardianRole(): user[] {
        throw new Error("Method not implemented.");
    };

    getAssignedGuardians(): AssignedGuardian[] {
        throw new Error("Method not implemented.");
    };

    createJointKey(data: BaseJointKey): boolean {
        throw new Error("Method not implemented.");
    };
    
    healthCheck = (): boolean => true;
}
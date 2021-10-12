import AssignedGuardian from '../models/assignedGuardian';
import { GuardianUI } from '../models/guardian';

export type ElectionPolynomial = any;
export type ElectionPartialKeyBackup = any;
export type ElectionPartialKeyChallenge = any;
export type ElectionPartialKeyVerification = any;

export const getAssignedGuardians = (): AssignedGuardian[] => [
    { sequenceOrder: 1, id: '1', name: 'Snow mock' },
    { sequenceOrder: 2, id: '2', name: 'Lannister mock' },
    { sequenceOrder: 3, id: '3', name: 'Magic mock' },
    { sequenceOrder: 4, id: '4', name: 'Stark mock' },
    { sequenceOrder: 5, id: '5', name: 'Targaryen mock' },
];

export const createGuardian = (_id: string, _name: string, _sequenceOrder: number): void => {};

export const getGuardian = async (_guardian_id: string): Promise<GuardianUI | undefined> =>
    undefined;

export default getAssignedGuardians;

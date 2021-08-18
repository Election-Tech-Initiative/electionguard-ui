import Api from "./Api";
import { getElections as mockGetElections } from './mocks/elections';
import { getUsersWithGuardianRole as mockGetUsersWithGuardianRole } from './mocks/users';
import { getAssignedGuardians as mockGetAssignedGuardians } from './mocks/guardians'
import { createJointKey as mockCreateJointKey } from './mocks/jointKey'

export default class MockApi implements Api {
    getElections = mockGetElections;

    getUsersWithGuardianRole = mockGetUsersWithGuardianRole;

    getAssignedGuardians = mockGetAssignedGuardians;

    createJointKey = mockCreateJointKey;

    healthCheck = (): boolean => true;
}
import ElectionGuardApiClient from "./Api";
import { getElections as mockGetElections } from './mocks/elections';
import { getJointKeys as mockGetJointKeys, getManifestPreview as mockGetManifestPreview } from './mocks/electionSetup';
import { getUsersWithGuardianRole as mockGetUsersWithGuardianRole } from './mocks/users';
import { getAssignedGuardians as mockGetAssignedGuardians, createGuardian as mockCreateGuardian } from './mocks/guardians';
import { createJointKey as mockCreateJointKey } from './mocks/jointKey';
import { getKeyCeremonies as mockGetKeyCeremonies, getKeyCeremonyGuardians as mockGetKeyCeremonyGuardians, setKeyCeremonyGuardianToStep as mockSetKeyCeremonyGuardianToStep, getKeyCeremonyGuardiansByStep as mockGetKeyCeremonyGuardiansByStep } from './mocks/keyCeremony';

export default class MockApi implements ElectionGuardApiClient {
    getElections = mockGetElections;

    getUsersWithGuardianRole = mockGetUsersWithGuardianRole;

    getAssignedGuardians = mockGetAssignedGuardians;

    createJointKey = mockCreateJointKey;

    getJointKeys = mockGetJointKeys;

    getManifestPreview = mockGetManifestPreview;

    getKeyCeremonyGuardians = mockGetKeyCeremonyGuardians;

    setKeyCeremonyGuardianToStep = mockSetKeyCeremonyGuardianToStep;
    
    getKeyCeremonyGuardiansByStep = mockGetKeyCeremonyGuardiansByStep;
    
    getKeyCeremonies = mockGetKeyCeremonies;
    
    createGuardian = mockCreateGuardian;

    healthCheck = (): boolean => true;
}
import Api from './Api';
import { getUsersWithGuardianRole as serverGetUsersWithGuardianRole } from './server/users'
import { createJointKey as serverCreateJointKey } from './server/jointKey'
import { getElections as serverGetElections } from './server/elections';
import { getAssignedGuardians as serverGetAssignedGuardians } from './server/guardians'
import { getJointKeys as serverGetJointKeys, getManifestPreview as serverGetManifestPreview } from './server/electionSetup';
import { getKeyCeremonies as serverGetKeyCeremonies, getKeyCeremonyGuardians as serverGetKeyCeremonyGuardians, setKeyCeremonyGuardianToStep as serverSetKeyCeremonyGuardianToStep, getKeyCeremonyGuardiansByStep as serverGetKeyCeremonyGuardiansByStep } from './mocks/keyCeremony';

export default class ServiceApi implements Api {
    getElections = serverGetElections;

    getUsersWithGuardianRole = serverGetUsersWithGuardianRole;

    getAssignedGuardians = serverGetAssignedGuardians;

    createJointKey =  serverCreateJointKey;

    getJointKeys = serverGetJointKeys;

    getManifestPreview = serverGetManifestPreview;

    getKeyCeremonyGuardians = serverGetKeyCeremonyGuardians;

    setKeyCeremonyGuardianToStep = serverSetKeyCeremonyGuardianToStep;
    
    getKeyCeremonyGuardiansByStep = serverGetKeyCeremonyGuardiansByStep;
    
    getKeyCeremonies = serverGetKeyCeremonies;

    healthCheck = (): boolean => true;
}
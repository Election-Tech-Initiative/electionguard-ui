import ElectionGuardApiClient from './Api';
import { getUsersWithGuardianRole as serverGetUsersWithGuardianRole } from './server/users';
import { createJointKey as serverCreateJointKey } from './server/jointKey';
import { getElection as serverGetElection } from './server/elections';
import {
    getAssignedGuardians as serverGetAssignedGuardians,
    createGuardian as serverCreateGuardian,
} from './server/guardians';
import {
    getJointKeys as serverGetJointKeys,
    getManifestPreview as serverGetManifestPreview,
} from './server/electionSetup';
import {
    getKeyCeremonies as serverGetKeyCeremonies,
    getKeyCeremonyGuardians as serverGetKeyCeremonyGuardians,
    setKeyCeremonyGuardianToStep as serverSetKeyCeremonyGuardianToStep,
    getKeyCeremonyGuardiansByStep as serverGetKeyCeremonyGuardiansByStep,
} from './server/keyCeremony';

export default class ServiceApi implements ElectionGuardApiClient {
    getElection = serverGetElection;

    getUsersWithGuardianRole = serverGetUsersWithGuardianRole;

    getAssignedGuardians = serverGetAssignedGuardians;

    createJointKey = serverCreateJointKey;

    getJointKeys = serverGetJointKeys;

    getManifestPreview = serverGetManifestPreview;

    getKeyCeremonyGuardians = serverGetKeyCeremonyGuardians;

    setKeyCeremonyGuardianToStep = serverSetKeyCeremonyGuardianToStep;

    getKeyCeremonyGuardiansByStep = serverGetKeyCeremonyGuardiansByStep;

    getKeyCeremonies = serverGetKeyCeremonies;

    createGuardian = serverCreateGuardian;

    healthCheck = (): boolean => true;
}

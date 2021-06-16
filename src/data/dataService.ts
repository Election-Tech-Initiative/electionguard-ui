import ElectionRow from '../components/ElectionTable/ElectionRow';
import AssignedGuardian from '../models/assignedGuardian';
import JointKey from '../models/jointKey';
import ManifestPreview from '../models/manifestPreview';
import User from '../models/user';
import { mockElectionSetup, mockElections, mockGuardians, mockUsers } from './mockData';
import { serverElectionSetup, serverElections, serverGuardians, serverUsers } from './serverData';

let jointKeysFunction: { (): JointKey[] };
let usersWithGuardianRoleFunction: { (): User[] };
let electionsFunction: { (): ElectionRow[] };
let manifestPreviewFunction: { (): ManifestPreview };
let assignedGuardiansFunction: { (): AssignedGuardian[] };

if (process.env.REACT_APP_DATA === 'MOCK') {
    jointKeysFunction = mockElectionSetup.getJointKeys;
    usersWithGuardianRoleFunction = mockUsers.getUsersWithGuardianRole;
    electionsFunction = mockElections.getElections;
    manifestPreviewFunction = mockElectionSetup.getManifestPreview;
    assignedGuardiansFunction = mockGuardians.getAssignedGuardians;
} else {
    jointKeysFunction = serverElectionSetup.getJointKeys;
    usersWithGuardianRoleFunction = serverUsers.getUsersWithGuardianRole;
    electionsFunction = serverElections.getElections;
    manifestPreviewFunction = serverElectionSetup.getManifestPreview;
    assignedGuardiansFunction = serverGuardians.getAssignedGuardians;
}

const joint = jointKeysFunction;
const users = usersWithGuardianRoleFunction;
const elect = electionsFunction;
const maniPrev = manifestPreviewFunction;
const assignGuard = assignedGuardiansFunction;

export { joint as getJointKeys };
export { users as getUsersWithGuardianRole };
export { elect as getElections };
export { maniPrev as getManifestPreview };
export { assignGuard as getAssignedGuardians };

import ElectionRow from '../components/ElectionTable/ElectionRow';
import AssignedGuardian from '../models/assignedGuardian';
import JointKey from '../models/jointKey';
import { KeyCeremony, KeyCeremonyGuardian, KeyCeremonyStatus } from '../models/keyCeremony';
import { KeyCeremonyApi } from '../models/KeyCeremonyApi';
import ManifestPreview from '../models/manifestPreview';
import User from '../models/user';
import {
    mockElectionSetup,
    mockElections,
    mockGuardians,
    mockKeyCeremony,
    mockKeyCeremonyApi,
    mockUsers,
} from './mockData';
import {
    serverElectionSetup,
    serverElections,
    serverGuardians,
    serverKeyCeremony,
    serverKeyCeremonyApi,
    serverUsers,
} from './serverData';

let jointKeysFunction: { (): JointKey[] };
let usersWithGuardianRoleFunction: { (): User[] };
let electionsFunction: { (): ElectionRow[] };
let manifestPreviewFunction: { (): ManifestPreview };
let assignedGuardiansFunction: { (): AssignedGuardian[] };
let getKeyCeremonyGuardiansFunction: { (): KeyCeremonyGuardian[] };
let getKeyCeremonyGuardiansByStepFunction: { (step: KeyCeremonyStep): KeyCeremonyGuardian[] };
let getKeyCeremonyGuardiansMidwayFunction: { (): KeyCeremonyGuardian[] };
let getKeyCeremoniesFunction: { (): KeyCeremony[] };
//export default class MockKeyCeremonyApi implements KeyCeremonyApi {

if (process.env.REACT_APP_DATA === 'MOCK') {
    jointKeysFunction = mockElectionSetup.getJointKeys;
    usersWithGuardianRoleFunction = mockUsers.getUsersWithGuardianRole;
    electionsFunction = mockElections.getElections;
    manifestPreviewFunction = mockElectionSetup.getManifestPreview;
    assignedGuardiansFunction = mockGuardians.getAssignedGuardians;
    getKeyCeremonyGuardiansFunction = mockKeyCeremony.getKeyCeremonyGuardians;
    getKeyCeremonyGuardiansByStepFunction = mockKeyCeremony.getKeyCeremonyGuardiansByStep;
    getKeyCeremonyGuardiansMidwayFunction = mockKeyCeremony.getKeyCeremonyGuardiansMidway;
    getKeyCeremoniesFunction = mockKeyCeremony.getKeyCeremonies;
} else {
    jointKeysFunction = serverElectionSetup.getJointKeys;
    usersWithGuardianRoleFunction = serverUsers.getUsersWithGuardianRole;
    electionsFunction = serverElections.getElections;
    manifestPreviewFunction = serverElectionSetup.getManifestPreview;
    assignedGuardiansFunction = serverGuardians.getAssignedGuardians;
    getKeyCeremonyGuardiansFunction = serverKeyCeremony.getKeyCeremonyGuardians;
    getKeyCeremonyGuardiansByStepFunction = serverKeyCeremony.getKeyCeremonyGuardiansByStep;
    getKeyCeremonyGuardiansMidwayFunction = serverKeyCeremony.getKeyCeremonyGuardiansMidway;
    getKeyCeremoniesFunction = serverKeyCeremony.getKeyCeremonies;
}

const joint = jointKeysFunction;
const users = usersWithGuardianRoleFunction;
const elect = electionsFunction;
const maniPrev = manifestPreviewFunction;
const assignGuard = assignedGuardiansFunction;
const keyCeremonyGuardian = getKeyCeremonyGuardiansFunction;
const keyCeremonyGuardiansByStep = getKeyCeremonyGuardiansByStepFunction;
const keyCeremonyGuardiansMidway = getKeyCeremonyGuardiansMidwayFunction;
const keyCeremonies = getKeyCeremoniesFunction;

export { joint as getJointKeys };
export { users as getUsersWithGuardianRole };
export { elect as getElections };
export { maniPrev as getManifestPreview };
export { assignGuard as getAssignedGuardians };
export { keyCeremonyGuardian as getKeyCeremonyGuardians };
export { keyCeremonyGuardiansByStep as getKeyCeremonyGuardiansByStepFunction };
export { keyCeremonyGuardiansMidway as getKeyCeremonyGuardiansMidwayFunction };
export { keyCeremonies as getKeyCeremoniesFunction };

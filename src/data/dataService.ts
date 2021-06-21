import ElectionRow from '../components/ElectionTable/ElectionRow';
import KeyCeremonyStep from '../components/KeyCeremonyWizard/KeyCeremonyStep';
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
let setKeyCeremonyGuardianToStepFunction: {
    (guardian: KeyCeremonyGuardian, step: KeyCeremonyStep): KeyCeremonyGuardian;
};
let getKeyCeremoniesFunction: { (): KeyCeremony[] };

if (process.env.REACT_APP_DATA === 'MOCK') {
    jointKeysFunction = mockElectionSetup.getJointKeys;
    usersWithGuardianRoleFunction = mockUsers.getUsersWithGuardianRole;
    electionsFunction = mockElections.getElections;
    manifestPreviewFunction = mockElectionSetup.getManifestPreview;
    assignedGuardiansFunction = mockGuardians.getAssignedGuardians;
    getKeyCeremonyGuardiansFunction = mockKeyCeremony.getKeyCeremonyGuardians;
    getKeyCeremonyGuardiansByStepFunction = mockKeyCeremony.getKeyCeremonyGuardiansByStep;
    setKeyCeremonyGuardianToStepFunction = mockKeyCeremony.setKeyCeremonyGuardianToStep;
    getKeyCeremoniesFunction = mockKeyCeremony.getKeyCeremonies;
} else {
    jointKeysFunction = serverElectionSetup.getJointKeys;
    usersWithGuardianRoleFunction = serverUsers.getUsersWithGuardianRole;
    electionsFunction = serverElections.getElections;
    manifestPreviewFunction = serverElectionSetup.getManifestPreview;
    assignedGuardiansFunction = serverGuardians.getAssignedGuardians;
    getKeyCeremonyGuardiansFunction = serverKeyCeremony.getKeyCeremonyGuardians;
    getKeyCeremonyGuardiansByStepFunction = serverKeyCeremony.getKeyCeremonyGuardiansByStep;
    setKeyCeremonyGuardianToStepFunction = serverKeyCeremony.setKeyCeremonyGuardianToStep;
    getKeyCeremoniesFunction = serverKeyCeremony.getKeyCeremonies;
}

const joint = jointKeysFunction;
const users = usersWithGuardianRoleFunction;
const elect = electionsFunction;
const maniPrev = manifestPreviewFunction;
const assignGuard = assignedGuardiansFunction;
const keyCeremonyGuardian = getKeyCeremonyGuardiansFunction;
const keyCeremonyGuardiansByStep = getKeyCeremonyGuardiansByStepFunction;
const keyCeremonyGuardianToStep = setKeyCeremonyGuardianToStepFunction;
const keyCeremonies = getKeyCeremoniesFunction;

export { joint as getJointKeys };
export { users as getUsersWithGuardianRole };
export { elect as getElections };
export { maniPrev as getManifestPreview };
export { assignGuard as getAssignedGuardians };
export { keyCeremonyGuardian as getKeyCeremonyGuardians };
export { keyCeremonyGuardiansByStep as getKeyCeremonyGuardiansByStep };
export { keyCeremonyGuardianToStep as setKeyCeremonyGuardianToStep };
export { keyCeremonies as getKeyCeremonies };

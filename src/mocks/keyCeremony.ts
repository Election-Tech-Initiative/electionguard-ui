import { KeyCeremony, KeyCeremonyGuardian, KeyCeremonyStatus } from '../models/keyCeremony';
import TaskStatus from '../models/taskStatus';
import { getAssignedGuardians } from './guardians';

export const getKeyCeremonies = (): KeyCeremony[] => [
    {
        id: 'key-ceremony-1',
        status: KeyCeremonyStatus.Inactive,
        name: 'Montgomery County Election',
        numberOfGuardians: 5,
        quorum: 3,
        dateCreated: new Date(),
        guardians: [],
    },
];

export const getKeyCeremonyGuardians = (): KeyCeremonyGuardian[] =>
    getAssignedGuardians().map((guardian) => ({
        ...guardian,
        sharedPublicKey: TaskStatus.Incomplete,
        sharedPartialKeyBackups: TaskStatus.Incomplete,
        backupsVerified: TaskStatus.Incomplete,
        readyForCombine: TaskStatus.Incomplete,
    }));

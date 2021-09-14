import KeyCeremonyStep from '../models/KeyCeremonyStep';
import { KeyCeremony, KeyCeremonyGuardian, KeyCeremonyStatus } from '../models/keyCeremony';
import TaskStatus from '../models/taskStatus';
import { getAssignedGuardians } from './guardians';

export const getKeyCeremonyGuardians = (): KeyCeremonyGuardian[] =>
    getAssignedGuardians().map((guardian) => ({
        ...guardian,
        keypairCreated: TaskStatus.Incomplete,
        backupsCreated: TaskStatus.Incomplete,
        publicKeyShared: TaskStatus.Incomplete,
        backupsShared: TaskStatus.Incomplete,
        backupsVerified: TaskStatus.Incomplete,
        verifications: [],
    }));

export const setKeyCeremonyGuardianToStep = (
    guardian: KeyCeremonyGuardian,
    step: KeyCeremonyStep
): KeyCeremonyGuardian => ({
    ...guardian,
    keypairCreated:
        step > KeyCeremonyStep.CreateKeyPair ? TaskStatus.Complete : TaskStatus.Incomplete,
    backupsCreated:
        step > KeyCeremonyStep.CreateBackups ? TaskStatus.Complete : TaskStatus.Incomplete,
    publicKeyShared:
        step > KeyCeremonyStep.SharePublicKey ? TaskStatus.Complete : TaskStatus.Incomplete,
    backupsShared:
        step > KeyCeremonyStep.ShareBackups ? TaskStatus.Complete : TaskStatus.Incomplete,
    backupsVerified:
        step > KeyCeremonyStep.VerifyBackups ? TaskStatus.Complete : TaskStatus.Incomplete,
    verifications: getAssignedGuardians()
        .filter((g) => g.id !== guardian.id)
        .map((g) => ({
            verifier: guardian,
            owner: g,
            verified: TaskStatus.Incomplete,
        })),
});

export const getKeyCeremonyGuardiansByStep = (step: KeyCeremonyStep): KeyCeremonyGuardian[] =>
    getKeyCeremonyGuardians().map((guardian) => setKeyCeremonyGuardianToStep(guardian, step));

export const getKeyCeremonies = (): KeyCeremony[] => [
    {
        id: 'key-ceremony-1',
        status: KeyCeremonyStatus.Active,
        name: 'Montgomery County Election',
        numberOfGuardians: 5,
        quorum: 3,
        guardians: getKeyCeremonyGuardians(),
        dateCreated: new Date(),
    },
];

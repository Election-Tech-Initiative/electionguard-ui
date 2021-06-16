import KeyCeremonyStep from '../components/KeyCeremonyWizard/KeyCeremonyStep';
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

export const getKeyCeremonyGuardiansByStep = (step: KeyCeremonyStep): KeyCeremonyGuardian[] =>
    getAssignedGuardians().map((guardian) => ({
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
                verifier: g,
                owner: guardian,
                verified: TaskStatus.Complete,
            })),
    }));

export const getKeyCeremonyGuardiansMidway = (): KeyCeremonyGuardian[] =>
    getAssignedGuardians().map((guardian) => ({
        ...guardian,
        keypairCreated: TaskStatus.Complete,
        backupsCreated: TaskStatus.Incomplete,
        publicKeyShared: TaskStatus.Complete,
        backupsShared: TaskStatus.Complete,
        backupsVerified: TaskStatus.Incomplete,
        verifications: getAssignedGuardians()
            .filter((g) => g.id !== guardian.id)
            .map((g) => ({
                verifier: g,
                owner: guardian,
                verified: TaskStatus.Complete,
            })),
    }));

export const getKeyCeremonies = (): KeyCeremony[] => [
    {
        id: 'key-ceremony-1',
        status: KeyCeremonyStatus.Active,
        name: 'Montgomery County Election',
        numberOfGuardians: 5,
        quorum: 3,
        guardians: getKeyCeremonyGuardiansMidway(),
        dateCreated: new Date(),
    },
];

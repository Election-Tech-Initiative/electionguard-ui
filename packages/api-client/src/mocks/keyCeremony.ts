import KeyCeremonyStep from '../models/KeyCeremonyStep';
import {
    KeyCeremonyGuardianApi,
    // KeyCeremonyStatus,
    KeyCeremony,
    KeyCeremonyState,
    ElectionJointKey,
    ElectionPartialKeyVerification,
    KeyCeremonyGuardianState,
} from '../models/keyCeremony';
import { TaskStatus } from '../models/taskStatus';
import { getAssignedGuardians } from './guardians';
import { ElectionPartialKeyChallenge, ElectionPartialKeyBackup } from '../models/guardian';
import { ElectionPublicKey, GuardianId, PublicKeySet } from '../models/election';

function generateMockElectionJointKey(): ElectionJointKey {
    return 'B1CCFB49E3D0EA64FB0FE059291BE8C29AF358DFF7FCF8D546E1D846E120A7ECB9FB0BF4B1842F7FED78E57C3583A10154706194417D732CD88753BEB567267F004B6B14BF77AD60C552315072B6023A983241F902DD2B74B815F7F29ACC67D784858BDBB27D3865A50BAC6619E58B57B7758CFF6830A22E169F63A605164C7F1BA2CA790ACD5854CF8C980D01060EAADC484FC0F3554098581BB241FA60ACA932B8103BC8BFEC7D7F5779DEDB6837D084672ABB4BFA17D49C41DB8D6A5435827C1C1C86CA3EBA585181EEC64C76613D19CF4C97A617D0B19EF33A190777FCCE40C8667D9927005B9291B64E7FD0A589384B588717A6A5E632D3226BB8FC482369744881773BEC3B8EAAA37071B0797F5FA5E048A029693585AF68C006B19DE2B94E19334607ECBF69AE5D4C3FEDFC7B72D509D1139E58DDC907D1F43F9EEE90BAAB9D0C1D48E0E5D01EB259CAD7F7F24CE68AAD57E5C974032931C7EAFEBF1238F2FA8D5E5AEC297164E78E0E809E2F61B1228B7EF319837CE085E6DA47DF949027DC54C7A648BC0F2A6032184A9411966C48F528B4168B5633566CD481489CB1FAB52183658EB487423FB18A120E8B30832338A4CB72092734A4D01DB47AE0CC3C48FCA02CF432F5C334FC7C900C57BD4D506B8B84A7030863DC46463EC198734EC7D4CB8C7600CA2137EE36512BE1DAA076616C911A4BBE91B9E43';
}

export const getKeyCeremonyGuardians = (): KeyCeremonyGuardianApi[] =>
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
    guardian: KeyCeremonyGuardianApi,
    step: KeyCeremonyStep
): KeyCeremonyGuardianApi => ({
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

export const getKeyCeremonyGuardiansByStep = (step: KeyCeremonyStep): KeyCeremonyGuardianApi[] =>
    getKeyCeremonyGuardians().map((guardian) => setKeyCeremonyGuardianToStep(guardian, step));

export const getKeyCeremonies = async (_key_name: string): Promise<KeyCeremony[] | undefined> =>
    undefined;

export const putKeyCeremony = async (
    _key_name: string,
    _number_of_guardians: number,
    _quorum: number,
    _guardian_ids: GuardianId[]
): Promise<boolean | undefined> => true;

export const getKeyCeremonyState = async (
    _key_name: string
): Promise<KeyCeremonyState | undefined> => KeyCeremonyState.CREATED;

export const findKeyCeremonies = async (
    _skip: number,
    _limit: number,
    _ballot_id: string
): Promise<KeyCeremony[] | undefined> => [
    {
        key_name: 'key-ceremony-1',
        state: KeyCeremonyState.CREATED,
        number_of_guardians: 2,
        quorum: 1,
        guardian_ids: ['guardian-1', 'guardian-2'],
        guardian_status: new Map<GuardianId, KeyCeremonyGuardianState>(),
        elgamal_public_key: null,
        commitment_hash: null,
    },
];

export const openKeyCeremony = async (_key_name: string): Promise<boolean | undefined> => true;

export const closeKeyCeremony = async (_key_name: string): Promise<boolean | undefined> => true;

export const challengeKeyCeremony = async (_key_name: string): Promise<boolean | undefined> => true;

export const challengeVerifyKeyCeremony = async (_key_name: string): Promise<boolean | undefined> =>
    true;

export const cancelKeyCeremony = async (_key_name: string): Promise<boolean | undefined> => true;

export const getJointKeyKeyCeremony = async (
    _key_name: string
): Promise<ElectionJointKey | undefined> => generateMockElectionJointKey();

export const combineKeyCeremony = async (
    _key_name: string,
    _election_public_keys: ElectionPublicKey[]
): Promise<ElectionJointKey | undefined> => generateMockElectionJointKey();

export const publishKeyCeremony = async (
    _key_name: string
): Promise<ElectionJointKey | undefined> => generateMockElectionJointKey();

export const announceGuardianKeyCeremony = async (
    _key_name: string,
    _public_keys: PublicKeySet
): Promise<ElectionJointKey | undefined> => generateMockElectionJointKey();

export const backupGuardianKeyCeremony = async (
    _key_name: string,
    _guardian_id: string,
    _backups: ElectionPartialKeyBackup[]
): Promise<ElectionJointKey | undefined> => generateMockElectionJointKey();

export const verifyGuardianKeyCeremony = async (
    _key_name: string,
    _guardian_id: string,
    _verifications: ElectionPartialKeyVerification[]
): Promise<ElectionJointKey | undefined> => generateMockElectionJointKey();

export const challengeGuardianKeyCeremony = async (
    _key_name: string,
    _guardian_id: string,
    _challenges: ElectionPartialKeyChallenge[]
): Promise<ElectionJointKey | undefined> => generateMockElectionJointKey();

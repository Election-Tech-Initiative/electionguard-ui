import { BaseJointKey, JointKey } from '../models/jointKey';
import { ManifestPreview, Manifest } from '../models/manifestPreview';
import {
    ElectionPartialKeyVerification,
    KeyCeremonyDeprecated,
    ElectionJointKey,
    ElementModQ,
    KeyCeremonyGuardian,
    KeyCeremonyState,
} from '../models/keyCeremony';
import {
    CiphertextElectionContext,
    Election,
    ElectionConstants,
    ElectionManifest,
    ElectionPublicKey,
    GuardianId,
    PublicKeySet,
} from '../models/election';
import {
    BallotInventory,
    CiphertextBallot,
    DecryptedBallots,
    DecryptionShare,
    PlaintextBallot,
    SubmittedBallot,
} from '../models/ballot';
import {
    ElectionPartialKeyChallenge,
    Guardian,
    PublicKeySetApi,
    ElectionPartialKeyBackup,
} from '../models/guardian';
import { CiphertextTally, CiphertextTallyDecryptionShare, PlaintextTally } from '../models/tally';
import { Schema } from '../models/base';

export interface ElectionGuardMediatorApiClient {
    getBallot(election_id: string, ballot_id: string): Promise<CiphertextBallot[] | undefined>;

    getBallotInventory(election_id: string): Promise<BallotInventory | undefined>;

    findBallots(
        election_id: string,
        skip: number,
        limit: number,
        ballot_id: string
    ): Promise<CiphertextBallot[] | undefined>;

    castBallots(
        election_id: string,
        manifest: ElectionManifest,
        context: CiphertextElectionContext,
        ballots: CiphertextBallot[]
    ): Promise<boolean | undefined>;

    spoilBallots(
        election_id: string,
        manifest: ElectionManifest,
        context: CiphertextElectionContext,
        ballots: CiphertextBallot[]
    ): Promise<boolean | undefined>;

    submitBallots(
        election_id: string,
        manifest: ElectionManifest,
        context: CiphertextElectionContext,
        ballots: CiphertextBallot[]
    ): Promise<boolean | undefined>;

    validateBallot(
        ballot: CiphertextBallot,
        manifest: ElectionManifest,
        context: CiphertextElectionContext,
        schema_override: Schema
    ): Promise<boolean | undefined>;

    decryptBallot(
        encrypted_ballots: SubmittedBallot[],
        shares: Map<string, DecryptionShare[]>,
        context: CiphertextElectionContext
    ): Promise<DecryptedBallots | undefined>;

    encryptBallot(
        election_id: string,
        seed_hash: string,
        ballots: PlaintextBallot[]
    ): Promise<CiphertextBallot[] | undefined>;

    getConstants(): Promise<ElectionConstants | undefined>;

    getElection(election_id: string): Promise<Election[] | undefined>;

    findElection(filter: any, skip: number, limit: number): Promise<Election[] | undefined>;

    openElection(election_id: string): Promise<boolean | undefined>;

    closeElection(election_id: string): Promise<boolean | undefined>;

    publishElection(election_id: string): Promise<boolean | undefined>;

    makeContextElection(
        elgamal_public_key: string,
        commitment_hash: string,
        number_of_guardians: number,
        quorum: number,
        manifest_hash: string,
        manifest: string
    ): Promise<CiphertextElectionContext | undefined>;

    getKeyCeremonies(key_name: string): Promise<KeyCeremonyDeprecated[] | undefined>;

    putKeyCeremony(
        key_name: string,
        number_of_guardians: number,
        quorum: number,
        guardian_ids: GuardianId[]
    ): Promise<boolean | undefined>;

    getKeyCeremonyState(key_name: string): Promise<KeyCeremonyState | undefined>;

    findKeyCeremonies(
        skip: number,
        limit: number,
        _ballot_id: string
    ): Promise<KeyCeremonyDeprecated[] | undefined>;

    openKeyCeremony(key_name: string): Promise<boolean | undefined>;

    closeKeyCeremony(key_name: string): Promise<boolean | undefined>;

    challengeKeyCeremony(key_name: string): Promise<boolean | undefined>;

    challengeVerifyKeyCeremony(key_name: string): Promise<boolean | undefined>;

    cancelKeyCeremony(key_name: string): Promise<boolean | undefined>;

    getJointKeys(): Promise<JointKey[]>;

    postJointKey(data: BaseJointKey): Promise<boolean | undefined>;

    getJointKeyKeyCeremony(key_name: string): Promise<ElectionJointKey | undefined>;

    combineKeyCeremony(
        key_name: string,
        election_public_keys: ElectionPublicKey[]
    ): Promise<ElectionJointKey | undefined>;

    publishKeyCeremony(key_name: string): Promise<ElectionJointKey | undefined>;

    announceGuardianKeyCeremony(
        key_name: string,
        public_keys: PublicKeySet
    ): Promise<ElectionJointKey | undefined>;

    backupGuardianKeyCeremony(
        key_name: string,
        guardian_id: string,
        backups: ElectionPartialKeyBackup[]
    ): Promise<ElectionJointKey | undefined>;

    verifyGuardianKeyCeremony(
        key_name: string,
        guardian_id: string,
        verifications: ElectionPartialKeyVerification[]
    ): Promise<ElectionJointKey | undefined>;

    challengeGuardianKeyCeremony(
        key_name: string,
        guardian_id: string,
        challenges: ElectionPartialKeyChallenge[]
    ): Promise<ElectionJointKey | undefined>;

    getGuardians(key_name: string, guardian_id: string): Promise<KeyCeremonyGuardian[] | undefined>;

    putGuardians(data: KeyCeremonyGuardian): Promise<boolean | undefined>;

    postGuardians(data: KeyCeremonyGuardian): Promise<boolean | undefined>;

    findKeyGuardians(
        skip: number,
        limit: number,
        guardian_id: string
    ): Promise<KeyCeremonyGuardian[] | undefined>;

    getManifest(manifest_hash: string): Promise<Manifest[] | undefined>;

    putManifest(manifest: ElectionManifest): Promise<ElementModQ | undefined>;

    findManifest(skip: number, limit: number, manifest_id: string): Promise<Manifest[] | undefined>;

    validateManifest(manifest: ElectionManifest): Promise<string | undefined>;

    getTally(election_id: string, tally_name: string): Promise<CiphertextTally | undefined>;

    postTally(election_id: string, tally_name: string): Promise<CiphertextTally | undefined>;

    findTally(
        election_id: string,
        skip: number,
        limit: number,
        filter: any
    ): Promise<CiphertextTally[] | undefined>;

    decryptTally(
        election_id: string,
        tally_name: string,
        restart: boolean
    ): Promise<PlaintextTally[] | undefined>;

    decryptShareTally(
        election_id: string,
        tally_name: string
    ): Promise<CiphertextTallyDecryptionShare[] | undefined>;

    decryptSharePostTally(
        guardian_id: string,
        encrypted_tally: CiphertextTally,
        context: CiphertextElectionContext
    ): Promise<CiphertextTallyDecryptionShare[] | undefined>;

    findTallyDecrypt(
        tally_name: string,
        skip: number,
        limit: number
    ): Promise<CiphertextTallyDecryptionShare[] | undefined>;

    postShareTally(share: CiphertextTallyDecryptionShare): Promise<boolean | undefined>;
}

export interface ElectionGuardGuardianApiClient {
    decryptSharesBallot(
        encrypted_ballots: SubmittedBallot[],
        id: string,
        context: CiphertextElectionContext
    ): Promise<DecryptionShare[] | undefined>;

    getGuardian(guardian_id: string): Promise<Guardian | undefined>;

    getGuardianPublicKeys(guardian_id: string): Promise<PublicKeySetApi[] | undefined>;

    postGuardian(
        key_name: string,
        guardian_id: string,
        name: string,
        sequence_order: number
    ): Promise<PublicKeySet | undefined>;

    backupGuardian(
        guardian_id: string,
        quorum: number,
        public_keys: [],
        override_rsa: boolean
    ): Promise<ElectionPartialKeyBackup[] | undefined>;

    backupVerificationGuardian(
        guardian_id: string,
        backup: any,
        override_rsa: boolean
    ): Promise<boolean | undefined>;

    backupChallengeGuardian(
        guardian_id: string,
        backup: any
    ): Promise<ElectionPartialKeyChallenge | undefined>;

    verifyChallengeGuardian(
        verifier_id: string,
        challenge: any
    ): Promise<ElectionPartialKeyVerification | undefined>;

    findGuardians(): Promise<Guardian[] | undefined>;

    decryptShareTally(
        election_id: string,
        tally_name: string
    ): Promise<CiphertextTallyDecryptionShare[] | undefined>;

    decryptSharePostTally(
        guardian_id: string,
        encrypted_tally: CiphertextTally,
        context: CiphertextElectionContext
    ): Promise<CiphertextTallyDecryptionShare[] | undefined>;

    getManifestPreview(): ManifestPreview;
}

export default ElectionGuardGuardianApiClient;

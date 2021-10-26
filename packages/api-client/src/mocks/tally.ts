/* eslint-disable max-classes-per-file */
import { BallotId, DecryptionShare } from '../models/ballot';
import { CiphertextElectionContext } from '../models/election';
import {
    CiphertextTally,
    CiphertextTallyDecryptionShare,
    PlaintextTally,
    PlaintextTallyState,
} from '../models/tally';

export const decryptShareTally = async (
    election_id: string,
    tally_name: string
): Promise<CiphertextTallyDecryptionShare[] | undefined> => [
    {
        election_id,
        tally_name,
        guardian_id: 'guardian-1',
        tally_share: {},
        // The EG Decryptionshare that includes a share for each contest in the election."""
        ballot_shares: new Map<BallotId, DecryptionShare>(),
    },
];

export const decryptSharePostTally = async (
    guardian_id: string,
    _encrypted_tally: CiphertextTally,
    _context: CiphertextElectionContext
): Promise<CiphertextTallyDecryptionShare[] | undefined> => [
    {
        election_id: 'election-1',
        tally_name: 'tally-1',
        guardian_id,
        tally_share: {},
        // The EG Decryptionshare that includes a share for each contest in the election."""
        ballot_shares: new Map<BallotId, DecryptionShare>(),
    },
];

export const getTallyDecrypt = async (
    election_id: string,
    tally_name: string,
    guardian_id: string
): Promise<CiphertextTallyDecryptionShare[] | undefined> => [
    {
        election_id,
        tally_name,
        guardian_id,
        tally_share: {},
        // The EG Decryptionshare that includes a share for each contest in the election."""
        ballot_shares: new Map<BallotId, DecryptionShare>(),
    },
];

export const postShareTally = async (
    _share: CiphertextTallyDecryptionShare
): Promise<boolean | undefined> => true;

export const findTallyDecrypt = async (
    tally_name: string,
    _skip: number,
    _limit: number
): Promise<CiphertextTallyDecryptionShare[] | undefined> => [
    {
        election_id: 'election-1',
        tally_name,
        guardian_id: 'guardian-1',
        tally_share: {},
        // The EG Decryptionshare that includes a share for each contest in the election."""
        ballot_shares: new Map<BallotId, DecryptionShare>(),
    },
];

export const getTally = async (
    election_id: string,
    tally_name: string
): Promise<CiphertextTally | undefined> => ({
    election_id,
    tally_name,
    created: new Date(),
    tally: {},
});

export const postTally = async (
    election_id: string,
    tally_name: string
): Promise<CiphertextTally | undefined> => ({
    election_id,
    tally_name,
    created: new Date(),
    tally: {},
});

export const findTally = async (
    election_id: string,
    _skip: number,
    _limit: number,
    _filter: any
): Promise<CiphertextTally[] | undefined> => [
    {
        election_id,
        tally_name: 'tally-1',
        created: new Date(),
        tally: {},
    },
];

export const decryptTally = async (
    election_id: string,
    tally_name: string,
    _restart: boolean
): Promise<PlaintextTally[] | undefined> => [
    {
        // A plaintext tally for a specific election."""
        election_id,
        tally_name,
        created: new Date(),
        state: PlaintextTallyState.CREATED,
        tally: {},
    },
];

export default decryptShareTally;

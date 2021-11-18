/* eslint-disable max-classes-per-file */
import { BallotId, DecryptionShare } from './ballot';
import { BaseRequest, BaseResponse } from './base';
import { CiphertextElectionContext } from './election';

export type ElectionGuardCiphertextTally = any;
export type ElectionGuardPlaintextTally = any;

export class CiphertextTallyDecryptionShare {
    /*
    A DecryptionShare provided by a guardian for a specific tally.

    Optionally can include ballot_shares for challenge ballots.
    */

    election_id = '';

    tally_name = '';

    guardian_id = '';

    tally_share: DecryptionShare;
    // The EG Decryptionshare that includes a share for each contest in the election.

    ballot_shares: Map<BallotId, DecryptionShare> = new Map<BallotId, DecryptionShare>();
    // A collection of shares for each challenge ballot.
}

export class CiphertextTally {
    // A Tally for a specific election.

    election_id = '';

    tally_name = '';

    created = new Date();

    tally: ElectionGuardCiphertextTally;
    // The full electionguard CiphertextTally that includes the cast and spoiled ballot id's.
}

export class DecryptionShareResponse extends BaseResponse {
    shares: CiphertextTallyDecryptionShare[] = [];
}

export class DecryptTallyShareRequest {
    guardian_id = '';

    encrypted_tally: CiphertextTally = new CiphertextTally();

    context: CiphertextElectionContext = {};
}

export class DecryptionShareRequest extends BaseRequest {
    // A request to submit a decryption share.

    share: CiphertextTallyDecryptionShare = new CiphertextTallyDecryptionShare();
}

export class CiphertextTallyQueryResponse extends BaseResponse {
    // A collection of Ciphertext Tallies.

    tallies: CiphertextTally[] = [];
}

export enum PlaintextTallyState {
    CREATED = 'CREATED',
    PROCESSING = 'PROCESSING',
    ERROR = 'ERROR',
    COMPLETE = 'COMPLETE',
}

export class PlaintextTally {
    // A plaintext tally for a specific election.

    election_id = '';

    tally_name = '';

    created: Date = new Date();

    state: PlaintextTallyState = PlaintextTallyState.ERROR;

    tally: ElectionGuardPlaintextTally;
}

export class PlaintextTallyQueryResponse extends BaseResponse {
    // A collection of Plaintext Tallies.

    tallies: PlaintextTally[] = [];
}

export class DecryptTallyRequest extends BaseRequest {
    // A request to decrypt a specific tally.  Can optionally include the tally to decrypt.

    election_id = '';

    tally_name = '';
}

export default DecryptionShareResponse;

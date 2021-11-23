/* eslint-disable max-classes-per-file */
import { BallotId, DecryptionShare } from './ballot';
import { BaseRequest, BaseResponse } from './base';
import { CiphertextElectionContext } from './election';

export type ElectionGuardCiphertextTally = any;
export type ElectionGuardPlaintextTally = any;

/**
 * @class CiphertextTallyDecryptionShare
 * A DecryptionShare provided by a guardian for a specific tally.
 * Optionally can include ballot_shares for challenge ballots.
 */
export class CiphertextTallyDecryptionShare {
    election_id = '';

    tally_name = '';

    guardian_id = '';

    tally_share: DecryptionShare;

    ballot_shares: Map<BallotId, DecryptionShare> = new Map<BallotId, DecryptionShare>();
}

/**
 * @class CiphertextTally
 * A Tally for a specific election.
 */
export class CiphertextTally {
    election_id = '';

    tally_name = '';

    created = new Date();

    tally: ElectionGuardCiphertextTally;
}

/**
 * @class DecryptionShareResponse reply from server with decryption tally shares
 * @extends BaseResponse
 */
export class DecryptionShareResponse extends BaseResponse {
    shares: CiphertextTallyDecryptionShare[] = [];
}

/**
 * @class DecryptTallyShareRequest request to server for decrypting a tally
 * @extends BaseRequest
 */
export class DecryptTallyShareRequest extends BaseRequest {
    guardian_id = '';

    encrypted_tally: CiphertextTally = new CiphertextTally();

    context: CiphertextElectionContext = {};
}

/**
 * @class DecryptionShareRequest A request to submit a decryption share.
 * @extends BaseRequest
 */
export class DecryptionShareRequest extends BaseRequest {
    share: CiphertextTallyDecryptionShare = new CiphertextTallyDecryptionShare();
}

/**
 * @class CiphertextTallyQueryResponse A collection of Ciphertext Tallies.
 * @extends BaseResponse
 */
export class CiphertextTallyQueryResponse extends BaseResponse {
    tallies: CiphertextTally[] = [];
}

/**
 * @enum {string}}
 */
export enum PlaintextTallyState {
    CREATED = 'CREATED',
    PROCESSING = 'PROCESSING',
    ERROR = 'ERROR',
    COMPLETE = 'COMPLETE',
}

/**
 * @class PlaintextTally
 * A plaintext tally for a specific election.
 */
export class PlaintextTally {
    election_id = '';

    tally_name = '';

    created: Date = new Date();

    state: PlaintextTallyState = PlaintextTallyState.ERROR;

    tally: ElectionGuardPlaintextTally;
}

/**
 * @class PlaintextTallyQueryResponse A collection of Plaintext Tallies.
 * @extends BaseResponse
 */
export class PlaintextTallyQueryResponse extends BaseResponse {
    tallies: PlaintextTally[] = [];
}

/**
 * @class DecryptTallyRequest A request to decrypt a specific tally.  Can optionally include the tally to decrypt.
 * @extends BaseRequest
 */
export class DecryptTallyRequest extends BaseRequest {
    election_id = '';

    tally_name = '';
}

export default DecryptionShareResponse;

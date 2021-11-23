/* eslint-disable max-classes-per-file */
import { BaseRequest, BaseResponse, BaseValidationRequest } from './base';
import { CiphertextElectionContext, ElectionManifest } from './election';
import { GuardianUI } from './guardian';

export type CiphertextBallot = any;
export type PlaintextBallot = any;
export type DecryptionShare = any;
export type SubmittedBallot = any;
export type DecryptedBallots = any;
export type BallotCode = string;
export type BallotUrl = string;
export type BallotId = string;

/**
 * @class BaseBallotRequest used as a base class for ballot calls
 * @extends BaseRequest
 */
export class BaseBallotRequest extends BaseRequest {
    election_id = '';

    manifest: ElectionManifest = null;

    context: CiphertextElectionContext = null;
}

/**
 * @class CastBallotsRequest used to cast ballots to the server
 * @extends BaseBallotRequest
 */
export class CastBallotsRequest extends BaseBallotRequest {
    ballots: CiphertextBallot[] = [];
}

/**
 * @class SpoilBallotsRequest used to send spoiled ballots to the server
 * @extends BaseBallotRequest
 */
export class SpoilBallotsRequest extends BaseBallotRequest {
    ballots: CiphertextBallot[] = [];
}

/**
 * @class SubmitBallotsRequest used to send ballots to the server
 * @extends BaseBallotRequest
 */
export class SubmitBallotsRequest extends BaseBallotRequest {
    ballots: CiphertextBallot[] = [];
}

/**
 * @class BallotQueryResponse reply from server with the ballots being searched for
 * @extends BaseResponse
 */
export class BallotQueryResponse extends BaseResponse {
    election_id = '';

    ballots: CiphertextBallot[] = [];
}

/**
 * @class DecryptBallotsWithSharesRequest reply from server with decrypted ballots with shares
 * @extends BaseResponse
 */
export class DecryptBallotsWithSharesRequest extends BaseRequest {
    encrypted_ballots: SubmittedBallot[] = [];

    shares: Map<string, DecryptionShare[]> = new Map<string, DecryptionShare[]>();

    context: CiphertextElectionContext;
}

/**
 * @class DecryptBallotSharesRequest request to decrypt ballots using the given election context
 * @extends BaseRequest
 */
export class DecryptBallotSharesRequest extends BaseRequest {
    encrypted_ballots: SubmittedBallot[] = [];

    guardian: GuardianUI = new GuardianUI();

    context: CiphertextElectionContext;
}

/**
 * @class DecryptBallotSharesResponse reply from server with the DecryptShares
 * @extends BaseResponse
 */
export class DecryptBallotSharesResponse extends BaseResponse {
    shares: DecryptionShare[] = [];
}

/**
 * @class ValidateBallotRequest request to server to validate ballots
 * @extends BaseValidationResponse
 */
export class ValidateBallotsRequest extends BaseValidationRequest {
    ballot: CiphertextBallot;

    manifest: ElectionManifest;

    context: CiphertextElectionContext;
}

/**
 * @class EncryptBallotsRequest request to server to encrypt plain text ballots
 * @extends BaseRequest
 */
export class EncryptBallotsRequest extends BaseRequest {
    // A request to encrypt the enclosed ballots.

    election_id = '';

    seed_hash = '';

    ballots: PlaintextBallot[] = [];
}

/**
 * @class EncryptBallotsResponse reply from server with encrypted ballots
 * @extends BaseResponse
 */
export class EncryptBallotsResponse extends BaseResponse {
    encrypted_ballots: CiphertextBallot[] = [];
    // The encrypted representations of the plaintext ballots.

    next_seed_hash = '';
    // A seed hash which can optionally be used for the next call to encrypt.
}

/**
 * @class BallotInventory data returned for the ballot inventory request
 */
export class BallotInventory {
    election_id = '';

    cast_ballot_count = 0;

    spoiled_ballot_count = 0;

    cast_ballots: Map<BallotCode, BallotUrl> = new Map<BallotCode, BallotUrl>();

    spoiled_ballots: Map<BallotCode, BallotUrl> = new Map<BallotCode, BallotUrl>();
}

/**
 * @class BallotInventoryResponse reply from server with ballot inventory information
 * @extends BaseResponse
 */
export class BallotInventoryResponse extends BaseResponse {
    inventory: BallotInventory = new BallotInventory();
}

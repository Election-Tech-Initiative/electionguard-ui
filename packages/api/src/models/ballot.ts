/* eslint-disable max-classes-per-file */
import { BaseRequest, BaseResponse, BaseValidationRequest, Schema } from "./base"
import { CiphertextElectionContext, ElectionManifest } from "./election";
import Guardian from "./guardian";

export type CiphertextBallot = any;
export type PlaintextBallot = any;
export type DecryptionShare = any;
export type SubmittedBallot = any;
export type DecryptedBallots = any;
export type BallotCode = string;
export type BallotUrl = string;



export class BaseBallotRequest extends BaseRequest {
    election_id: string = "";

    manifest: ElectionManifest = null;

    context: CiphertextElectionContext = null
}

export class CastBallotsRequest extends BaseBallotRequest {
    ballots: CiphertextBallot[] = [];
}

export class SpoilBallotsRequest extends BaseBallotRequest {
    ballots: CiphertextBallot[] = [];
}

export class SubmitBallotsRequest extends BaseBallotRequest {
    ballots: CiphertextBallot[] = [];
}

export class BallotQueryResponse extends BaseResponse {
    election_id = "";

    ballots: CiphertextBallot[] = [];
}


export class DecryptBallotsWithSharesRequest extends BaseRequest {
    encrypted_ballots: SubmittedBallot[] = [];

    shares: Map<string, DecryptionShare[]> = new Map<string, DecryptionShare[]>();

    context: CiphertextElectionContext;
}


export class DecryptBallotSharesRequest extends BaseRequest {
    // Request to generate ElectionPartialKeyBackups for the given PublicKeySets."""

    encrypted_ballots: SubmittedBallot[]=[]

    guardian: Guardian;

    context: CiphertextElectionContext
}


export class DecryptBallotSharesResponse extends BaseResponse {
    shares: DecryptionShare[] = [];
}

export class ValidateBallotsRequest extends BaseValidationRequest {
    ballot: CiphertextBallot;

    manifest: ElectionManifest

    context: CiphertextElectionContext
}



export class EncryptBallotsRequest extends BaseRequest {
    // A request to encrypt the enclosed ballots.

    election_id: string
    
    seed_hash: string

    ballots: PlaintextBallot[]=[]
}


export class EncryptBallotsResponse extends BaseResponse {
    encrypted_ballots: CiphertextBallot[] = []
    // The encrypted representations of the plaintext ballots.

    next_seed_hash: string
    // A seed hash which can optionally be used for the next call to encrypt.

}



export class BallotInventory {
    election_id = "";

    cast_ballot_count = 0;

    spoiled_ballot_count = 0;

    cast_ballots: Map<BallotCode, BallotUrl> = new Map<BallotCode, BallotUrl>();
    
    spoiled_ballots: Map<BallotCode, BallotUrl> = new Map<BallotCode, BallotUrl>();
}

export class BallotInventoryResponse extends BaseResponse {
    inventory: BallotInventory;
}

/* eslint-disable max-classes-per-file */
import { BaseRequest, BaseResponse } from "./base";
import { CiphertextElectionContext } from "./election";


export type CiphertextTallyDecryptionShare = any;
export type CiphertextTally = any;
export type ElectionGuardCiphertextTally = any
export type ElectionGuardPlaintextTally = any

export class DecryptionShareResponse extends BaseResponse{
    shares: CiphertextTallyDecryptionShare[] = [];
}

export class DecryptTallyShareRequest {
    guardian_id = "";

    encrypted_tally: CiphertextTally = {};
    
    context: CiphertextElectionContext = {};
}

export class DecryptionShareRequest extends BaseRequest {
    // A request to submit a decryption share.

    share: CiphertextTallyDecryptionShare
}

export class CiphertextTallyQueryResponse extends BaseResponse {
    // A collection of Ciphertext Tallies.

    tallies: CiphertextTally[] = []

}

export enum PlaintextTallyState {
    CREATED = "CREATED",
    PROCESSING = "PROCESSING",
    ERROR = "ERROR",
    COMPLETE = "COMPLETE"
}

export class PlaintextTally {
    // A plaintext tally for a specific election."""

    election_id = ""
    
    tally_name = ""

    created: Date = new Date()
    
    state: PlaintextTallyState = PlaintextTallyState.ERROR
    
    tally: ElectionGuardPlaintextTally
}

export class PlaintextTallyQueryResponse extends BaseResponse {
    // A collection of Plaintext Tallies.

    tallies: PlaintextTally[] = []
}

export class DecryptTallyRequest extends BaseRequest {
    // A request to decrypt a specific tally.  Can optionally include the tally to decrypt.

    election_id = ""

    tally_name = ""
}

export default DecryptionShareResponse;     
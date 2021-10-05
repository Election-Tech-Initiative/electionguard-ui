/* eslint-disable max-classes-per-file */

import { BaseRequest, BaseResponse } from "./base";


export enum ElectionState {
    CREATED = "CREATED",
    OPEN = "OPEN",
    CLOSED = "CLOSED",
    PUBLISHED = "PUBLISHED"
}

export type CiphertextElectionContext = any;
export type ElectionManifest = any;
export type ElectionConstants = any;


export class Election {
    election_id: string;

    key_name: string;

    state: ElectionState;

    context: CiphertextElectionContext;

    manifest: ElectionManifest;
}

export class ElectionQueryResponse extends BaseResponse
{
    // A collection of elections.
    elections: Election[] = []
}

export class SubmitElectionRequest extends BaseRequest {
    election_id: string,
    key_name: string,
    context: CiphertextElectionContext,
    manifest: ElectionManifest
}

export class MakeElectionContextRequest extends BaseRequest {
    /*
    A request to build an Election Context for a given election.
    */

    elgamal_public_key: string

    commitment_hash: string

    number_of_guardians: number

    quorum: number

    manifest_hash: string

    manifest: ElectionManifest
}


export class MakeElectionContextResponse extends BaseResponse {
    // A Ciphertext Election Context.

    context: CiphertextElectionContext
}






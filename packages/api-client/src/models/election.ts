/* eslint-disable max-classes-per-file */

import { BaseRequest, BaseResponse } from './base';

export const enum ElectionState {
    CREATED = 'CREATED',
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    PUBLISHED = 'PUBLISHED',
}

export type CiphertextElectionContext = any;
export type ElectionManifest = any;
export type ElectionConstants = any;

export class Election {
    election_id = '';

    key_name = '';

    state: ElectionState = ElectionState.CREATED;

    context: CiphertextElectionContext;

    manifest: ElectionManifest;
}

export class ElectionQueryResponse extends BaseResponse {
    // A collection of elections.
    elections: Election[] = [];
}

export class SubmitElectionRequest extends BaseRequest {
    election_id = '';

    key_name = '';

    context: CiphertextElectionContext;

    manifest: ElectionManifest;
}

export class MakeElectionContextRequest extends BaseRequest {
    /*
    A request to build an Election Context for a given election.
    */

    elgamal_public_key = '';

    commitment_hash = '';

    number_of_guardians = 0;

    quorum = 0;

    manifest_hash = '';

    manifest: ElectionManifest;
}

export class MakeElectionContextResponse extends BaseResponse {
    // A Ciphertext Election Context.

    context: CiphertextElectionContext;
}

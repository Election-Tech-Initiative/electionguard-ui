/* eslint-disable max-classes-per-file */

import { BaseQueryRequest, BaseRequest, BaseResponse } from './base';

export const enum ElectionState {
    CREATED = 'CREATED',
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    PUBLISHED = 'PUBLISHED',
}

export type GuardianId = string;
export type CiphertextElectionContext = any;
export type ElectionManifest = any;
export type ElectionConstants = any;
export type ElectionPublicKey = any;
export type AuxiliaryPublicKeyType = string;

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

export class ElectionQueryRequest extends BaseQueryRequest {}

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

export class AuxiliaryPublicKey {
    // A tuple of auxiliary public key and owner information that can be shared between guardians"""

    owner_id: GuardianId = '';
    /*
    The unique identifier of the guardian owning the key
    */

    sequence_order = 0;
    /*
    The sequence order of the auxiliary public key (usually the guardian's sequence order)
    */

    key: AuxiliaryPublicKeyType = '';
    /*
    A string representation of the Auxiliary public key that can be shared between guardians.
    It is up to the external `AuxiliaryEncrypt` function to know how to parse this value
    */
}

export class PublicKeySet {
    // A convenience set of public auxiliary and election keys

    election: ElectionPublicKey;

    auxiliary: AuxiliaryPublicKey = new AuxiliaryPublicKey();
}

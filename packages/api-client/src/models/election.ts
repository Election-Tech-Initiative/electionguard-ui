/* eslint-disable max-classes-per-file */

import { BaseQueryRequest, BaseRequest, BaseResponse } from './base';

/** @enum {string} */
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

/**
 * @class Election data class that represents the election data from the server
 */
export class Election {
    election_id = '';

    key_name = '';

    state: ElectionState = ElectionState.CREATED;

    context: CiphertextElectionContext;

    manifest: ElectionManifest;
}

/**
 * @class ElectionQueryResponse reply from election query with matching array of elections
 * @extends BaseResponse
 */
export class ElectionQueryResponse extends BaseResponse {
    elections: Election[] = [];
}

/**
 * @class ElectionQueryRequest request data for finding elections
 * @extends BaseQueryRequest
 */
export class ElectionQueryRequest extends BaseQueryRequest {}

/**
 * @class SubmitElectionRequest request data to submit a new election to the server
 * @extends BaseRequest
 */
export class SubmitElectionRequest extends BaseRequest {
    election_id = '';

    key_name = '';

    context: CiphertextElectionContext;

    manifest: ElectionManifest;
}

/**
 * @class MakeElectionContextRequest request to build an Election Context for a given election.
 * @extends BaseRequest
 */
export class MakeElectionContextRequest extends BaseRequest {
    elgamal_public_key = '';

    commitment_hash = '';

    number_of_guardians = 0;

    quorum = 0;

    manifest_hash = '';

    manifest: ElectionManifest;
}

/**
 * @class MakeElectionContextResponse reply with Ciphertext Election Context.
 * @extends BaseResponse
 */
export class MakeElectionContextResponse extends BaseResponse {
    context: CiphertextElectionContext;
}

/**
 * @class AuxiliaryPublicKey
 * A tuple of auxiliary public key and owner information that can be shared between guardians
 */
export class AuxiliaryPublicKey {
    /**
     * The unique identifier of the guardian owning the key
     */
    owner_id: GuardianId = '';

    /**
     * The sequence order of the auxiliary public key (usually the guardian's sequence order)
     */
    sequence_order = 0;

    /**
     * A string representation of the Auxiliary public key that can be shared between guardians.
     * It is up to the external `AuxiliaryEncrypt` function to know how to parse this value
     */
    key: AuxiliaryPublicKeyType = '';
}

/**
 * @class PublicKeySet
 * A convenience set of public auxiliary and election keys
 */
export class PublicKeySet {
    election: ElectionPublicKey;

    auxiliary: AuxiliaryPublicKey = new AuxiliaryPublicKey();
}

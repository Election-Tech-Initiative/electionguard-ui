/* eslint-disable max-classes-per-file */
import { BaseResponse, BaseValidationRequest, BaseValidationResponse } from './base';
import { ElectionManifest } from './election';
import { ElementModQ } from './keyCeremony';

/**
 * @interface ManifestPreview
 * Data to be shown when Manifest is displayed to user
 */
export interface ManifestPreview {
    id: string;
    name: string;
    numberOfContests: number;
    numberOfStyles: number;
    startDate: Date;
    endDate: Date;
}

/**
 * @class Manifest
 * data from server to describe the election manifest
 */
export class Manifest {
    manifest_hash: ElementModQ;

    manifest: ElectionManifest;
}

/**
 * @class ManifestQueryResponse reply from server with array of election manifests
 * @extends BaseResponse
 */
export class ManifestQueryResponse extends BaseResponse {
    manifests: Manifest[] = [];
}

/**
 * @class ValidateManifestRequest A request to validate an Election Description.
 * @extends BaseValidationRequest
 */
export class ValidateManifestRequest extends BaseValidationRequest {
    manifest: ElectionManifest;
}

/**
 * @class ManifestSubmitResponse reply from server after submitting a manifest with the manifest hash
 * @extends BaseResponse
 */
export class ManifestSubmitResponse extends BaseResponse {
    manifest_hash: ElementModQ;
}

/**
 * @class ValidateManifestResponse reply from server after validating the manifest with the manifest hash
 * @extends BaseValidationResponse
 */
export class ValidateManifestResponse extends BaseValidationResponse {
    manifest_hash = '';
}

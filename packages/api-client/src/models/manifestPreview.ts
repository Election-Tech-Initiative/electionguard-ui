/* eslint-disable max-classes-per-file */
import { BaseResponse, BaseValidationRequest, BaseValidationResponse } from './base';
import { ElectionManifest } from './election';
import { ElementModQ } from './keyCeremony';

export default interface ManifestPreview {
    name: string;
    numberOfContests: number;
    numberOfStyles: number;
    startDate: Date;
    endDate: Date;
    fileHash: string;
    fileName: string;
}

export class Manifest {
    manifest_hash: ElementModQ;

    manifest: ElectionManifest;
}
export class ManifestQueryResponse extends BaseResponse {
    manifests: Manifest[] = [];
}

export class ValidateManifestRequest extends BaseValidationRequest {
    /*
    A request to validate an Election Description.
    */

    manifest: ElectionManifest;
    // The manifest to validate.
}

export class ManifestSubmitResponse extends BaseResponse {
    manifest_hash: ElementModQ;
}

export class ValidateManifestResponse extends BaseValidationResponse {
    manifest_hash = '';
}

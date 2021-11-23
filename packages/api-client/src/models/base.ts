/* eslint-disable max-classes-per-file */

enum ResponseStatus {
    FAIL = 'fail',
    SUCCESS = 'success',
}

export type Schema = any;

/**
 * @class BaseRequest is base class for all other requests to use
 */
export class BaseRequest {}

/**
 * @class BaseResponse is base class for responses from server with common data
 */
export class BaseResponse {
    status: ResponseStatus = ResponseStatus.SUCCESS;

    message = '';

    is_success(): boolean {
        return this.status === ResponseStatus.SUCCESS;
    }
}

/**
 * @class BaseQueryRequest common data for any query call to the server
 * @extends BaseRequest
 */
export class BaseQueryRequest extends BaseRequest {
    filter: any;
}

/**
 * @class BaseValidationRequest base request for any validation call to the server
 * @extends BaseRequest
 */
export class BaseValidationRequest extends BaseRequest {
    schema_override: Schema;
}

/**
 * @class BaseValidationResponse reply from server for validation requests
 * @extends BaseResponse
 */
export class BaseValidationResponse extends BaseResponse {
    details = '';
}

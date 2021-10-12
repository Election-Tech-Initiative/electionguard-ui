/* eslint-disable max-classes-per-file */

enum ResponseStatus {
    FAIL = 'fail',
    SUCCESS = 'success',
}

export type Schema = any;

export class BaseRequest {}

export class BaseResponse {
    status: ResponseStatus = ResponseStatus.SUCCESS;

    message = '';

    is_success(): boolean {
        return this.status === ResponseStatus.SUCCESS;
    }
}

export class BaseQueryRequest extends BaseRequest {
    filter: any;
}

export class BaseValidationRequest extends BaseRequest {
    schema_override: Schema;
}

export class BaseValidationResponse extends BaseResponse {
    details = '';
}

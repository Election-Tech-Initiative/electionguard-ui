export interface AsyncResult<T> {
    data: T | undefined;
    isError: boolean;
    isLoading: boolean;
    isIdle: boolean;
}

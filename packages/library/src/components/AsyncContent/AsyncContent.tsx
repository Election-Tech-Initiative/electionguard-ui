import React from 'react';

import { AsyncResult } from '@electionguard/api-client';

// import InternationalText from '../InternationalText';

// import { Spinner, SpinnerSize, StackItem } from '@fluentui/react';

export interface AsyncContentProps<T> {
    children: (data: T) => React.ReactElement;
    errorMessage?: string;
    query: AsyncResult<T>;
}

// eslint-disable-next-line react/function-component-definition
export function AsyncContent<T>({
    children,
    errorMessage = 'Something went wrong!',
    query,
}: AsyncContentProps<T>): React.ReactElement {
    const { data, isLoading, isError } = query;

    if (isLoading) {
        return <p>Loading</p>;
    }
    if (isError || data === undefined) {
        return <p>Error {errorMessage}</p>;
    }
    return children(data);
}

export default AsyncContent;

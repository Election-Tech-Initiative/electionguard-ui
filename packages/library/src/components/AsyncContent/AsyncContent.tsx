import React from 'react';

import { AsyncResult } from '../../data/AsyncResult';

// import InternationalText from '../InternationalText';

// import { Spinner, SpinnerSize, StackItem } from '@fluentui/react';

export interface AsyncContentProps<T> {
    children: (data: T) => React.ReactElement;
    errorMessage?: string;
    query: AsyncResult<T>;
}

function AsyncContent<T>({
    children,
    errorMessage = 'Something went wrong!',
    query,
}: AsyncContentProps<T>) {
    const { data, isLoading, isError } = query;

    if (isLoading) {
        return (
            <>
                <p>Loading</p>
            </>
        );
    }
    if (isError || data === undefined) {
        return (
            <>
                <p>Error</p>
            </>
        );
    }
    return <>{children(data)}</>;
}

export default AsyncContent;

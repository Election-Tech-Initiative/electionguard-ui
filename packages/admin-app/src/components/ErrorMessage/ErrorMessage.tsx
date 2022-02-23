import { Alert, AlertProps } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';

export interface ErrorMessageProps extends AlertProps {
    MessageId: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
    const { MessageId } = props;
    const alertProps = props as AlertProps;

    return (
        <Alert {...alertProps} severity="error">
            <FormattedMessage id={MessageId} />
        </Alert>
    );
};

export default ErrorMessage;

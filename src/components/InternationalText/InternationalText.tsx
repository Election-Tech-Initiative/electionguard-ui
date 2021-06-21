/* eslint-disable react/jsx-props-no-spreading */
import { Typography, TypographyProps } from '@material-ui/core';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { MessageId, OverloadableMessageId } from '../../lang';

export interface InternationalTextProps extends TypographyProps {
    id?: OverloadableMessageId;
    description?: string;
    defaultMessage?: string;
    component?: React.ElementType;
    screenReaderOnly?: boolean;
}

/**
 * International text to handle automatically finding correct language
 */
const InternationalText: React.FC<InternationalTextProps> = (props) => {
    const intl = useIntl();
    const typographyProps = props as TypographyProps;
    const { id, description, defaultMessage, component, screenReaderOnly } = props;
    if (screenReaderOnly) {
        return (
            <Typography
                {...typographyProps}
                component={component || 'span'}
                aria-label={intl.formatMessage({ id, description, defaultMessage })}
            />
        );
    }
    return (
        <Typography {...typographyProps} component={component || 'span'}>
            <FormattedMessage
                id={id || MessageId.Placeholder}
                description={description}
                defaultMessage={defaultMessage || 'placeholder'}
            />
        </Typography>
    );
};

export default InternationalText;

/* eslint-disable react/jsx-props-no-spreading */
import { Typography, TypographyProps } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { MessageId } from '../../lang';

export interface InternationalTextProps extends TypographyProps {
    id?: MessageId;
    description?: string;
    defaultMessage?: string;
    component?: React.ElementType;
}

/**
 * International text to handle automatically finding correct language
 */
const InternationalText: React.FC<InternationalTextProps> = (props) => {
    const typographyProps = props as TypographyProps;
    const { id, description, defaultMessage, component } = props;
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

/* eslint-disable react/jsx-props-no-spreading */
import { Box, Typography, TypographyProps, useTheme } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';

import { MessageId, OverloadableMessageId } from '../../lang';

export interface InternationalTextProps extends TypographyProps {
    id?: OverloadableMessageId;
    description?: string;
    defaultMessage?: string;
    component?: React.ElementType;
    screenReaderOnly?: boolean;
}

const bold = (str: string) => (
    <Box fontWeight="fontWeightMedium" display="inline" component="b">
        {str}
    </Box>
);

const italic = (str: string) => (
    <Box fontStyle="italics" display="inline" component="i">
        {str}
    </Box>
);

const colored = (str: string, color: string) => (
    <Box color={color} fontWeight="fontWeightMedium" display="inline" component="b">
        {str}
    </Box>
);

/**
 * International text to handle automatically finding correct language
 */
const InternationalText: React.FC<InternationalTextProps> = (props) => {
    const theme = useTheme();
    const intl = useIntl();
    const typographyProps = props as TypographyProps;
    const { id, description, defaultMessage, component, screenReaderOnly } = props;
    const message = intl.formatMessage(
        {
            id: id || MessageId.Placeholder,
            description,
            defaultMessage: defaultMessage || 'placeholder',
        },
        {
            bold,
            italic,
            primary: (str: string) => colored(str, theme.palette.primary.main),
            secondary: (str: string) => colored(str, theme.palette.secondary.main),
        }
    );
    if (screenReaderOnly) {
        return (
            <Typography {...typographyProps} component={component || 'span'} aria-label={message} />
        );
    }
    return (
        <Typography {...typographyProps} component={component || 'span'}>
            {message}
        </Typography>
    );
};

export default InternationalText;

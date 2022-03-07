import { Tooltip, InternalStandardProps as StandardProps } from '@mui/material';
import React from 'react';
import { useIntl } from 'react-intl';

export interface I8nTooltipProps
    extends StandardProps<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    messageId: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
}

export const I8nTooltip: React.FC<I8nTooltipProps> = ({ messageId, children }) => {
    const intl = useIntl();

    return (
        <Tooltip
            title={intl.formatMessage({
                id: messageId,
            })}
        >
            {children}
        </Tooltip>
    );
};

export default I8nTooltip;

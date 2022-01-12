import HomeIcon from '@material-ui/icons/Home';
import { ButtonProps, Button } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import { GenericMessage } from '../../lang';

export interface GoHomeButtonProps extends ButtonProps {
    id: string;
    defaultMessage?: string;
    description?: string;
}

export const GoHomeButton: React.FC<GoHomeButtonProps> = (props) => {
    const intl = useIntl();
    const { id, defaultMessage, description } = props;
    const message = intl.formatMessage(new GenericMessage<string>(id, defaultMessage, description));
    return (
        <Button href="/" color="primary" variant="contained" startIcon={<HomeIcon />}>
            {message}
        </Button>
    );
};

export default GoHomeButton;

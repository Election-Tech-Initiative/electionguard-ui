import HomeIcon from '@material-ui/icons/Home';
import { ButtonProps, makeStyles, Link } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import { GenericMessage } from '../../lang';

export interface GoHomeButtonProps extends ButtonProps {
    id: string;
    defaultMessage?: string;
    description?: string;
}

const useStyles = makeStyles(() => ({
    goHome: {
        textTransform: 'uppercase',
        backgroundColor: '#1A237E',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        fontSize: 14,
    },
    icon: {
        top: 5,
        position: 'relative',
        marginRight: 5,
    },
}));

export const GoHomeButton: React.FC<GoHomeButtonProps> = (props) => {
    const classes = useStyles();
    const intl = useIntl();
    const { id, defaultMessage, description } = props;
    const message = intl.formatMessage(new GenericMessage<string>(id, defaultMessage, description));
    return (
        <Link href="/" className={classes.goHome}>
            <HomeIcon fontSize="small" className={classes.icon} />
            {message}
        </Link>
    );
};

export default GoHomeButton;

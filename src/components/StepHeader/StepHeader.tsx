import { Button, Container, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Message } from '../../lang';
import IconHeader from '../IconHeader';
import InternationalText from '../InternationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
    button: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
}));

export interface StepHeaderProps {
    title: Message;
    description: Message;
    buttonText: Message;
    onClick?: () => void;
}

/**
 * Common Header for Steps
 */
const StepHeader: React.FC<StepHeaderProps> = ({ onClick, title, description, buttonText }) => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <IconHeader title={title} />
            <InternationalText
                className={classes.spaced}
                component="p"
                id={description.id}
                defaultMessage={description.defaultMessage}
            />
            <Button
                className={clsx(classes.spaced, classes.button)}
                variant="contained"
                color="secondary"
                onClick={onClick}
            >
                <FormattedMessage id={buttonText.id} defaultMessage={buttonText.defaultMessage} />
            </Button>
        </Container>
    );
};

export default StepHeader;

import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import InternationalText from '../../InternationalText';
import OrderedList from '../../OrderedList';
import StepHeader from '../../StepHeader';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
    control: {
        minWidth: 500,
        marginBottom: theme.spacing(4),
    },
    fullHeight: {
        height: '100%',
    },
}));

export interface KeyCeremonyIntroductionStepProps {
    onNext?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

/**
 * Introduction Step for Key Ceremony
 */
const KeyCeremonyInstructionsStep: React.FC<KeyCeremonyIntroductionStepProps> = ({
    onNext,
    loading,
    disabled,
}) => {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <StepHeader
                title={new Message(MessageId.KeyCeremony_Introduction_Title)}
                description={new Message(MessageId.KeyCeremony_Introduction_Description)}
                buttonText={new Message(MessageId.Actions_Continue)}
                onClick={onNext}
                disabled={disabled}
                loading={loading}
            />
            <InternationalText
                className={classes.spaced}
                color="primary"
                variant="h6"
                component="h2"
                id={MessageId.KeyCeremony_Introduction_StepsHeading}
            />
            <InternationalText
                className={classes.spaced}
                id={MessageId.KeyCeremony_Introduction_StepsDescription}
            />
            <OrderedList>
                <InternationalText id={MessageId.KeyCeremony_Introduction_Step1} />
                <InternationalText id={MessageId.KeyCeremony_Introduction_Step2} />
                <InternationalText id={MessageId.KeyCeremony_Introduction_Step3} />
                <InternationalText id={MessageId.KeyCeremony_Introduction_Step4} />
            </OrderedList>
        </Container>
    );
};

export default KeyCeremonyInstructionsStep;

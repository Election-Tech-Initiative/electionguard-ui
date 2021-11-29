import { AssignedGuardian } from '@electionguard/api-client';
import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import GuardianTable from '../../GuardianTable';
import InternationalText from '../../InternationalText';
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

export interface MeetGuardiansStepProps {
    onNext?: () => void;
    guardians: AssignedGuardian[];
    disabled?: boolean;
    loading?: boolean;
}

/**
 * Meet Guardians Step for Key Ceremony
 */
const MeetGuardiansStep: React.FC<MeetGuardiansStepProps> = ({
    onNext,
    guardians,
    disabled,
    loading,
}) => {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <StepHeader
                title={new Message(MessageId.KeyCeremony_MeetGuardians_Title)}
                description={new Message(MessageId.KeyCeremony_MeetGuardians_Description)}
                buttonText={new Message(MessageId.KeyCeremony_MeetGuardians_Button)}
                onClick={onNext}
                disabled={disabled}
                loading={loading}
            />
            <InternationalText
                className={classes.spaced}
                color="primary"
                variant="h6"
                component="h2"
                id={MessageId.KeyCeremony_MeetGuardians_GuardianHeading}
            />
            <GuardianTable data={guardians} />
        </Container>
    );
};

export default MeetGuardiansStep;

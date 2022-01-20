import { BaseJointKey } from '@electionguard/api-client';
import { Box, Button, Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Message, MessageId } from '../../../lang';
import IconHeader from '../../IconHeader';
import InternationalText from '../../InternationalText';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    description: {
        marginBottom: theme.spacing(3),
    },
    heading: {
        marginBottom: theme.spacing(1),
    },
    property: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(3),
    },
    buttonContainer: {
        marginBottom: theme.spacing(2),
    },
    button: {
        minWidth: 100,
        marginRight: theme.spacing(2),
    },
}));

export interface KeySetupReviewStepProps {
    baseJointKey?: BaseJointKey;
    onConfirm: () => void;
    onPrevious: () => void;
}

/**
 * Key Setup Review Step
 */
const KeySetupReviewStep: React.FC<KeySetupReviewStepProps> = ({
    baseJointKey,
    onConfirm,
    onPrevious,
}) => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <IconHeader title={new Message(MessageId.JointKeySetup_KeySetupReview_Title)} />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <InternationalText
                    className={classes.description}
                    id={MessageId.JointKeySetup_KeySetup_Description}
                />
                <InternationalText
                    className={classes.heading}
                    color="primary"
                    variant="h5"
                    component="h2"
                    id={MessageId.JointKey_Name}
                />
                <Typography className={classes.property} color="secondary" variant="h6">
                    {baseJointKey?.name}
                </Typography>
                <InternationalText
                    className={classes.heading}
                    color="primary"
                    variant="h5"
                    component="h2"
                    id={MessageId.JointKey_NumberOfGuardians}
                />
                <Box>
                    <InternationalText
                        color="primary"
                        id={MessageId.JointKeySetup_KeySetup_NumberOfGuardiansEmphasis}
                    />{' '}
                    <InternationalText
                        id={MessageId.JointKeySetup_KeySetup_NumberOfGuardiansDescription}
                    />
                </Box>
                <Typography className={classes.property} color="secondary" variant="h6">
                    {baseJointKey?.numberOfGuardians}
                </Typography>
                <InternationalText
                    className={classes.heading}
                    color="primary"
                    variant="h5"
                    component="h2"
                    id={MessageId.JointKey_Quorum}
                />
                <Box>
                    <InternationalText
                        color="primary"
                        id={MessageId.JointKeySetup_KeySetup_QuorumEmphasis}
                    />{' '}
                    <InternationalText id={MessageId.JointKeySetup_KeySetup_QuorumDescription} />
                </Box>
                <Typography className={classes.property} color="secondary" variant="h6">
                    {baseJointKey?.quorum}
                </Typography>
                <Box className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={onConfirm}
                    >
                        <FormattedMessage id={MessageId.Actions_Confirm} />
                    </Button>
                    <Button className={classes.button} color="primary" onClick={onPrevious}>
                        <FormattedMessage id={MessageId.Actions_Previous} />
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default KeySetupReviewStep;

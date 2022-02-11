import { BaseJointKey } from '@electionguard/api-client';
import { Box, Button, Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Message, MessageId } from '../../../lang';
import GuardianTable from '../../GuardianTable';
import IconHeader from '../../IconHeader';
import InternationalText from '../../InternationalText';

const useStyles = makeStyles((theme) => ({
    description: {
        marginBottom: theme.spacing(3),
    },
    callout: {
        fontWeight: 'bold',
    },
    heading: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
    buttonContainer: {
        marginBottom: theme.spacing(2),
    },
    button: {
        minWidth: 100,
        marginRight: theme.spacing(2),
    },
    editButton: {
        marginTop: theme.spacing(2),
    },
    jointKeyDisplay: {
        paddingTop: theme.spacing(3),
        marginBottom: theme.spacing(1),
    },
    numberDisplay: {
        marginLeft: theme.spacing(1),
    },
    tableContainer: {
        width: '100%',
    },
}));

export interface GuardianAssignmentReviewStepProps {
    onEditAssignedGuardians: () => void;
    baseJointKey: BaseJointKey;
    onConfirm: (baseJointKey: BaseJointKey) => void;
    onCancel: () => void;
}

/**
 * Guardian Assignment Review Step
 */
const JointKeyReviewStep: React.FC<GuardianAssignmentReviewStepProps> = ({
    onConfirm,
    onEditAssignedGuardians,
    onCancel,
    baseJointKey,
}) => {
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <IconHeader
                title={new Message(MessageId.JointKeySetup_GuardianAssignmentReview_Title)}
            />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Box
                    className={classes.jointKeyDisplay}
                    display="flex"
                    flexDirection="column"
                    width="100%"
                >
                    <Typography
                        className={classes.heading}
                        color="secondary"
                        variant="h5"
                        component="h2"
                    >
                        {baseJointKey.name}
                    </Typography>
                    <Box display="flex" flexWrap="wrap">
                        <Box display="flex">
                            <InternationalText noWrap variant="h6" id={MessageId.JointKey_Quorum} />
                            <Typography variant="h6">:</Typography>
                            <Typography
                                className={classes.numberDisplay}
                                color="primary"
                                variant="h6"
                            >
                                {baseJointKey.quorum}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.tableContainer}>
                    <InternationalText
                        variant="h6"
                        id={MessageId.JointKeySetup_GuardianAssignment_AssignedLabel}
                    />
                    <span>:</span>
                    <GuardianTable data={baseJointKey.guardians} />
                </Box>
                <Box className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={() => onConfirm(baseJointKey)}
                    >
                        <FormattedMessage id={MessageId.Actions_Submit} />
                    </Button>
                    <Button
                        className={classes.button}
                        color="primary"
                        onClick={onEditAssignedGuardians}
                    >
                        <FormattedMessage id={MessageId.Actions_Back} />
                    </Button>
                    <Button className={classes.button} color="primary" onClick={onCancel}>
                        <FormattedMessage id={MessageId.Actions_Cancel} />
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default JointKeyReviewStep;

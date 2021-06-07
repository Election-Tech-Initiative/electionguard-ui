import { Box, Button, Container, Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Message, MessageId } from '../../../lang';
import { BaseJointKey } from '../../../models/jointKey';
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
        paddingBottom: theme.spacing(3),
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        marginBottom: theme.spacing(3),
    },
    numberContainer: {
        marginRight: theme.spacing(2),
    },
    numberDisplay: {
        marginLeft: theme.spacing(1),
    },
    tableContainer: {
        marginBottom: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    confirmation: {
        marginBottom: theme.spacing(2),
    },
}));

export interface GuardianAssignmentReviewStepProps {
    onEditKeySetup: () => void;
    onEditAssignedGuardians: () => void;
    baseJointKey: BaseJointKey;
    onConfirm: (baseJointKey: BaseJointKey) => void;
    onCancel: () => void;
}

/**
 * Guardian Assignment Review Step
 */
const GuardianAssignmentReviewStep: React.FC<GuardianAssignmentReviewStepProps> = ({
    onConfirm,
    onEditKeySetup,
    onEditAssignedGuardians,
    onCancel,
    baseJointKey,
}) => {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <IconHeader
                title={new Message(MessageId.JointKeySetup_GuardianAssignmentReview_Title)}
            />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <InternationalText
                    className={classes.description}
                    id={MessageId.JointKeySetup_GuardianAssignmentReview_Description}
                />
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
                        <Box className={classes.numberContainer} display="flex">
                            <InternationalText
                                variant="h6"
                                noWrap
                                id={MessageId.JointKey_NumberOfGuardians}
                            />
                            <Typography variant="h6">:</Typography>
                            <Typography
                                className={classes.numberDisplay}
                                color="primary"
                                variant="h6"
                            >
                                {baseJointKey.numberOfGuardians}
                            </Typography>
                        </Box>
                        <Box className={classes.numberContainer} display="flex">
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
                    <Box className={classes.buttonContainer}>
                        <Button
                            className={clsx(classes.button, classes.editButton)}
                            color="primary"
                            variant="outlined"
                            onClick={onEditKeySetup}
                        >
                            <FormattedMessage id={MessageId.Actions_Edit} />
                        </Button>
                    </Box>
                </Box>
                <Box className={classes.tableContainer} width="100%">
                    <InternationalText
                        variant="h6"
                        id={MessageId.JointKeySetup_GuardianAssignment_AssignedLabel}
                    />
                    <GuardianTable data={baseJointKey.guardians} />
                    <Button
                        className={clsx(classes.button, classes.editButton)}
                        color="primary"
                        variant="outlined"
                        onClick={onEditAssignedGuardians}
                    >
                        <FormattedMessage id={MessageId.Actions_Edit} />
                    </Button>
                </Box>
                <Box className={classes.confirmation}>
                    <InternationalText
                        className={classes.callout}
                        id={MessageId.JointKeySetup_GuardianAssignmentReview_ConfirmationCallout}
                    />{' '}
                    <InternationalText
                        className={classes.description}
                        id={MessageId.JointKeySetup_GuardianAssignmentReview_Confirmation}
                    />
                </Box>
                <Box className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={() => onConfirm(baseJointKey)}
                    >
                        <FormattedMessage id={MessageId.Actions_Confirm} />
                    </Button>
                    <Button className={classes.button} color="primary" onClick={onCancel}>
                        <FormattedMessage id={MessageId.Actions_Cancel} />
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default GuardianAssignmentReviewStep;

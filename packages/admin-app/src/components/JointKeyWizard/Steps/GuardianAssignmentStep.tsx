import {
    AssignedGuardian,
    BaseJointKey,
    GuardianId,
    ElectionPartialKeyBackup,
    PublicKeySet,
    ElectionPartialKeyVerification,
    ElectionPartialKeyChallenge,
    Guardian,
    AsyncResult,
} from '@electionguard/api-client';
import { Box, Button, Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { Message, MessageId } from '../../../lang';
import AssignmentTable from '../../AssignmentTable';
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
    },
}));

export interface GuardianAssignmentStepProps {
    baseJointKey: BaseJointKey;
    onSubmit: (baseJointKey: BaseJointKey) => void;
    onCancel: () => void;
}

/**
 * Guardian Assignment Step
 */
const GuardianAssignmentStep: React.FC<GuardianAssignmentStepProps> = ({
    baseJointKey,
    onSubmit,
    onCancel,
}) => {
    const classes = useStyles();
    const [assignedGuardians, setAssignedGuardians] = useState<AssignedGuardian[]>([]);
    const [foundGuardians, setFoundGuardians] = useState<Guardian[]>([]);
    const validate = (): boolean => assignedGuardians.length === baseJointKey.numberOfGuardians;
    const onAssign = (ids: string[]) => {
        const selected = foundGuardians.filter((user) => ids.includes(user.guardian_id));
        const assigned: AssignedGuardian[] = selected.map((guardian, i) => ({
            id: guardian.guardian_id,
            name: guardian.name,
            sequenceOrder: i + 1,
        }));
        setAssignedGuardians(assigned);
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onSubmit({
            ...baseJointKey,
            guardians: assignedGuardians,
        });
    };

    const queryClient = new QueryClient();

    const findGuardians = async (): Promise<Guardian[] | undefined> => [
        {
            guardian_id: 'guardian_1',
            name: 'Benjamin Franklin',
            sequence_order: 1,
            number_of_guardians: 3,
            quorum: 2,
            election_keys: {},
            auxiliary_keys: {},
            backups: new Map<GuardianId, ElectionPartialKeyBackup>(),
            cohort_public_keys: new Map<GuardianId, PublicKeySet>(),
            cohort_backups: new Map<GuardianId, ElectionPartialKeyBackup>(),
            cohort_verifications: new Map<GuardianId, ElectionPartialKeyVerification>(),
            cohort_challenges: new Map<GuardianId, ElectionPartialKeyChallenge>(),
        },
    ];

    const guardiansQuery = useQuery('guardians', async () => {
        const guardians = await findGuardians();
        if (guardians) {
            setFoundGuardians(guardians);
        }
        return guardians;
    });
    const getGuardians = (): AsyncResult<Guardian[]> => guardiansQuery;

    return (
        <Container maxWidth="md">
            <QueryClientProvider client={queryClient}>
                <IconHeader title={new Message(MessageId.JointKeySetup_GuardianAssignment_Title)} />
                <form className={classes.form} onSubmit={handleSubmit}>
                    <InternationalText
                        className={classes.description}
                        id={MessageId.JointKeySetup_GuardianAssignment_Description}
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
                                <InternationalText
                                    noWrap
                                    variant="h6"
                                    id={MessageId.JointKey_Quorum}
                                />
                                <Typography variant="h6">:</Typography>
                                <Typography
                                    className={classes.numberDisplay}
                                    color="primary"
                                    variant="h6"
                                >
                                    {baseJointKey.quorum}
                                </Typography>
                            </Box>
                            <Box className={classes.numberContainer} display="flex">
                                <InternationalText
                                    noWrap
                                    variant="h6"
                                    id={MessageId.JointKeySetup_GuardianAssignment_AssignedLabel}
                                />
                                <Typography variant="h6">:</Typography>
                                <Typography
                                    className={classes.numberDisplay}
                                    color={validate() ? 'primary' : 'error'}
                                    variant="h6"
                                >
                                    {assignedGuardians.length}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.tableContainer} width="100%">
                        <AssignmentTable data={getGuardians} onChanged={onAssign} />
                    </Box>
                    <Box className={classes.buttonContainer}>
                        <Button
                            disabled={!validate()}
                            className={classes.button}
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            <FormattedMessage id={MessageId.Actions_Submit} />
                        </Button>
                        <Button className={classes.button} color="primary" onClick={onCancel}>
                            <FormattedMessage id={MessageId.Actions_Cancel} />
                        </Button>
                    </Box>
                </form>
            </QueryClientProvider>
        </Container>
    );
};

export default GuardianAssignmentStep;

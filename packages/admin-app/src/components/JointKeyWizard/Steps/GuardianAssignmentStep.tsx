import { AssignedGuardian, BaseJointKey, Guardian, AsyncResult } from '@electionguard/api-client';
import { UserQueryRequest } from '@electionguard/api-client/dist/nswag/clients';
import { Box, Button, Container, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useUserClient } from '../../../hooks/useClient';

import { Message, MessageId } from '../../../lang';
import AssignmentTable from '../../AssignmentTable';
import IconHeader from '../../IconHeader';
import InternationalText from '../../InternationalText';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 100,
        marginRight: theme.spacing(2),
    },
    numberDisplay: {
        marginLeft: theme.spacing(1),
    },
    tableContainer: {
        marginBottom: theme.spacing(3),
        width: '100%',
    },
    tableHeader: {
        marginBottom: theme.spacing(2),
    },
    guardiansAssignedLabel: {
        fontWeight: 'bold',
        color: '#777',
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

    const userClient = useUserClient();
    const skip = 0;
    const take = 100;
    const findParams = {
        filter: {},
    } as UserQueryRequest;
    const findGuardians = async () =>
        userClient.find(skip, take, findParams).then((response) =>
            response.users.map(
                (u) =>
                    ({
                        guardian_id: u.username,
                        name: `${u.first_name} ${u.last_name}`,
                        sequence_order: 1,
                        number_of_guardians: 3,
                        quorum: 2,
                    } as Guardian)
            )
        );

    const guardiansQuery = useQuery('guardians', async () => {
        const guardians = await findGuardians();
        if (guardians) {
            setFoundGuardians(guardians);
        }
        return guardians;
    });
    const getGuardians = (): AsyncResult<Guardian[]> => guardiansQuery;

    return (
        <Container maxWidth="sm">
            <QueryClientProvider client={queryClient}>
                <IconHeader title={new Message(MessageId.JointKeySetup_GuardianAssignment_Title)} />
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Box className={classes.tableHeader}>
                        <InternationalText
                            noWrap
                            className={classes.guardiansAssignedLabel}
                            id={MessageId.JointKeySetup_GuardianAssignment_AssignedLabel}
                        />
                        <span>:</span>
                        <Typography
                            className={classes.numberDisplay}
                            component="span"
                            color={validate() ? 'primary' : 'error'}
                        >
                            {assignedGuardians.length}
                            <span>/</span>
                            {baseJointKey.numberOfGuardians}
                        </Typography>
                    </Box>
                    <Box className={classes.tableContainer}>
                        <AssignmentTable data={getGuardians} onChanged={onAssign} />
                    </Box>
                    <Box>
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
                            <FormattedMessage id={MessageId.Actions_Back} />
                        </Button>
                    </Box>
                </form>
            </QueryClientProvider>
        </Container>
    );
};

export default GuardianAssignmentStep;

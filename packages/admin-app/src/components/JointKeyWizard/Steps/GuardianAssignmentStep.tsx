import { AssignedGuardian, BaseJointKey, AsyncResult, UserInfo } from '@electionguard/api-client';
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
        color: theme.palette.grey[600],
    },
}));

export interface GuardianAssignmentStepProps {
    baseJointKey: BaseJointKey;
    onNext: () => void;
    onChanged: (key: BaseJointKey) => void;
    onCancel: () => void;
}

/**
 * Guardian Assignment Step
 */
const GuardianAssignmentStep: React.FC<GuardianAssignmentStepProps> = ({
    baseJointKey,
    onNext,
    onChanged,
    onCancel,
}) => {
    const classes = useStyles();
    const [assignedGuardians, setAssignedGuardians] = useState<AssignedGuardian[]>(
        baseJointKey.guardians
    );
    const [users, setUsers] = useState([] as UserInfo[]);
    const validate = (): boolean => assignedGuardians.length === baseJointKey.numberOfGuardians;
    const onAssign = (ids: string[]) => {
        const selected = users.filter((user) => ids.includes(user.username));
        const assigned: AssignedGuardian[] = selected.map((user, i) => ({
            id: user.username,
            name: `${user.first_name} ${user.last_name}`,
            sequenceOrder: i + 1,
        }));
        setAssignedGuardians(assigned);
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onChanged({
            ...baseJointKey,
            guardians: assignedGuardians,
        });
        onNext();
    };

    const queryClient = new QueryClient();

    const initialGuardians = baseJointKey.guardians.map((g) => g.id);
    const userClient = useUserClient();
    const skip = 0;
    const take = 100;
    const findParams = {
        filter: {},
    } as UserQueryRequest;
    const findUsers = async () =>
        userClient.find(skip, take, findParams).then((response) => response.users);

    const usersQuery = useQuery('users', async () => {
        const foundUsers = await findUsers();
        if (foundUsers) {
            setUsers(foundUsers);
        }
        return foundUsers;
    });
    const getUsers = (): AsyncResult<UserInfo[]> => usersQuery;

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
                        <AssignmentTable
                            data={getUsers}
                            onChanged={onAssign}
                            initialData={initialGuardians}
                        />
                    </Box>
                    <Box>
                        <Button
                            disabled={!validate()}
                            className={classes.button}
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            <FormattedMessage id={MessageId.Actions_Next} />
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

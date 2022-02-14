import { AsyncResult, UserInfo } from '@electionguard/api-client';
import { UserQueryRequest } from '@electionguard/api-client/dist/nswag/clients';
import { Box, Container, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { DefaultTheme } from '@mui/styles';
import React from 'react';
import { useQuery } from 'react-query';
import AssignmentTable from '../components/AssignmentTable';
import IconHeader from '../components/IconHeader';
import { useUserClient } from '../hooks/useClient';
import { Message, MessageId } from '../lang';

const useStyles = makeStyles((theme: DefaultTheme) => ({
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export const UserManagementPage: React.FC = () => {
    const skip = 0;
    const take = 100;
    const userClient = useUserClient();
    const findParams: UserQueryRequest = {
        filter: {},
    };
    const findUsers = async () =>
        userClient.find(skip, take, findParams).then((response) => response.users);

    const usersQuery = useQuery('users', findUsers);
    const getUsers = (): AsyncResult<UserInfo[]> => usersQuery;

    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.content}>
            <Box>
                <IconHeader title={new Message(MessageId.UserManagement_Title)} />
                <AssignmentTable data={getUsers} />
            </Box>
        </Container>
    );
};

export default UserManagementPage;

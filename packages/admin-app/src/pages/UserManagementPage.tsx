import { AsyncResult, UserInfo } from '@electionguard/api-client';
import { UserQueryRequest } from '@electionguard/api-client/dist/nswag/clients';
import { Box, Container, Fab, Grid } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import makeStyles from '@mui/styles/makeStyles';
import { DefaultTheme } from '@mui/styles';
import React from 'react';
import { useQuery } from 'react-query';
import AssignmentTable from '../components/AssignmentTable';
import IconHeader from '../components/IconHeader';
import { useUserClient } from '../hooks/useClient';
import { Message, MessageId } from '../lang';
import routeIds from '../routes/RouteIds';

const useStyles = makeStyles((theme: DefaultTheme) => ({
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    buttonArea: {
        textAlign: 'right',
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
                <Grid container alignItems="center">
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <IconHeader title={new Message(MessageId.UserManagement_Title)} />
                    </Grid>
                    <Grid item xs={1} className={classes.buttonArea}>
                        <Fab href={routeIds.addUser} color="primary" size="medium" aria-label="add">
                            <PersonAddIcon />
                        </Fab>
                    </Grid>
                </Grid>
                <AssignmentTable data={getUsers} />
            </Box>
        </Container>
    );
};

export default UserManagementPage;

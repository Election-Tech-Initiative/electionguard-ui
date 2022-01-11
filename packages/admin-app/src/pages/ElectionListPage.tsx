import { ApiClientFactory } from '@electionguard/api-client';
import { Grid, Container, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import InternationalText from '../components/InternationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

export const ElectionListPage: React.FC = () => {
    const [electionCount, setElectionCount] = useState(0);
    const [textResult, setTextResult] = useState('');
    const classes = useStyles();
    const getElections = async () => {
        const service = ApiClientFactory.getMediatorApiClient();
        try {
            const elections = await service.findElection({}, 0, 100);
            setElectionCount(elections ? elections.length : -1);
        } catch (ex) {
            setTextResult('An error occurred');
        }
    };
    useEffect(() => {
        getElections();
    }, []);
    return (
        <Grid container className={classes.root}>
            <Container maxWidth="md" className={classes.content}>
                <h1>
                    <InternationalText id="election_list.title" />
                </h1>
                <div>Found {electionCount} elections</div>
                <div>{textResult}</div>
            </Container>
        </Grid>
    );
};

export default ElectionListPage;

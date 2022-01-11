/* eslint-disable */
import { ApiClientFactory, Election } from '@electionguard/api-client';
import { Grid, Container, makeStyles, TablePagination } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import FilterToolbar from '../components/FilterToolbar';
import InternationalText from '../components/InternationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0.85,
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    grid: {
        minHeight: 200,
    },
}));

const columns = (intl: IntlShape): GridColDef[] => [
    {
        field: 'election_id',
        headerName: intl.formatMessage({
            id: 'election_list_page.election_id_header',
        }),
        width: 300,
        headerClassName: 'bold-style--header',
    },
    {
        field: 'key_name',
        headerName: intl.formatMessage({
            id: 'election_list_page.key_name_header',
        }),
        width: 300,
        headerClassName: 'bold-style--header',
    },
];

const makeElection = (i: number, election: Election) => {
    return {
        election_id: 'election_' + i,
        key_name: 'key_ceremony_' + i,
        state: election.state,
        context: undefined,
        manifest: undefined,
    };
};

const getFakeElections = (election: Election) => {
    return Array(100)
        .fill(undefined)
        .map((a, i) => makeElection(i, election));
};

export const ElectionListPage: React.FC = () => {
    const initialElections: Election[] = [];
    const [elections, setElections] = useState(initialElections);
    const [textResult, setTextResult] = useState('');
    const [pageSize, setPageSize] = React.useState(10);
    const classes = useStyles();
    const intl = useIntl();
    const getElections = async () => {
        const service = ApiClientFactory.getMediatorApiClient();
        try {
            let elections = await service.findElection({}, 0, 100);
            if (elections) {
                elections = getFakeElections(elections[0]);
                setElections(elections);
            }
        } catch (ex) {
            console.error(ex);
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
                    <InternationalText id="election_list_page.title" />
                </h1>
                <DataGrid
                    rows={elections}
                    columns={columns(intl)}
                    getRowId={(r) => r.election_id}
                    components={{
                        Toolbar: FilterToolbar,
                    }}
                    disableSelectionOnClick
                    className={classes.grid}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[10, 50, 100]}
                    pagination
                />
                {elections ? <div /> : <div>No elections found</div>}
                <div>{textResult}</div>
            </Container>
        </Grid>
    );
};

export default ElectionListPage;

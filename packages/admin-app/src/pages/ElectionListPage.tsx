/* eslint-disable */
import { ApiClientFactory, Election, ElectionState } from '@electionguard/api-client';
import { Grid, Container, makeStyles, TablePagination } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import FilterToolbar from '../components/FilterToolbar';
import InternationalText from '../components/InternationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0.8,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        display: 'block',
        paddingBottom: theme.spacing(4),
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    grid: {
        minHeight: 200,
    },
    electionState: {
        textTransform: 'lowercase',
    },
}));

const getFakeElections = () => {
    const state: ElectionState = 'OPEN' as ElectionState;
    return Array(100)
        .fill(undefined)
        .map(
            (a, i) =>
                ({
                    election_id: 'election_' + i,
                    key_name: 'key_ceremony_' + i,
                    state: state,
                    context: undefined,
                    manifest: undefined,
                } as Election)
        );
};

export const ElectionListPage: React.FC = () => {
    const initialElections: Election[] = [];
    const [elections, setElections] = useState(initialElections);
    const [textResult, setTextResult] = useState('');
    const [pageSize, setPageSize] = React.useState(10);
    const classes = useStyles();
    const intl = useIntl();

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
        {
            field: 'state',
            headerName: intl.formatMessage({
                id: 'election_list_page.state_header',
            }),
            width: 150,
            headerClassName: 'bold-style--header',
            cellClassName: classes.electionState,
        },
    ];

    const getElections = async () => {
        const service = ApiClientFactory.getMediatorApiClient();
        try {
            let elections = await service.findElection({}, 0, 100);
            if (elections) {
                elections = getFakeElections();
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
                <InternationalText className={classes.title} id="election_list_page.title" />
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

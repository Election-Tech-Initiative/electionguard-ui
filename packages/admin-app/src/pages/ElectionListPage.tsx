import { ApiClientFactory, Election, ElectionState } from '@electionguard/api-client';
import { Grid, Container, makeStyles } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import FilterToolbar from '../components/FilterToolbar';
import GoHomeButton from '../components/GoHomeButton';
import InternationalText from '../components/InternationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 500,
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 40,
        paddingBottom: theme.spacing(2),
    },
    grid: {
        width: '100%',
    },
    electionState: {
        textTransform: 'lowercase',
    },
    navArea: {
        paddingBottom: theme.spacing(4),
        textAlign: 'center',
    },
}));

const getFakeElections = () => {
    const state: ElectionState = 'OPEN' as ElectionState;
    return Array(100)
        .fill(undefined)
        .map(
            (a, i) =>
                ({
                    election_id: `election_${i}`,
                    key_name: `key_ceremony_${i}`,
                    state,
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

    const columns = (): GridColDef[] => [
        {
            field: 'election_id',
            headerName: intl.formatMessage({
                id: 'election_list_page.election_id_header',
            }),
            width: 300,
        },
        {
            field: 'key_name',
            headerName: intl.formatMessage({
                id: 'election_list_page.key_name_header',
            }),
            width: 300,
        },
        {
            field: 'state',
            headerName: intl.formatMessage({
                id: 'election_list_page.state_header',
            }),
            width: 150,
            cellClassName: classes.electionState,
        },
    ];

    const getElections = async () => {
        const service = ApiClientFactory.getMediatorApiClient();
        try {
            const electionResults1 = await service.findElection({}, 0, 100);
            const electionResults2 = getFakeElections();
            const useMock = false;
            const electionResults = useMock ? electionResults2 : electionResults1;
            if (electionResults) {
                setElections(electionResults);
            }
        } catch (ex) {
            setTextResult('An error occurred');
        }
    };
    useEffect(() => {
        getElections();
    }, []);
    return (
        <Container maxWidth="md" className={classes.root}>
            <InternationalText className={classes.title} id="election_list_page.title" />

            <div className={classes.navArea}>
                <GoHomeButton id="election_list_page.go_home" />
            </div>
            <DataGrid
                rows={elections}
                columns={columns()}
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
    );
};

export default ElectionListPage;

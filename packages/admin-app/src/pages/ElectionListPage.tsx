import { ApiClientFactory, Election } from '@electionguard/api-client';
import { Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { DataGrid, GridColDef, GridRowId, GridOverlay } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import FilterToolbar from '../components/FilterToolbar';
import GoHomeButton from '../components/GoHomeButton/GoHomeButton';
import InternationalText from '../components/InternationalText';
import MessageId from '../lang/MessageId';

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
    },
}));

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
                id: MessageId.ElectionListPage_ElectionIdHeader,
            }),
            width: 300,
        },
        {
            field: 'key_name',
            headerName: intl.formatMessage({
                id: MessageId.ElectionListPage_KeyNameHeader,
            }),
            width: 300,
        },
        {
            field: 'state',
            headerName: intl.formatMessage({
                id: MessageId.ElectionListPage_StateHeader,
            }),
            width: 150,
            cellClassName: classes.electionState,
        },
    ];

    const getElections = async () => {
        const service = ApiClientFactory.getMediatorApiClient();
        try {
            const electionResults = await service.findElection({}, 0, 100);
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

    const noRowsOverlay = (
        <GridOverlay>
            <InternationalText id={MessageId.ElectionListPage_NoRows} />
        </GridOverlay>
    );

    return (
        <Container maxWidth="md" className={classes.root}>
            <InternationalText className={classes.title} id={MessageId.ElectionListPage_Title} />

            <div className={classes.navArea}>
                <GoHomeButton id={MessageId.ElectionListPage_GoHome} />
            </div>
            <DataGrid
                rows={elections}
                columns={columns()}
                getRowId={(r) => r.election_id}
                components={{
                    Toolbar: FilterToolbar,
                    NoRowsOverlay: () => noRowsOverlay,
                }}
                disableSelectionOnClick
                className={classes.grid}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 50, 100]}
                pagination
            />
            <div>{textResult}</div>
        </Container>
    );
};

export default ElectionListPage;

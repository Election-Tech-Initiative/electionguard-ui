import { ApiClientFactory, Election } from '@electionguard/api-client';
import { Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { DataGrid, GridActionsCellItem, GridColumns, GridOverlay } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useIntl } from 'react-intl';
import GoHomeButton from '../components/GoHomeButton/GoHomeButton';
import InternationalText from '../components/InternationalText';
import MessageId from '../lang/MessageId';
import IconHeader from '../components/IconHeader';
import { Message } from '../lang';
import I8nTooltip from '../components/I8nTooltip/I8nTooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 500,
        width: '100%',
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

    const actions = () => [
        <GridActionsCellItem
            icon={
                <I8nTooltip messageId={MessageId.ElectionListPage_UploadBallot}>
                    <FileUploadIcon />
                </I8nTooltip>
            }
            label="Upload Ballot"
        />,
    ];

    const columns = (): GridColumns => [
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
            width: 250,
        },
        {
            field: 'state',
            headerName: intl.formatMessage({
                id: MessageId.ElectionListPage_StateHeader,
            }),
            width: 100,
            cellClassName: classes.electionState,
        },
        {
            field: 'action',
            type: 'actions',
            headerName: 'Action',
            width: 150,
            getActions: actions,
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
            <IconHeader title={new Message(MessageId.ElectionListPage_Title)} />

            <DataGrid
                rows={elections}
                columns={columns()}
                getRowId={(r) => r.election_id}
                components={{
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

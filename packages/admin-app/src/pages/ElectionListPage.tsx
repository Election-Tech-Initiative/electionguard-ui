import { Container, Tooltip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {
    DataGrid,
    GridActionsCellItem,
    GridColumns,
    GridOverlay,
    GridRowParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { ElectionSummaryDto } from '@electionguard/api-client/dist/nswag/clients';
import { useQuery } from 'react-query';
import InternationalText from '../components/InternationalText';
import MessageId from '../lang/MessageId';
import IconHeader from '../components/IconHeader';
import I8nTooltip from '../components/I8nTooltip/I8nTooltip';
import routeIds from '../routes/RouteIds';
import { useElectionClient } from '../hooks/useClient';
import AsyncContent from '../components/AsyncContent';
import UploadBallotButton from '../components/UploadBallotButton/UploadBallotButton';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

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
    error: {
        marginBottom: theme.spacing(2),
    },
}));

export const ElectionListPage: React.FC = () => {
    const [errorMessageId, setErrorMessageId] = useState<string>();
    const [pageSize, setPageSize] = React.useState(10);
    const classes = useStyles();
    const intl = useIntl();

    const electionClient = useElectionClient();

    const findElections = () => electionClient.list().then((response) => response.elections);
    const usersQuery = useQuery('elections', findElections);

    const actions = (params: GridRowParams) => [
        <GridActionsCellItem
            href={routeIds.electionListPage}
            icon={
                <I8nTooltip messageId={MessageId.ElectionListPage_UploadBallot}>
                    <UploadBallotButton
                        onError={setErrorMessageId}
                        onSuccess={() => usersQuery.refetch()}
                        electionId={params.id.toString()}
                    />
                </I8nTooltip>
            }
            label="Upload Ballot"
        />,
    ];

    const getBallots = (params: GridValueGetterParams<ElectionSummaryDto, ElectionSummaryDto>) => (
        <Tooltip
            title={`${params.row.cast_ballot_count} cast, ${params.row.spoiled_ballot_count} spoiled`}
        >
            <span>{params.row.cast_ballot_count + params.row.spoiled_ballot_count}</span>
        </Tooltip>
    );

    const columns = (): GridColumns => [
        {
            field: 'name',
            headerName: intl.formatMessage({
                id: MessageId.ElectionListPage_NameHeader,
            }),
            width: 250,
        },
        {
            field: 'election_id',
            headerName: intl.formatMessage({
                id: MessageId.ElectionListPage_ElectionIdHeader,
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
            field: 'ballots',
            headerName: intl.formatMessage({
                id: MessageId.ElectionListPage_BallotsHeader,
            }),
            renderCell: getBallots,
            width: 100,
        },
        {
            field: 'action',
            type: 'actions',
            headerName: '',
            width: 100,
            getActions: actions,
        },
    ];

    const noRowsOverlay = (
        <GridOverlay>
            <InternationalText id={MessageId.ElectionListPage_NoRows} />
        </GridOverlay>
    );

    return (
        <Container maxWidth="md" className={classes.root}>
            <IconHeader titleId={MessageId.ElectionListPage_Title} />
            {errorMessageId && (
                <ErrorMessage className={classes.error} MessageId={errorMessageId} />
            )}
            <AsyncContent query={usersQuery} errorMessage="there was an error">
                {(electionsRows) => (
                    <DataGrid
                        rows={electionsRows}
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
                )}
            </AsyncContent>
        </Container>
    );
};

export default ElectionListPage;

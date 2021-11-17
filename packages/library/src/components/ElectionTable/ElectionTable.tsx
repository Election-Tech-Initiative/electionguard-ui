import { Election, ElectionState } from '@electionguard/api-client';
import { Box, Button, Theme, lighten, makeStyles } from '@material-ui/core';
import { DataGrid, GridCellParams, GridColDef, GridSortDirection } from '@material-ui/data-grid';
import { GetApp as DownloadIcon } from '@material-ui/icons';
import * as React from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { AsyncResult } from '../../data/AsyncResult';
import AsyncContent from '../AsyncContent';

import { EmptyCell, FormattedDateCell, NewCell } from '../Cells';
import FilterToolbar from '../FilterToolbar';
import ElectionRow from './ElectionRow';

export interface ElectionTableProps {
    data: (election_id: string) => AsyncResult<Election[]>;
}

const DownloadButtonCell = (params: GridCellParams, download: (id: number) => void) => {
    const { value } = params;
    const id = value as number;
    return (
        <Box paddingRight="4px" paddingLeft="4px">
            <Button onClick={() => download(id)}>
                <DownloadIcon />
                <FormattedMessage id="election_table.download_button" defaultMessage="Download" />
            </Button>
        </Box>
    );
};

const mockDownload = (id: number) => {
    // eslint-disable-next-line no-console
    console.log(id);
};

const columns = (intl: IntlShape): GridColDef[] => [
    {
        field: 'isNew',
        headerName: undefined,
        width: 80,

        renderCell: NewCell,
        renderHeader: EmptyCell,
        headerClassName: 'bold-style--header',
    },
    {
        field: 'name',
        headerName: intl.formatMessage({ id: 'election_list.name_header', defaultMessage: 'Name' }),
        width: 200,
        headerClassName: 'bold-style--header',
    },
    {
        field: 'state',
        headerName: intl.formatMessage({
            id: 'election_list.state_header',
            defaultMessage: 'State',
        }),
        width: 150,
        headerClassName: 'bold-style--header',
    },
    {
        field: 'jurisdiction',
        headerName: intl.formatMessage({
            id: 'election_list.jurisdiction_header',
            defaultMessage: 'Jurisdiction',
        }),
        width: 200,
        headerClassName: 'bold-style--header',
    },
    {
        field: 'dateCreated',
        headerName: intl.formatMessage({
            id: 'election_list.date_created_header',
            defaultMessage: 'Date Created',
        }),
        width: 200,
        renderCell: (params) => FormattedDateCell(params, intl),
        headerClassName: 'bold-style--header',
    },
    {
        field: 'id',
        renderHeader: EmptyCell,
        renderCell: (params) => DownloadButtonCell(params, mockDownload),
        width: 150,
        headerClassName: 'bold-style--header',
    },
];

const useStyles = makeStyles((theme: Theme) => {
    const rowColor = lighten(theme.palette.primary.light, 0.5);
    return {
        root: {
            '& .bold-style--header': {
                marginLeft: -theme.spacing(0.25),
                fontSize: theme.typography.h6.fontSize,
                fontWeight: theme.typography.h6.fontWeight,
                '& .MuiDataGrid-columnSeparator': {
                    opacity: `0 !important`,
                },
            },
            '& .election-table--new': {
                backgroundColor: rowColor,
            },
            '& columnHeader': {
                opacity: 0,
            },
        },
    };
});

export const ElectionTable: React.FC<ElectionTableProps> = ({ data }) => {
    const classes = useStyles();
    const intl = useIntl();
    const electionQuery = data('election-1');
    return (
        <Box display="flex" minHeight="500px" height="100%" width="100%" className={classes.root}>
            <AsyncContent query={electionQuery} errorMessage="there was an error">
                {(electionsFound) => {
                    const electionData: ElectionRow[] = [];
                    electionsFound.forEach((item) => {
                        const date = new Date();
                        electionData.push(
                            new ElectionRow(
                                item.election_id,
                                item.key_name,
                                'Maryland',
                                'Montgomery County',
                                date,
                                item.state === ElectionState.CREATED
                            )
                        );
                    });
                    return (
                        <>
                            <DataGrid
                                rows={electionData}
                                columns={columns(intl)}
                                components={{
                                    Toolbar: FilterToolbar,
                                }}
                                getRowClassName={(params) =>
                                    `election-table--${
                                        params.getValue(params.id, 'isNew') ? 'new' : ''
                                    }`
                                }
                                sortModel={[
                                    {
                                        field: 'dateCreated',
                                        sort: 'asc' as GridSortDirection,
                                    },
                                ]}
                                hideFooter
                                disableSelectionOnClick
                            />
                        </>
                    );
                }}
            </AsyncContent>
        </Box>
    );
};

export default ElectionTable;

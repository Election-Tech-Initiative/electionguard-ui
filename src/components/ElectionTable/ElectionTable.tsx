import { Box, Button, Chip, Theme, lighten, makeStyles } from '@material-ui/core';
import { DataGrid, GridCellParams, GridColDef, GridSortDirection } from '@material-ui/data-grid';
import { GetApp as DownloadIcon } from '@material-ui/icons';
import * as React from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { ElectionRowData } from './ElectionRowData';
import FilterToolbar from './FilterToolbar';

export interface ElectionTableProps {
    data: ElectionRowData[];
}

const EmptyCell = () => <></>;

const NewCell = (params: GridCellParams) => {
    const { value } = params;
    return value ? <Chip color="secondary" label="*New" /> : <></>;
};

const FormattedDateCell = (params: GridCellParams, intl: IntlShape) => {
    const { value } = params;
    return <>{intl.formatDate(value?.toString())}</>;
};

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
        headerClassName: 'election-table--header',
    },
    {
        field: 'name',
        headerName: intl.formatMessage({ id: 'election_list.name_header', defaultMessage: 'Name' }),
        width: 200,
        headerClassName: 'election-table--header',
    },
    {
        field: 'state',
        headerName: intl.formatMessage({
            id: 'election_list.state_header',
            defaultMessage: 'State',
        }),
        width: 150,
        headerClassName: 'election-table--header',
    },
    {
        field: 'jurisdiction',
        headerName: intl.formatMessage({
            id: 'election_list.jurisdiction_header',
            defaultMessage: 'Jurisdiction',
        }),
        width: 200,
        headerClassName: 'election-table--header',
    },
    {
        field: 'dateCreated',
        headerName: intl.formatMessage({
            id: 'election_list.date_created_header',
            defaultMessage: 'Date Created',
        }),
        width: 200,
        renderCell: (params) => FormattedDateCell(params, intl),
        headerClassName: 'election-table--header',
    },
    {
        field: 'id',
        renderHeader: EmptyCell,
        renderCell: (params) => DownloadButtonCell(params, mockDownload),
        width: 150,
        headerClassName: 'election-table--header',
    },
];

const useStyles = makeStyles((theme: Theme) => {
    const rowColor = lighten(theme.palette.primary.light, 0.5);
    return {
        root: {
            '& .election-table--header': {
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

const ElectionTable: React.FC<ElectionTableProps> = ({ data }) => {
    const classes = useStyles();
    const intl = useIntl();
    return (
        <Box display="flex" minHeight="500px" height="100%" width="100%" className={classes.root}>
            <DataGrid
                rows={data}
                columns={columns(intl)}
                components={{
                    Toolbar: FilterToolbar,
                }}
                getRowClassName={(params) =>
                    `election-table--${params.getValue(params.id, 'isNew') ? 'new' : ''}`
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
        </Box>
    );
};

export default ElectionTable;
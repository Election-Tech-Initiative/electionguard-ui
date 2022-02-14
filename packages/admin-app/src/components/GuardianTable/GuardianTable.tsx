import { AssignedGuardian } from '@electionguard/api-client';
import { Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { DataGrid, DataGridProps, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';

import { GuardianIconCell } from '../Cells';

export interface GuardianTableProps {
    data: AssignedGuardian[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
    },
    guardianGrid: {
        '& .bold-style--header': {
            marginLeft: -theme.spacing(0.25),
            '& .MuiDataGrid-columnSeparator': {
                opacity: `0 !important`,
            },
        },
    },
}));

const StyledDataGrid: FC<DataGridProps> = styled(DataGrid)(() => ({
    border: 0,
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell, .MuiDataGrid-columnHeaders': {
        border: 0,
    },
}));

const columns: GridColDef[] = [
    {
        field: 'sequenceOrder',
        headerName: ' ',
        disableColumnMenu: true,
        width: 50,
        renderCell: GuardianIconCell,
        headerClassName: 'bold-style--header',
    },
    { field: 'name', headerName: 'Name', width: 250, headerClassName: 'bold-style--header' },
];

export const GuardianTable: React.FC<GuardianTableProps> = ({ data }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <StyledDataGrid
                autoHeight
                disableSelectionOnClick
                disableColumnFilter
                headerHeight={0}
                disableColumnMenu
                disableColumnSelector
                className={classes.guardianGrid}
                rows={data}
                columns={columns}
                hideFooterPagination
            />
        </Box>
    );
};

export default GuardianTable;

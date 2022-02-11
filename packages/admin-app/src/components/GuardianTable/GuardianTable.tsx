import { AssignedGuardian } from '@electionguard/api-client';
import { Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Theme, styled } from '@mui/material/styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';

import { GuardianIconCell } from '../Cells';

export interface GuardianTableProps {
    data: AssignedGuardian[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .bold-style--header': {
            marginLeft: -theme.spacing(0.25),
            '& .MuiDataGrid-columnSeparator': {
                opacity: `0 !important`,
            },
        },
    },
}));

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell, .MuiDataGrid-columnHeaders': {
        border: 0,
    },
    '& .MuiDataGrid-cell': {
        border: 0,
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
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
        <Box display="flex" height="100%" width="100%">
            <StyledDataGrid
                autoHeight
                disableSelectionOnClick
                disableColumnFilter
                headerHeight={0}
                disableColumnMenu
                disableColumnSelector
                className={classes.root}
                rows={data}
                columns={columns}
                hideFooterPagination
            />
        </Box>
    );
};

export default GuardianTable;

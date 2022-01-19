import { AssignedGuardian } from '@electionguard/api-client';
import { Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import * as React from 'react';

import { GuardianIconCell } from '../Cells';
import FilterToolbar from '../FilterToolbar';

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
        <Box display="flex" minHeight="500px" height="100%" width="100%">
            <DataGrid
                autoHeight
                className={classes.root}
                rows={data}
                columns={columns}
                components={{
                    Toolbar: FilterToolbar,
                }}
                hideFooterPagination
            />
        </Box>
    );
};

export default GuardianTable;

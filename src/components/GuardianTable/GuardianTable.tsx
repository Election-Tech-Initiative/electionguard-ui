import { Box } from '@material-ui/core';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { Brightness1 as CircleIcon } from '@material-ui/icons';
import * as React from 'react';

import AssignedGuardian from '../../models/assignedGuardian';
import FilterToolbar from '../FilterToolbar';

export interface GuardianTableProps {
    data: AssignedGuardian[];
}

const ColorCell = (params: GridCellParams): React.ReactElement => {
    const { value } = params;
    return <CircleIcon style={{ color: value?.toString() }} />;
};

const columns: GridColDef[] = [
    {
        field: 'color',
        headerName: '',
        disableColumnMenu: true,
        width: 40,
        renderCell: ColorCell,
    },
    { field: 'name', headerName: 'Name', width: 250 },
];

const GuardianTable: React.FC<GuardianTableProps> = ({ data }) => (
    <Box display="flex" minHeight="500px" height="100%" width="100%">
        <DataGrid
            autoHeight
            rows={data}
            columns={columns}
            components={{
                Toolbar: FilterToolbar,
            }}
            hideFooterPagination
        />
    </Box>
);

export default GuardianTable;

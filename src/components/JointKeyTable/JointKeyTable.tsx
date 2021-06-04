import { Box, Button } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import * as React from 'react';

import JointKey from '../../models/jointKey';
import FilterToolbar from '../FilterToolbar';

export interface JointKeyTableProps {
    data: JointKey[];
}

const LinkCell = (): React.ReactElement => <Button>Open</Button>;

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    {
        field: 'numberOfGuardians',
        align: 'center',
        headerName: '# of Guardians',
        headerAlign: 'center',
        width: 180,
    },
    { field: 'quorum', align: 'center', headerName: 'Quorum', headerAlign: 'center', width: 150 },
    { field: 'id', headerName: ' ', width: 100, renderCell: LinkCell },
];

const JointKeyTable: React.FC<JointKeyTableProps> = ({ data }) => (
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

export default JointKeyTable;

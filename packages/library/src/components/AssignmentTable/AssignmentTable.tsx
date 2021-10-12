import { User } from '@electionguard-ui/api-client';
import { Box } from '@material-ui/core';
import { DataGrid, GridColDef, GridRowId } from '@material-ui/data-grid';
import * as React from 'react';

import FilterToolbar from '../FilterToolbar';

export interface AssignmentTableProps {
    data: User[];
    onChanged: (selectedIds: string[]) => void;
}

const columns: GridColDef[] = [
    { field: 'id', hide: true },
    { field: 'name', headerName: 'Name', width: 250 },
];

const AssignmentTable: React.FC<AssignmentTableProps> = ({ data, onChanged }) => {
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);

    const onSelectionChange = (rows: GridRowId[]) => {
        setSelectionModel(rows);
        onChanged(rows.map((rowId: GridRowId) => rowId.toString()));
    };

    return (
        <Box display="flex" minHeight="500px" height="100%" width="100%">
            <DataGrid
                autoHeight
                rows={data}
                columns={columns}
                components={{
                    Toolbar: FilterToolbar,
                }}
                onSelectionModelChange={(newSelection) => {
                    onSelectionChange(newSelection);
                }}
                hideFooterPagination
                selectionModel={selectionModel}
                checkboxSelection
            />
        </Box>
    );
};

export default AssignmentTable;

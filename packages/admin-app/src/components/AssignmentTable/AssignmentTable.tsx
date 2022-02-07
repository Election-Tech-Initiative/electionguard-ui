import { AsyncResult, Guardian, User } from '@electionguard/api-client';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import * as React from 'react';
import AsyncContent from '../AsyncContent';
import FilterToolbar from '../FilterToolbar';

export interface AssignmentTableProps {
    data: () => AsyncResult<Guardian[]>;
    onChanged: (selectedIds: string[]) => void;
}

const columns: GridColDef[] = [
    { field: 'guardian_id', hide: true },
    { field: 'name', headerName: 'Name', width: 250 },
];

export const AssignmentTable: React.FC<AssignmentTableProps> = ({ data, onChanged }) => {
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);

    const onSelectionChange = (rows: GridRowId[]) => {
        setSelectionModel(rows);
        onChanged(rows.map((rowId: GridRowId) => rowId.toString()));
    };

    const usersQuery = data();

    return (
        <Box display="flex" minHeight="500px" height="100%" width="100%">
            <AsyncContent query={usersQuery} errorMessage="there was an error">
                {(userData) => (
                    <DataGrid
                        autoHeight
                        rows={userData}
                        columns={columns}
                        getRowId={(row) => row.guardian_id}
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
                )}
            </AsyncContent>
        </Box>
    );
};

export default AssignmentTable;

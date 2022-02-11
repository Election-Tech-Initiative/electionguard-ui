import { AsyncResult, Guardian } from '@electionguard/api-client';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import * as React from 'react';
import AsyncContent from '../AsyncContent';

export interface AssignmentTableProps {
    data: () => AsyncResult<Guardian[]>;
    onChanged: (selectedIds: string[]) => void;
    initialData: string[];
}

const columns: GridColDef[] = [
    { field: 'guardian_id', hide: true },
    { field: 'name', headerName: 'Name', width: 250 },
];

export const AssignmentTable: React.FC<AssignmentTableProps> = ({
    data,
    onChanged,
    initialData,
}) => {
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>(initialData);

    const onSelectionChange = (rows: GridRowId[]) => {
        setSelectionModel(rows);
        onChanged(rows.map((rowId: GridRowId) => rowId.toString()));
    };

    const usersQuery = data();

    return (
        <Box display="flex" height="100%" width="100%">
            <AsyncContent query={usersQuery} errorMessage="there was an error">
                {(userData) => {
                    const result = (
                        <DataGrid
                            autoHeight
                            rows={userData}
                            columns={columns}
                            getRowId={(row) => row.guardian_id}
                            onSelectionModelChange={(newSelection) => {
                                onSelectionChange(newSelection);
                            }}
                            hideFooterPagination
                            selectionModel={selectionModel}
                            checkboxSelection
                        />
                    );
                    return result;
                }}
            </AsyncContent>
        </Box>
    );
};

export default AssignmentTable;

import { AsyncResult, UserInfo } from '@electionguard/api-client';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import * as React from 'react';
import AsyncContent from '../AsyncContent';

export interface AssignmentTableProps {
    data: () => AsyncResult<UserInfo[]>;
    onChanged: (selectedIds: string[]) => void;
    initialData: string[];
}

const getName = (params: GridValueGetterParams<UserInfo, UserInfo>) =>
    `${params.row.first_name} ${params.row.last_name}`;

const columns: GridColDef[] = [
    { field: 'username', hide: true },
    { field: 'fullName', valueGetter: getName, headerName: 'Name', width: 250 },
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
                            getRowId={(row) => row.username}
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

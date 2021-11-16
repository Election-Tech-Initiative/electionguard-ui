import { User } from '@electionguard/api-client';
import { Box } from '@material-ui/core';
import { DataGrid, GridColDef, GridRowId } from '@material-ui/data-grid';
import * as React from 'react';
import { AsyncResult } from '../../data/AsyncResult';
import AsyncContent from '../AsyncContent';

import FilterToolbar from '../FilterToolbar';

export interface AssignmentTableProps {
    data: () => AsyncResult<User[]>;
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

    const usersQuery = data();

    return (
        <Box display="flex" minHeight="500px" height="100%" width="100%">
            <AsyncContent query={usersQuery} errorMessage="there was an error">
                {(userData) => (
                    <>
                        <DataGrid
                            autoHeight
                            rows={userData}
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
                    </>
                )}
            </AsyncContent>
        </Box>
    );
};

export default AssignmentTable;

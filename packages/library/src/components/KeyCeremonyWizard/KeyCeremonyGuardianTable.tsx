import { KeyCeremonyGuardian } from '@electionguard-ui/api-client';
import { Box, makeStyles } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import * as React from 'react';

import { GuardianIconCell, TaskStatusCell } from '../Cells';
import FilterToolbar from '../FilterToolbar';
import InternationalText from '../InternationalText';
import KeyCeremonyStep from './KeyCeremonyStep';

export interface GuardianTableProps {
    data: KeyCeremonyGuardian[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.divider}`,
    },
    heading: {
        marginBottom: theme.spacing(3),
    },
    table: {
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
    { field: 'name', headerName: 'Name', width: 200, headerClassName: 'bold-style--header' },
    {
        field: 'publicKeyShared',
        headerName: 'Public Key Shared',
        headerAlign: 'center',
        renderCell: TaskStatusCell,
        align: 'center',
        width: 200,
        headerClassName: 'bold-style--header',
    },
    {
        field: 'backupsShared',
        headerName: 'Backups Shared',
        renderCell: TaskStatusCell,
        headerAlign: 'center',
        align: 'center',
        width: 200,
        headerClassName: 'bold-style--header',
    },
    {
        field: 'backupsVerified',
        headerName: 'Backups Verified',
        headerAlign: 'center',
        align: 'center',
        renderCell: TaskStatusCell,
        width: 200,
        headerClassName: 'bold-style--header',
    },
];

export interface KeyCeremonyGuardianTableProps {
    activeStep: KeyCeremonyStep;
    guardians: KeyCeremonyGuardian[];
}

const KeyCeremonyGuardianTable: React.FC<KeyCeremonyGuardianTableProps> = ({ guardians }) => {
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
            display="flex"
            flexDirection="column"
            minHeight="500px"
            height="100%"
            width="100%"
        >
            <InternationalText
                id="overload"
                defaultMessage="Status Tracker"
                component="h2"
                variant="h4"
                color="primary"
                className={classes.heading}
            />
            <DataGrid
                autoHeight
                className={classes.table}
                rows={guardians}
                columns={columns}
                components={{
                    Toolbar: FilterToolbar,
                }}
                hideFooterPagination
            />
        </Box>
    );
};

export default KeyCeremonyGuardianTable;

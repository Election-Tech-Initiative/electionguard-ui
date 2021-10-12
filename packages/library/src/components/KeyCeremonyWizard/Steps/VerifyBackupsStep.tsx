import { BackupVerification, TaskStatus } from '@electionguard-ui/api-client';
import { Box, makeStyles } from '@material-ui/core';
import { DataGrid, GridColDef, GridRowId, GridSortDirection } from '@material-ui/data-grid';
import React, { useState } from 'react';

import { Message, MessageId } from '../../../lang';
import { GuardianIconCell, TaskStatusCell } from '../../Cells';
import FilterToolbar from '../../FilterToolbar';
import StepHeader from '../../StepHeader';

export interface VerifyBackupsStepProps {
    verifications: BackupVerification[];
    onVerifyBackup: (id: string) => void;
    onAllBackupsVerified?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
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

const columns = (verifyBackup: () => void): GridColDef[] => [
    {
        field: 'id',
        hide: true,
    },
    {
        field: 'sequenceOrder',
        headerName: ' ',
        disableColumnMenu: true,
        width: 50,
        renderCell: GuardianIconCell,
        headerClassName: 'bold-style--header',
    },
    { field: 'name', headerName: 'Name', width: 600, headerClassName: 'bold-style--header' },
    {
        field: 'verified',
        headerName: 'Verified',
        renderCell: (params) =>
            TaskStatusCell(params, new Message('overload', 'Verify Backup'), verifyBackup),
        headerAlign: 'center',
        align: 'center',
        width: 200,
        headerClassName: 'bold-style--header',
    },
];

/**
 * Verify Backups for Key Ceremony
 */
const VerifyBackupsStep: React.FC<VerifyBackupsStepProps> = ({
    verifications,
    onVerifyBackup,
    onAllBackupsVerified,
    disabled,
    loading,
}) => {
    const [guardianId, setGuardianId] = useState<GridRowId[]>();
    const classes = useStyles();
    const data = verifications.map((v) => ({
        id: v.owner.id,
        sequenceOrder: v.owner.id,
        name: v.owner.name,
        verified: v.verified,
    }));
    const allVerificationsComplete = verifications.reduce(
        (prev, value) => prev && value.verified === TaskStatus.Complete,
        true
    );
    return (
        <>
            <StepHeader
                title={new Message(MessageId.KeyCeremony_VerifyBackups_Title)}
                description={new Message(MessageId.KeyCeremony_VerifyBackups_Description)}
                buttonText={new Message(MessageId.KeyCeremony_VerifyBackups_Button)}
                disabled={disabled || !allVerificationsComplete}
                loading={loading}
                onClick={onAllBackupsVerified}
            />
            <Box
                className={classes.root}
                display="flex"
                flexDirection="column"
                minHeight="500px"
                height="100%"
                width="100%"
            >
                <DataGrid
                    autoHeight
                    className={classes.table}
                    rows={data}
                    columns={columns(() => {
                        if (guardianId && guardianId[0]) {
                            onVerifyBackup(guardianId[0] as string);
                        }
                    })}
                    sortModel={[
                        {
                            field: 'sequenceOrder',
                            sort: 'asc' as GridSortDirection,
                        },
                    ]}
                    components={{
                        Toolbar: FilterToolbar,
                    }}
                    selectionModel={guardianId}
                    onSelectionModelChange={(row) => setGuardianId(row)}
                    hideFooterPagination
                />
            </Box>
        </>
    );
};

export default VerifyBackupsStep;

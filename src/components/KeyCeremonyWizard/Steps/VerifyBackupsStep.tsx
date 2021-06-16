import { Box, makeStyles } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import { BackupVerification } from '../../../models/keyCeremony';
import { GuardianIconCell, IdButtonCell, TaskStatusCell } from '../../Cells';
import FilterToolbar from '../../FilterToolbar';
import StepHeader from '../../StepHeader';

export interface VerifyBackupsStepProps {
    verifications: BackupVerification[];
    onVerifyBackup: (id: string) => void;
    onAllBackupsVerified?: () => void;
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

const columns = (verifyBackup: (id: string) => void): GridColDef[] => [
    {
        field: 'sequenceOrder',
        headerName: ' ',
        disableColumnMenu: true,
        width: 50,
        renderCell: GuardianIconCell,
        headerClassName: 'bold-style--header',
    },
    { field: 'name', headerName: 'Name', width: 400, headerClassName: 'bold-style--header' },
    {
        field: 'id',
        headerName: ' ',
        headerAlign: 'center',
        renderCell: (params) => IdButtonCell(params, new Message('overload'), verifyBackup),
        align: 'center',
        width: 200,
        headerClassName: 'bold-style--header',
    },
    {
        field: 'verified',
        headerName: 'Verified',
        renderCell: TaskStatusCell,
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
}) => {
    const classes = useStyles();
    const data = verifications.map((v) => ({
        id: v.verifier.id,
        sequenceOrder: v.verifier.id,
        name: v.verifier.name,
        verified: v.verified,
    }));
    return (
        <>
            <StepHeader
                title={new Message(MessageId.KeyCeremony_VerifyBackups_Title)}
                description={new Message(MessageId.KeyCeremony_VerifyBackups_Description)}
                buttonText={new Message(MessageId.KeyCeremony_VerifyBackups_Button)}
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
                    columns={columns(onVerifyBackup)}
                    components={{
                        Toolbar: FilterToolbar,
                    }}
                    hideFooterPagination
                />
            </Box>
        </>
    );
};

export default VerifyBackupsStep;

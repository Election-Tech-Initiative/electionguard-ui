import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Snackbar,
    SnackbarCloseReason,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { PublishOutlined } from '@mui/icons-material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ValidateManifestRequest } from '@electionguard/api-client';
import { Message, MessageId } from '../../../lang';
import IconHeader from '../../IconHeader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

export const alert = (props: AlertProps) => <MuiAlert elevation={6} variant="filled" {...props} />;

const useStyles = makeStyles((theme) => ({
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    error: {
        marginBottom: theme.spacing(2),
    },
}));

export interface ManifestUploadStepProps {
    onNext: () => void;
    onUploadManifest: (manifestRequest: ValidateManifestRequest) => void;
}

const ManifestUploadStep: React.FC<ManifestUploadStepProps> = ({ onNext, onUploadManifest }) => {
    const [uploading, setUploading] = useState(false);
    const [errorMessageId, setErrorMessageId] = useState<string>();

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorMessageId(undefined);
    };

    const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.files !== null) {
            const file = e.target.files[0];
            setUploading(true);
            try {
                const text = await file.text();
                const json = JSON.parse(text);
                if (!json.manifest) {
                    throw new Error();
                }
                const manifestRequest = {
                    manifest: json.manifest,
                } as ValidateManifestRequest;
                onUploadManifest(manifestRequest);
                setUploading(false);
                onNext();
            } catch (ex) {
                setErrorMessageId(MessageId.ElectionSetup_UploadManifest_InvalidFile);
            } finally {
                setUploading(false);
            }
        } else {
            setErrorMessageId(MessageId.ElectionSetup_UploadManifest_NoFile);
        }
    };

    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.content}>
            <IconHeader
                title={new Message(MessageId.ElectionSetup_UploadManifest_Title)}
                Icon={PublishOutlined}
            />

            {errorMessageId && (
                <ErrorMessage className={classes.error} MessageId={errorMessageId} />
            )}

            <Button disabled={uploading} color="secondary" variant="contained" component="label">
                <FormattedMessage id={MessageId.ElectionSetup_UploadManifest_Upload} />
                <input
                    id="manifest-upload"
                    accept="application/JSON"
                    type="file"
                    hidden
                    onChange={(e) => onFileUpload(e)}
                />
            </Button>

            {uploading && <CircularProgress size={24} variant="indeterminate" />}

            <Snackbar open={!!errorMessageId} autoHideDuration={6000} onClose={handleClose}>
                <Alert severity="error" onClose={handleClose}>
                    <FormattedMessage id={MessageId.ElectionSetup_UploadManifest_Error} />
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ManifestUploadStep;

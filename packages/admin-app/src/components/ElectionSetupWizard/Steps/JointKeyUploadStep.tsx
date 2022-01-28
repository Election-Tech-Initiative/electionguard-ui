import { Box, Button, CircularProgress, Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { VpnKey as KeyIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { CiphertextElectionContext, SubmitElectionRequest } from '@electionguard/api-client';
import IconHeader from '../../IconHeader';
import { Message, MessageId } from '../../../lang';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    error: {
        color: 'red',
        marginBottom: theme.spacing(2),
    },
}));

export interface JointKeyUploadStepProps {
    onNext: () => void;
    onChanged: (newSubmitElectionRequest: SubmitElectionRequest) => void;
}

/**
 * Joint Key Select Step for Election Setup
 */
const JointKeyUploadStep: React.FC<JointKeyUploadStepProps> = ({ onNext, onChanged }) => {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string>();
    const classes = useStyles();

    const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.files?.length) {
            setUploading(true);
            const file = e.target.files[0];
            const text = await file.text();
            try {
                const keys = JSON.parse(text);
                const context = {
                    commitment_hash: keys.commitment_hash,
                    crypto_base_hash: keys.crypto_base_hash,
                    crypto_extended_base_hash: keys.crypto_extended_base_hash,
                    elgamal_public_key: keys.elgamal_public_key,
                } as CiphertextElectionContext;
                const fileValid =
                    context.commitment_hash &&
                    context.crypto_base_hash &&
                    context.crypto_extended_base_hash &&
                    context.elgamal_public_key;
                if (!fileValid) {
                    throw new Error();
                }
                onChanged({ context } as SubmitElectionRequest);
                onNext();
            } catch (ex) {
                setError(
                    "That file didn't look quite right. Please ensure it's the same key file that was produced by an election ceremony."
                );
            } finally {
                setUploading(false);
            }
        } else {
            setError('No file found.  Please try again.');
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            alignItems="center"
            className={classes.root}
        >
            <Container maxWidth="md" className={classes.content}>
                <IconHeader
                    title={new Message(MessageId.ElectionSetup_JointKeyUpload_Title)}
                    Icon={KeyIcon}
                />

                <div className={classes.error}>{error}</div>

                <div className={classes.wrapper}>
                    <Button
                        disabled={uploading}
                        color="secondary"
                        variant="contained"
                        component="label"
                    >
                        <FormattedMessage
                            id={MessageId.ElectionSetupUploadManifestUpload}
                            defaultMessage="Select Files to Upload"
                        />
                        <input
                            id="manifest-upload"
                            accept="application/JSON"
                            type="file"
                            hidden
                            onChange={(e) => onFileUpload(e)}
                        />
                    </Button>
                    {uploading && (
                        <CircularProgress
                            size={24}
                            variant="indeterminate"
                            className={classes.buttonProgress}
                        />
                    )}
                </div>
            </Container>
        </Box>
    );
};

export default JointKeyUploadStep;

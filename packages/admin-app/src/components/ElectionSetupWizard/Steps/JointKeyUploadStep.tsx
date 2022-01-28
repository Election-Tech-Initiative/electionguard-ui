import { Box, Button, CircularProgress, Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { VpnKey as KeyIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { SubmitElectionRequest } from '@electionguard/api-client';
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
    const [error, setError] = useState(false);
    const classes = useStyles();

    const onButtonClick = () => {
        onNext();
    };

    const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.files?.length) {
            const file = e.target.files[0];
            const text = await file.text();
            const keys = JSON.parse(text);
            const request = {
                context: {
                    commitment_hash: keys.commitment_hash,
                    crypto_base_hash: keys.crypto_base_hash,
                    crypto_extended_base_hash: keys.crypto_extended_base_hash,
                    elgamal_public_key: keys.elgamal_public_key,
                },
            } as SubmitElectionRequest;
            onChanged(request);
            onNext();
        } else {
            setError(true);
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

                <Box display="flex" flexDirection="column" alignItems="center">
                    <Button
                        className={classes.spaced}
                        variant="contained"
                        color="secondary"
                        onClick={onButtonClick}
                    >
                        <FormattedMessage id={MessageId.ElectionSetup_JointKeyUpload_Next} />
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default JointKeyUploadStep;

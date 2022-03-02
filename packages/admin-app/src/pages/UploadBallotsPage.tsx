/* tslint:disable */
/* eslint-disable */
import { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { FormattedMessage } from 'react-intl';
import { Button, CircularProgress, Container } from '@mui/material';
import {
    SubmitBallotsRequestDto,
    SubmittedBallotDto,
} from '@electionguard/api-client/dist/nswag/clients';
import { MessageId } from '../lang';
import { useBallotClient } from '../hooks/useClient';
import IconHeader from '../components/IconHeader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const useStyles = makeStyles((theme) => ({
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        marginBottom: theme.spacing(2),
    },
    error: {
        marginBottom: theme.spacing(2),
    },
}));

export const ElectionListPage: React.FC = () => {
    const [uploading, setUploading] = useState(false);
    const [errorMessageId, setErrorMessageId] = useState<string>();
    const classes = useStyles();

    const ballotClient = useBallotClient();

    const isBallotValid = (ballot: SubmittedBallotDto) =>
        ballot.object_id && ballot.state && ballot.contests?.length;

    const onFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.files?.length) {
            setUploading(true);
            const file = e.target.files[0];
            const text = await file.text();
            try {
                const ballots = JSON.parse(text) as SubmitBallotsRequestDto;
                if (!ballots?.ballots?.length)
                    setErrorMessageId(MessageId.UploadBallots_Error_NoBallots);
                const ballotsValid = ballots.ballots.every(isBallotValid);
                if (!ballotsValid) {
                    setErrorMessageId(MessageId.UploadBallots_Error_BallotsInvalid);
                }
                // todo: set electionId
                const electionId = 'hamilton-general-election-simple';
                ballotClient.submit(electionId, ballots);
            } catch (ex) {
                setErrorMessageId(MessageId.ElectionSetup_JointKeyUpload_InvalidFile);
            } finally {
                setUploading(false);
            }
        } else {
            setErrorMessageId(MessageId.ElectionSetup_JointKeyUpload_NoFile);
        }
    };

    return (
        <Container maxWidth="md" className={classes.content}>
            <IconHeader titleId={MessageId.UploadBallots_Title} />
            {errorMessageId && (
                <ErrorMessage className={classes.error} MessageId={errorMessageId} />
            )}

            <Button
                disabled={uploading}
                color="secondary"
                variant="contained"
                component="label"
                className={classes.button}
            >
                <FormattedMessage id={MessageId.ElectionSetup_JointKeyUpload_SelectFiles} />
                <input
                    id="manifest-upload"
                    accept="application/JSON"
                    type="file"
                    hidden
                    onChange={(e) => onFileUpload(e)}
                />
            </Button>
            {uploading && <CircularProgress size={24} variant="indeterminate" />}
        </Container>
    );
};

export default ElectionListPage;

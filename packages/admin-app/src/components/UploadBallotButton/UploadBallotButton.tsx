/* tslint:disable */
/* eslint-disable */
import { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Button, CircularProgress } from '@mui/material';
import {
    SubmitBallotsRequestDto,
    SubmittedBallotDto,
} from '@electionguard/api-client/dist/nswag/clients';
import { FormattedMessage } from 'react-intl';
import { MessageId } from '../../lang';
import { useBallotClient } from '../../hooks/useClient';

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
}));

export interface UploadBallotButtonProps {
    onError: (errorId: MessageId) => void;
}

export const UploadBallotButton: React.FC<UploadBallotButtonProps> = ({ onError }) => {
    const [uploading, setUploading] = useState(false);
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
                const anyBallots = ballots?.ballots?.length;
                if (!anyBallots) {
                    onError(MessageId.UploadBallots_Error_NoBallots);
                    return;
                }
                const ballotsValid = ballots.ballots.every(isBallotValid);
                if (!ballotsValid) {
                    onError(MessageId.UploadBallots_Error_BallotsInvalid);
                    return;
                }
                // todo: set electionId
                const electionId = 'hamilton-general-election-simple';
                ballotClient.submit(electionId, ballots);
            } catch (ex) {
                console.error('crap, an error', ex);
                onError(MessageId.ElectionSetup_JointKeyUpload_InvalidFile);
            } finally {
                setUploading(false);
            }
        } else {
            onError(MessageId.ElectionSetup_JointKeyUpload_NoFile);
        }
    };

    return (
        <Button
            disabled={uploading}
            color="secondary"
            variant="contained"
            component="label"
            className={classes.button}
        >
            <FormattedMessage id={MessageId.UploadBallots_SelectFiles} />
            <input
                id="manifest-upload"
                accept="application/JSON"
                type="file"
                hidden
                onChange={(e) => onFileUpload(e)}
            />
            {uploading && <CircularProgress size={24} variant="indeterminate" />}
        </Button>
    );
};

export default UploadBallotButton;

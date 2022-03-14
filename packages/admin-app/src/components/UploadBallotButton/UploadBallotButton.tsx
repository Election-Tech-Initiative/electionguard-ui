import { useState } from 'react';
import { CircularProgress, IconButton, Stack } from '@mui/material';
import {
    SubmitBallotsRequestDto,
    SubmittedBallotDto,
} from '@electionguard/api-client/dist/nswag/clients';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { MessageId } from '../../lang';
import { useBallotClient } from '../../hooks/useClient';
import I8nTooltip from '../I8nTooltip/I8nTooltip';

export interface UploadBallotButtonProps {
    electionId: string;
    onError: (errorId: MessageId) => void;
    onSuccess: () => void;
}

export const UploadBallotButton: React.FC<UploadBallotButtonProps> = ({
    onError,
    onSuccess,
    electionId,
}) => {
    const [uploading, setUploading] = useState(false);

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
                await ballotClient.submit(electionId, ballots);
                onSuccess();
            } catch (ex) {
                onError(MessageId.UploadBallots_InvalidFile);
            } finally {
                setUploading(false);
            }
        } else {
            onError(MessageId.UploadBallots_NoFile);
        }
    };

    return (
        <Stack>
            {uploading && <CircularProgress size={24} variant="indeterminate" />}
            {!uploading && (
                <I8nTooltip messageId={MessageId.UploadBallots_SelectFiles}>
                    <IconButton disabled={uploading} color="secondary" component="label">
                        <FileUploadIcon />
                        <input
                            id="manifest-upload"
                            accept="application/JSON"
                            type="file"
                            hidden
                            onChange={(e) => onFileUpload(e)}
                        />
                    </IconButton>
                </I8nTooltip>
            )}
        </Stack>
    );
};

export default UploadBallotButton;

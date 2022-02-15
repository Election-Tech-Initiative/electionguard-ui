import { Box, Container, IconButton, TextField } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';

import { SubmitElectionRequest } from '@electionguard/api-client';
import { Foundation as FoundationIcon } from '@mui/icons-material';
import FormattedButton from '../../FormattedButton';
import IconHeader from '../../IconHeader';
import { Message, MessageId } from '../../../lang';
import I8nTooltip from '../../I8nTooltip/I8nTooltip';

export interface SetupInstructionsStepProps {
    onNext: () => void;
    onChanged: (submitElectionRequest: SubmitElectionRequest) => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginBottom: theme.spacing(4),
    },
}));

/**
 * Basic Information Retrieval for Election Setup
 */
const BasicInfoStep: React.FC<SetupInstructionsStepProps> = ({
    onNext,
    onChanged: onDataChanged,
}) => {
    const [electionId, setElectionId] = useState('');
    const classes = useStyles();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const submitElectionRequest = {
            election_id: electionId,
        } as SubmitElectionRequest;
        onDataChanged(submitElectionRequest);
        onNext();
    };

    return (
        <Container maxWidth="md" className={classes.root}>
            <IconHeader titleId={MessageId.ElectionSetup_BasicInfo_Title} Icon={FoundationIcon} />
            <Container maxWidth="xs">
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="election_id"
                        label="Election ID"
                        variant="standard"
                        fullWidth
                        className={classes.text}
                        onChange={(e) => setElectionId(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <I8nTooltip
                                    messageId={MessageId.ElectionSetup_BasicInfo_ElectionIdTooltip}
                                >
                                    <IconButton>
                                        <InfoIcon />
                                    </IconButton>
                                </I8nTooltip>
                            ),
                        }}
                    />
                    <Box display="flex" justifyContent="center">
                        <FormattedButton
                            type="submit"
                            variant="contained"
                            color="secondary"
                            disabled={!electionId}
                            text={new Message(MessageId.ElectionSetup_BasicInfo_Next)}
                        />
                    </Box>
                </form>
            </Container>
        </Container>
    );
};

export default BasicInfoStep;

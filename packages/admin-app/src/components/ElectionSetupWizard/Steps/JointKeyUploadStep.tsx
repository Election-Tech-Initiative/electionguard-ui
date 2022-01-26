import { Box, Button, Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { VpnKey as KeyIcon } from '@mui/icons-material';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { SubmitElectionRequest } from '@electionguard/api-client';
import IconHeader from '../../IconHeader';
import { Message, MessageId } from '../../../lang';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%',
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
}));

export interface JointKeyUploadStepProps {
    onNext: (newSubmitElectionRequest: SubmitElectionRequest) => void;
    submitElectionRequest: SubmitElectionRequest;
}

/**
 * Joint Key Select Step for Election Setup
 */
const JointKeyUploadStep: React.FC<JointKeyUploadStepProps> = ({
    onNext,
    submitElectionRequest,
}) => {
    const classes = useStyles();

    const onButtonClick = () => {
        onNext(submitElectionRequest);
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
                    title={
                        new Message(
                            MessageId.ElectionSetup_JointKeyUpload_Title,
                            'Joint Key Retrieved'
                        )
                    }
                    Icon={KeyIcon}
                />
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

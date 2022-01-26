import { Box, Container, IconButton, TextField, Tooltip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

import { useIntl } from 'react-intl';
import { Message, MessageId } from '../../../lang';
import FormattedButton from '../../FormattedButton';
import IconHeader from '../../IconHeader';

export interface SetupInstructionsStepProps {
    onNext?: () => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: theme.spacing(2),
    },
    text: {
        width: 300,
        marginBottom: theme.spacing(4),
    },
}));

/**
 * Setup Instructions Step for Election Setup
 */
const BasicInfoStep: React.FC<SetupInstructionsStepProps> = ({ onNext }) => {
    const classes = useStyles();
    const intl = useIntl();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (onNext) {
            onNext();
        }
    };

    return (
        <Container maxWidth="md" className={classes.root}>
            <IconHeader title={new Message(MessageId.ElectionSetup_BasicInfo_Title)} />
            <form onSubmit={handleSubmit}>
                <TextField
                    id="election_id"
                    label="Election ID"
                    variant="standard"
                    className={classes.text}
                    InputProps={{
                        endAdornment: (
                            <Tooltip
                                title={intl.formatMessage({
                                    id: MessageId.ElectionSetup_BasicInfo_ElectionIdTooltip,
                                })}
                            >
                                <IconButton>
                                    <InfoIcon />
                                </IconButton>
                            </Tooltip>
                        ),
                    }}
                />
                <Box display="flex" justifyContent="center">
                    <FormattedButton
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        text={new Message(MessageId.ElectionSetup_BasicInfo_Next)}
                    />
                </Box>
            </form>
        </Container>
    );
};

export default BasicInfoStep;

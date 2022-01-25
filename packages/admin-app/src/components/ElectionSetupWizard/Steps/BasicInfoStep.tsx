import { Box, Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import FormattedButton from '../../FormattedButton';
import IconHeader from '../../IconHeader';

export interface SetupInstructionsStepProps {
    onNext?: () => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
}));

/**
 * Setup Instructions Step for Election Setup
 */
const BasicInfoStep: React.FC<SetupInstructionsStepProps> = ({ onNext }) => {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Container className={classes.root}>
                <IconHeader title={new Message(MessageId.ElectionSetupIntroductionTitle)} />
                <Box width="100%" display="flex" justifyContent="center">
                    <FormattedButton
                        className={classes.spaced}
                        variant="contained"
                        color="secondary"
                        onClick={onNext}
                        text={new Message(MessageId.ElectionSetupIntroductionNext)}
                    />
                </Box>
            </Container>
        </Container>
    );
};

export default BasicInfoStep;

import { Box, Button, Container } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { VpnKey as KeyIcon } from '@mui/icons-material';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import IconHeader from '../../IconHeader';
import InternationalText from '../../InternationalText';
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

export interface JointKeyRetrievedStepProps {
    onNext: () => void;
}

/**
 * Joint Key Select Step for Election Setup
 */
const JointKeyRetrievedStep: React.FC<JointKeyRetrievedStepProps> = ({ onNext }) => {
    const classes = useStyles();

    const onButtonClick = () => {
        onNext();
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
                            MessageId.ElectionSetupJointKeyRetrievedTitle,
                            'Joint Key Retrieved'
                        )
                    }
                    Icon={KeyIcon}
                />
                <Box display="flex" flexDirection="column" alignItems="center">
                    <InternationalText
                        className={classes.spaced}
                        variant="h5"
                        component="h2"
                        id={MessageId.ElectionSetupJointKeyRetrievedCTA}
                    />
                    <InternationalText
                        className={classes.spaced}
                        id={MessageId.ElectionSetupJointKeyRetrievedDescription}
                    />

                    <Button
                        className={classes.spaced}
                        variant="contained"
                        color="secondary"
                        onClick={onButtonClick}
                    >
                        <FormattedMessage id={MessageId.ElectionSetupJointKeyRetreivedNext} />
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default JointKeyRetrievedStep;

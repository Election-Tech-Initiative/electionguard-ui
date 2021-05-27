import { Box, Button, Container, Typography, makeStyles } from '@material-ui/core';
import { VpnKey as KeyIcon } from '@material-ui/icons';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { loremIpsum } from '../../../lang';
import { InternationalText } from '../../../models/internationalText';
import IconHeader from '../../IconHeader';

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
    onNext?: () => void;
}

/**
 * Joint Key Select Step for Election Setup
 */
const JointKeyRetrievedStep: React.FC<JointKeyRetrievedStepProps> = ({ onNext }) => {
    const classes = useStyles();
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
                        new InternationalText(
                            'election_setup.joint_key_retrieved.title',
                            'Joint Key Retrieved'
                        )
                    }
                    Icon={KeyIcon}
                />
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography className={classes.spaced} variant="h5" component="h2">
                        <FormattedMessage
                            id="election_setup.joint_key_retrieved.cta"
                            defaultMessage="Create a new election with retrieved key"
                        />
                    </Typography>
                    <Typography className={classes.spaced}>
                        <FormattedMessage
                            id="election_setup.joint_key_retrieved.description"
                            defaultMessage={loremIpsum}
                        />
                    </Typography>
                    <Button
                        className={classes.spaced}
                        variant="contained"
                        color="secondary"
                        onClick={onNext}
                    >
                        <FormattedMessage
                            id="election_setup.joint_key_retrieved.next"
                            defaultMessage="Continue"
                        />
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default JointKeyRetrievedStep;

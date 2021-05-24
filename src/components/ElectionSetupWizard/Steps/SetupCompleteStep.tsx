import { Box, Button, Container, makeStyles } from '@material-ui/core';
import { CheckCircleOutlineOutlined } from '@material-ui/icons';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { InternationalText } from '../../../models/internationalText';
import IconHeader from '../../IconHeader';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export interface SetupCompleteStepProps {
    onComplete: () => void;
}

const SetupCompleteStep: React.FC<SetupCompleteStepProps> = ({ onComplete }) => {
    const classes = useStyles();

    return (
        <Box
            flexDirection="column"
            alignContent="center"
            justifyContent="center"
            className={classes.root}
        >
            <Container maxWidth="md" className={classes.content}>
                <IconHeader
                    title={
                        new InternationalText(
                            'election_setup.setup_complete.title',
                            'Congratulations, the election is ready.'
                        )
                    }
                    Icon={CheckCircleOutlineOutlined}
                />
                <Button
                    onClick={onComplete}
                    color="secondary"
                    variant="contained"
                    component="label"
                >
                    <FormattedMessage
                        id="election_setup.setup_complete.next"
                        defaultMessage="Return to Election List"
                    />
                </Button>
            </Container>
        </Box>
    );
};

export default SetupCompleteStep;

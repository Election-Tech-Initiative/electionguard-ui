import { Button, Container, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { loremIpsum } from '../../../lang';
import { InternationalText } from '../../../models/internationalText';
import IconHeader from '../../IconHeader';
import OrderedList from '../../OrderedList';

export interface SetupInstructionsStepProps {
    onNext?: () => void;
}

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
    control: {
        minWidth: 500,
        marginBottom: theme.spacing(4),
    },
    fullHeight: {
        height: '100%',
    },
}));

/**
 * Setup Instructions Step for Election Setup
 */
const SetupInstructionsStep: React.FC<SetupInstructionsStepProps> = ({ onNext }) => {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <IconHeader
                title={
                    new InternationalText(
                        'election_setup.introduction.title',
                        'Welcome to the Election Setup'
                    )
                }
            />
            <Typography className={classes.spaced}>
                <FormattedMessage
                    id="election_setup.introduction.description"
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
                    id="election_setup.joint_key_select.next"
                    defaultMessage="Continue"
                />
            </Button>
            <Typography className={classes.spaced} color="primary" variant="h6" component="h2">
                <FormattedMessage
                    id="election_setup.introduction.steps_heading"
                    defaultMessage="Here's what to expect"
                />
            </Typography>
            <Typography className={classes.spaced}>
                <FormattedMessage
                    id="election_setup.introduction.steps_instruction"
                    defaultMessage={loremIpsum}
                />
            </Typography>
            <OrderedList>
                <Typography>
                    <FormattedMessage
                        id="election_setup.introduction.step1"
                        defaultMessage={loremIpsum}
                    />
                </Typography>

                <Typography>
                    <FormattedMessage
                        id="election_setup.introduction.step2"
                        defaultMessage={loremIpsum}
                    />
                </Typography>

                <Typography>
                    <FormattedMessage
                        id="election_setup.introduction.step3"
                        defaultMessage={loremIpsum}
                    />
                </Typography>

                <Typography>
                    <FormattedMessage
                        id="election_setup.introduction.step4"
                        defaultMessage={loremIpsum}
                    />
                </Typography>
            </OrderedList>
        </Container>
    );
};

export default SetupInstructionsStep;

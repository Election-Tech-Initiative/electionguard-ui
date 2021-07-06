import { Button, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Message, MessageId, loremIpsum } from '../../../lang';
import IconHeader from '../../IconHeader';
import InternationalText from '../../InternationalText';
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
                    new Message(
                        MessageId.ElectionSetupIntroductionTitle,
                        'Welcome to the Election Setup'
                    )
                }
            />
            <InternationalText
                className={classes.spaced}
                component="p"
                id={MessageId.ElectionSetupIntroductionDescription}
                defaultMessage={loremIpsum}
            />
            <Button
                className={classes.spaced}
                variant="contained"
                color="secondary"
                onClick={onNext}
            >
                <FormattedMessage
                    id={MessageId.ElectionSetupIntroductionNext}
                    defaultMessage="Continue"
                />
            </Button>
            <InternationalText
                className={classes.spaced}
                color="primary"
                variant="h6"
                component="h2"
                id={MessageId.ElectionSetupIntroductionStepsHeading}
                defaultMessage="Here's what to expect"
            />
            <InternationalText
                className={classes.spaced}
                id={MessageId.ElectionSetupIntroductionStepsInstructions}
                defaultMessage={loremIpsum}
            />
            <OrderedList>
                <InternationalText
                    id={MessageId.ElectionSetupIntroductionStep1}
                    defaultMessage={loremIpsum}
                />
                <InternationalText
                    id={MessageId.ElectionSetupIntroductionStep2}
                    defaultMessage={loremIpsum}
                />
                <InternationalText
                    id={MessageId.ElectionSetupIntroductionStep3}
                    defaultMessage={loremIpsum}
                />
                <InternationalText
                    id={MessageId.ElectionSetupIntroductionStep4}
                    defaultMessage={loremIpsum}
                />
            </OrderedList>
        </Container>
    );
};

export default SetupInstructionsStep;

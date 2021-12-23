import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

import { Message } from '../../lang';
import InternationalText from '../InternationalText';
import OrderedList from '../OrderedList';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
}));

export interface StepIntroductionProps {
    heading: Message;
    description: Message;
    steps: Message[];
}

/**
 * Common Introduction for Steps
 */
export const StepIntroduction: React.FC<StepIntroductionProps> = ({
    heading,
    description,
    steps,
}) => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <InternationalText
                className={classes.spaced}
                color="primary"
                variant="h6"
                component="h2"
                id={heading.id}
                description={heading.description}
                defaultMessage={heading.defaultMessage}
            />
            <InternationalText
                className={classes.spaced}
                id={description.id}
                description={description.description}
                defaultMessage={description.defaultMessage}
            />
            <OrderedList>
                {steps.map((step) => (
                    <InternationalText
                        key={step.id}
                        id={step.id}
                        description={step.description}
                        defaultMessage={step.defaultMessage}
                    />
                ))}
            </OrderedList>
        </Container>
    );
};

export default StepIntroduction;

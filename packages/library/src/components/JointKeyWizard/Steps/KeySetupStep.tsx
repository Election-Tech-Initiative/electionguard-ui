import { BaseJointKey } from '@electionguard-ui/api';
import { Box, Button, Container, TextField, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Message, MessageId } from '../../../lang';
import IconHeader from '../../IconHeader';
import InternationalText from '../../InternationalText';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    description: {
        marginBottom: theme.spacing(3),
    },
    heading: {
        marginBottom: theme.spacing(1),
    },
    field: {
        minWidth: 80,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    textField: {
        width: 400,
    },
    buttonContainer: {
        marginBottom: theme.spacing(2),
    },
    button: {
        minWidth: 100,
        marginRight: theme.spacing(2),
    },
}));

export interface KeySetupStepProps {
    onSubmit: (baseJointKey: BaseJointKey) => void;
    onCancel: () => void;
}

/**
 * Key Setup Step
 */
const KeySetupStep: React.FC<KeySetupStepProps> = ({ onSubmit, onCancel }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    // TODO Migrate joint key defaults to constant file
    const minGuardians = 1;
    const maxGuardians = 10;
    const defaultKeyName = 'Joint Key';

    const [numberOfGuardians, setNumberofGuardians] = useState<number>(minGuardians);
    const [quorum, setQuorum] = useState<number>(minGuardians);
    const [name, setName] = useState<string>();

    const validate = (): boolean => !!name;

    const handleNumberOfGuardians: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const newNumberOfGuardians = Math.min(
            Math.max(parseFloat(e.target.value), minGuardians),
            maxGuardians
        );
        setNumberofGuardians(newNumberOfGuardians);
    };

    const handleQuorum: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const newQuorum = Math.min(
            Math.max(parseFloat(e.target.value), minGuardians),
            numberOfGuardians
        );
        setQuorum(newQuorum);
    };

    const handleName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit({ name: name || defaultKeyName, numberOfGuardians, quorum, guardians: [] });
        }
    };

    return (
        <Container maxWidth="md">
            <IconHeader title={new Message(MessageId.JointKeySetup_KeySetup_Title)} />
            <form className={classes.form} onSubmit={handleSubmit}>
                <InternationalText
                    className={classes.description}
                    id={MessageId.JointKeySetup_KeySetup_Description}
                />
                <InternationalText
                    className={classes.heading}
                    color="primary"
                    variant="h5"
                    component="h2"
                    id={MessageId.JointKeySetup_KeySetup_KeyHeading}
                />
                <TextField
                    required
                    className={clsx(classes.textField, classes.field)}
                    variant="outlined"
                    value={name}
                    onChange={handleName}
                    label={formatMessage(new Message(MessageId.JointKey_Name))}
                />
                <InternationalText
                    className={classes.heading}
                    color="primary"
                    variant="h5"
                    component="h2"
                    id={MessageId.JointKeySetup_KeySetup_NumberOfGuardiansHeading}
                />
                <Box>
                    <InternationalText
                        color="primary"
                        id={MessageId.JointKeySetup_KeySetup_NumberOfGuardiansEmphasis}
                    />{' '}
                    <InternationalText
                        id={MessageId.JointKeySetup_KeySetup_NumberOfGuardiansDescription}
                    />
                </Box>
                <TextField
                    required
                    className={classes.field}
                    type="number"
                    variant="outlined"
                    value={numberOfGuardians}
                    onChange={handleNumberOfGuardians}
                    label={formatMessage(new Message(MessageId.JointKey_NumberOfGuardians))}
                />
                <InternationalText
                    className={classes.heading}
                    color="primary"
                    variant="h5"
                    component="h2"
                    id={MessageId.JointKeySetup_KeySetup_QuorumHeading}
                />
                <Box>
                    <InternationalText
                        color="primary"
                        id={MessageId.JointKeySetup_KeySetup_QuorumEmphasis}
                    />{' '}
                    <InternationalText id={MessageId.JointKeySetup_KeySetup_QuorumDescription} />
                </Box>
                <TextField
                    required
                    className={classes.field}
                    type="number"
                    variant="outlined"
                    value={quorum}
                    onChange={handleQuorum}
                    label={formatMessage(new Message(MessageId.JointKey_Quorum))}
                />
                <Box className={classes.buttonContainer}>
                    <Button
                        disabled={!validate()}
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="secondary"
                    >
                        <FormattedMessage id={MessageId.Actions_Submit} />
                    </Button>
                    <Button className={classes.button} color="primary" onClick={onCancel}>
                        <FormattedMessage id={MessageId.Actions_Cancel} />
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default KeySetupStep;

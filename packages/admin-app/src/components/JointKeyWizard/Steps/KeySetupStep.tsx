import { BaseJointKey } from '@electionguard/api-client';
import { Button, Container, Grid, TextField } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Message, MessageId } from '../../../lang';
import IconHeader from '../../IconHeader';

const useStyles = makeStyles((theme) => ({
    button: {
        minWidth: 100,
        marginRight: theme.spacing(2),
    },
    buttonRow: {
        textAlign: 'center',
    },
}));

export interface KeySetupStepProps {
    baseJointKey: BaseJointKey;
    onSubmit: (baseJointKey: BaseJointKey) => void;
    onCancel: () => void;
}

/**
 * Key Setup Step
 */
const KeySetupStep: React.FC<KeySetupStepProps> = ({ baseJointKey, onSubmit, onCancel }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    // TODO Migrate joint key defaults to constant file
    const minGuardians = 1;
    const maxGuardians = 10;

    const [numberOfGuardians, setNumberofGuardians] = useState<number>(
        baseJointKey.numberOfGuardians
    );
    const [quorum, setQuorum] = useState<number>(baseJointKey.quorum);
    const [name, setName] = useState<string>(baseJointKey.name);

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
            onSubmit({ name, numberOfGuardians, quorum, guardians: [] });
        }
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} maxWidth="sm" justifyContent="center">
                    <Grid item xs={12}>
                        <IconHeader title={new Message(MessageId.JointKeySetup_KeySetup_Title)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            variant="outlined"
                            value={name}
                            onChange={handleName}
                            label={formatMessage(new Message(MessageId.JointKey_Name))}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            type="number"
                            variant="outlined"
                            value={numberOfGuardians}
                            onChange={handleNumberOfGuardians}
                            label={formatMessage(new Message(MessageId.JointKey_NumberOfGuardians))}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            type="number"
                            variant="outlined"
                            value={quorum}
                            onChange={handleQuorum}
                            label={formatMessage(new Message(MessageId.JointKey_Quorum))}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.buttonRow}>
                        <Button
                            disabled={!validate()}
                            className={classes.button}
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            <FormattedMessage id={MessageId.Actions_Next} />
                        </Button>
                        <Button className={classes.button} color="primary" onClick={onCancel}>
                            <FormattedMessage id={MessageId.Actions_Cancel} />
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default KeySetupStep;

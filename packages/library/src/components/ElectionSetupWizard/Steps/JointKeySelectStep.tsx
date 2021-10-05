import { JointKey } from '@electionguard-ui/api';
import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    makeStyles,
} from '@material-ui/core';
import { SaveAlt as SaveIcon } from '@material-ui/icons';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AsyncResult } from '../../../data/AsyncResult';
import { Message, MessageId, loremIpsum } from '../../../lang';
import AsyncContent from '../../AsyncContent';
import IconHeader from '../../IconHeader';

const useStyles = makeStyles((theme) => ({
    spaced: {
        marginBottom: theme.spacing(2),
    },
    control: {
        minWidth: 500,
        marginBottom: theme.spacing(4),
    },
}));

export interface JointKeySelectStepProps {
    onNext?: () => void;
    getKeys: () => AsyncResult<JointKey[]>;
}

/**
 * Joint Key Select Step for Election Setup
 */
const JointKeySelectStep: React.FC<JointKeySelectStepProps> = ({ onNext, getKeys }) => {
    const [jointKey, setJointKey] = useState<JointKey>();
    let keys: JointKey[] = [];

    const onKeySelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedKey = keys.find((k) => k.id === (event.target.value as string));
        if (selectedKey) {
            setJointKey(selectedKey);
        }
    };
    const keyQuery = getKeys();
    const queryClient = new QueryClient();

    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Box display="flex" flexDirection="column">
                <IconHeader
                    title={
                        new Message(
                            MessageId.ElectionSetupJointKeySelectTitle,
                            'Pull Guardian Keys'
                        )
                    }
                    Icon={SaveIcon}
                />
                <Typography className={classes.spaced}>
                    <FormattedMessage
                        id={MessageId.ElectionSetupJointKeySelectDescription}
                        defaultMessage={loremIpsum}
                    />
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="start">
                    <AsyncContent query={keyQuery} errorMessage="there was an error">
                        {(keysFound) => {
                            keys = keysFound;
                            return (
                                <>
                                    <FormControl className={classes.control}>
                                        <InputLabel id="joint-key-select-label">
                                            <FormattedMessage
                                                id={MessageId.ElectionSetupJointKeySelectPrompt}
                                                defaultMessage="Select Key for Election"
                                            />
                                        </InputLabel>
                                        <Select
                                            labelId="joint-key-select-label"
                                            id="joint-key-select"
                                            value={jointKey?.id}
                                            onChange={onKeySelect}
                                        >
                                            {keysFound.map((key) => (
                                                <MenuItem key={key.id} value={key.id}>
                                                    {key.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </>
                            );
                        }}
                    </AsyncContent>

                    <Button
                        disabled={jointKey === undefined}
                        className={classes.spaced}
                        variant="contained"
                        color="secondary"
                        onClick={onNext}
                    >
                        <FormattedMessage
                            id={MessageId.ElectionSetupJointKeySelectNext}
                            defaultMessage="Pull keys for selected election"
                        />
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default JointKeySelectStep;

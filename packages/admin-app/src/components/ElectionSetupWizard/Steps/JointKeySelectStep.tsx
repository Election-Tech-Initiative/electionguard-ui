/* tslint:disable */
/* eslint-disable */
import {
    ClientFactory,
    JointKey,
    KeyCeremony,
    KeyCeremonyQueryResponse,
} from '@electionguard/api-client';
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
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
// todo: Remove useGetJointKeys - import { useGetJointKeys } from '@electionguard/api-client';

import { Message, MessageId, loremIpsum } from '../../../lang';
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
}

/**
 * Joint Key Select Step for Election Setup
 */
const JointKeySelectStep: React.FC<JointKeySelectStepProps> = ({ onNext }) => {
    const [jointKey, setJointKey] = useState<JointKey>();
    let keys: JointKey[] = [];

    const onKeySelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        const selectedKey = keys.find((k) => k.id === (event.target.value as string));
        if (selectedKey) {
            setJointKey(selectedKey);
        }
    };

    const [keyCeremonies, setKeyCeremonies] = useState<KeyCeremony[]>([]);

    const ceremonyClient = ClientFactory.GetCeremonyClient();

    const getKeyCeremonies = async () => {
        await ceremonyClient
            .find(0, 100, { filter: {} })
            .then((response: KeyCeremonyQueryResponse) => {
                setKeyCeremonies(response.key_ceremonies);
            })
            .catch((ex: any) => {
                console.error(ex);
            });
    };

    const queryClient = new QueryClient();

    const classes = useStyles();

    useEffect(() => {
        getKeyCeremonies();
    }, []);

    return (
        <Container maxWidth="md">
            <QueryClientProvider client={queryClient}>
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
                                {keyCeremonies.map((key) => (
                                    <MenuItem key={key.key_name} value={key.key_name}>
                                        {key.key_name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

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
            </QueryClientProvider>
        </Container>
    );
};

export default JointKeySelectStep;

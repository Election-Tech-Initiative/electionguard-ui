import { ClientFactory, KeyCeremony, SubmitElectionRequest } from '@electionguard/api-client';
import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { SaveAlt as SaveIcon } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
// todo: Remove useGetJointKeys - import { useGetJointKeys } from '@electionguard/api-client';

import { Message, MessageId } from '../../../lang';
import IconHeader from '../../IconHeader';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
    control: {
        minWidth: 500,
        marginBottom: theme.spacing(4),
    },
    inputLabel: {
        backgroundColor: 'white',
    },
}));

export interface JointKeySelectStepProps {
    onNext: () => void;
    onChanged: (submitElectionRequest: SubmitElectionRequest) => void;
}

/**
 * Joint Key Select Step for Election Setup
 */
const JointKeySelectStep: React.FC<JointKeySelectStepProps> = ({ onNext, onChanged }) => {
    const [keyCeremony, setKeyCeremony] = useState<KeyCeremony>();
    const [keyCeremonies, setKeyCeremonies] = useState<KeyCeremony[]>([]);

    const onKeySelect = (event: SelectChangeEvent) => {
        const selectedKey = keyCeremonies.find(
            (k) => k.key_name === (event.target.value as string)
        );
        if (selectedKey) {
            setKeyCeremony(selectedKey);
        }
    };

    const findKeyCeremonies = async () => {
        const ceremonyClient = ClientFactory.GetCeremonyClient();
        await ceremonyClient.find(0, 100, { filter: {} }).then((response) => {
            setKeyCeremonies(response.key_ceremonies);
        });
    };

    useEffect(() => {
        findKeyCeremonies();
    }, []);

    const queryClient = new QueryClient();

    const classes = useStyles();

    const onNextClick = () => {
        const submitElectionRequest = {
            key_name: keyCeremony?.key_name,
        } as SubmitElectionRequest;
        onChanged(submitElectionRequest);
        onNext();
    };

    return (
        <Container maxWidth="md" className={classes.root}>
            <QueryClientProvider client={queryClient}>
                <Box display="flex" flexDirection="column">
                    <IconHeader
                        title={new Message(MessageId.ElectionSetup_JointKeySelect_Title)}
                        Icon={SaveIcon}
                    />
                    <Box display="flex" flexDirection="column" alignItems="start">
                        <FormControl className={classes.control}>
                            <InputLabel id="joint-key-select-label" className={classes.inputLabel}>
                                <FormattedMessage
                                    id={MessageId.ElectionSetup_JointKeySelect_Prompt}
                                    defaultMessage="Select Key for Election"
                                />
                            </InputLabel>
                            <Select
                                labelId="joint-key-select-label"
                                id="joint-key-select"
                                value={keyCeremony ? keyCeremony.key_name : ''}
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
                            disabled={keyCeremony === undefined}
                            className={classes.spaced}
                            variant="contained"
                            color="secondary"
                            onClick={onNextClick}
                        >
                            <FormattedMessage id={MessageId.ElectionSetup_JointKeySelect_Next} />
                        </Button>
                    </Box>
                </Box>
            </QueryClientProvider>
        </Container>
    );
};

export default JointKeySelectStep;

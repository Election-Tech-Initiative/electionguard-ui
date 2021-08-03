import { Box, Container, makeStyles, useTheme } from '@material-ui/core';
import { CheckCircle as CompleteIcon } from '@material-ui/icons';
import React from 'react';

import { MessageId } from '../../lang';
import { KeyCeremonyGuardian } from '../../models/keyCeremony';
import TaskStatus from '../../models/taskStatus';
import InternationalText from '../InternationalText';
import SequenceOrderProgress from '../SequenceOrderProgress';
import KeyCeremonyStep from './KeyCeremonyStep';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));

export interface KeyCeremonyVisualizationProps {
    activeStep: KeyCeremonyStep;
    guardians: KeyCeremonyGuardian[];
}

const KeyCeremonyVisualization: React.FC<KeyCeremonyVisualizationProps> = ({
    activeStep,
    guardians,
}) => {
    const classes = useStyles();
    const { palette } = useTheme();
    return (
        <Container maxWidth="md" className={classes.root}>
            <Box display="flex" justifyContent="center" padding="15px">
                {activeStep >= KeyCeremonyStep.Complete ? (
                    <Box
                        height="225px"
                        display="flex"
                        fontSize={120}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CompleteIcon color="primary" fontSize="inherit" />
                        <InternationalText
                            id={MessageId.KeyCeremony_Vizualization_Complete}
                            variant="h4"
                            color="primary"
                        />
                    </Box>
                ) : (
                    <Box
                        width="230px"
                        display="grid"
                        gridTemplateRows="75px auto"
                        gridTemplateColumns="40px 40px auto"
                    >
                        <Box
                            gridColumn="1"
                            gridRow="1"
                            zIndex={activeStep >= KeyCeremonyStep.SharePublicKey ? 2 : 1}
                        >
                            <SequenceOrderProgress
                                completeColor={palette.primary.light}
                                active={activeStep >= KeyCeremonyStep.SharePublicKey}
                                steps={guardians.map((guardian) => ({
                                    sequenceOrder: guardian.sequenceOrder,
                                    complete: guardian.publicKeyShared === TaskStatus.Complete,
                                }))}
                            />
                        </Box>
                        <Box
                            gridColumn="3"
                            gridRow="1"
                            zIndex={activeStep >= KeyCeremonyStep.VerifyBackups ? 4 : 1}
                        >
                            <SequenceOrderProgress
                                completeColor={palette.primary.dark}
                                active={activeStep >= KeyCeremonyStep.VerifyBackups}
                                steps={guardians.map((guardian) => ({
                                    sequenceOrder: guardian.sequenceOrder,
                                    complete: guardian.backupsVerified === TaskStatus.Complete,
                                }))}
                            />
                        </Box>
                        <Box
                            gridColumn="2"
                            gridRow="2"
                            zIndex={activeStep >= KeyCeremonyStep.ShareBackups ? 3 : 1}
                        >
                            <SequenceOrderProgress
                                completeColor={palette.primary.main}
                                active={activeStep >= KeyCeremonyStep.ShareBackups}
                                steps={guardians.map((guardian) => ({
                                    sequenceOrder: guardian.sequenceOrder,
                                    complete: guardian.backupsShared === TaskStatus.Complete,
                                }))}
                            />
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default KeyCeremonyVisualization;

import {
    AssignedGuardian,
    KeyCeremonyStatus,
    KeyCeremonyUi,
    TaskStatus,
} from '@electionguard-ui/api';
import { Box, Container } from '@material-ui/core';
import React, { useState } from 'react';

import { createEnumStepper } from '../../utils/EnumStepper';
import WizardStep from '../WizardStep';
import KeyCeremonyActiveStep from './KeyCeremonyActiveStep';
import KeyCeremonyGuardianTable from './KeyCeremonyGuardianTable';
import KeyCeremonyStep from './KeyCeremonyStep';
import KeyCeremonyStepper from './KeyCeremonyStepper';
import KeyCeremonyVisualization from './KeyCeremonyVisualization';
import { KeyCeremonyIntroductionStep, MeetGuardiansStep } from './Steps';

export interface KeyCeremonyWizardProps {
    keyCeremony: KeyCeremonyUi;
    guardian: AssignedGuardian;
    loading?: boolean;
    createKeyPair: () => void;
    sharePublicKey: () => void;
    createBackups: () => void;
    shareBackups: () => void;
    verifyBackup: (id: string) => void;
    backupsAllVerified: () => void;
    combineKeys: () => void;
    completeKeyCeremony: () => void;
}

const getStartingStep = (
    guardian?: AssignedGuardian,
    keyCeremony?: KeyCeremonyUi
): KeyCeremonyStep => {
    if (!keyCeremony) return KeyCeremonyStep.Instructions;
    if (keyCeremony.status === KeyCeremonyStatus.Complete) {
        return KeyCeremonyStep.Complete;
    }

    // TODO Add Canceled screen
    if (keyCeremony.status === KeyCeremonyStatus.Canceled) {
        return KeyCeremonyStep.Complete;
    }

    // TODO Add Canceled screen
    if (keyCeremony.status === KeyCeremonyStatus.Inactive) {
        return KeyCeremonyStep.Complete;
    }

    const assignedGuardian = keyCeremony.guardians.find((assigned) => assigned.id === guardian?.id);

    if (assignedGuardian) {
        if (assignedGuardian.backupsVerified === TaskStatus.Complete) {
            return KeyCeremonyStep.CombineKeys;
        }
        if (assignedGuardian.backupsShared === TaskStatus.Complete) {
            return KeyCeremonyStep.VerifyBackups;
        }
        if (assignedGuardian.backupsCreated === TaskStatus.Complete) {
            return KeyCeremonyStep.ShareBackups;
        }
        if (assignedGuardian.publicKeyShared === TaskStatus.Complete) {
            return KeyCeremonyStep.CreateBackups;
        }
        if (assignedGuardian.keypairCreated === TaskStatus.Complete) {
            return KeyCeremonyStep.SharePublicKey;
        }
    } else {
        const allBackupsVerified = keyCeremony.guardians.reduce(
            (accumulator, assigned): boolean =>
                accumulator && assigned.backupsVerified === TaskStatus.Complete,
            true
        );
        if (allBackupsVerified) return KeyCeremonyStep.CombineKeys;

        const allBackupsShared = keyCeremony.guardians.reduce(
            (accumulator, assigned): boolean =>
                accumulator && assigned.backupsShared === TaskStatus.Complete,
            true
        );
        if (allBackupsShared) return KeyCeremonyStep.VerifyBackups;

        const allPublicKeysShared = keyCeremony.guardians.reduce(
            (accumulator, assigned): boolean =>
                accumulator && assigned.publicKeyShared === TaskStatus.Complete,
            true
        );
        if (allPublicKeysShared) return KeyCeremonyStep.CreateBackups;
    }
    return KeyCeremonyStep.Instructions;
};

/**
 * Wizard to setup the election
 */
const KeyCeremonyWizard: React.FC<KeyCeremonyWizardProps> = ({
    guardian,
    keyCeremony,
    createKeyPair,
    sharePublicKey,
    createBackups,
    shareBackups,
    verifyBackup,
    backupsAllVerified,
    combineKeys,
    completeKeyCeremony,
}) => {
    const startingStep = getStartingStep(guardian, keyCeremony);
    const [step, setStep] = useState(startingStep);
    const { nextStep } = createEnumStepper(KeyCeremonyStep);
    const next = () => setStep(nextStep(step));
    const { guardians } = keyCeremony;
    return (
        <Box height="100%">
            <WizardStep active={step === KeyCeremonyStep.Instructions}>
                <KeyCeremonyIntroductionStep onNext={next} />
            </WizardStep>
            <WizardStep active={step === KeyCeremonyStep.MeetGuardians}>
                <MeetGuardiansStep onNext={next} guardians={guardians} />
            </WizardStep>
            <WizardStep active={step > KeyCeremonyStep.MeetGuardians}>
                <KeyCeremonyStepper activeStep={step} />
                <Container maxWidth="md">
                    <KeyCeremonyVisualization activeStep={step} guardians={guardians} />
                    <KeyCeremonyActiveStep
                        activeStep={step}
                        verifications={guardians.find((g) => g.id === guardian.id)?.verifications}
                        onCreateKeyPair={() => {
                            createKeyPair();
                            next();
                        }}
                        onSharePublicKey={() => {
                            sharePublicKey();
                            next();
                        }}
                        onCreateBackups={() => {
                            createBackups();
                            next();
                        }}
                        onShareBackups={() => {
                            shareBackups();
                            next();
                        }}
                        onVerifyBackup={verifyBackup}
                        onAllBackupsVerified={() => {
                            backupsAllVerified();
                            next();
                        }}
                        onCombineKeys={() => {
                            combineKeys();
                            next();
                        }}
                        onComplete={() => {
                            completeKeyCeremony();
                            next();
                        }}
                    />
                    {step <= KeyCeremonyStep.CombineKeys && (
                        <KeyCeremonyGuardianTable activeStep={step} guardians={guardians} />
                    )}
                </Container>
            </WizardStep>
        </Box>
    );
};

export default KeyCeremonyWizard;

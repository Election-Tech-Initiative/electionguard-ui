import { Box, Button } from '@material-ui/core';
import React, { useState } from 'react';

import { KeyCeremonyGuardian } from '../../models/keyCeremony';
import WizardStep from '../WizardStep';
import { KeyCeremonyIntroductionStep } from './Steps';
import MeetGuardiansStep from './Steps/MeetGuardiansStep';

export enum KeyCeremonyStep {
    Instructions = 0,
    MeetGuardians = 1,
    CreateElectionKeyPair = 2,
    SharePublicKey = 3,
    GeneratePartialKeyBackup = 4,
    SharePartialKeyBackup = 6,
    VerifyPartialKeyBackups = 7,
    ConfirmCombination = 8,
    JointKeyComplete = 9,
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface KeyCeremonyWizardProps {
    startingStep?: KeyCeremonyStep;
    guardians: KeyCeremonyGuardian[];
}

const nextStep = (step: KeyCeremonyStep): KeyCeremonyStep => {
    let newStep = step + 1;
    if (newStep === Object.keys(KeyCeremonyStep).length / 2) {
        newStep = KeyCeremonyStep.Instructions;
    }
    return newStep;
};

/**
 * Wizard to setup the election
 */
const KeyCeremonyWizard: React.FC<KeyCeremonyWizardProps> = ({
    startingStep = KeyCeremonyStep.Instructions,
    guardians,
}) => {
    const [step, setStep] = useState(startingStep);
    const next = () => setStep(nextStep(step));
    return (
        <Box height="100%">
            <WizardStep active={step === KeyCeremonyStep.Instructions}>
                <KeyCeremonyIntroductionStep onNext={next} />
            </WizardStep>
            <WizardStep active={step === KeyCeremonyStep.MeetGuardians}>
                <MeetGuardiansStep onNext={next} guardians={guardians} />
            </WizardStep>
            <WizardStep active={step >= KeyCeremonyStep.MeetGuardians}>
                <div>
                    Instructions <Button onClick={next}>Next</Button>
                </div>
            </WizardStep>
        </Box>
    );
};

export default KeyCeremonyWizard;

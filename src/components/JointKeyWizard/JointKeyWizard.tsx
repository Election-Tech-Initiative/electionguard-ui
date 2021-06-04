import { Box } from '@material-ui/core';
import React, { useState } from 'react';

import { BaseJointKey } from '../../models/jointKey';
import User from '../../models/user';
import WizardStep from '../WizardStep';
import {
    GuardianAssignmentReviewStep,
    GuardianAssignmentStep,
    KeySetupReviewStep,
    KeySetupStep,
} from './Steps';

export enum JointKeyStep {
    KeySetup = 0,
    KeySetupReview = 1,
    GuardianAssignment = 2,
    GuardianAssignmentReview = 3,
}

export interface JointKeyWizardProps {
    getGuardians: () => User[];
    createJointKey: (baseJointKey: BaseJointKey) => void;
    onCancel: () => void;
}

const nextStep = (step: JointKeyStep): JointKeyStep => {
    let newStep = step + 1;
    if (newStep === Object.keys(JointKeyStep).length / 2) {
        newStep = JointKeyStep.KeySetup;
    }
    return newStep;
};

const previousStep = (step: JointKeyStep): JointKeyStep => {
    let newStep = step - 1;
    if (newStep < 0) {
        newStep = JointKeyStep.KeySetup;
    }
    return newStep;
};

/**
 * Wizard to setup the election
 */
const JointKeyWizard: React.FC<JointKeyWizardProps> = ({
    createJointKey,
    onCancel,
    getGuardians,
}) => {
    const [step, setStep] = useState(JointKeyStep.KeySetup);

    const [baseJointKey, setBaseJointKey] = useState<BaseJointKey>({
        name: 'Default Name',
        numberOfGuardians: 1,
        quorum: 1,
        guardians: [],
    });

    const next = () => setStep(nextStep(step));
    const previous = () => setStep(previousStep(step));

    return (
        <Box height="100%">
            <WizardStep active={step === JointKeyStep.KeySetup}>
                <KeySetupStep
                    onSubmit={(key) => {
                        setBaseJointKey(key);
                        next();
                    }}
                    onCancel={previous}
                />
            </WizardStep>
            <WizardStep active={step === JointKeyStep.KeySetupReview}>
                <KeySetupReviewStep
                    baseJointKey={baseJointKey}
                    onConfirm={next}
                    onPrevious={previous}
                />
            </WizardStep>
            <WizardStep active={step === JointKeyStep.GuardianAssignment}>
                <GuardianAssignmentStep
                    baseJointKey={baseJointKey}
                    possibleGuardians={getGuardians()}
                    onSubmit={(key) => {
                        setBaseJointKey(key);
                        next();
                    }}
                    onCancel={previous}
                />
            </WizardStep>
            <WizardStep active={step === JointKeyStep.GuardianAssignmentReview}>
                <GuardianAssignmentReviewStep
                    baseJointKey={baseJointKey}
                    onConfirm={createJointKey}
                    onEditAssignedGuardians={() => setStep(JointKeyStep.GuardianAssignment)}
                    onEditKeySetup={() => setStep(JointKeyStep.KeySetup)}
                    onCancel={onCancel}
                />
            </WizardStep>
        </Box>
    );
};

export default JointKeyWizard;

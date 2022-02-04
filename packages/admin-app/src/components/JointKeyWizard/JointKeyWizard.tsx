import { AsyncResult, BaseJointKey, User } from '@electionguard/api-client';
import { Box } from '@mui/material';
import React, { useState } from 'react';

import { createEnumStepper } from '../../utils/EnumStepper';
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

/**
 * Wizard to setup the election
 */
export const JointKeyWizard: React.FC = () => {
    const [step, setStep] = useState(JointKeyStep.KeySetup);
    const { nextStep, previousStep } = createEnumStepper(JointKeyStep);
    const [baseJointKey, setBaseJointKey] = useState<BaseJointKey>({
        name: 'Default Name',
        numberOfGuardians: 1,
        quorum: 1,
        guardians: [],
    });

    const next = () => setStep(nextStep(step));
    const previous = () => setStep(previousStep(step));
    const createJointKey = (key: BaseJointKey) => {
        console.log('creating key', key);
    };

    const onCancel = () => {
        console.log('canceling');
    };

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
                    onConfirm={(key) => {
                        createJointKey(key);
                        next();
                    }}
                    onEditAssignedGuardians={() => setStep(JointKeyStep.GuardianAssignment)}
                    onEditKeySetup={() => setStep(JointKeyStep.KeySetup)}
                    onCancel={onCancel}
                />
            </WizardStep>
        </Box>
    );
};

export default JointKeyWizard;

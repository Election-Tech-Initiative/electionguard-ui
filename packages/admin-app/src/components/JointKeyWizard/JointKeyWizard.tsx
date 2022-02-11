import { BaseJointKey, KeyCeremonyCreateRequest } from '@electionguard/api-client';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useKeyClient } from '../../hooks/useClient';
import routeIds from '../../routes/RouteIds';

import { createEnumStepper } from '../../utils/EnumStepper';
import WizardStep from '../WizardStep';
import GuardianAssignmentStep from './Steps/GuardianAssignmentStep';
import JointKeyReviewStep from './Steps/JointKeyReviewStep';
import KeySetupStep from './Steps/KeySetupStep';

export enum JointKeyStep {
    KeySetup = 0,
    GuardianAssignment = 1,
    JointKeyReview = 2,
}

/**
 * Wizard to setup the election
 */
export const JointKeyWizard: React.FC = () => {
    const [step, setStep] = useState(JointKeyStep.KeySetup);
    const { nextStep, previousStep } = createEnumStepper(JointKeyStep);
    const [baseJointKey, setBaseJointKey] = useState<BaseJointKey>({
        name: '',
        numberOfGuardians: 1,
        quorum: 1,
        guardians: [],
    });

    const next = () => setStep(nextStep(step));
    const previous = () => setStep(previousStep(step));
    const navigate = useNavigate();

    const keyClient = useKeyClient();
    const onSubmit = async (key: BaseJointKey) => {
        const ceremony = {
            key_name: key.name,
            number_of_guardians: 1,
            quorum: 1,
            guardian_ids: [],
        } as KeyCeremonyCreateRequest;
        await keyClient.ceremonyPut(ceremony);
        navigate(routeIds.home);
    };

    const onNext = (key: BaseJointKey) => {
        setBaseJointKey(key);
        next();
    };
    const onCancel = () => {
        navigate(routeIds.home);
    };

    return (
        <Box height="100%">
            <WizardStep active={step === JointKeyStep.KeySetup}>
                <KeySetupStep baseJointKey={baseJointKey} onSubmit={onNext} onCancel={onCancel} />
            </WizardStep>
            <WizardStep active={step === JointKeyStep.GuardianAssignment}>
                <GuardianAssignmentStep
                    baseJointKey={baseJointKey}
                    onSubmit={onNext}
                    onCancel={previous}
                />
            </WizardStep>
            <WizardStep active={step === JointKeyStep.JointKeyReview}>
                <JointKeyReviewStep
                    baseJointKey={baseJointKey}
                    onConfirm={onSubmit}
                    onEditAssignedGuardians={() => setStep(JointKeyStep.GuardianAssignment)}
                    onCancel={onCancel}
                />
            </WizardStep>
        </Box>
    );
};

export default JointKeyWizard;

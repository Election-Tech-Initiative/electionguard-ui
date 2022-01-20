import { ApiClientFactory } from '@electionguard/api-client';
import { Box } from '@mui/material';
import React, { useState } from 'react';

import { createEnumStepper } from '../../utils/EnumStepper';
import WizardStep from '../WizardStep';
import {
    JointKeyRetrievedStep,
    JointKeySelectStep,
    ManifestMenuStep,
    ManifestPreviewStep,
    ManifestUploadStep,
    SetupCompleteStep,
    SetupInstructionsStep,
} from './Steps';

export enum ElectionSetupStep {
    Instructions = 0,
    JointKeySelect = 1,
    JointKeyRetrieved = 2,
    ManifestMenu = 3,
    ManifestUpload = 4,
    ManifestBuild = 5,
    ManifestPreview = 6,
    SetupComplete = 7,
}

/**
 * Wizard to setup the election
 */
export const ElectionSetupWizard: React.FC = () => {
    const [step, setStep] = useState(ElectionSetupStep.Instructions);
    const { nextStep } = createEnumStepper(ElectionSetupStep);
    const next = () => setStep(nextStep(step));

    const service = ApiClientFactory.getGuardianApiClient();
    return (
        <Box height="100%">
            <WizardStep active={step === ElectionSetupStep.Instructions}>
                <SetupInstructionsStep onNext={next} />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.JointKeySelect}>
                <JointKeySelectStep onNext={next} />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.JointKeyRetrieved}>
                <JointKeyRetrievedStep onNext={next} />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.ManifestMenu}>
                <ManifestMenuStep
                    onUploadManifest={() => setStep(ElectionSetupStep.ManifestUpload)}
                />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.ManifestUpload}>
                <ManifestUploadStep
                    onNext={() => setStep(ElectionSetupStep.ManifestPreview)}
                    uploadManifest={async () => true}
                />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.ManifestPreview}>
                <ManifestPreviewStep
                    onNext={next}
                    backToMenu={() => setStep(ElectionSetupStep.ManifestMenu)}
                    preview={service.getManifestPreview()}
                />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.SetupComplete}>
                <SetupCompleteStep onComplete={next} />
            </WizardStep>
        </Box>
    );
};

export default ElectionSetupWizard;

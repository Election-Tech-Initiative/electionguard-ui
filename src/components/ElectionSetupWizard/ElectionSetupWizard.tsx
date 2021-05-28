import { Box } from '@material-ui/core';
import React, { useState } from 'react';

import { getManifestPreview } from '../../mocks/electionSetup';
import JointKey from '../../models/jointKey';
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

export interface ElectionSetupWizardProps {
    keys: JointKey[];
}

const nextStep = (step: ElectionSetupStep): ElectionSetupStep => {
    let newStep = step + 1;
    if (newStep === Object.keys(ElectionSetupStep).length / 2) {
        newStep = ElectionSetupStep.Instructions;
    }
    return newStep;
};

/**
 * Wizard to setup the election
 */
const ElectionSetupWizard: React.FC<ElectionSetupWizardProps> = ({ keys }) => {
    const [step, setStep] = useState(ElectionSetupStep.Instructions);
    const next = () => setStep(nextStep(step));
    return (
        <Box height="100%">
            <WizardStep active={step === ElectionSetupStep.Instructions}>
                <SetupInstructionsStep onNext={next} />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.JointKeySelect}>
                <JointKeySelectStep onNext={next} keys={keys} />
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
                    preview={getManifestPreview()}
                />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.SetupComplete}>
                <SetupCompleteStep onComplete={next} />
            </WizardStep>
        </Box>
    );
};

export default ElectionSetupWizard;

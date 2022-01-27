import { ApiClientFactory, SubmitElectionRequest } from '@electionguard/api-client';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routeIds from '../../routes/RouteIds';

import { createEnumStepper } from '../../utils/EnumStepper';
import WizardStep from '../WizardStep';
import {
    JointKeyRetrievedStep,
    JointKeySelectStep,
    ManifestMenuStep,
    ManifestPreviewStep,
    ManifestUploadStep,
    SetupCompleteStep,
    BasicInfoStep,
} from './Steps';

export enum ElectionSetupStep {
    BasicInfo = 0,
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
    const [submitElectionRequest, setSubmitElectionRequest] = useState({} as SubmitElectionRequest);
    const [step, setStep] = useState(ElectionSetupStep.BasicInfo);
    const { nextStep: getNextStep } = createEnumStepper(ElectionSetupStep);
    const navigate = useNavigate();
    const next = () => {
        const nextStep = getNextStep(step);
        setStep(nextStep);
    };
    const dataChanged = (stepSubmitElectionRequest: SubmitElectionRequest) => {
        const newSubmitElectionRequest = {
            ...submitElectionRequest,
            ...stepSubmitElectionRequest,
        };
        setSubmitElectionRequest(newSubmitElectionRequest);
    };

    const handleSubmit = () => {
        // todo: submit data to API
        navigate(routeIds.home);
    };

    const service = ApiClientFactory.getGuardianApiClient();
    return (
        <Box height="100%">
            <WizardStep active={step === ElectionSetupStep.BasicInfo}>
                <BasicInfoStep onNext={next} onDataChanged={dataChanged} />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.JointKeySelect}>
                <JointKeySelectStep onNext={next} onDataChanged={dataChanged} />
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
                <SetupCompleteStep onComplete={handleSubmit} />
            </WizardStep>
        </Box>
    );
};

export default ElectionSetupWizard;

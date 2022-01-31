import {
    ApiClientFactory,
    ClientFactory,
    SubmitElectionRequest,
    ValidateManifestRequest,
} from '@electionguard/api-client';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routeIds from '../../routes/RouteIds';

import { createEnumStepper } from '../../utils/EnumStepper';
import WizardStep from '../WizardStep';
import {
    JointKeyUploadStep,
    JointKeySelectStep,
    ManifestPreviewStep,
    ManifestUploadStep,
    SetupCompleteStep,
    BasicInfoStep,
} from './Steps';

export enum ElectionSetupStep {
    BasicInfo = 0,
    JointKeySelect = 1,
    JointKeyRetrieved = 2,
    ManifestUpload = 3,
    ManifestBuild = 4,
    ManifestPreview = 5,
    SetupComplete = 6,
}

/**
 * Wizard to setup the election
 */
export const ElectionSetupWizard: React.FC = () => {
    const [request, setRequest] = useState({} as SubmitElectionRequest);
    const [manifest, setManifest] = useState<ValidateManifestRequest>();
    const [step, setStep] = useState(ElectionSetupStep.BasicInfo);
    const { nextStep: getNextStep } = createEnumStepper(ElectionSetupStep);
    const navigate = useNavigate();
    const handleNext = () => {
        console.log('handleNext', step);
        const nextStep = getNextStep(step);
        setStep(nextStep);
    };
    const handleChanged = (requestFromStep: SubmitElectionRequest) => {
        const newRequest = {
            ...request,
            ...requestFromStep,
        };
        console.log('handleChanged newRequest: ', newRequest);
        setRequest(newRequest);
    };
    const handleUploadManifest = (manifestJson: ValidateManifestRequest) => {
        console.log('handleUploadManifest', manifestJson);
        setManifest(manifestJson);
    };
    const handleSubmit = async () => {
        const v1Client = ClientFactory.GetV1Client();
        // await v1Client.manifestPut(manifest);
        // todo: submit data to API
        navigate(routeIds.home);
    };

    const service = ApiClientFactory.getGuardianApiClient();
    return (
        <Box height="100%">
            <WizardStep active={step === ElectionSetupStep.BasicInfo}>
                <BasicInfoStep onNext={handleNext} onChanged={handleChanged} />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.JointKeySelect}>
                <JointKeySelectStep onNext={handleNext} onChanged={handleChanged} />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.JointKeyRetrieved}>
                <JointKeyUploadStep onNext={handleNext} onChanged={handleChanged} />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.ManifestUpload}>
                <ManifestUploadStep onNext={handleNext} onUploadManifest={handleUploadManifest} />
            </WizardStep>
            <WizardStep active={step === ElectionSetupStep.ManifestPreview}>
                <ManifestPreviewStep
                    onNext={handleNext}
                    backToMenu={() => setStep(ElectionSetupStep.ManifestUpload)}
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

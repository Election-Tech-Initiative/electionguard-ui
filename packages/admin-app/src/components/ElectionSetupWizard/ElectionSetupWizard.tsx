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
    ManifestPreview = 4,
    SetupComplete = 5,
}

/**
 * Wizard to setup the election
 */
export const ElectionSetupWizard: React.FC = () => {
    const [request, setRequest] = useState({} as SubmitElectionRequest);
    const [manifest, setManifest] = useState({} as ValidateManifestRequest);
    const [step, setStep] = useState(ElectionSetupStep.BasicInfo);
    const { nextStep: getNextStep } = createEnumStepper(ElectionSetupStep);
    const navigate = useNavigate();
    const handleNext = () => {
        const nextStep = getNextStep(step);
        setStep(nextStep);
    };
    const handleChanged = (requestFromStep: SubmitElectionRequest) => {
        const newRequest: SubmitElectionRequest = {
            ...request,
            ...requestFromStep,
            context: {
                ...request.context,
                ...requestFromStep.context,
            },
        };
        setRequest(newRequest);
    };
    const handleUploadManifest = (manifestJson: ValidateManifestRequest) => {
        setManifest(manifestJson);
    };

    const setManifestHash = (manifestHash: string): SubmitElectionRequest => {
        const requestWithManifestHash = {
            ...request,
            context: { ...request.context, manifest_hash: manifestHash },
        };
        setRequest(requestWithManifestHash);
        return requestWithManifestHash;
    };

    const handleSubmit = async () => {
        const v1Client = ClientFactory.GetV1Client();
        const manifestCreationResult = await v1Client.manifestPut(manifest);
        const requestWithManifestHash = setManifestHash(manifestCreationResult.manifest_hash);
        await v1Client.electionPut(requestWithManifestHash);
        setStep(ElectionSetupStep.SetupComplete);
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
            {step === ElectionSetupStep.ManifestPreview && (
                <WizardStep active={step === ElectionSetupStep.ManifestPreview}>
                    <ManifestPreviewStep
                        onSubmit={handleSubmit}
                        onCancel={() => setStep(ElectionSetupStep.ManifestUpload)}
                        preview={service.getManifestPreview(manifest, request)}
                    />
                </WizardStep>
            )}
            <WizardStep active={step === ElectionSetupStep.SetupComplete}>
                <SetupCompleteStep onComplete={() => navigate(routeIds.home)} />
            </WizardStep>
        </Box>
    );
};

export default ElectionSetupWizard;

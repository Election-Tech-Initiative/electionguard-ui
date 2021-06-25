import { Box } from '@material-ui/core';
import React, { useState } from 'react';

import { createEnumStepper } from '../../utils/EnumStepper';
import WizardStep from '../WizardStep';
import {
    CombineSharesStep,
    DecryptMissingStep,
    DecryptTallyShareStep,
    DownloadTallyStep,
    TallyCompleteStep,
    TallyInstructionsStep,
    UploadMissingStep,
    UploadTallyShareStep,
} from './Steps';
import TallyStep from './TallyCeremonyStep';
import TallyCeremonyStepper from './TallyCeremonyStepper';

export interface TallyWizardProps {
    test?: boolean;
}

/**
 * Wizard to setup the election
 */
const TallyWizard: React.FC<TallyWizardProps> = () => {
    const [step, setStep] = useState(TallyStep.Instructions);
    const { nextStep } = createEnumStepper(TallyStep);
    const next = () => setStep(nextStep(step));
    return (
        <Box height="100%">
            <WizardStep active={step === TallyStep.Instructions}>
                <TallyInstructionsStep onNext={next} />
            </WizardStep>
            <WizardStep active={step > TallyStep.Instructions}>
                <TallyCeremonyStepper activeStep={step} />
                <Box>
                    <WizardStep active={step === TallyStep.DownloadTally}>
                        <DownloadTallyStep onNext={next} />
                    </WizardStep>
                    <WizardStep active={step === TallyStep.DecryptTallyShare}>
                        <DecryptTallyShareStep onNext={next} />
                    </WizardStep>
                    <WizardStep active={step === TallyStep.UploadTallyShare}>
                        <UploadTallyShareStep onNext={next} />
                    </WizardStep>
                    <WizardStep active={step === TallyStep.DecryptMissing}>
                        <DecryptMissingStep onNext={next} />
                    </WizardStep>
                    <WizardStep active={step === TallyStep.UploadMissing}>
                        <UploadMissingStep onNext={next} />
                    </WizardStep>
                    <WizardStep active={step === TallyStep.CombineShares}>
                        <CombineSharesStep onNext={next} />
                    </WizardStep>
                    <WizardStep active={step === TallyStep.TallyComplete}>
                        <TallyCompleteStep onNext={next} />
                    </WizardStep>
                </Box>
            </WizardStep>
        </Box>
    );
};

export default TallyWizard;

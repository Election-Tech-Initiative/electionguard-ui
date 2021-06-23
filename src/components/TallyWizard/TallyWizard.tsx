import { Box } from '@material-ui/core';
import React, { useState } from 'react';

import { createEnumStepper } from '../../utils/EnumStepper';
import WizardStep from '../WizardStep';
import { TallyInstructionsStep } from './Steps';

export enum TallyStep {
    Instructions = 0,
    DownloadResults = 1,
    DecryptResultsShare = 2,
    UploadShare = 3,
    DecryptMissingShares = 4,
    UploadMissingShares = 5,
    TallyComplete = 6,
}

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
        </Box>
    );
};

export default TallyWizard;

import { Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { MessageId } from '../../lang';
import KeyCeremonyStep from './KeyCeremonyStep';

export interface KeyCeremonyStepperProps {
    activeStep: KeyCeremonyStep;
}

const KeyCeremonyStepper: React.FC<KeyCeremonyStepperProps> = ({ activeStep }) => (
    <Stepper activeStep={activeStep - 2} alternativeLabel>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.KeyCeremony_Steps_CreateKeypair} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.KeyCeremony_Steps_SharePublicKey} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.KeyCeremony_Steps_CreateBackups} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.KeyCeremony_Steps_ShareBackups} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.KeyCeremony_Steps_VerifyBackups} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.KeyCeremony_Steps_CombineKeys} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.KeyCeremony_Steps_Complete} />
            </StepLabel>
        </Step>
    </Stepper>
);

export default KeyCeremonyStepper;

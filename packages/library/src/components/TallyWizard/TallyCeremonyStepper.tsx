import { Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { MessageId } from '../../lang';
import TallyCeremonyStep from './TallyCeremonyStep';

export interface TallyCeremonyStepperProps {
    activeStep: TallyCeremonyStep;
}

const TallyCeremonyStepper: React.FC<TallyCeremonyStepperProps> = ({ activeStep }) => (
    <Stepper activeStep={activeStep - 1} alternativeLabel>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.TallyCeremony_Steps_DownloadTally} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.TallyCeremony_Steps_DecryptTallyShare} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.TallyCeremony_Steps_UploadTallyShare} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.TallyCeremony_Steps_DecryptMissing} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.TallyCeremony_Steps_UploadMissing} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.TallyCeremony_Steps_CombineShares} />
            </StepLabel>
        </Step>
        <Step>
            <StepLabel>
                <FormattedMessage id={MessageId.TallyCeremony_Steps_TallyComplete} />
            </StepLabel>
        </Step>
    </Stepper>
);

export default TallyCeremonyStepper;

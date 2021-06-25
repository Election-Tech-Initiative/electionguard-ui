import { Container } from '@material-ui/core';
import { GetApp as DownloadIcon } from '@material-ui/icons';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface DownloadTallyStepProps {
    onNext?: () => void;
}

/**
 * Download Tally Step for Tally Wizard
 */
const DownloadTallyStep: React.FC<DownloadTallyStepProps> = ({ onNext }) => (
    <Container maxWidth="md">
        <StepHeader
            title={new Message(MessageId.TallyCeremony_DownloadTally_Title)}
            description={new Message(MessageId.TallyCeremony_DownloadTally_Description)}
            buttonText={new Message(MessageId.TallyCeremony_DownloadTally_Button)}
            onClick={onNext}
            Icon={DownloadIcon}
        />
    </Container>
);

export default DownloadTallyStep;

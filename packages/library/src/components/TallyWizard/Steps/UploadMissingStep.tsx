import { Container } from '@material-ui/core';
import { Publish as UploadIcon } from '@material-ui/icons';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface UploadMissingStepProps {
    onNext?: () => void;
}

/**
 * Upload Missing Shares Step for Tally Wizard
 */
const UploadMissingStep: React.FC<UploadMissingStepProps> = ({ onNext }) => (
    <Container maxWidth="md">
        <StepHeader
            title={new Message(MessageId.TallyCeremony_UploadMissing_Title)}
            description={new Message(MessageId.TallyCeremony_UploadMissing_Description)}
            buttonText={new Message(MessageId.TallyCeremony_UploadMissing_Button)}
            onClick={onNext}
            Icon={UploadIcon}
        />
    </Container>
);

export default UploadMissingStep;

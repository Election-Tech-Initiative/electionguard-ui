import { Container } from '@material-ui/core';
import { Publish as UploadIcon } from '@material-ui/icons';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface UploadTallyShareStepProps {
    onNext?: () => void;
}

/**
 * Upload Tally Share Step for Tally Wizard
 */
const UploadTallyShareStep: React.FC<UploadTallyShareStepProps> = ({ onNext }) => (
    <Container maxWidth="md">
        <StepHeader
            title={new Message(MessageId.TallyCeremony_UploadTallyShare_Title)}
            description={new Message(MessageId.TallyCeremony_UploadTallyShare_Description)}
            buttonText={new Message(MessageId.TallyCeremony_UploadTallyShare_Button)}
            onClick={onNext}
            Icon={UploadIcon}
        />
    </Container>
);

export default UploadTallyShareStep;

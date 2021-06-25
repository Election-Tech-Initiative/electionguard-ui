import { Container } from '@material-ui/core';
import { LockOpen as DecryptIcon } from '@material-ui/icons';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface DecryptMissingStepProps {
    onNext?: () => void;
}

/**
 * Decrypt Missing Shares Step for Tally Wizard
 */
const DecryptMissingStep: React.FC<DecryptMissingStepProps> = ({ onNext }) => (
    <Container maxWidth="md">
        <StepHeader
            title={new Message(MessageId.TallyCeremony_DecryptMissing_Title)}
            description={new Message(MessageId.TallyCeremony_DecryptMissing_Description)}
            buttonText={new Message(MessageId.TallyCeremony_DecryptMissing_Button)}
            onClick={onNext}
            Icon={DecryptIcon}
        />
    </Container>
);

export default DecryptMissingStep;

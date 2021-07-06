import { Container } from '@material-ui/core';
import { LockOpen as DecryptIcon } from '@material-ui/icons';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import Processor from '../../Processor';

export interface DecryptTallyShareStepProps {
    onDecrypt: () => void;
    onComplete?: () => void;
}

/**
 * Decrypt Tally Share Step for Tally Wizard
 */
const DecryptTallyShareStep: React.FC<DecryptTallyShareStepProps> = ({ onDecrypt, onComplete }) => (
    <Container maxWidth="md">
        <Processor
            title={new Message(MessageId.TallyCeremony_DecryptTallyShare_Title)}
            description={new Message(MessageId.TallyCeremony_DecryptTallyShare_Description)}
            processingButtonText={new Message(MessageId.TallyCeremony_DecryptTallyShare_Button)}
            onProcess={onDecrypt}
            onComplete={onComplete}
            Icon={DecryptIcon}
        />
    </Container>
);

export default DecryptTallyShareStep;

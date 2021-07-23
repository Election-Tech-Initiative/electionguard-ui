import { Container } from '@material-ui/core';
import { LockOpen as DecryptIcon, SkipNext as SkipIcon } from '@material-ui/icons';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import Processor from '../../Processor';
import StepHeader from '../../StepHeader';

export interface DecryptMissingStepProps {
    missing?: boolean;
    onDecrypt?: () => void;
    onComplete?: () => void;
    onSkip?: () => void;
}

/**
 * Decrypt Missing Shares Step for Tally Wizard
 */
const DecryptMissingStep: React.FC<DecryptMissingStepProps> = ({
    onDecrypt,
    onComplete,
    onSkip,
    missing,
}) => (
    <Container maxWidth="md">
        {missing ? (
            <Processor
                title={new Message(MessageId.TallyCeremony_DecryptMissing_Title)}
                description={new Message(MessageId.TallyCeremony_DecryptMissing_Description)}
                processingButtonText={new Message(MessageId.TallyCeremony_DecryptMissing_Button)}
                processingText={new Message(MessageId.TallyCeremony_DecryptMissing_Decrypting)}
                completedText={new Message(MessageId.TallyCeremony_DecryptMissing_Complete)}
                completedButtonText={
                    new Message(MessageId.TallyCeremony_DecryptMissing_CompleteButton)
                }
                onProcess={onDecrypt}
                onComplete={onComplete}
                Icon={DecryptIcon}
            />
        ) : (
            <StepHeader
                title={new Message(MessageId.TallyCeremony_NoMissing_Title)}
                description={new Message(MessageId.TallyCeremony_NoMissing_Description)}
                buttonText={new Message(MessageId.TallyCeremony_NoMissing_Button)}
                onClick={onSkip}
                Icon={SkipIcon}
            />
        )}
    </Container>
);

export default DecryptMissingStep;

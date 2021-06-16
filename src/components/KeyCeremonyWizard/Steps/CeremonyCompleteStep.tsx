import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface CeremonyCompleteStepProps {
    onComplete?: () => void;
}

/**
 * Completed Step for Key Ceremony
 */
const CeremonyCompleteStep: React.FC<CeremonyCompleteStepProps> = ({ onComplete }) => (
    <StepHeader
        title={new Message(MessageId.KeyCeremony_Complete_Title)}
        description={new Message(MessageId.KeyCeremony_Complete_Description)}
        buttonText={new Message(MessageId.KeyCeremony_Complete_Button)}
        onClick={onComplete}
    />
);

export default CeremonyCompleteStep;

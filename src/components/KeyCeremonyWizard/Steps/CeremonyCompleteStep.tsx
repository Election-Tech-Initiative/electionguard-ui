import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface CeremonyCompleteStepProps {
    onComplete?: () => void;
    loading?: boolean;
}

/**
 * Completed Step for Key Ceremony
 */
const CeremonyCompleteStep: React.FC<CeremonyCompleteStepProps> = ({ onComplete, loading }) => (
    <StepHeader
        title={new Message(MessageId.KeyCeremony_Complete_Title)}
        description={new Message(MessageId.KeyCeremony_Complete_Description)}
        buttonText={new Message(MessageId.KeyCeremony_Complete_Button)}
        loading={loading}
        onClick={onComplete}
    />
);

export default CeremonyCompleteStep;

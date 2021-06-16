import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface CreateKeyPairStepProps {
    onCreateKeyPair?: () => void;
}

/**
 * Create Key Pair Step for Key Ceremony
 */
const CreateKeyPairStep: React.FC<CreateKeyPairStepProps> = ({ onCreateKeyPair }) => (
    <StepHeader
        title={new Message(MessageId.KeyCeremony_CreateKeyPair_Title)}
        description={new Message(MessageId.KeyCeremony_CreateKeyPair_Description)}
        buttonText={new Message(MessageId.KeyCeremony_CreateKeyPair_Button)}
        onClick={onCreateKeyPair}
    />
);

export default CreateKeyPairStep;

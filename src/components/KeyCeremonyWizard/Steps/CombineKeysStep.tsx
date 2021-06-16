import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface CombineKeysStepProps {
    onCombineKeys?: () => void;
}

/**
 * Form Joint Key Step for Key Ceremony
 */
const CombineKeysStep: React.FC<CombineKeysStepProps> = ({ onCombineKeys }) => (
    <StepHeader
        title={new Message(MessageId.KeyCeremony_CombineKeys_Title)}
        description={new Message(MessageId.KeyCeremony_CombineKeys_Description)}
        buttonText={new Message(MessageId.KeyCeremony_CombineKeys_Button)}
        onClick={onCombineKeys}
    />
);

export default CombineKeysStep;

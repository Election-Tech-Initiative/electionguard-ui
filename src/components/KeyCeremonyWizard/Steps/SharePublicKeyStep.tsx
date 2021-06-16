import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface SharePublicKeyStepProps {
    onSharePublicKey?: () => void;
}

/**
 * Share Public Key Step for Key Ceremony
 */
const SharePublicKeyStep: React.FC<SharePublicKeyStepProps> = ({ onSharePublicKey }) => (
    <StepHeader
        title={new Message(MessageId.KeyCeremony_SharePublicKey_Title)}
        description={new Message(MessageId.KeyCeremony_SharePublicKey_Description)}
        buttonText={new Message(MessageId.KeyCeremony_SharePublicKey_Button)}
        onClick={onSharePublicKey}
    />
);

export default SharePublicKeyStep;

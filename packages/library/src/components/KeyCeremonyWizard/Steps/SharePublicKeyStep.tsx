import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface SharePublicKeyStepProps {
    onSharePublicKey?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

/**
 * Share Public Key Step for Key Ceremony
 */
const SharePublicKeyStep: React.FC<SharePublicKeyStepProps> = ({
    onSharePublicKey,
    disabled,
    loading,
}) => (
    <StepHeader
        title={new Message(MessageId.KeyCeremony_SharePublicKey_Title)}
        description={new Message(MessageId.KeyCeremony_SharePublicKey_Description)}
        buttonText={new Message(MessageId.KeyCeremony_SharePublicKey_Button)}
        disabled={disabled}
        loading={loading}
        onClick={onSharePublicKey}
    />
);

export default SharePublicKeyStep;

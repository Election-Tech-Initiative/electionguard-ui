import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface ShareBackupsStepProps {
    onShareBackups?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

/**
 * Share Backups Step for Key Ceremony
 */
const ShareBackupsStep: React.FC<ShareBackupsStepProps> = ({
    onShareBackups,
    disabled,
    loading,
}) => (
    <StepHeader
        title={new Message(MessageId.KeyCeremony_ShareBackups_Title)}
        description={new Message(MessageId.KeyCeremony_ShareBackups_Description)}
        buttonText={new Message(MessageId.KeyCeremony_ShareBackups_Button)}
        disabled={disabled}
        loading={loading}
        onClick={onShareBackups}
    />
);

export default ShareBackupsStep;

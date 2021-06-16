import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface ShareBackupsStepProps {
    onShareBackups?: () => void;
}

/**
 * Share Backups Step for Key Ceremony
 */
const ShareBackupsStep: React.FC<ShareBackupsStepProps> = ({ onShareBackups }) => (
    <StepHeader
        title={new Message(MessageId.KeyCeremony_ShareBackups_Title)}
        description={new Message(MessageId.KeyCeremony_ShareBackups_Description)}
        buttonText={new Message(MessageId.KeyCeremony_ShareBackups_Button)}
        onClick={onShareBackups}
    />
);

export default ShareBackupsStep;

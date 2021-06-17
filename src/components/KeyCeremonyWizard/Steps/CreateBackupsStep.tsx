import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface CreateBackupsStepProps {
    onCreateBackups?: () => void;
    loading?: boolean;
    disabled?: boolean;
}

/**
 * Create Key Pair Step for Key Ceremony
 */
const CreateBackupsStep: React.FC<CreateBackupsStepProps> = ({
    onCreateBackups,
    disabled,
    loading,
}) => (
    <StepHeader
        title={new Message(MessageId.KeyCeremony_CreateBackups_Title)}
        description={new Message(MessageId.KeyCeremony_CreateBackups_Description)}
        buttonText={new Message(MessageId.KeyCeremony_CreateBackups_Button)}
        disabledButtonText={new Message(MessageId.KeyCeremony_CreateBackups_DisabledButton)}
        loading={loading}
        disabled={disabled}
        onClick={onCreateBackups}
    />
);

export default CreateBackupsStep;

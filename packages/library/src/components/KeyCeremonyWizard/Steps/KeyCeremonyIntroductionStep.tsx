import { Container } from '@material-ui/core';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';
import StepIntroduction from '../../StepIntroduction';

export interface KeyCeremonyIntroductionStepProps {
    onNext?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

/**
 * Introduction Step for Key Ceremony Wizard
 */
const KeyCeremonyInstructionsStep: React.FC<KeyCeremonyIntroductionStepProps> = ({
    onNext,
    loading,
    disabled,
}) => (
    <Container maxWidth="md">
        <StepHeader
            title={new Message(MessageId.KeyCeremony_Introduction_Title)}
            description={new Message(MessageId.KeyCeremony_Introduction_Description)}
            buttonText={new Message(MessageId.Actions_Continue)}
            onClick={onNext}
            disabled={disabled}
            loading={loading}
        />
        <StepIntroduction
            heading={new Message(MessageId.KeyCeremony_Introduction_StepsHeading)}
            description={new Message(MessageId.KeyCeremony_Introduction_StepsDescription)}
            steps={[
                new Message(MessageId.KeyCeremony_Introduction_Step1),
                new Message(MessageId.KeyCeremony_Introduction_Step2),
                new Message(MessageId.KeyCeremony_Introduction_Step3),
                new Message(MessageId.KeyCeremony_Introduction_Step4),
            ]}
        />
    </Container>
);

export default KeyCeremonyInstructionsStep;

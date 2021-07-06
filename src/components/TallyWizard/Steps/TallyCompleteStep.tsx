import { Container } from '@material-ui/core';
import { CheckCircleOutlined as CompleteIcon } from '@material-ui/icons';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface TallyCompleteStepProps {
    onNext?: () => void;
}

/**
 * Tally Complete Step for Tally Wizard
 */
const TallyCompleteStep: React.FC<TallyCompleteStepProps> = ({ onNext }) => (
    <Container maxWidth="md">
        <StepHeader
            title={new Message(MessageId.TallyCeremony_Complete_Title)}
            description={new Message(MessageId.TallyCeremony_Complete_Description)}
            buttonText={new Message(MessageId.TallyCeremony_Complete_Button)}
            onClick={onNext}
            Icon={CompleteIcon}
        />
    </Container>
);

export default TallyCompleteStep;

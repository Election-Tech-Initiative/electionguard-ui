import { Container } from '@material-ui/core';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';
import StepIntroduction from '../../StepIntroduction';

export interface TallyInstructionsStepProps {
    onNext?: () => void;
}

/**
 * Tally Instructions Step for Tally Wizard
 */
const TallyInstructionsStep: React.FC<TallyInstructionsStepProps> = ({ onNext }) => (
    <Container maxWidth="md">
        <StepHeader
            title={new Message(MessageId.TallyCeremony_Introduction_Title)}
            description={new Message(MessageId.TallyCeremony_Introduction_Description)}
            buttonText={new Message(MessageId.TallyCeremony_Introduction_Button)}
            onClick={onNext}
        />
        <StepIntroduction
            heading={new Message(MessageId.TallyCeremony_Introduction_StepsHeading)}
            description={new Message(MessageId.TallyCeremony_Introduction_StepsDescription)}
            steps={[
                new Message(MessageId.TallyCeremony_Introduction_Step1),
                new Message(MessageId.TallyCeremony_Introduction_Step2),
                new Message(MessageId.TallyCeremony_Introduction_Step3),
                new Message(MessageId.TallyCeremony_Introduction_Step4),
            ]}
        />
    </Container>
);

export default TallyInstructionsStep;

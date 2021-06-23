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
            title={new Message(MessageId.ElectionSetupIntroductionTitle)}
            description={new Message(MessageId.ElectionSetupIntroductionDescription)}
            buttonText={new Message(MessageId.ElectionSetupIntroductionNext)}
            onClick={onNext}
        />
        <StepIntroduction
            heading={new Message(MessageId.ElectionSetupIntroductionStepsHeading)}
            description={new Message(MessageId.ElectionSetupIntroductionStepsInstructions)}
            steps={[
                new Message(MessageId.ElectionSetupIntroductionStep1),
                new Message(MessageId.ElectionSetupIntroductionStep2),
                new Message(MessageId.ElectionSetupIntroductionStep3),
                new Message(MessageId.ElectionSetupIntroductionStep4),
            ]}
        />
    </Container>
);

export default TallyInstructionsStep;

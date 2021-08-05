import { Container } from '@material-ui/core';
import { MergeType as CombineIcon } from '@material-ui/icons';
import React from 'react';

import { Message, MessageId } from '../../../lang';
import StepHeader from '../../StepHeader';

export interface CombineSharesStepProps {
    onNext?: () => void;
}

/**
 * Decrypt Missing Shares Step for Tally Wizard
 */
const CombineSharesStep: React.FC<CombineSharesStepProps> = ({ onNext }) => (
    <Container maxWidth="md">
        <StepHeader
            title={new Message(MessageId.TallyCeremony_CombineShares_Title)}
            description={new Message(MessageId.TallyCeremony_CombineShares_Description)}
            buttonText={new Message(MessageId.TallyCeremony_CombineShares_Button)}
            onClick={onNext}
            Icon={CombineIcon}
        />
    </Container>
);

export default CombineSharesStep;

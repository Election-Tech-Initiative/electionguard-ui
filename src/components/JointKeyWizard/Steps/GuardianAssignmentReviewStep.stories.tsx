import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getAssignedGuardians } from '../../../mocks/guardians';
import GuardianAssignmentReviewStep, {
    GuardianAssignmentReviewStepProps,
} from './GuardianAssignmentReviewStep';

export default {
    title: 'Components/Joint Key Setup/Steps/GuardianAssignmentReviewStep',
    component: GuardianAssignmentReviewStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<GuardianAssignmentReviewStepProps> = (props) => (
    <GuardianAssignmentReviewStep {...props} />
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    baseJointKey: {
        name: 'Montgomery School Board Key',
        numberOfGuardians: 3,
        quorum: 2,
        guardians: getAssignedGuardians(),
    },
};

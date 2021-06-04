import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getUsersWithGuardianRole } from '../../../mocks/users';
import GuardianAssignmentStep, { GuardianAssignmentStepProps } from './GuardianAssignmentStep';

export default {
    title: 'Components/Joint Key Setup/Steps/GuardianAssignmentStep',
    component: GuardianAssignmentStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<GuardianAssignmentStepProps> = (props) => (
    <GuardianAssignmentStep {...props} />
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    baseJointKey: {
        name: 'Montgomery School Board Key',
        numberOfGuardians: 3,
        quorum: 2,
        guardians: [],
    },
    possibleGuardians: getUsersWithGuardianRole(),
};

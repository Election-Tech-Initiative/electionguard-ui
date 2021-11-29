import { Meta, Story } from '@storybook/react';
import React from 'react';

import { useGetJointKeys } from '@electionguard-ui/api-client';
import JointKeySelectStep, { JointKeySelectStepProps } from './JointKeySelectStep';

export default {
    title: 'Wizards/Election Setup/Steps/JointKeySelectStep',
    component: JointKeySelectStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<JointKeySelectStepProps> = (props) => <JointKeySelectStep {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    getKeys: useGetJointKeys,
};

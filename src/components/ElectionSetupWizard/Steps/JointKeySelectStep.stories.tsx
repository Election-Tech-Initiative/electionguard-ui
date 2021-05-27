import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getJointKeys } from '../../../mocks/electionSetup';
import JointKeySelectStep, { JointKeySelectStepProps } from './JointKeySelectStep';

export default {
    title: 'Components/Election Setup/Steps/JointKeySelectStep',
    component: JointKeySelectStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<JointKeySelectStepProps> = (props) => <JointKeySelectStep {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    keys: getJointKeys(),
};

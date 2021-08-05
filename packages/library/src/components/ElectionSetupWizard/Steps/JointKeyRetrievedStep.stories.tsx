import { Meta, Story } from '@storybook/react';
import React from 'react';

import JointKeyRetrievedStep, { JointKeyRetrievedStepProps } from './JointKeyRetrievedStep';

export default {
    title: 'Wizards/Election Setup/Steps/JointKeyRetrievedStep',
    component: JointKeyRetrievedStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<JointKeyRetrievedStepProps> = (props) => <JointKeyRetrievedStep {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';

import { Meta, Story } from '@storybook/react';
import React from 'react';

import KeySetupStep, { KeySetupStepProps } from './KeySetupStep';

export default {
    title: 'Wizards/Joint Key Setup/Steps/KeySetupStep',
    component: KeySetupStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<KeySetupStepProps> = (props) => <KeySetupStep {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';

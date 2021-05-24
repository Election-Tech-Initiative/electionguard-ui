import { Meta, Story } from '@storybook/react';
import React from 'react';

import SetupCompleteStep, { SetupCompleteStepProps } from './SetupCompleteStep';

export default {
    title: 'Components/Election Setup/Steps/SetupCompleteStep',
    component: SetupCompleteStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<SetupCompleteStepProps> = (props) => <SetupCompleteStep {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';

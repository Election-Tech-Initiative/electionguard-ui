import { Meta, Story } from '@storybook/react';
import React from 'react';

import SetupInstructionsStep, { SetupInstructionsStepProps } from './SetupInstructionsStep';

export default {
    title: 'Components/Election Setup/Steps/SetupInstructionsStep',
    component: SetupInstructionsStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<SetupInstructionsStepProps> = (props) => <SetupInstructionsStep {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';

import { Meta, Story } from '@storybook/react';
import React from 'react';

import KeySetupReviewStep, { KeySetupReviewStepProps } from './KeySetupReviewStep';

export default {
    title: 'Components/Joint Key Setup/Steps/KeySetupReviewStep',
    component: KeySetupReviewStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<KeySetupReviewStepProps> = (props) => <KeySetupReviewStep {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    onConfirm: () => {},
    onPrevious: () => {},
    baseJointKey: {
        name: 'Magical Joint Key',
        numberOfGuardians: 5,
        quorum: 3,
        guardians: {},
    },
};

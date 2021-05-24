import { Meta, Story } from '@storybook/react';
import React from 'react';

import ManifestMenuStep, { ManifestMenuStepProps } from './ManifestMenuStep';

export default {
    title: 'Components/Election Setup/Steps/ManifestMenuStep',
    component: ManifestMenuStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<ManifestMenuStepProps> = (props) => <ManifestMenuStep {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';

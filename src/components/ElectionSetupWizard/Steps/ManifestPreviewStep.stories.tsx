import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getManifestPreview } from '../../../mocks/electionSetup';
import ManifestPreviewStep, { ManifestPreviewStepProps } from './ManifestPreviewStep';

export default {
    title: 'Components/Election Setup/Steps/ManifestPreviewStep',
    component: ManifestPreviewStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<ManifestPreviewStepProps> = (props) => <ManifestPreviewStep {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    preview: getManifestPreview(),
};

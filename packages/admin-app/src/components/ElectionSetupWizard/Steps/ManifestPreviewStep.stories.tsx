import { ApiClientFactory } from '@electionguard/api-client';
import { Meta, Story } from '@storybook/react';

import ManifestPreviewStep, { ManifestPreviewStepProps } from './ManifestPreviewStep';

export default {
    title: 'Wizards/Election Setup/Steps/ManifestPreviewStep',
    component: ManifestPreviewStep,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<ManifestPreviewStepProps> = (props) => <ManifestPreviewStep {...props} />;

const service = ApiClientFactory.getGuardianApiClient();
export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    preview: service.getManifestPreview(),
};

import { getApi } from '@electionguard-ui/api';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import ElectionSetupWizard, { ElectionSetupWizardProps } from './ElectionSetupWizard';

export default {
    title: 'Wizards/Election Setup/ElectionSetupWizard',
    component: ElectionSetupWizard,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<ElectionSetupWizardProps> = (props) => <ElectionSetupWizard {...props} />;

const service = getApi(true);
export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    keys: service.getJointKeys(),
};

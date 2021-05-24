import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getJointKeys } from '../../mock/electionSetup';
import ElectionSetupWizard, { ElectionSetupWizardProps } from './ElectionSetupWizard';

export default {
    title: 'Components/Election Setup/ElectionSetupWizard',
    component: ElectionSetupWizard,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<ElectionSetupWizardProps> = (props) => <ElectionSetupWizard {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    keys: getJointKeys(),
};

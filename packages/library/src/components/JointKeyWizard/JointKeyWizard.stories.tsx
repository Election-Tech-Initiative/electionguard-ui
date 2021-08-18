import { getApi } from '@electionguard-ui/api';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import JointKeyWizard, { JointKeyWizardProps } from './JointKeyWizard';

export default {
    title: 'Wizards/Joint Key Setup/JointKeyWizard',
    component: JointKeyWizard,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<JointKeyWizardProps> = (props) => <JointKeyWizard {...props} />;

const service = getApi(true);
export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    getGuardians: service.getUsersWithGuardianRole,
    createJointKey: service.createJointKey,
};

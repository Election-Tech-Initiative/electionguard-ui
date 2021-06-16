import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getUsersWithGuardianRole } from '../../data/dataService';
import JointKeyWizard, { JointKeyWizardProps } from './JointKeyWizard';

export default {
    title: 'Wizards/Joint Key Setup/JointKeyWizard',
    component: JointKeyWizard,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<JointKeyWizardProps> = (props) => <JointKeyWizard {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    getGuardians: getUsersWithGuardianRole,
};

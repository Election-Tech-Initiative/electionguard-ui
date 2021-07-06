import { Meta, Story } from '@storybook/react';
import React from 'react';

import TallyWizard, { TallyWizardProps } from './TallyWizard';

export default {
    title: 'Wizards/Tally/TallyWizard',
    component: TallyWizard,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<TallyWizardProps> = (props) => <TallyWizard {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Guardian Flow';
Standard.args = {
    missing: false,
};

export const Missing = Template.bind({});
Missing.storyName = 'Guardian Flow - Missing Guardians';
Missing.args = {
    missing: true,
};

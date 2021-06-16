import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getKeyCeremonies, getKeyCeremonyGuardians } from '../../mocks/keyCeremony';
import KeyCeremonyWizard, { KeyCeremonyWizardProps } from './KeyCeremonyWizard';

export default {
    title: 'Wizards/Key Ceremony/KeyCeremonyWizard',
    component: KeyCeremonyWizard,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<KeyCeremonyWizardProps> = (props) => <KeyCeremonyWizard {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Guardian Flow';
Standard.args = {
    keyCeremony: getKeyCeremonies()[0],
    guardian: getKeyCeremonyGuardians()[0],
};

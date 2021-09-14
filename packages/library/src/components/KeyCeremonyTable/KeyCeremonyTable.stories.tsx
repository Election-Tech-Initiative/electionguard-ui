import { getApiClient } from '@electionguard-ui/api';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import KeyCeremonyTable, { KeyCeremonyTableProps } from './KeyCeremonyTable';

export default {
    title: 'Tables/KeyCeremonyTable',
    component: KeyCeremonyTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<KeyCeremonyTableProps> = (props) => <KeyCeremonyTable {...props} />;

const service = getApiClient();
export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: service.getKeyCeremonies(),
};

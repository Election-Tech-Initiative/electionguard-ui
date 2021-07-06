import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getKeyCeremonies } from '../../mocks/keyCeremony';
import KeyCeremonyTable, { KeyCeremonyTableProps } from './KeyCeremonyTable';

export default {
    title: 'Tables/KeyCeremonyTable',
    component: KeyCeremonyTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<KeyCeremonyTableProps> = (props) => <KeyCeremonyTable {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: getKeyCeremonies(),
};

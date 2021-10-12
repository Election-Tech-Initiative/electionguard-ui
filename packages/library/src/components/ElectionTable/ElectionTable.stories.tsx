import { getApiClient } from '@electionguard-ui/api-client';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import ElectionTable, { ElectionTableProps } from './ElectionTable';

export default {
    title: 'Tables/ElectionTable',
    component: ElectionTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<ElectionTableProps> = (props) => <ElectionTable {...props} />;

const service = getApiClient();
export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: service.getElections(),
};

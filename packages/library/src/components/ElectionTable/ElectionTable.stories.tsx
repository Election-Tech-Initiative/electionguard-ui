import { Meta, Story } from '@storybook/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useGetElection } from '@electionguard/api-client';
import ElectionTable, { ElectionTableProps } from './ElectionTable';

export default {
    title: 'Tables/ElectionTable',
    component: ElectionTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const queryClient = new QueryClient();

const Template: Story<ElectionTableProps> = (props) => (
    <QueryClientProvider client={queryClient}>
        <ElectionTable {...props} />{' '}
    </QueryClientProvider>
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: useGetElection,
};

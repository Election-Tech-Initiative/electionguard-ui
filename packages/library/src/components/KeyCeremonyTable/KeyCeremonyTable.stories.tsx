import { Meta, Story } from '@storybook/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useGetKeyCeremonies } from '@electionguard/api-client';
import KeyCeremonyTable, { KeyCeremonyTableProps } from './KeyCeremonyTable';

export default {
    title: 'Tables/KeyCeremonyTable',
    component: KeyCeremonyTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const queryClient = new QueryClient();

const Template: Story<KeyCeremonyTableProps> = (props) => (
    <QueryClientProvider client={queryClient}>
        <KeyCeremonyTable {...props} />
    </QueryClientProvider>
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: useGetKeyCeremonies,
};

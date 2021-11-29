import { Meta, Story } from '@storybook/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useGetJointKeys } from '@electionguard/api-client';
import JointKeyTable, { JointKeyTableProps } from './JointKeyTable';

export default {
    title: 'Tables/JointKeyTable',
    component: JointKeyTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const queryClient = new QueryClient();

const Template: Story<JointKeyTableProps> = (props) => (
    <QueryClientProvider client={queryClient}>
        <JointKeyTable {...props} />;
    </QueryClientProvider>
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: useGetJointKeys,
};

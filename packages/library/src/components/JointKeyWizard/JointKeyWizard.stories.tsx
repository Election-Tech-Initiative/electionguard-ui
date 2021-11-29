import { Meta, Story } from '@storybook/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useCreateJointKey, useGetUsersWithGuardianRole } from '@electionguard-ui/api-client';
import JointKeyWizard, { JointKeyWizardProps } from './JointKeyWizard';

const queryClient = new QueryClient();

export default {
    title: 'Wizards/Joint Key Setup/JointKeyWizard',
    component: JointKeyWizard,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<JointKeyWizardProps> = (props) => (
    <QueryClientProvider client={queryClient}>
        <JointKeyWizard {...props} />
    </QueryClientProvider>
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    getGuardians: useGetUsersWithGuardianRole,
    createJointKey: useCreateJointKey,
};

import { getApiClient } from '@electionguard-ui/api-client';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import AssignmentTable, { AssignmentTableProps } from './AssignmentTable';

export default {
    title: 'Tables/AssignmentTable',
    component: AssignmentTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<AssignmentTableProps> = (props) => <AssignmentTable {...props} />;
const service = getApiClient();

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
const userData = await service.getUsersWithGuardianRole();

Standard.args = {
    data: userData,
};

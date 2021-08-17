import { MockApi } from '@electionguard-ui/api';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getUsersWithGuardianRole } from '../../mocks/users';
import AssignmentTable, { AssignmentTableProps } from './AssignmentTable';

export default {
    title: 'Tables/AssignmentTable',
    component: AssignmentTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<AssignmentTableProps> = (props) => <AssignmentTable {...props} />;
const service = new MockApi();
const test = service.healthCheck();
if (test) console.log('test story was true yea!!!!!');

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: getUsersWithGuardianRole(),
};

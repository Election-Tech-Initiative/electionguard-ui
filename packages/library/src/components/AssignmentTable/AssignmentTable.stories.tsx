import { getApi } from '@electionguard-ui/api';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import AssignmentTable, { AssignmentTableProps } from './AssignmentTable';

export default {
    title: 'Tables/AssignmentTable',
    component: AssignmentTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<AssignmentTableProps> = (props) => <AssignmentTable {...props} />;
const service = getApi(true);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: service.getUsersWithGuardianRole(),
};

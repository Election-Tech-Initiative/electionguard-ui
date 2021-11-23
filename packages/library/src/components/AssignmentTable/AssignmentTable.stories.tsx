import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useGetUsersWithGuardianRole } from '../../data/queries';

import AssignmentTable, { AssignmentTableProps } from './AssignmentTable';

export default {
    title: 'Tables/AssignmentTable',
    component: AssignmentTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<AssignmentTableProps> = (props) => <AssignmentTable {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';

Standard.args = {
    data: useGetUsersWithGuardianRole,
};

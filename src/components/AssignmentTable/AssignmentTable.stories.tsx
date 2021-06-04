import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getUsersWithGuardianRole } from '../../mocks/users';
import AssignmentTable, { AssignmentTableProps } from './AssignmentTable';

export default {
    title: 'Components/AssignmentTable',
    component: AssignmentTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<AssignmentTableProps> = (props) => <AssignmentTable {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: getUsersWithGuardianRole(),
};

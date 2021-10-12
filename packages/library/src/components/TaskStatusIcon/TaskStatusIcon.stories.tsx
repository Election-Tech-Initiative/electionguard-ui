import { TaskStatus } from '@electionguard-ui/api-client';
import { Box } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import TaskStatusIcon, { TaskStatusIconProps } from './TaskStatusIcon';

export default {
    title: 'Components/TaskStatusIcon',
    component: TaskStatusIcon,
} as Meta;

const Template: Story<TaskStatusIconProps> = (props) => (
    <Box>
        <TaskStatusIcon {...props} />
        <TaskStatusIcon status={TaskStatus.Error} />
        <TaskStatusIcon status={TaskStatus.Incomplete} />
    </Box>
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    status: TaskStatus.Complete,
};

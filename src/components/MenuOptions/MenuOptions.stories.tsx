import { Meta, Story } from '@storybook/react';
import React from 'react';

import Permission from '../../models/permission';
import MenuOptions, { MenuOptionsProps } from './MenuOptions';

export default {
    title: 'Components/MenuOptions',
    component: MenuOptions,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<MenuOptionsProps> = (args) => <MenuOptions {...args} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    prompt: 'What would you like to do?',
    permissions: [
        Permission.ManageUsers,
        Permission.BeginKeyCeremony,
        Permission.SetupElection,
        Permission.BeginTallyCeremony,
    ],
};

export const Uneven = Template.bind({});
Uneven.storyName = 'Uneven Number of Options';
Uneven.args = {
    prompt: 'What would you like to do?',
    permissions: [Permission.ManageUsers, Permission.SetupElection, Permission.BeginTallyCeremony],
};

export const LongPrompt = Template.bind({});
LongPrompt.storyName = 'Long Prompt Message';
LongPrompt.args = {
    prompt: 'What would you really really really really really really like to do?',
    permissions: [Permission.ManageUsers, Permission.SetupElection, Permission.BeginTallyCeremony],
};

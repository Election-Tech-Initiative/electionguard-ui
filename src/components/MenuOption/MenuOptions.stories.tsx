import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Message, MessageId } from '../../lang';
import MenuOptions, { MenuOptionsProps } from './MenuOptions';
import { MenuOptionType } from './MenuOptionType';
import TypedMenuOption from './TypedMenuOption';

export default {
    title: 'Components/MenuOptions',
    component: MenuOptions,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<MenuOptionsProps> = (args) => (
    <MenuOptions {...args}>
        <TypedMenuOption type={MenuOptionType.ManageUsers} />
        <TypedMenuOption type={MenuOptionType.BeginKeyCeremony} />
        <TypedMenuOption type={MenuOptionType.BeginTallyCeremony} />
        <TypedMenuOption type={MenuOptionType.SetupElection} />
    </MenuOptions>
);

const UnevenTemplate: Story<MenuOptionsProps> = (args) => (
    <MenuOptions {...args}>
        <TypedMenuOption type={MenuOptionType.ManageUsers} />
        <TypedMenuOption type={MenuOptionType.BeginKeyCeremony} />
        <TypedMenuOption type={MenuOptionType.BeginTallyCeremony} />
    </MenuOptions>
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    prompt: new Message(MessageId.Overload, 'What would you like to do?'),
};

export const Uneven = UnevenTemplate.bind({});
Uneven.storyName = 'Uneven Number of Options';
Uneven.args = {
    prompt: new Message(MessageId.Overload, 'What would you like to do?'),
};

export const LongPrompt = Template.bind({});
LongPrompt.storyName = 'Long Prompt Message';
LongPrompt.args = {
    prompt: new Message(
        MessageId.Overload,
        'What would you really really really really really really like to do?'
    ),
};

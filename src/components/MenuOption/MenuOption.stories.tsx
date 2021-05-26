import { AddOutlined } from '@material-ui/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Message, MessageId } from '../../lang';
import MenuOption, { MenuOptionProps } from './MenuOption';

export default {
    title: 'Components/MenuOption',
    component: MenuOption,
} as Meta;

const Template: Story<MenuOptionProps> = (args) => <MenuOption {...args} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    title: new Message(MessageId.Overload, 'Add Election Magic'),
    Icon: AddOutlined,
};

export const LongName = Template.bind({});
LongName.storyName = 'Long Name';
LongName.args = {
    title: new Message(MessageId.Overload, 'Add a really really really really long election'),
    Icon: AddOutlined,
};

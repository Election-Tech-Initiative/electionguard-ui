import { Meta, Story } from '@storybook/react';
import React from 'react';

import { loremIpsum } from '../../lang';
import OrderedList from './OrderedList';

export default {
    title: 'Components/OrderedList',
    component: OrderedList,
} as Meta;

const Template: Story = (args) => (
    <OrderedList {...args}>
        <div>{loremIpsum}</div>
        <div>{loremIpsum}</div>
        <div>{loremIpsum}</div>
    </OrderedList>
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';

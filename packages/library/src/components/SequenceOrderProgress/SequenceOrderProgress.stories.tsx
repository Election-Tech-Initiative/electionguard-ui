import { Meta, Story } from '@storybook/react';
import React from 'react';

import SequenceOrderProgress, { SequenceOrderProgressProps } from './SequenceOrderProgress';

export default {
    title: 'Components/SequenceOrderProgress',
    component: SequenceOrderProgress,
} as Meta;

const Template: Story<SequenceOrderProgressProps> = (props) => <SequenceOrderProgress {...props} />;

export const Complete = Template.bind({});
Complete.storyName = 'Complete';
Complete.args = {
    active: true,
    steps: [
        {
            sequenceOrder: 1,
            complete: true,
        },
        {
            sequenceOrder: 2,
            complete: true,
        },
        {
            sequenceOrder: 3,
            complete: true,
        },
        {
            sequenceOrder: 4,
            complete: true,
        },
        {
            sequenceOrder: 5,
            complete: true,
        },
        {
            sequenceOrder: 6,
            complete: true,
        },
        {
            sequenceOrder: 7,
            complete: true,
        },
        {
            sequenceOrder: 8,
            complete: true,
        },
        {
            sequenceOrder: 9,
            complete: true,
        },
    ],
};

export const PartiallyComplete = Template.bind({});
PartiallyComplete.storyName = 'Partially Complete';
PartiallyComplete.args = {
    active: true,
    steps: [
        {
            sequenceOrder: 1,
            complete: true,
        },
        {
            sequenceOrder: 2,
            complete: true,
        },
        {
            sequenceOrder: 3,
            complete: true,
        },
        {
            sequenceOrder: 4,
            complete: false,
        },
        {
            sequenceOrder: 5,
            complete: true,
        },
        {
            sequenceOrder: 6,
            complete: true,
        },
        {
            sequenceOrder: 7,
            complete: true,
        },
        {
            sequenceOrder: 8,
            complete: false,
        },
        {
            sequenceOrder: 9,
            complete: true,
        },
    ],
};

export const Incomplete = Template.bind({});
Incomplete.storyName = 'Incomplete';
Incomplete.args = {
    active: false,
    steps: [
        {
            sequenceOrder: 1,
            complete: false,
        },
    ],
};

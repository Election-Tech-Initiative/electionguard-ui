import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Message, loremIpsum } from '../../lang';
import StepIntroduction, { StepIntroductionProps } from './StepIntroduction';

export default {
    title: 'Components/StepIntroduction',
    component: StepIntroduction,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<StepIntroductionProps> = (props) => <StepIntroduction {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    heading: new Message('overload', 'Example Heading'),
    description: new Message('overload', loremIpsum),
    steps: [
        new Message('overload', loremIpsum),
        new Message('overload', loremIpsum),
        new Message('overload', loremIpsum),
        new Message('overload', loremIpsum),
        new Message('overload', loremIpsum),
    ],
};

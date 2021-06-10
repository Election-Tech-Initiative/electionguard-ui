import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Message, loremIpsum } from '../../lang';
import StepHeader, { StepHeaderProps } from './StepHeader';

export default {
    title: 'Components/StepHeader',
    component: StepHeader,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<StepHeaderProps> = (props) => <StepHeader {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Guardian Flow';
Standard.args = {
    title: new Message('overload', 'Example Title'),
    description: new Message('overload', loremIpsum),
    buttonText: new Message('overload', 'Next'),
};

import { Meta, Story } from '@storybook/react';
import React from 'react';

import Footer from './Footer';

export default {
    title: 'Components/Footer',
    component: Footer,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story = (props) => <Footer {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';

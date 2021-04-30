import { Meta, Story } from '@storybook/react';
import React from 'react';

import config from '../../config';
import AppBar, { AppBarProps } from './AppBar';

export default {
    title: 'Components/AppBar',
    component: AppBar,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<AppBarProps> = (props) => <AppBar {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    title: config.appName,
    Logo: config.logo,
};

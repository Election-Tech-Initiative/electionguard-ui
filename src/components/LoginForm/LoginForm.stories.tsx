import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import LoginForm, { LoginFormProps } from './LoginForm';

export default {
    title: 'Components/LoginForm',
    component: LoginForm,
} as Meta;

const Template: Story<LoginFormProps> = (props) => (
    <LoginForm {...props} onSubmit={action('Form Submitted')} />
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {};

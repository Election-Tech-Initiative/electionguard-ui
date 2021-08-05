import { Meta, Story } from '@storybook/react';
import React from 'react';

import LoginLayout from '../layouts/LoginLayout';
import LoginPage from './LoginPage';

export default {
    title: 'Pages/LoginPage',
    component: LoginPage,
    parameters: { layout: 'fullscreen' },
} as Meta;

export const PageDemo: Story = () => (
    <LoginLayout>
        <LoginPage />
    </LoginLayout>
);

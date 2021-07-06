import { Meta, Story } from '@storybook/react';
import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import ElectionSetupPage from './ElectionSetupPage';

export default {
    title: 'Pages/ElectionSetupPage',
    component: ElectionSetupPage,
    parameters: { layout: 'fullscreen' },
} as Meta;

export const PageDemo: Story = () => (
    <DefaultLayout>
        <ElectionSetupPage />
    </DefaultLayout>
);

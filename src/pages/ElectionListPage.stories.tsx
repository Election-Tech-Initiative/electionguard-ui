import { Meta, Story } from '@storybook/react';
import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import ElectionListPage from './ElectionListPage';

export default {
    title: 'Pages/ElectionListPage',
    component: ElectionListPage,
    parameters: { layout: 'fullscreen' },
} as Meta;

export const PageDemo: Story = () => (
    <DefaultLayout>
        <ElectionListPage />
    </DefaultLayout>
);

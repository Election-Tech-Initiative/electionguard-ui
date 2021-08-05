import { Meta, Story } from '@storybook/react';
import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import MenuPage from './MenuPage';

export default {
    title: 'Pages/MenuPage',
    component: MenuPage,
    parameters: { layout: 'fullscreen' },
} as Meta;

export const PageDemo: Story = () => (
    <DefaultLayout>
        <MenuPage />
    </DefaultLayout>
);

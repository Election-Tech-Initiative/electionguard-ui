import { Meta, Story } from '@storybook/react';
import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import KeyCeremonyListPage from './KeyCeremonyListPage';

export default {
    title: 'Pages/KeyCeremonyListPage',
    component: KeyCeremonyListPage,
    parameters: { layout: 'fullscreen' },
} as Meta;

export const PageDemo: Story = () => (
    <DefaultLayout>
        <KeyCeremonyListPage />
    </DefaultLayout>
);

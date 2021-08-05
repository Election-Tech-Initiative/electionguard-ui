import { Meta, Story } from '@storybook/react';
import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import JointKeyListPage from './JointKeyListPage';

export default {
    title: 'Pages/JointKeyListPage',
    component: JointKeyListPage,
    parameters: { layout: 'fullscreen' },
} as Meta;

export const PageDemo: Story = () => (
    <DefaultLayout>
        <JointKeyListPage />
    </DefaultLayout>
);

import { Meta, Story } from '@storybook/react';
import React from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import { getJointKeys } from '../mocks/electionSetup';
import ElectionSetupPage, { ElectionSetupPageProps } from './ElectionSetupPage';

export default {
    title: 'Pages/ElectionSetupPage',
    component: ElectionSetupPage,
    parameters: { layout: 'fullscreen' },
} as Meta;

export const PageDemo: Story<ElectionSetupPageProps> = (props) => (
    <DefaultLayout>
        <ElectionSetupPage {...props} getJointKeys={getJointKeys} />
    </DefaultLayout>
);

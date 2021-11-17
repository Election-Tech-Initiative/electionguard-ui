import { Box, Typography } from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { DefaultLayout, DefaultLayoutProps } from './DefaultLayout';

export default {
    title: 'Layouts/DefaultLayout',
    component: DefaultLayout,
    parameters: { layout: 'fullscreen' },
} as Meta;

const PlaceHolderContent: React.FunctionComponent = () => (
    <Box alignItems="center" width="100%" textAlign="center" paddingTop="80px">
        <Typography variant="h2" component="p">
            Page Content
        </Typography>
    </Box>
);

const Template: Story<DefaultLayoutProps> = (props) => (
    <DefaultLayout {...props}>
        <PlaceHolderContent />
    </DefaultLayout>
);

export const ContentLoaded = Template.bind(this);
ContentLoaded.storyName = 'Page Content Loaded';
ContentLoaded.args = {};

export const Loading = Template.bind(this);
Loading.storyName = 'Page Content Loading';
Loading.args = {
    isLoading: true,
};

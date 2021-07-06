import { Box, Typography } from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import LoginLayout from './LoginLayout';

export default {
    title: 'Layouts/LoginLayout',
    component: LoginLayout,
    parameters: { layout: 'fullscreen' },
} as Meta;

const PlaceHolderContent: React.FunctionComponent = () => (
    <Box alignItems="center" width="100%" textAlign="center" paddingTop="80px">
        <Typography variant="h2" component="p">
            Login Content
        </Typography>
    </Box>
);

const Template: Story = () => (
    <LoginLayout>
        <PlaceHolderContent />
    </LoginLayout>
);

export const Standard = Template.bind(this);
Standard.storyName = 'Standard Login';
Standard.args = {};

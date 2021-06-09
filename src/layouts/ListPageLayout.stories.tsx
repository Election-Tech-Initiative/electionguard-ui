import { Box, Typography } from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Message, loremIpsum } from '../lang';
import ListPageLayout, { ListPageLayoutProps } from './ListPageLayout';

export default {
    title: 'Layouts/ListPageLayout',
    component: ListPageLayout,
    parameters: { layout: 'fullscreen' },
} as Meta;

const PlaceHolderContent: React.FunctionComponent = () => (
    <Box alignItems="center" width="100%" textAlign="center" paddingTop="80px">
        <Typography variant="h2" component="p">
            List Content
        </Typography>
    </Box>
);

const Template: Story<ListPageLayoutProps> = (props) => (
    <ListPageLayout {...props}>
        <PlaceHolderContent />
    </ListPageLayout>
);

export const Standard = Template.bind(this);
Standard.storyName = 'Standard';
Standard.args = {
    title: new Message('overload', 'Example Title'),
    description: new Message('overload', loremIpsum),
};

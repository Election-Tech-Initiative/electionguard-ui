import { Box } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { OverloadMessageId } from '../../lang';
import InternationalText, { InternationalTextProps } from './InternationalText';

export default {
    title: 'Components/InternationalText',
    component: InternationalText,
} as Meta;

const Template: Story<InternationalTextProps> = (args) => (
    <Box display="flex" flexDirection="column" alignItems="center">
        <InternationalText variant="h1" {...args} />
        <InternationalText variant="h2" {...args} />
        <InternationalText variant="h3" {...args} />
        <InternationalText variant="h4" {...args} />
        <InternationalText variant="h5" {...args} />
        <InternationalText variant="h6" {...args} />
        <InternationalText variant="body1" {...args} />
    </Box>
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    id: OverloadMessageId,
    defaultMessage: 'International Text',
};

export const Placeholder = Template.bind({});
Placeholder.storyName = 'No text provided';

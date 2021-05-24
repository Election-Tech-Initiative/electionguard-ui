import { Ballot } from '@material-ui/icons';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { InternationalText } from '../../models/internationalText';
import IconHeader, { IconHeaderProps } from './IconHeader';

export default {
    title: 'Components/IconHeader',
    component: IconHeader,
} as Meta;

const Template: Story<IconHeaderProps> = (props) => <IconHeader {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    title: new InternationalText('overload', 'Example Heading'),
    Icon: Ballot,
};

export const NoIcon = Template.bind({});
NoIcon.storyName = 'No Icon';
NoIcon.args = {
    title: new InternationalText('overload', 'Example Heading'),
};

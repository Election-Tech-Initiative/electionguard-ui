import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getJointKeys } from '../../data/dataService';
import JointKeyTable, { JointKeyTableProps } from './JointKeyTable';

export default {
    title: 'Tables/JointKeyTable',
    component: JointKeyTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<JointKeyTableProps> = (props) => <JointKeyTable {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: getJointKeys(),
};

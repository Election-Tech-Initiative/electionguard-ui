import { getApi } from '@electionguard-ui/api';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import JointKeyTable, { JointKeyTableProps } from './JointKeyTable';

export default {
    title: 'Tables/JointKeyTable',
    component: JointKeyTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<JointKeyTableProps> = (props) => <JointKeyTable {...props} />;

const service = getApi();
export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: service.getJointKeys(),
};

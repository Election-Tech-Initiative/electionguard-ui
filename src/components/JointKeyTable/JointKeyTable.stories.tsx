import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getJointKeys } from '../../mocks/electionSetup';
import JointKeyTable, { JointKeyTableProps } from './JointKeyTable';

export default {
    title: 'Components/JointKeyTable',
    component: JointKeyTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<JointKeyTableProps> = (props) => <JointKeyTable {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: getJointKeys(),
};

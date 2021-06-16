import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getAssignedGuardians } from '../../data/dataService';
import GuardianTable, { GuardianTableProps } from './GuardianTable';

export default {
    title: 'Tables/GuardianTable',
    component: GuardianTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<GuardianTableProps> = (props) => <GuardianTable {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: getAssignedGuardians(),
};

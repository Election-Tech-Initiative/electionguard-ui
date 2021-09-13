import { getApi } from '@electionguard-ui/api';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import GuardianTable, { GuardianTableProps } from './GuardianTable';

export default {
    title: 'Tables/GuardianTable',
    component: GuardianTable,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<GuardianTableProps> = (props) => <GuardianTable {...props} />;

const service = getApi();
export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    data: service.getAssignedGuardians(),
};

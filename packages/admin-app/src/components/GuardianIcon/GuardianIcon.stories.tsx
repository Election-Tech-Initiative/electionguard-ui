import { Box } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getColor } from '../../theme';
import GuardianIcon, { GuardianIconProps } from './GuardianIcon';

export default {
    title: 'Components/GuardianIcon',
    component: GuardianIcon,
} as Meta;

const Template: Story<GuardianIconProps> = (props) => (
    <Box>
        <GuardianIcon {...props} />
        <GuardianIcon sequenceOrder={2} color={getColor(2)} />
        <GuardianIcon sequenceOrder={3} color={getColor(3)} />
        <GuardianIcon sequenceOrder={4} color={getColor(4)} />
        <GuardianIcon sequenceOrder={5} color={getColor(5)} />
        <GuardianIcon sequenceOrder={6} color={getColor(6)} />
        <GuardianIcon sequenceOrder={7} color={getColor(7)} />
        <GuardianIcon sequenceOrder={8} color={getColor(8)} />
        <GuardianIcon sequenceOrder={9} color={getColor(9)} />
        <GuardianIcon sequenceOrder={10} color={getColor(10)} />
        <GuardianIcon sequenceOrder={11} color={getColor(11)} missing />
    </Box>
);

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    sequenceOrder: 1,
    color: getColor(1),
};

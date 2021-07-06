import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ReactComponent as ElectionGuardLogo } from '../../images/electionguard-logo.svg';
import WelcomeHeader, { WelcomeHeaderProps } from './WelcomeHeader';

export default {
    title: 'Components/WelcomeHeader',
    component: WelcomeHeader,
} as Meta;

const Template: Story<WelcomeHeaderProps> = (props) => <WelcomeHeader {...props} />;

export const Standard = Template.bind({});
Standard.storyName = 'Standard';
Standard.args = {
    Logo: ElectionGuardLogo,
};

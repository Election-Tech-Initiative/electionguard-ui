import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ReactComponent as ElectionGuardIcon } from '../../images/electionguard-icon.svg';
import { ReactComponent as ElectionGuardLogo } from '../../images/electionguard-logo.svg';
import SVGImage, { SVGImageProps } from './SVGImage';

export default {
    title: 'Components/SVGImage',
    component: SVGImage,
} as Meta;

const Template: Story<SVGImageProps> = (props) => <SVGImage {...props} />;

export const Logo = Template.bind({});
Logo.storyName = 'Logo Example';
Logo.args = {
    fill: 'grey',
    svg: ElectionGuardLogo,
    height: 60,
};

export const Icon = Template.bind({});
Icon.storyName = 'Icon Example';
Icon.args = {
    fill: 'grey',
    svg: ElectionGuardIcon,
    height: 60,
};

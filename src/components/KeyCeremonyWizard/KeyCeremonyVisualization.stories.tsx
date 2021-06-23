import { Meta, Story } from '@storybook/react';
import React from 'react';

import { getKeyCeremonyGuardiansByStep } from '../../mocks/keyCeremony';
import KeyCeremonyStep from './KeyCeremonyStep';
import KeyCeremonyVisualization, {
    KeyCeremonyVisualizationProps,
} from './KeyCeremonyVisualization';

export default {
    title: 'Wizards/Key Ceremony/KeyCeremonyVisualization',
    component: KeyCeremonyVisualization,
    parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<KeyCeremonyVisualizationProps> = (props) => {
    const { activeStep } = props;
    return (
        <div>
            <KeyCeremonyVisualization
                {...props}
                guardians={getKeyCeremonyGuardiansByStep(activeStep)}
            />
            <KeyCeremonyVisualization
                {...props}
                guardians={getKeyCeremonyGuardiansByStep(activeStep + 1)}
            />
        </div>
    );
};

export const ShareGuardianKeys = Template.bind({});
ShareGuardianKeys.storyName = 'Share Guardian Keys';
ShareGuardianKeys.args = {
    activeStep: KeyCeremonyStep.SharePublicKey,
};

export const ShareBackups = Template.bind({});
ShareBackups.storyName = 'Share Backups';
ShareBackups.args = {
    activeStep: KeyCeremonyStep.ShareBackups,
};

export const VerifyBackups = Template.bind({});
VerifyBackups.storyName = 'Verify Backups';
VerifyBackups.args = {
    activeStep: KeyCeremonyStep.VerifyBackups,
};
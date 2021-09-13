import { BackupVerification, KeyCeremonyGuardian, TaskStatus, getApi } from '@electionguard-ui/api';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import delay from '../../utils/delay';
import KeyCeremonyStep from './KeyCeremonyStep';
import KeyCeremonyWizard, { KeyCeremonyWizardProps } from './KeyCeremonyWizard';

export default {
    title: 'Wizards/Key Ceremony/KeyCeremonyWizard',
    component: KeyCeremonyWizard,
    parameters: { layout: 'fullscreen' },
} as Meta;

const service = getApi();
const Template: Story<KeyCeremonyWizardProps> = (props) => {
    const [keyCeremony, setKeyCeremony] = useState(service.getKeyCeremonies()[0]);
    const loggedInGuardian = keyCeremony.guardians.find(
        (i) => i.sequenceOrder === 1
    ) as KeyCeremonyGuardian;

    const updateGuardian = (step: KeyCeremonyStep) => {
        const guardian = keyCeremony.guardians.find(
            (i) => i.sequenceOrder === 1
        ) as KeyCeremonyGuardian;
        const updated = service.setKeyCeremonyGuardianToStep(guardian, step);
        setKeyCeremony({
            ...keyCeremony,
            guardians: [updated, ...keyCeremony.guardians.filter((i) => i.sequenceOrder !== 1)],
        });
    };

    const updateGuardians = (step: KeyCeremonyStep) => {
        const updated = keyCeremony.guardians.map((g) =>
            service.setKeyCeremonyGuardianToStep(g, step)
        );
        setKeyCeremony({
            ...keyCeremony,
            guardians: updated,
        });
    };

    const createKeyPair = async () => {
        await delay(1000);
        updateGuardian(KeyCeremonyStep.SharePublicKey);
    };

    const sharePublicKey = async () => {
        await delay(100);
        updateGuardian(KeyCeremonyStep.CreateBackups);
        await delay(1000);
        updateGuardians(KeyCeremonyStep.CreateBackups);
    };

    const createBackups = async () => {
        await delay(1000);
        updateGuardian(KeyCeremonyStep.ShareBackups);
    };

    const shareBackups = async () => {
        await delay(100);
        updateGuardian(KeyCeremonyStep.VerifyBackups);
        await delay(1000);
        updateGuardians(KeyCeremonyStep.VerifyBackups);
    };

    const verifyBackup = async (id: string) => {
        await delay(1000);
        const guardian = keyCeremony.guardians.find(
            (i) => i.sequenceOrder === 1
        ) as KeyCeremonyGuardian;
        const updated = {
            ...guardian,
            verifications: [
                {
                    ...(guardian.verifications.find(
                        (v) => v.owner.id === id
                    ) as BackupVerification),
                    verified: TaskStatus.Complete,
                },
                ...guardian.verifications.filter((v) => v.owner.id !== id),
            ],
        };
        setKeyCeremony({
            ...keyCeremony,
            guardians: [updated, ...keyCeremony.guardians.filter((i) => i.sequenceOrder !== 1)],
        });
    };

    const backupsAllVerified = async () => {
        await delay(1000);
        updateGuardian(KeyCeremonyStep.CombineKeys);
        await delay(1000);
        updateGuardians(KeyCeremonyStep.CombineKeys);
    };

    const combineKeys = async () => {
        await delay(1000);
    };

    const completeCeremony = async () => {
        setKeyCeremony(service.getKeyCeremonies()[0]);
    };

    return (
        <KeyCeremonyWizard
            {...props}
            keyCeremony={keyCeremony}
            guardian={loggedInGuardian}
            createKeyPair={async () => {
                await createKeyPair();
            }}
            sharePublicKey={async () => {
                await sharePublicKey();
            }}
            createBackups={async () => {
                await createBackups();
            }}
            shareBackups={async () => {
                await shareBackups();
            }}
            verifyBackup={async (id: string) => {
                await verifyBackup(id);
            }}
            backupsAllVerified={async () => {
                await backupsAllVerified();
            }}
            combineKeys={async () => {
                await combineKeys();
            }}
            completeKeyCeremony={async () => {
                await completeCeremony();
            }}
        />
    );
};

export const Standard = Template.bind({});
Standard.storyName = 'Guardian Flow';

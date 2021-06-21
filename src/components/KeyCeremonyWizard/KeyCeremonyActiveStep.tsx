import { Box } from '@material-ui/core';
import React from 'react';

import { BackupVerification } from '../../models/keyCeremony';
import KeyCeremonyStep from './KeyCeremonyStep';
import {
    CeremonyCompleteStep,
    CombineKeysStep,
    ShareBackupsStep,
    SharePublicKeyStep,
    VerifyBackupsStep,
} from './Steps';
import CreateBackups from './Steps/CreateBackupsStep';
import CreateKeyPairStep from './Steps/CreateKeyPairStep';

export interface KeyCeremonyActiveStepProps {
    activeStep: KeyCeremonyStep;
    verifications?: BackupVerification[];
    onCreateKeyPair: () => void;
    onSharePublicKey: () => void;
    onCreateBackups: () => void;
    onShareBackups: () => void;
    onVerifyBackup: (id: string) => void;
    onAllBackupsVerified: () => void;
    onCombineKeys: () => void;
    onComplete: () => void;
    loading?: boolean;
}

const KeyCeremonyActiveStep: React.FC<KeyCeremonyActiveStepProps> = ({
    activeStep,
    onCreateKeyPair,
    onSharePublicKey,
    onCreateBackups,
    onShareBackups,
    onAllBackupsVerified,
    onVerifyBackup,
    onCombineKeys,
    onComplete,
    verifications = [],
}) => (
    <Box display="flex" flexDirection="column">
        {activeStep === KeyCeremonyStep.CreateKeyPair && (
            <CreateKeyPairStep onCreateKeyPair={onCreateKeyPair} />
        )}
        {activeStep === KeyCeremonyStep.SharePublicKey && (
            <SharePublicKeyStep onSharePublicKey={onSharePublicKey} />
        )}
        {activeStep === KeyCeremonyStep.CreateBackups && (
            <CreateBackups onCreateBackups={onCreateBackups} />
        )}
        {activeStep === KeyCeremonyStep.ShareBackups && (
            <ShareBackupsStep onShareBackups={onShareBackups} />
        )}
        {activeStep === KeyCeremonyStep.VerifyBackups && (
            <VerifyBackupsStep
                verifications={verifications}
                onAllBackupsVerified={onAllBackupsVerified}
                onVerifyBackup={onVerifyBackup}
            />
        )}
        {activeStep === KeyCeremonyStep.CombineKeys && (
            <CombineKeysStep onCombineKeys={onCombineKeys} />
        )}
        {activeStep === KeyCeremonyStep.Complete && (
            <CeremonyCompleteStep onComplete={onComplete} />
        )}
    </Box>
);

export default KeyCeremonyActiveStep;

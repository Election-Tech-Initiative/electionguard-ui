import { getApiClient } from '@electionguard-ui/api';
import { ElectionSetupWizard } from '@electionguard-ui/library';
import React from 'react';

const service = getApiClient();
export const ElectionSetupPage: React.FC = () => (
    <ElectionSetupWizard keys={service.getJointKeys()} />
);

export default ElectionSetupPage;

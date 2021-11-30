import React from 'react';
import { useGetJointKeys } from '@electionguard/api-client';
import { ElectionSetupWizard } from '@electionguard-ui/library';

export const ElectionSetupPage: React.FC = () => <ElectionSetupWizard getKeys={useGetJointKeys} />;

export default ElectionSetupPage;

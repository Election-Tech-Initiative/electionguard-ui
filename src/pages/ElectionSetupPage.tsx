import React from 'react';

import ElectionSetupWizard from '../components/ElectionSetupWizard';
import JointKey from '../models/jointKey';

export interface ElectionSetupPageProps {
    getJointKeys: () => JointKey[];
}

const ElectionSetupPage: React.FC<ElectionSetupPageProps> = ({ getJointKeys }) => (
    <ElectionSetupWizard keys={getJointKeys()} />
);

export default ElectionSetupPage;

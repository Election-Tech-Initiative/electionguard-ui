import React from 'react';

import ElectionSetupWizard from '../components/ElectionSetupWizard';
import { useGetJointKeys } from '../data/queries';

const ElectionSetupPage: React.FC = () => <ElectionSetupWizard getKeys={useGetJointKeys} />;

export default ElectionSetupPage;

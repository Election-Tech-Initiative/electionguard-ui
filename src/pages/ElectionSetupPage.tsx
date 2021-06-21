import React from 'react';

import ElectionSetupWizard from '../components/ElectionSetupWizard';
import { getJointKeys } from '../data/dataService';

const ElectionSetupPage: React.FC = () => <ElectionSetupWizard keys={getJointKeys()} />;

export default ElectionSetupPage;

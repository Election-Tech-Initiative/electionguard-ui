import { getApi } from '@electionguard-ui/api';
import React from 'react';

import ElectionSetupWizard from '../components/ElectionSetupWizard';

const service = getApi(true);
const ElectionSetupPage: React.FC = () => <ElectionSetupWizard keys={service.getJointKeys()} />;

export default ElectionSetupPage;

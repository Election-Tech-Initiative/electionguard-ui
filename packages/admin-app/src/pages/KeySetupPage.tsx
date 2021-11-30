import React from 'react';
import { useHistory } from 'react-router-dom';

import { JointKeyWizard } from '@electionguard-ui/library';

import { useCreateJointKey, useGetUsersWithGuardianRole } from '@electionguard/api-client';

export const KeySetupPage: React.FC = () => {
    const history = useHistory();
    return (
        <JointKeyWizard
            getGuardians={useGetUsersWithGuardianRole}
            createJointKey={useCreateJointKey}
            onCancel={() => history.push('/')}
        />
    );
};

export default KeySetupPage;

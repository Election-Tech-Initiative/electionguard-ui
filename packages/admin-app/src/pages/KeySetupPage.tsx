import React from 'react';
import { useNavigate } from 'react-router-dom';

import { JointKeyWizard } from '@electionguard-ui/library';

import { useCreateJointKey, useGetUsersWithGuardianRole } from '@electionguard/api-client';

export const KeySetupPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <JointKeyWizard
            getGuardians={useGetUsersWithGuardianRole}
            createJointKey={useCreateJointKey}
            onCancel={() => navigate('/')}
        />
    );
};

export default KeySetupPage;

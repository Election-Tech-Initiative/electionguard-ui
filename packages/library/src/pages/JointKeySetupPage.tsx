import React from 'react';
import { useHistory } from 'react-router';

import JointKeyWizard from '../components/JointKeyWizard';
import { useCreateJointKey, useGetUsersWithGuardianRole } from '../data/queries';

const JointKeySetupPage: React.FC = () => {
    const history = useHistory();
    return (
        <JointKeyWizard
            getGuardians={useGetUsersWithGuardianRole}
            createJointKey={useCreateJointKey}
            onCancel={() => history.push('/')}
        />
    );
};

export default JointKeySetupPage;

import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    JointKeyWizard,
    useCreateJointKey,
    useGetUsersWithGuardianRole,
} from '@electionguard-ui/library';

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

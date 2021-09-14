import { getApiClient } from '@electionguard-ui/api';
import React from 'react';
import { useHistory } from 'react-router';

import JointKeyTable from '../components/JointKeyTable';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';

const JointKeyListPage: React.FC = () => {
    const history = useHistory();
    const service = getApiClient();
    return (
        <ListPageLayout
            title={new Message(MessageId.JointKeyList_Title)}
            description={new Message(MessageId.JointKeyList_Description)}
            goHome={() => history.push('/')}
        >
            <JointKeyTable data={service.getJointKeys()} />
        </ListPageLayout>
    );
};

export default JointKeyListPage;

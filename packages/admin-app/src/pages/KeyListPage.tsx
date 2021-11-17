import { getApiClient } from '@electionguard-ui/api';
import { JointKeyTable, ListPageLayout } from '@electionguard-ui/library';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Message, MessageId } from '../lang';

export const KeyListPage: React.FC = () => {
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

export default KeyListPage;

import { useGetJointKeys } from '@electionguard/api-client';
import { JointKeyTable, ListPageLayout } from '@electionguard-ui/library';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Message, MessageId } from '../lang';

export const KeyListPage: React.FC = () => {
    const history = useHistory();
    return (
        <ListPageLayout
            title={new Message(MessageId.JointKeyList_Title)}
            description={new Message(MessageId.JointKeyList_Description)}
            goHome={() => history.push('/')}
        >
            <JointKeyTable data={useGetJointKeys} />
        </ListPageLayout>
    );
};

export default KeyListPage;

import { useGetJointKeys } from '@electionguard/api-client';
import { JointKeyTable, ListPageLayout } from '@electionguard-ui/library';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Message, MessageId } from '../lang';

export const KeyListPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <ListPageLayout
            title={new Message(MessageId.JointKeyList_Title)}
            description={new Message(MessageId.JointKeyList_Description)}
            goHome={() => navigate('/')}
        >
            <JointKeyTable data={useGetJointKeys} />
        </ListPageLayout>
    );
};

export default KeyListPage;

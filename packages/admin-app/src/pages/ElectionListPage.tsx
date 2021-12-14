import { useGetElection } from '@electionguard/api-client';
import { ElectionTable, ListPageLayout } from '@electionguard-ui/library';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Message, MessageId } from '../lang';

export const ElectionListPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <ListPageLayout
            title={new Message(MessageId.ElectionListTitle)}
            description={new Message(MessageId.ElectionListDescription)}
            goHome={() => navigate('/')}
        >
            <ElectionTable data={useGetElection} />
        </ListPageLayout>
    );
};

export default ElectionListPage;

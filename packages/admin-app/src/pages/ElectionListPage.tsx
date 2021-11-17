import { getApiClient } from '@electionguard-ui/api';
import { ElectionTable, ListPageLayout } from '@electionguard-ui/library';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Message, MessageId } from '../lang';

export const ElectionListPage: React.FC = () => {
    const history = useHistory();
    const service = getApiClient();
    return (
        <ListPageLayout
            title={new Message(MessageId.ElectionListTitle)}
            description={new Message(MessageId.ElectionListDescription)}
            goHome={() => history.push('/')}
        >
            <ElectionTable data={service.getElections()} />
        </ListPageLayout>
    );
};

export default ElectionListPage;

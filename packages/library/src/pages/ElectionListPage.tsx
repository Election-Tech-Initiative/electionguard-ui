import { getApi } from '@electionguard-ui/api';
import React from 'react';
import { useHistory } from 'react-router';

import ElectionTable from '../components/ElectionTable';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';

const ElectionListPage: React.FC = () => {
    const history = useHistory();
    const service = getApi();
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

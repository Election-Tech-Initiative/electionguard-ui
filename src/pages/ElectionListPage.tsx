import React from 'react';
import { useHistory } from 'react-router';

import ElectionTable from '../components/ElectionTable';
import { getElections } from '../data/dataService';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';

const ElectionListPage: React.FC = () => {
    const history = useHistory();
    return (
        <ListPageLayout
            title={new Message(MessageId.ElectionListTitle)}
            description={new Message(MessageId.ElectionListDescription)}
            goHome={() => history.push('/')}
        >
            <ElectionTable data={getElections()} />
        </ListPageLayout>
    );
};

export default ElectionListPage;

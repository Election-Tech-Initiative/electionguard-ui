import React from 'react';
import { useHistory } from 'react-router';

import ElectionTable from '../components/ElectionTable';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';
import { useGetElections } from '../data/queries';

const ElectionListPage: React.FC = () => {
    const history = useHistory();
    return (
        <ListPageLayout
            title={new Message(MessageId.ElectionListTitle)}
            description={new Message(MessageId.ElectionListDescription)}
            goHome={() => history.push('/')}
        >
            <ElectionTable data={useGetElections} />
        </ListPageLayout>
    );
};

export default ElectionListPage;

import React from 'react';

import ElectionTable from '../components/ElectionTable';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';
import getElections from '../mocks/elections';

const ElectionListPage: React.FC = () => (
    <ListPageLayout
        title={new Message(MessageId.ElectionListTitle)}
        description={new Message(MessageId.ElectionListDescription)}
    >
        <ElectionTable data={getElections()} />
    </ListPageLayout>
);

export default ElectionListPage;

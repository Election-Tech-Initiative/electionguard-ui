import React from 'react';
import { useHistory } from 'react-router';

import KeyCeremonyTable from '../components/KeyCeremonyTable';
import { getKeyCeremonies } from '../data/dataService';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';

const KeyCeremonyListPage: React.FC = () => {
    const history = useHistory();
    return (
        <ListPageLayout
            title={new Message(MessageId.KeyCeremonyList_Title)}
            description={new Message(MessageId.KeyCeremonyList_Description)}
            goHome={() => history.push('/')}
        >
            <KeyCeremonyTable data={getKeyCeremonies()} />
        </ListPageLayout>
    );
};

export default KeyCeremonyListPage;

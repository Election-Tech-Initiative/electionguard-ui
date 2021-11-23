import React from 'react';
import { useHistory } from 'react-router';

import KeyCeremonyTable from '../components/KeyCeremonyTable';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';
import { useGetKeyCeremonies } from '../data/queries';

const KeyCeremonyListPage: React.FC = () => {
    const history = useHistory();
    return (
        <ListPageLayout
            title={new Message(MessageId.KeyCeremonyList_Title)}
            description={new Message(MessageId.KeyCeremonyList_Description)}
            goHome={() => history.push('/')}
        >
            <KeyCeremonyTable data={useGetKeyCeremonies} />
        </ListPageLayout>
    );
};

export default KeyCeremonyListPage;

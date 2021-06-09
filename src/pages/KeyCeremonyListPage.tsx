import React from 'react';

import KeyCeremonyTable from '../components/KeyCeremonyTable';
// import KeyCeremonyTable from '../components/KeyCeremonyTable';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';
import { getKeyCeremonies } from '../mocks/keyCeremony';

// import getKeyCeremonies from '../mocks/keyCeremony';

const KeyCeremonyListPage: React.FC = () => (
    <ListPageLayout
        title={new Message(MessageId.KeyCeremonyList_Title)}
        description={new Message(MessageId.KeyCeremonyList_Description)}
    >
        <KeyCeremonyTable data={getKeyCeremonies()} />
    </ListPageLayout>
);

export default KeyCeremonyListPage;

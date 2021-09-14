import { getApiClient } from '@electionguard-ui/api';
import React from 'react';
import { useHistory } from 'react-router';

import KeyCeremonyTable from '../components/KeyCeremonyTable';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';

const KeyCeremonyListPage: React.FC = () => {
    const history = useHistory();
    const service = getApiClient();
    return (
        <ListPageLayout
            title={new Message(MessageId.KeyCeremonyList_Title)}
            description={new Message(MessageId.KeyCeremonyList_Description)}
            goHome={() => history.push('/')}
        >
            <KeyCeremonyTable data={service.getKeyCeremonies()} />
        </ListPageLayout>
    );
};

export default KeyCeremonyListPage;

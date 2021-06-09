import React from 'react';

import JointKeyTable from '../components/JointKeyTable';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';
import { getJointKeys } from '../mocks/electionSetup';

const JointKeyListPage: React.FC = () => (
    <ListPageLayout
        title={new Message(MessageId.JointKeyList_Title)}
        description={new Message(MessageId.JointKeyList_Description)}
    >
        <JointKeyTable data={getJointKeys()} />
    </ListPageLayout>
);

export default JointKeyListPage;

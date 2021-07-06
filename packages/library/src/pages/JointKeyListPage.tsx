import React from 'react';
import { useHistory } from 'react-router';

import JointKeyTable from '../components/JointKeyTable';
import { Message, MessageId } from '../lang';
import ListPageLayout from '../layouts/ListPageLayout';
import { getJointKeys } from '../mocks/electionSetup';

const JointKeyListPage: React.FC = () => {
    const history = useHistory();
    return (
        <ListPageLayout
            title={new Message(MessageId.JointKeyList_Title)}
            description={new Message(MessageId.JointKeyList_Description)}
            goHome={() => history.push('/')}
        >
            <JointKeyTable data={getJointKeys()} />
        </ListPageLayout>
    );
};

export default JointKeyListPage;

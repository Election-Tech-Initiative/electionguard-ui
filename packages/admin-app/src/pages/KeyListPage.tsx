import React from 'react';
import { useHistory } from 'react-router-dom';

import { useGetJointKeys } from '@electionguard-ui/api-client';
import { JointKeyTable, ListPageLayout } from '@electionguard-ui/library';

import { Message, MessageId } from '../lang';

/**
 * Key List page that displays a "key" which is a combination of a Joint Key and Key Ceremony
 * @returns KeyListPage
 */
export const KeyListPage: React.FC = () => {
    const history = useHistory();
    return (
        <ListPageLayout
            title={new Message(MessageId.JointKeyList_Title)}
            description={new Message(MessageId.JointKeyList_Description)}
            goHome={() => history.push('/')}
        >
            <JointKeyTable data={useGetJointKeys} />
        </ListPageLayout>
    );
};

export default KeyListPage;

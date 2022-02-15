import { useState } from 'react';
import IconHeader from '../components/IconHeader';
import { MessageId } from '../lang';

export const ElectionListPage: React.FC = () => {
    const [elections, setElections] = useState([]);
    return <IconHeader titleId={MessageId.UploadBallots_Title} />;
};

export default ElectionListPage;
